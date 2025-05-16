
"use client";

import type { HTMLAttributes } from 'react';
import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 }); // Start off-screen
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false); // To hide until first mouse move
  const [isMoving, setIsMoving] = useState(false); // New state for movement effect
  const movementTimeoutRef = useRef<NodeJS.Timeout | null>(null); // Ref to store timeout ID

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) {
        setIsVisible(true);
      }

      // Handle moving state
      setIsMoving(true);
      if (movementTimeoutRef.current) {
        clearTimeout(movementTimeoutRef.current);
      }
      movementTimeoutRef.current = setTimeout(() => {
        setIsMoving(false);
      }, 100); // Reset isMoving after 100ms of no movement

      const target = e.target as HTMLElement;
      if (target.closest('a, button, [role="button"], input[type="submit"], input[type="button"], label, select, textarea, input:not([type="radio"]):not([type="checkbox"])')) {
        setIsPointer(true);
      } else {
        setIsPointer(false);
      }
    };
    
    document.body.classList.add('custom-cursor-enabled');
    window.addEventListener('mousemove', handleMouseMove);

    const handleMouseLeave = () => {
        setIsVisible(false);
        setIsMoving(false); // Reset moving state when mouse leaves window
        if (movementTimeoutRef.current) {
          clearTimeout(movementTimeoutRef.current);
        }
    };
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);
    document.documentElement.addEventListener('mouseenter', () => setIsVisible(true));


    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
      document.documentElement.removeEventListener('mouseenter', () => setIsVisible(true));
      document.body.classList.remove('custom-cursor-enabled');
      if (movementTimeoutRef.current) {
        clearTimeout(movementTimeoutRef.current); // Cleanup timeout on unmount
      }
    };
  }, [isVisible]);


  return (
    <div
      className={cn(
        "custom-cursor-dot",
        isPointer && "pointer-active",
        isVisible && "visible",
        isMoving && !isPointer && "moving" // Apply 'moving' class if moving and not over a pointer target
      )}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
}
