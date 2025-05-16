
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
              src="https://placehold.co/400x500.png"
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
                Hello! I&apos;m a passionate and results-driven Creative Developer with a strong focus on building intuitive and engaging user experiences. With a knack for problem-solving and a love for clean, efficient code, I thrive in collaborative environments where innovation is key.
              </p>
              <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                My journey in tech has equipped me with a versatile skill set, allowing me to tackle diverse challenges from front-end aesthetics to back-end logic. I&apos;m constantly exploring new technologies and methodologies to stay at the forefront of web development. When I&apos;m not coding, you can find me exploring new design trends or contributing to open-source projects.
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

