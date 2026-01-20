"use client";
import React, { useState } from "react";
import { Github, ExternalLink, Filter } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const ProjectCard = ({ project, index }) => {
  const techs = project.technologies ?? [];

  return (
    <div
      className="group relative glass hover-lift rounded-2xl overflow-hidden border border-slate-800/50 hover:border-emerald-400/50 transition-all duration-700 hover:-translate-y-4 hover:shadow-2xl hover:shadow-emerald-400/20 animate-fade-scale"
    >
      {/* LINK que estira toda la tarjeta */}
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Abrir ${project.title} en GitHub`}
        className="absolute inset-0 z-10"
      />

      {/* Project Image */}
      <div className="relative z-20 h-52 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-500" />

        {/* Enhanced floating geometric shapes */}
        <div className="absolute top-4 right-4 w-8 h-8 border-2 border-emerald-400/60 rotate-45 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:rotate-180 animate-pulse" />
        <div className="absolute bottom-4 left-4 w-4 h-4 bg-emerald-400/30 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse" />

        {/* Shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      </div>

      {/* Enhanced Content */}
      <div className="relative z-20 p-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-all duration-300 group-hover:tracking-wide">
            {project.title}
          </h3>
          {project.featured && (
            <Badge className="bg-gradient-to-r from-emerald-600/20 to-emerald-700/20 text-emerald-400 border-emerald-400/30 px-3 py-1 font-medium animate-pulse-glow">
              Destacado
            </Badge>
          )}
        </div>

        <p className="text-slate-300 text-base mb-6 leading-relaxed line-clamp-3 group-hover:text-slate-200 transition-colors duration-300">
          {project.description}
        </p>

        {/* Enhanced Technologies */}
        <div className="flex flex-wrap gap-3 mb-6">
          {techs.slice(0, 4).map((tech, i) => (
            <span
              key={i}
              className="px-3 py-2 text-sm bg-slate-800/60 text-slate-300 rounded-lg border border-slate-700/50 hover:border-emerald-400/50 hover:text-emerald-400 transition-all duration-300 hover:scale-105"
            >
              {tech}
            </span>
          ))}
          {techs.length > 4 && (
            <span className="px-3 py-2 text-sm text-slate-400 bg-slate-800/30 rounded-lg">
              +{techs.length - 4} más
            </span>
          )}
        </div>

        {/* Enhanced Action Buttons (sobre el link estirado gracias al z-20 del contenedor) */}
        <div className="flex gap-4">
          <Button
            size="sm"
            variant="ghost"
            className="text-emerald-400 hover:text-white hover:bg-emerald-600/20 transition-all duration-300 hover:scale-105 hover:-translate-y-1 border border-emerald-400/30 hover:border-emerald-400/50"
            asChild
          >
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
              Código
            </a>
          </Button>
          {project.demo !== "#" && (
            <Button
              size="sm"
              variant="ghost"
              className="text-slate-300 hover:text-white hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 hover:-translate-y-1 border border-slate-700/50 hover:border-slate-600/50"
              asChild
            >
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                Demo
              </a>
            </Button>
          )}
        </div>
      </div>

      {/* Enhanced 3D Hover Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/10 via-emerald-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-2xl" />

      {/* Subtle border glow */}
      <div className="absolute inset-0 rounded-2xl border border-emerald-400/0 group-hover:border-emerald-400/20 transition-all duration-500" />
    </div>
  );
};

export const Projects = ({ projects }) => {
  const [filter, setFilter] = useState("all");
  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Apps" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "desktop", label: "Desktop Apps" },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-950">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            A showcase of my development work across web, mobile, and desktop platforms
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={filter === category.id ? "default" : "ghost"}
              onClick={() => setFilter(category.id)}
              className={`transition-all duration-300 ${
                filter === category.id
                  ? "bg-emerald-600 text-white hover:bg-emerald-700"
                  : "text-slate-300 hover:text-emerald-400 hover:bg-slate-800/50"
              }`}
            >
              <Filter className="w-4 h-4 mr-2" />
              {category.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-16">
          <Button
            variant="outline"
            className="border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-slate-900 px-8 py-3 transition-all duration-300 hover:-translate-y-1"
            asChild
          >
            <a href="https://github.com/ajoca" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              View All on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
