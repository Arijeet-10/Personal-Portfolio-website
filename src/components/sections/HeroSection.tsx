
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
      
      <div className="relative z-10 flex flex-col items-center">
        <div className="group mb-6">
          <Image
            src="https://placehold.co/150x150.png"
            alt="Arijeet - Professional Photo"
            width={150}
            height={150}
            data-ai-hint="professional portrait"
            className="rounded-full shadow-xl border-4 border-card transition-transform duration-300 ease-in-out group-hover:scale-110 animate-scaleUpFadeIn"
            style={{ animationDelay: '0.2s' }}
          />
        </div>

        <h1 
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 animate-fadeInUp"
          style={{ animationDelay: '0.4s' }}
        >
          <span className="gradient-text">Hi, I’m Arijeet</span>
        </h1>

        <div 
          className="text-xl sm:text-2xl md:text-3xl text-foreground/80 mb-8 h-16 md:h-10 animate-fadeInUp"
          style={{ animationDelay: '0.6s' }}
        >
          <TypewriterEffect
            texts={[
              "Creative Developer",
              "UI Enthusiast",
              "Tech Explorer",
              "Problem Solver"
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

      <Link 
        href="#about" 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fadeIn"
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

