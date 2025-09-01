import React, { useState, useEffect } from 'react';
import { Code, Zap, Database, Settings } from 'lucide-react';

const SkillBar = ({ skill, index, isVisible }) => {
  const [animatedLevel, setAnimatedLevel] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const t = setTimeout(() => setAnimatedLevel(skill.level), index * 100);
      return () => clearTimeout(t);
    }
  }, [isVisible, skill.level, index]);

  return (
    <div className="group mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-white font-medium group-hover:text-emerald-400 transition-colors">
          {skill.name}
        </span>
        <span className="text-emerald-400 text-sm font-mono">{animatedLevel}%</span>
      </div>
      <div className="relative h-2 bg-slate-800/60 rounded-full overflow-hidden">
        <div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${animatedLevel}%` }}
        >
          <div className="absolute right-0 top-0 h-full w-1 bg-emerald-300 opacity-75 animate-pulse"></div>
        </div>
        <div className="absolute right-2 top-1/2 -translate-y-1/2 w-1 h-1 border border-emerald-300/50 rotate-45 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>
    </div>
  );
};

const SkillCategory = ({ title, skills, icon: Icon, isVisible, delay = 0 }) => {
  return (
    <div
      className={`bg-slate-900/30 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-slate-800/50 hover:border-emerald-400/30 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center mb-6">
        <div className="p-3 bg-emerald-600/20 rounded-lg mr-4">
          <Icon className="w-6 h-6 text-emerald-400" />
        </div>
        <h3 className="text-lg sm:text-xl font-semibold text-white">{title}</h3>
        <div className="ml-auto w-4 h-4 border border-emerald-400/30 rotate-45 opacity-50"></div>
      </div>

      <div className="space-y-4">
        {skills.map((skill, i) => (
          <SkillBar key={skill.name ?? i} skill={skill} index={i} isVisible={isVisible} />
        ))}
      </div>
    </div>
  );
};

export const Skills = ({ skills = {} }) => {
  // defaults para evitar que "no se vea" si falta data en mobile
  const {
    languages = [],
    frameworks = [],
    databases = [],
    tools = [],
  } = skills;

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = document.getElementById('skills');
    if (!el) return;

    // Observer más permisivo para móviles
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          obs.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -20% 0px',
      }
    );

    obs.observe(el);

    // Fallback: si por alguna razón no dispara en ciertos navegadores móviles
    const backup = setTimeout(() => setIsVisible(true), 1200);

    return () => {
      obs.disconnect();
      clearTimeout(backup);
    };
  }, []);

  const skillCategories = [
    { title: 'Programming Languages', skills: languages, icon: Code },
    { title: 'Frameworks & Libraries', skills: frameworks, icon: Zap },
    { title: 'Databases', skills: databases, icon: Database },
    { title: 'Development Tools', skills: tools, icon: Settings },
  ];

  return (
    <section
      id="skills"
      className="relative z-10 py-16 sm:py-20 bg-gradient-to-b from-slate-950 to-slate-900 scroll-mt-24"
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl font-light text-white mb-3 sm:mb-4">
            Technical Skills
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-base sm:text-xl">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Grid responsive */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {skillCategories.map((cat, i) =>
            cat.skills.length ? (
              <SkillCategory
                key={cat.title}
                title={cat.title}
                skills={cat.skills}
                icon={cat.icon}
                isVisible={isVisible}
                delay={i * 200}
              />
            ) : null
          )}
        </div>

        {/* Callout */}
        <div
          className={`mt-12 sm:mt-16 text-center bg-slate-900/50 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-emerald-400/30 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-emerald-600/20 rounded-full mb-4">
            <Zap className="w-7 h-7 sm:w-8 sm:h-8 text-emerald-400" />
          </div>
          <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4">
            REST API Specialist
          </h3>
          <p className="text-slate-300 max-w-3xl mx-auto leading-relaxed text-sm sm:text-base">
            I specialize in building RESTful APIs that provide seamless communication between clients and servers.
            My approach ensures efficiency, security, and scalability using modern tools and best practices.
          </p>
        </div>
      </div>
    </section>
  );
};
