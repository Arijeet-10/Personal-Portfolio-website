
import type { ResumeItem } from '@/data/resume';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface TimelineItemProps {
  item: ResumeItem;
  isLast: boolean;
  alignLeft?: boolean;
}

export function TimelineItem({ item, isLast, alignLeft = false }: TimelineItemProps) {
  const InstitutionIcon = item.institutionIcon;

  return (
    <div className={cn("relative pl-10 md:pl-0 md:w-1/2", alignLeft ? "md:pr-8 md:self-start" : "md:pl-8 md:self-end")}>
      {/* Vertical line for mobile, horizontal connector for desktop */}
      {!isLast && <div className="absolute top-5 left-[18px] h-full w-0.5 bg-border md:hidden" />}
      
      {/* Dot */}
      <div className={cn(
        "absolute top-3.5 left-3 w-3 h-3 rounded-full border-2 border-background bg-primary z-10",
        "md:left-1/2 md:-translate-x-1/2",
        alignLeft ? "md:left-auto md:right-[-7px]" : "md:left-[-7px]"
      )} />

      <Card className="mb-8 shadow-md hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-lg font-semibold text-primary">{item.title}</CardTitle>
              <div className="flex items-center text-sm text-muted-foreground mt-1">
                {InstitutionIcon && <InstitutionIcon className="h-4 w-4 mr-1.5" />}
                <span>{item.institution}</span>
              </div>
            </div>
            <item.icon className="h-6 w-6 text-accent flex-shrink-0 ml-2" />
          </div>
          <CardDescription className="text-xs mt-1">{item.date}</CardDescription>
        </CardHeader>
        <CardContent>
          {Array.isArray(item.description) ? (
            <ul className="list-disc list-inside space-y-1 text-sm text-foreground/80">
              {item.description.map((desc, index) => <li key={index}>{desc}</li>)}
            </ul>
          ) : (
            <p className="text-sm text-foreground/80">{item.description}</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
