
"use client";

import React, { useEffect, useRef, useState, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ScrollAnimationWrapperProps {
  children: ReactNode;
  className?: string;
  animationClass?: string; // e.g., 'animate-fadeInUp'
  initialClass?: string; // e.g., 'opacity-0 translate-y-10'
  once?: boolean;
  threshold?: number;
  delay?: string; // e.g., 'delay-300' for Tailwind
  staggerChildren?: number; // delay in ms for children
}

export function ScrollAnimationWrapper({
  children,
  className,
  animationClass = 'animate-fadeInUp', // This will be a utility class like 'opacity-100 translate-y-0' if using direct CSS, or an animation name
  initialClass = 'opacity-0 translate-y-5', // Default initial state for animations
  once = true,
  threshold = 0.1,
  delay,
  staggerChildren,
}: ScrollAnimationWrapperProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once && ref.current) {
              observer.unobserve(ref.current);
            }
          } else {
            if (!once) {
              setIsVisible(false);
            }
          }
        });
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [once, threshold]);
  
  const childNodes = React.Children.toArray(children);

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-700 ease-out',
        initialClass, // Apply initial styles
        isVisible && animationClass, // Apply animation styles when visible
        delay, // Apply Tailwind delay class if provided
        className
      )}
    >
      {staggerChildren
        ? childNodes.map((child, index) => (
            <div
              key={index}
              className={cn(
                'transition-all duration-700 ease-out',
                initialClass,
                isVisible && animationClass
              )}
              style={ isVisible ? { transitionDelay: `${index * staggerChildren}ms` } : {}}
            >
              {child}
            </div>
          ))
        : children}
    </div>
  );
}

