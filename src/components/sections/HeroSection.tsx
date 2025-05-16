
"use client";

import Image from 'next/image';
import { ArrowDownCircle } from 'lucide-react';
import { TypewriterEffect } from '@/components/animations/TypewriterEffect';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export function HeroSection() {
  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-br from-background to-secondary dark:from-background dark:to-secondary/30 p-4 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-dot-pattern opacity-5 dark:opacity-3 pointer-events-none"></div>
      
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-16 w-full max-w-4xl lg:max-w-5xl">
        {/* Image Container */}
        <div className="group animate-scaleUpFadeIn" style={{ animationDelay: '0.2s' }}>
          <Image
            src="/me.jpg"
            alt="Arijeet - Professional Photo"
            width={180} // Increased base width
            height={240} // Increased base height (maintaining ~3:4 aspect ratio)
            data-ai-hint="professional portrait"
            className="rounded-lg shadow-xl border-4 transition-transform duration-300 ease-in-out group-hover:scale-110 object-cover animate-rgb-border 
                       md:w-[220px] md:h-[293px] 
                       lg:w-[250px] lg:h-[333px]" // Increased responsive sizes
          />
        </div>

        {/* Text Content Container */}
        <div className="flex flex-col items-center md:items-start md:text-left">
          <h1 
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 animate-fadeInUp"
            style={{ animationDelay: '0.4s' }}
          >
            <span className="gradient-text">Hi, I’m Arijeet Das</span>
          </h1>

          <div 
            className="text-xl sm:text-2xl md:text-3xl text-foreground/80 mb-6 sm:mb-4 md:mb-8 h-16 md:h-10 animate-fadeInUp"
            style={{ animationDelay: '0.6s' }}
          >
            <TypewriterEffect
              texts={[
                "Creative Developer",
                "UI Enthusiast",
                "Tech Explorer",
                "Problem Solver",
                "Backend Developer"
              ]}
              className="font-medium"
            />
          </div>

          <div className="animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
            <Button 
              asChild 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-accent/50 transition-all duration-300 ease-in-out hover:scale-105"
            >
              <Link href="#projects">View My Work</Link>
            </Button>
          </div>
        </div>
      </div>

      <Link 
        href="#about" 
        className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 animate-fadeIn" // Adjusted bottom positioning
        style={{ animationDelay: '1s' }}
        aria-label="Scroll to About section"
      >
        <ArrowDownCircle className="h-10 w-10 text-primary hover:text-accent transition-colors animate-bounce" style={{ animationDelay: '1.2s' }} />
      </Link>

      <style jsx>{`
        .bg-dot-pattern {
          background-image: radial-gradient(hsl(var(--foreground)) 0.5px, transparent 0.5px);
          background-size: 10px 10px;
        }
        .dark .bg-dot-pattern {
           background-image: radial-gradient(hsl(var(--foreground)) 0.5px, transparent 0.5px);
        }
      `}</style>
    </section>
  );
}

