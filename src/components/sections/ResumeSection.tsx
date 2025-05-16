
import { resumeData } from '@/data/resume';
import { TimelineItem } from './TimelineItem';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { ScrollAnimationWrapper } from '@/components/animations/ScrollAnimationWrapper';
import Link from 'next/link';

export function ResumeSection() {
  return (
    <section id="resume" className="bg-secondary/30 dark:bg-secondary/10">
      <div className="container mx-auto">
        <ScrollAnimationWrapper>
          <h2 className="section-title">My Journey</h2>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper delay="delay-200" className="text-center mb-12">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg">
            <Link href="/Arijeet Das - Resume.pdf" download="Arijeet_Das_Resume.pdf" target="_blank">
              <Download className="mr-2 h-5 w-5" />
              Download Resume (PDF)
            </Link>
          </Button>
        </ScrollAnimationWrapper>

        <div className="relative flex flex-col items-center">
          {/* Central vertical line for desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border transform -translate-x-1/2"></div>
          
          {resumeData.map((item, index) => (
            <ScrollAnimationWrapper 
              key={item.id} 
              className="w-full flex justify-center" // Ensures wrapper takes full width for alignment
              // delay={`delay-${index * 150 + 300}`} // Apply delay if needed for individual items
            >
              <TimelineItem 
                item={item} 
                isLast={index === resumeData.length - 1} 
                alignLeft={index % 2 === 0} // Alternate alignment for desktop
              />
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
