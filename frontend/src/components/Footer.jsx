import React from 'react';
import { Github, Mail, MapPin, Heart } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800/50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <div className="text-2xl font-bold text-white mb-4">
              <span className="text-emerald-400">A</span>lan<span className="text-emerald-400">C</span>anto
            </div>
            <p className="text-slate-400 mb-4">
              Full Stack Developer specializing in innovative digital solutions. 
              Always exploring new technologies and improving skills.
            </p>
            <div className="flex items-center text-slate-400">
              <MapPin className="w-4 h-4 mr-2" />
              Montevideo, Uruguay
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: 'Home', href: '#home' },
                { label: 'Projects', href: '#projects' },
                { label: 'Skills', href: '#skills' },
                { label: 'Contact', href: '#contact' }
              ].map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-slate-400 hover:text-emerald-400 transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h3 className="text-white font-semibold mb-4">Let's Connect</h3>
            <div className="space-y-3">
              <a
                href="https://github.com/ajoca"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-slate-400 hover:text-emerald-400 transition-colors duration-300"
              >
                <Github className="w-4 h-4 mr-3" />
                GitHub Profile
              </a>
              <a
                href="mailto:alan.canto@example.com"
                className="flex items-center text-slate-400 hover:text-emerald-400 transition-colors duration-300"
              >
                <Mail className="w-4 h-4 mr-3" />
                Email Me
              </a>
            </div>
            
            {/* Availability Status */}
            <div className="mt-6 p-4 bg-emerald-600/10 border border-emerald-400/20 rounded-lg">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></div>
                <span className="text-emerald-400 text-sm font-medium">Available for Work</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center text-slate-400 text-sm mb-4 md:mb-0">
              <span>© {currentYear} @Alan Canto </span>
            
              
            </div>
            
            <div className="text-slate-400 text-sm">
             
            </div>
          </div>
        </div>
      </div>

      {/* Geometric Background Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 overflow-hidden pointer-events-none">
        <div className="absolute bottom-4 left-4 w-4 h-4 border-2 border-emerald-400/20 rotate-45 animate-pulse"></div>
        <div className="absolute bottom-8 right-12 w-6 h-6 border border-emerald-400/10 rotate-12"></div>
        <div className="absolute bottom-12 left-1/3 w-3 h-3 bg-emerald-400/10 rotate-45"></div>
      </div>
    </footer>
  );
};