import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Mail, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { useTranslation } from 'react-i18next';

const GeometricShape = ({ className, animationDelay = 0 }) => (
  <div 
    className={`absolute ${className}`}
    style={{ animationDelay: `${animationDelay}s` }}
  >
    <div className="w-16 h-16 border-2 border-emerald-300/30 rotate-45 transform animate-pulse"></div>
  </div>
);

const FloatingCube = ({ className, size = "w-8 h-8" }) => (
  <div className={`absolute ${className} animate-float`}>
    <div className={`${size} bg-gradient-to-br from-emerald-400/20 to-emerald-600/20 transform rotate-12 rounded-sm`}></div>
  </div>
);

export const Hero = ({ data }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950/20">
      {/* Geometric Background Elements */}
      <GeometricShape className="top-20 left-20" animationDelay={0} />
      <GeometricShape className="top-40 right-32" animationDelay={1} />
      <GeometricShape className="bottom-32 left-16" animationDelay={2} />
      
      <FloatingCube className="top-1/4 left-10" size="w-6 h-6" />
      <FloatingCube className="top-16 right-20" size="w-10 h-10" />
      <FloatingCube className="bottom-20 right-32" size="w-12 h-12" />
      <FloatingCube className="bottom-40 left-1/3" size="w-8 h-8" />

      {/* Main Content */}
      <div className={`container mx-auto px-6 text-center z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Avatar */}
        <div className="mb-8 relative inline-block">
          <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-emerald-400/50 shadow-2xl relative group">
            <img 
              src={data.avatar} 
              alt={data.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-emerald-400 rounded-full animate-ping"></div>
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-emerald-400 rounded-full"></div>
        </div>

        {/* Name and Title */}
        <h1 className="text-5xl md:text-7xl font-light text-white mb-4 tracking-tight">
          {data.name}
        </h1>
        <div className="text-xl md:text-2xl text-emerald-300 mb-2 font-light">
          {data.title}
        </div>
        <div className="flex items-center justify-center text-slate-300 mb-8">
          <MapPin className="w-4 h-4 mr-2" />
          {data.location}
        </div>

        {/* Bio */}
        <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed">
          {data.bio}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button 
            onClick={scrollToProjects}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-emerald-600/25 hover:-translate-y-1"
          >
            {t('View My Work')}
          </Button>
          <Button 
            variant="outline"
            className="border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-slate-900 px-8 py-3 rounded-lg transition-all duration-300 hover:-translate-y-1"
            asChild
          >
            <a href={data.github} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              {t('GitHub Profile')}
            </a>
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-emerald-400" />
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent pointer-events-none"></div>
    </section>
  );
};