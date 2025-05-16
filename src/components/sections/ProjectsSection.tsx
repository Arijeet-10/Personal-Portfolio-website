
"use client";

import { useState } from 'react';
import { ProjectCard } from './ProjectCard';
import type { Project } from '@/data/projects';
import { projectsData, projectCategories } from '@/data/projects';
import { Button } from '@/components/ui/button';
import { ScrollAnimationWrapper } from '@/components/animations/ScrollAnimationWrapper';
import { cn } from '@/lib/utils';

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<Project['category'] | 'All'>('All');

  const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter(project => project.category === selectedCategory);

  return (
    <section id="projects">
      <div className="container mx-auto">
        <ScrollAnimationWrapper>
          <h2 className="section-title">My Projects</h2>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper delay="delay-200">
          <div className="flex justify-center flex-wrap gap-2 mb-12">
            <Button
              variant={selectedCategory === 'All' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('All')}
              className={cn("capitalize", selectedCategory === 'All' && 'bg-primary text-primary-foreground hover:bg-primary/90')}
            >
              All
            </Button>
            {projectCategories.map(category => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category)}
                className={cn("capitalize", selectedCategory === category && 'bg-primary text-primary-foreground hover:bg-primary/90')}
              >
                {category}
              </Button>
            ))}
          </div>
        </ScrollAnimationWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ScrollAnimationWrapper 
              key={project.id} 
              delay={`delay-${(index % 3) * 150 + 300}`} // Staggered delay based on column
            >
              <ProjectCard project={project} />
            </ScrollAnimationWrapper>
          ))}
        </div>
        {filteredProjects.length === 0 && (
          <ScrollAnimationWrapper>
            <p className="text-center text-muted-foreground mt-8">No projects found for this category.</p>
          </ScrollAnimationWrapper>
        )}
      </div>
    </section>
  );
}
