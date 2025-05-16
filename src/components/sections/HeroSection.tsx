
"use client";

import Image from 'next/image';
import { ArrowDownCircle } from 'lucide-react';
import { TypewriterEffect } from '@/components/animations/TypewriterEffect';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-br from-background to-secondary dark:from-background dark:to-secondary/30 p-4 relative">
      <div className="absolute inset-0 bg-dot-pattern opacity-5 dark:opacity-3 pointer-events-none"></div>
      <div className="relative z-10">
        <Image
          src="https://placehold.co/150x150.png"
          alt="Professional Photo"
          width={150}
          height={150}
          data-ai-hint="professional portrait"
          className="rounded-full mx-auto mb-6 shadow-xl border-4 border-card"
        />
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
          <span className="gradient-text">Your Name</span>
        </h1>
        <div className="text-xl sm:text-2xl md:text-3xl text-foreground/80 mb-8 h-16 md:h-10">
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
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg">
          <Link href="#contact">Get in Touch</Link>
        </Button>
      </div>
      <Link href="#about" className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce" aria-label="Scroll to About section">
        <ArrowDownCircle className="h-10 w-10 text-primary hover:text-accent transition-colors" />
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
