
"use client";
import type { LucideIcon } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

interface SkillIndicatorProps {
  name: string;
  level: number;
  icon: LucideIcon;
  isVisible?: boolean; // Controlled by ScrollAnimationWrapper
}

export function SkillIndicator({ name, level, icon: Icon, isVisible }: SkillIndicatorProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setProgress(level), 100); // Small delay for animation
      return () => clearTimeout(timer);
    } else {
      setProgress(0); // Reset if not visible (for re-triggering animations if `once` is false)
    }
  }, [level, isVisible]);

  return (
    <div className="mb-4">
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center">
          <Icon className="h-5 w-5 mr-2 text-accent" />
          <span className="font-medium text-foreground/90">{name}</span>
        </div>
        <span className="text-sm text-muted-foreground">{progress}%</span>
      </div>
      <Progress value={progress} className="h-2 [&>div]:bg-gradient-to-r [&>div]:from-primary [&>div]:to-accent" />
    </div>
  );
}
