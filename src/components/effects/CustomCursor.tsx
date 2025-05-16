
"use client";

import type { HTMLAttributes } from 'react';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 }); // Start off-screen
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false); // To hide until first mouse move

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) {
        setIsVisible(true);
      }

      const target = e.target as HTMLElement;
      if (target.closest('a, button, [role="button"], input[type="submit"], input[type="button"], label, select, textarea, input:not([type="radio"]):not([type="checkbox"])')) {
        setIsPointer(true);
      } else {
        setIsPointer(false);
      }
    };
    
    document.body.classList.add('custom-cursor-enabled');
    window.addEventListener('mousemove', handleMouseMove);

    // Handle mouse leaving the window
    const handleMouseLeave = () => {
        setIsVisible(false);
    };
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);
    document.documentElement.addEventListener('mouseenter', () => setIsVisible(true));


    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
      document.documentElement.removeEventListener('mouseenter', () => setIsVisible(true));
      document.body.classList.remove('custom-cursor-enabled');
    };
  }, [isVisible]);


  return (
    <div
      className={cn(
        "custom-cursor-dot",
        isPointer && "pointer-active",
        isVisible && "visible"
      )}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
}
