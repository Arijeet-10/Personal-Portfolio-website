
"use client";

import type { HTMLAttributes } from 'react';
import { useState, useEffect, useRef, useCallback } from 'react';
import { cn } from '@/lib/utils';

const LERP_FACTOR = 0.1; // Lower = more lag, higher = more responsive

export function CustomCursor() {
  const mousePositionRef = useRef({ x: -100, y: -100 });
  const cursorPositionRef = useRef({ x: -100, y: -100 });
  const [renderedPosition, setRenderedPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  const animationFrameId = useRef<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePositionRef.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) {
        setIsVisible(true);
        // Instantly move cursor to mouse position on first detected move
        // to avoid jump from initial off-screen position.
        cursorPositionRef.current = { x: e.clientX, y: e.clientY };
        setRenderedPosition({ x: e.clientX, y: e.clientY });
      }

      const target = e.target as HTMLElement;
      const isOverInteractiveElement = target.closest(
        'a, button, [role="button"], input:not([type="radio"]):not([type="checkbox"]), select, textarea, label, [data-project-card]'
      );
      setIsPointer(!!isOverInteractiveElement);
    };
    
    // Only add custom-cursor-enabled if not on a touch device (basic check)
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (!isTouchDevice) {
      document.body.classList.add('custom-cursor-enabled');
    }

    window.addEventListener('mousemove', handleMouseMove);

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => {
       if (!isVisible && !isTouchDevice) setIsVisible(true);
    }

    document.documentElement.addEventListener('mouseleave', handleMouseLeave);
    document.documentElement.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
      document.documentElement.removeEventListener('mouseenter', handleMouseEnter);
      document.body.classList.remove('custom-cursor-enabled');
    };
  }, [isVisible]);

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return; // Don't run animation loop on touch devices

    const loop = () => {
      if (isVisible) {
        const currentX = cursorPositionRef.current.x;
        const currentY = cursorPositionRef.current.y;
        const targetX = mousePositionRef.current.x;
        const targetY = mousePositionRef.current.y;

        const dx = targetX - currentX;
        const dy = targetY - currentY;

        cursorPositionRef.current.x += dx * LERP_FACTOR;
        cursorPositionRef.current.y += dy * LERP_FACTOR;
        
        // Only update React state if there's a meaningful change to avoid excessive re-renders
        if (Math.abs(dx) > 0.1 || Math.abs(dy) > 0.1 || isPointer || !isPointer !== (renderedPosition.x === -100) /* force update if isPointer changed */) {
            setRenderedPosition({ x: cursorPositionRef.current.x, y: cursorPositionRef.current.y });
        }
      }
      animationFrameId.current = requestAnimationFrame(loop);
    };

    animationFrameId.current = requestAnimationFrame(loop);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [isVisible, isPointer]); // Re-added isPointer to ensure state updates when it changes for styling

  const isTouchDevice = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);
  if (isTouchDevice) {
    return null; // Don't render custom cursor on touch devices
  }

  return (
    <div
      className={cn(
        "custom-cursor-dot",
        isPointer && "pointer-active",
        isVisible && "visible"
      )}
      style={{
        left: `${renderedPosition.x}px`,
        top: `${renderedPosition.y}px`,
      }}
    />
  );
}
