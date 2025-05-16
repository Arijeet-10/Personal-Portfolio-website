
"use client";

import Image from 'next/image';
import { SkillIndicator } from './SkillIndicator';
import { skillsData } from '@/data/skills';
import { ScrollAnimationWrapper } from '@/components/animations/ScrollAnimationWrapper';

export function AboutSection() {
  return (
    <section id="about" className="bg-secondary/30 dark:bg-secondary/10">
      <div className="container mx-auto">
        <ScrollAnimationWrapper>
          <h2 className="section-title">About Me</h2>
        </ScrollAnimationWrapper>

        <div className="grid md:grid-cols-3 gap-12 items-center">
          <ScrollAnimationWrapper className="md:col-span-1" animationClass="animate-fadeIn">
            <Image
              src="/Arijeet_About_Me.jpg"
              alt="Your Name - About"
              width={400}
              height={500}
              data-ai-hint="person coding"
              className="rounded-lg shadow-xl object-cover aspect-[4/5] w-full"
            />
          </ScrollAnimationWrapper>

          <div className="md:col-span-2">
            <ScrollAnimationWrapper delay="delay-200">
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                Hi! I&apos;m Arijeet — a creative and detail-oriented developer who thrives on crafting meaningful digital experiences. I specialize in building responsive, visually engaging, and user-focused applications that blend creativity with functionality.
              </p>
              <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                With a solid background in front-end and full-stack development, I enjoy solving complex problems, exploring emerging tech, and delivering polished solutions. Outside of coding, I love diving into design inspiration, experimenting with UI interactions, and contributing to open-source projects that push the boundaries of what’s possible on the web.
              </p>
            </ScrollAnimationWrapper>


            <ScrollAnimationWrapper delay="delay-400">
              <h3 className="text-2xl font-semibold mb-6 text-primary">My Skills</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                {skillsData.map((skill, index) => (
                  <ScrollAnimationWrapper key={skill.name} delay={`delay-${index * 100}`}>
                    {/* Pass isVisible to SkillIndicator if you want to control animation from here */}
                    {/* For now, ScrollAnimationWrapper handles visibility for the entire SkillIndicator */}
                    <SkillIndicator name={skill.name} level={skill.level} icon={skill.icon} isVisible={true} />
                  </ScrollAnimationWrapper>
                ))}
              </div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </div>
    </section>
  );
}

