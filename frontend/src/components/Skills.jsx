import React, { useState, useEffect } from 'react';
import { Code, Zap, Database, Settings } from 'lucide-react';

const SkillBar = ({ skill, index, isVisible }) => {
  const [animatedLevel, setAnimatedLevel] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const t = setTimeout(() => setAnimatedLevel(skill.level), index * 90);
      return () => clearTimeout(t);
    }
  }, [isVisible, skill.level, index]);

  return (
    <div
      className="group mb-6 will-change-transform"
      style={{ animationDelay: `${index * 70}ms` }}
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-white font-medium group-hover:text-emerald-400 transition-colors">
          {skill.name}
        </span>
        <span className="text-emerald-400 text-sm font-mono">{animatedLevel}%</span>
      </div>

      <div className="relative h-2 bg-slate-800/60 rounded-full overflow-hidden">
        {/* Barra de progreso */}
        <div
          className="absolute top-0 left-0 h-full rounded-full transition-all duration-1000 ease-out bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-300"
          style={{ width: `${animatedLevel}%` }}
        >
          {/* “Spark” al frente */}
          <div className="absolute -right-0.5 top-0 h-full w-1.5 bg-emerald-100/80 opacity-90 rounded-full shadow-[0_0_8px_rgba(110,231,183,0.8)] animate-pulse" />
        </div>

        {/* Brillo sutil en hover */}
        <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-300/10 to-transparent" />
        </div>

        {/* Geometría sutil en hover */}
        <div className="absolute right-2 top-1/2 -translate-y-1/2 w-1 h-1 border border-emerald-300/50 rotate-45 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    </div>
  );
};

const SkillCategory = ({ title, skills, icon: Icon, isVisible, delay = 0 }) => {
  return (
    <div
      className={[
        'group relative rounded-xl border transition-all duration-700 will-change-transform',
        'bg-slate-900/30 backdrop-blur-sm border-slate-800/50',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
        // efecto pro: glow de borde y lift
        'hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-500/10 hover:border-emerald-400/40',
      ].join(' ')}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* borde glow con pseudo overlay */}
      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-transparent group-hover:ring-emerald-400/20 transition-[ring] duration-500" />

      <div className="p-8">
        <div className="flex items-center mb-6">
          <div className="p-3 bg-emerald-600/20 rounded-lg mr-4 group-hover:bg-emerald-600/30 transition-colors">
            <Icon className="w-6 h-6 text-emerald-400 group-hover:scale-110 transition-transform" />
          </div>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <div className="ml-auto w-4 h-4 border border-emerald-400/30 rotate-45 opacity-50" />
        </div>

        <div className="space-y-4">
          {skills.map((skill, i) => (
            <SkillBar key={skill.name ?? i} skill={skill} index={i} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </div>
  );
};

export const Skills = ({ skills = {} }) => {
  const {
    languages = [],
    frameworks = [],
    databases = [],
    tools = [],
  } = skills;

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Respeta usuarios con reduce motion
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      setIsVisible(true);
      return;
    }

    const el = document.getElementById('skills');
    if (!el) return;

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
    const backup = setTimeout(() => setIsVisible(true), 1200);

    return () => {
      obs.disconnect?.();
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
      aria-label="Technical Skills"
      className="relative z-10 py-20 bg-gradient-to-b from-slate-950 to-slate-900 scroll-mt-24"
    >
      {/* fondo decorativo suave + seguro en mobile */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(16,185,129,0.06)_0%,rgba(15,23,42,0)_60%)]" />

      <div className="container relative z-10 mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Grid responsive con stagger */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((cat, i) =>
            cat.skills.length ? (
              <SkillCategory
                key={cat.title}
                title={cat.title}
                skills={cat.skills}
                icon={cat.icon}
                isVisible={isVisible}
                delay={i * 180}
              />
            ) : null
          )}
        </div>

        {/* Callout */}
        <div
          className={[
            'mt-16 text-center rounded-xl border bg-slate-900/50 backdrop-blur-sm',
            'border-emerald-400/30 transition-all duration-700 will-change-transform',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
            'hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-1',
          ].join(' ')}
          style={{ transitionDelay: '720ms' }}
        >
          <div className="p-8">
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
      </div>
    </section>
  );
};
