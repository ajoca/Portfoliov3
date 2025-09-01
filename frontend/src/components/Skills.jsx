import React, { useState, useEffect } from 'react';
import { Code, Zap, Database, Settings } from 'lucide-react';

const SkillBar = ({ skill, index, isVisible }) => {
  const [animatedLevel, setAnimatedLevel] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setAnimatedLevel(skill.level);
      }, index * 100);
      return () => clearTimeout(timer);
    }
  }, [isVisible, skill.level, index]);

  return (
    <div className="group mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-white font-medium group-hover:text-emerald-400 transition-colors">
          {skill.name}
        </span>
        <span className="text-emerald-400 text-sm font-mono">
          {animatedLevel}%
        </span>
      </div>
      <div className="relative h-2 bg-slate-800/60 rounded-full overflow-hidden">
        <div 
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${animatedLevel}%` }}
        >
          <div className="absolute right-0 top-0 h-full w-1 bg-emerald-300 opacity-75 animate-pulse"></div>
        </div>
        {/* Subtle geometric shape on hover */}
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 w-1 h-1 border border-emerald-300/50 rotate-45 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>
    </div>
  );
};

const SkillCategory = ({ title, skills, icon: Icon, isVisible, delay = 0 }) => {
  return (
    <div 
      className={`bg-slate-900/30 backdrop-blur-sm p-8 rounded-xl border border-slate-800/50 hover:border-emerald-400/30 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center mb-6">
        <div className="p-3 bg-emerald-600/20 rounded-lg mr-4 group-hover:bg-emerald-600/30 transition-colors">
          <Icon className="w-6 h-6 text-emerald-400" />
        </div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        {/* Floating geometric accent */}
        <div className="ml-auto w-4 h-4 border border-emerald-400/30 rotate-45 opacity-50"></div>
      </div>
      
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <SkillBar 
            key={skill.name} 
            skill={skill} 
            index={index}
            isVisible={isVisible} 
          />
        ))}
      </div>
    </div>
  );
};

export const Skills = ({ skills }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('skills');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: skills.languages,
      icon: Code
    },
    {
      title: "Frameworks & Libraries",
      skills: skills.frameworks,
      icon: Zap
    },
    {
      title: "Databases",
      skills: skills.databases,
      icon: Database
    },
    {
      title: "Development Tools",
      skills: skills.tools,
      icon: Settings
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={category.title}
              title={category.title}
              skills={category.skills}
              icon={category.icon}
              isVisible={isVisible}
              delay={index * 200}
            />
          ))}
        </div>

        {/* REST API Specialization Callout */}
        <div className={`mt-16 text-center bg-slate-900/50 backdrop-blur-sm p-8 rounded-xl border border-emerald-400/30 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '800ms' }}>
          <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-600/20 rounded-full mb-4">
            <Zap className="w-8 h-8 text-emerald-400" />
          </div>
          <h3 className="text-2xl font-semibold text-white mb-4">REST API Specialist</h3>
          <p className="text-slate-300 max-w-3xl mx-auto leading-relaxed">
            I specialize in building RESTful APIs that provide seamless communication between clients and servers. 
            My approach ensures efficiency, security, and scalability using modern tools and best practices.
          </p>
        </div>
      </div>
    </section>
  );
};