import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Mail, Languages } from 'lucide-react';
import { Button } from './ui/button';
import { useTranslation } from 'react-i18next';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: t('Home'), href: '#home' },
    { label: t('Projects'), href: '#projects' },
    { label: t('Skills'), href: '#skills' },
    { label: t('Experience'), href: '#experience' },
    { label: t('Blog'), href: '#blog' },
    { label: t('Contact'), href: '#contact' }
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-slate-950/95 backdrop-blur-sm border-b border-slate-800/50' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-2xl font-bold text-white">
            <span className="text-emerald-400">A</span>lan<span className="text-emerald-400">C</span>anto
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-slate-300 hover:text-emerald-400 transition-colors duration-300 font-medium"
              >
                {item.label}
              </button>
            ))}
            
            {/* Social Links */}
            <div className="flex items-center space-x-4 ml-8">
              <Button
                size="sm"
                variant="ghost"
                className="text-slate-300 hover:text-emerald-400"
                onClick={() => changeLanguage(i18n.language === 'en' ? 'es' : 'en')}
              >
                <Languages className="w-4 h-4" />
                {i18n.language === 'en' ? 'ES' : 'EN'}
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="text-slate-300 hover:text-emerald-400"
                asChild
              >
                <a href="https://github.com/ajoca" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" />
                </a>
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="text-slate-300 hover:text-emerald-400"
                asChild
              >
                <a href="mailto:alan.canto@example.com">
                  <Mail className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-emerald-400 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-slate-950/95 backdrop-blur-sm border-t border-slate-800/50">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left text-slate-300 hover:text-emerald-400 transition-colors duration-300 font-medium py-2"
                >
                  {item.label}
                </button>
              ))}
              
              {/* Mobile Social Links */}
              <div className="flex items-center space-x-4 pt-4 border-t border-slate-800/50">
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-slate-300 hover:text-emerald-400"
                  onClick={() => changeLanguage(i18n.language === 'en' ? 'es' : 'en')}
                >
                  <Languages className="w-4 h-4 mr-2" />
                  {i18n.language === 'en' ? 'ES' : 'EN'}
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-slate-300 hover:text-emerald-400"
                  asChild
                >
                  <a href="https://github.com/ajoca" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-slate-300 hover:text-emerald-400"
                  asChild
                >
                  <a href="mailto:alan.canto@example.com">
                    <Mail className="w-4 h-4 mr-2" />
                    Email
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};