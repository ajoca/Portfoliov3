import React, { useState } from 'react';
import { Mail, Github, MapPin, Send, User, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '../hooks/use-toast';
import { portfolioData } from '../mock/portfolioData';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const ContactInfo = ({ icon: Icon, label, value, link }) => (
  <div className="flex items-center p-6 glass hover-lift rounded-xl border border-slate-800/50 hover:border-emerald-400/50 transition-all duration-500 group">
    <div className="p-4 bg-gradient-to-br from-emerald-600/20 to-emerald-800/20 rounded-xl mr-4 group-hover:from-emerald-600/30 group-hover:to-emerald-800/30 transition-all duration-300 animate-pulse-glow">
      <Icon className="w-6 h-6 text-emerald-400 group-hover:scale-110 transition-transform duration-300" />
    </div>
    <div className="flex-1">
      <p className="text-sm text-slate-400 font-medium tracking-wide">{label}</p>
      {link ? (
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white hover:text-emerald-400 transition-all duration-300 font-semibold text-lg hover:tracking-wide"
        >
          {value}
        </a>
      ) : (
        <p className="text-white font-semibold text-lg">{value}</p>
      )}
    </div>
    {/* Advanced geometric accent */}
    <div className="w-4 h-4 border-2 border-emerald-400/30 rotate-45 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:rotate-90 animate-pulse"></div>
  </div>
);

export const Contact = ({ contact }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const { toast } = useToast();

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'El nombre debe tener al menos 2 caracteres';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email no válido';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es requerido';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'El mensaje debe tener al menos 10 caracteres';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Error en el formulario",
        description: "Por favor, corrige los errores e inténtalo de nuevo.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(`${BACKEND_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: "¡Mensaje enviado!",
          description: data.message || "Te responderé pronto. ¡Gracias por contactarme!",
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(data.detail || 'Error al enviar el mensaje');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      toast({
        title: "Error al enviar",
        description: "Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Background geometric elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-emerald-400/10 rounded-full animate-float opacity-50"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-emerald-400/20 rotate-45 animate-pulse"></div>
      <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-emerald-400/30 rounded-full animate-pulse"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-scale">
          <h2 className="text-5xl md:text-6xl font-light text-white mb-6 tracking-tight">
            Let's <span className="text-emerald-400 animate-gradient bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-500 bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-light">
            {contact.availability}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 mx-auto mt-8 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="animate-slide-up">
            <h3 className="text-3xl font-semibold text-white mb-10 flex items-center">
              Get in Touch
              <div className="ml-4 w-6 h-6 border-2 border-emerald-400/50 rotate-45 animate-pulse"></div>
            </h3>
            
            <div className="space-y-6 mb-10">
              <ContactInfo
                icon={Mail}
                label="Email"
                value="canto9400@gmail.com"
                link="mailto:canto9400@gmail.com"
              />
              <ContactInfo
                icon={Github}
                label="GitHub"
                value="github.com/ajoca"
                link="https://github.com/ajoca"
              />
              <ContactInfo
                icon={MapPin}
                label="Ubicación"
                value="Montevideo, Uruguay"
              />
            </div>

            {/* Enhanced Availability Status */}
            <div className="p-8 glass-strong rounded-2xl border border-emerald-400/30 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/5 to-emerald-800/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-4 h-4 bg-emerald-400 rounded-full mr-4 animate-pulse shadow-lg shadow-emerald-400/50"></div>
                  <span className="text-emerald-400 font-semibold text-lg">Disponible para Trabajo</span>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  Actualmente aceptando nuevos proyectos y colaboraciones. 
                  ¡Construyamos algo increíble juntos!
                </p>
              </div>
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-3xl font-semibold text-white mb-10 flex items-center">
              Envía un Mensaje
              <div className="ml-4 w-6 h-6 border-2 border-emerald-400/50 rotate-45 animate-morph"></div>
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="relative group">
                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-emerald-400 transition-all duration-300 group-focus-within:scale-110" />
                <Input
                  type="text"
                  name="name"
                  placeholder="Tu Nombre"
                  value={formData.name}
                  onChange={handleChange}
                  className={`pl-14 pr-4 py-4 bg-slate-900/50 border-slate-700 text-white placeholder-slate-400 focus:border-emerald-400 transition-all duration-300 rounded-xl text-lg hover-glow ${errors.name ? 'border-red-400' : ''}`}
                />
                {errors.name && (
                  <div className="flex items-center mt-2 text-red-400 text-sm">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.name}
                  </div>
                )}
              </div>

              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-emerald-400 transition-all duration-300 group-focus-within:scale-110" />
                <Input
                  type="email"
                  name="email"
                  placeholder="Tu Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`pl-14 pr-4 py-4 bg-slate-900/50 border-slate-700 text-white placeholder-slate-400 focus:border-emerald-400 transition-all duration-300 rounded-xl text-lg hover-glow ${errors.email ? 'border-red-400' : ''}`}
                />
                {errors.email && (
                  <div className="flex items-center mt-2 text-red-400 text-sm">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.email}
                  </div>
                )}
              </div>

              <div className="relative group">
                <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-slate-400 group-focus-within:text-emerald-400 transition-all duration-300 group-focus-within:scale-110" />
                <Textarea
                  name="message"
                  placeholder="Tu Mensaje"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className={`pl-14 pr-4 py-4 bg-slate-900/50 border-slate-700 text-white placeholder-slate-400 focus:border-emerald-400 transition-all duration-300 resize-none rounded-xl text-lg hover-glow ${errors.message ? 'border-red-400' : ''}`}
                />
                {errors.message && (
                  <div className="flex items-center mt-2 text-red-400 text-sm">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.message}
                  </div>
                )}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white py-4 text-lg font-medium transition-all duration-300 hover:shadow-xl hover:shadow-emerald-600/25 hover:-translate-y-2 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-emerald-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 flex items-center justify-center">
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                      Enviando...
                    </div>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                      Enviar Mensaje
                    </>
                  )}
                </div>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};