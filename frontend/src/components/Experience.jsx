import React from 'react';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { Badge } from './ui/badge';

/* === DATA ADAPTADA A TU CV === */
export const experienceData = [
  {
    id: 'check',
    position: 'Software Developer & Data Analyst',
    company: 'Check Food Tech Revolution (Remoto, Autónomo – España)',
    period: 'Abr 2025 – Jul 2025',
    description:
      'Desarrollo y mantenimiento de apps web con React y Node; automatización de procesos vía APIs; integraciones con MongoDB; dashboards en Power BI; reporting con Excel/JSON; uso de Postman/Insomnia; onboarding técnico y soporte (QR, pasarelas de pago, kioscos Sunmi); trabajo ágil en equipos multidisciplinarios.',
    technologies: [
      'React', 'Node.js', 'MongoDB', 'APIs REST', 'Power BI',
      'Excel/JSON', 'Postman', 'Insomnia', 'Scrum', 'Sunmi'
    ],
  },
  {
    id: 'nublit',
    position: 'IT Technical Support Specialist',
    company: 'Nublit',
    period: 'Abr 2025 – Jun 2025',
    description:
      'Administración y soporte de Microsoft 365 (usuarios, licencias, seguridad); mantenimiento de impresoras y equipos; configuración de Windows y macOS; control de inventario tecnológico.',
    technologies: [
      'Microsoft 365', 'Windows', 'macOS', 'Impresoras', 'Inventario'
    ],
  },
  {
    id: 'intendencia-dev',
    position: 'Software Developer y Soporte Técnico',
    company: 'Intendencia de Colonia',
    period: 'Sep 2022 – Mar 2025',
    description:
      'Desarrollo de apps internas (Java, JavaScript, C#, PHP, .NET); APIs RESTful con Spring Boot y ASP.NET; SQL Server y MySQL; frontend con Angular y React; CI/CD y Git; automatizaciones con Power Automate y Power Apps; integraciones con Outlook, Excel, SharePoint y Dataverse; soporte a usuarios, redes y servidores; migraciones y documentación.',
    technologies: [
      'Java', 'Spring Boot', 'ASP.NET', 'React', 'Angular',
      'SQL Server', 'MySQL', 'Power Automate', 'Power Apps', 'SharePoint'
    ],
  },
  {
    id: 'intendencia-admin',
    position: 'Administrativo',
    company: 'Intendencia de Colonia',
    period: 'Jun 2018 – Ago 2022',
    description:
      'Gestión documental y atención al público; propuestas de mejora; uso avanzado de Excel y Office 365; asistencia técnica básica y capacitación interna.',
    technologies: [
      'Office 365', 'Excel', 'Documentación', 'Atención al público'
    ],
  },
];

/* === COMPONENTE (mismos estilos/visual) === */
const ExperienceCard = ({ experience, index }) => {
  return (
    <div
      className={`relative bg-slate-900/30 backdrop-blur-sm p-8 rounded-xl border border-slate-800/50 hover:border-emerald-400/50 transition-all duration-500 group animate-slide-up`}
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      {/* Timeline dot */}
      <div className="absolute -left-4 top-8 w-8 h-8 bg-emerald-600 rounded-full border-4 border-slate-950 group-hover:scale-110 transition-transform duration-300">
        <div className="absolute inset-2 bg-emerald-400 rounded-full animate-pulse"></div>
      </div>

      {/* Company and Position */}
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-white group-hover:text-emerald-400 transition-colors mb-1">
          {experience.position}
        </h3>
        <div className="flex items-center text-emerald-400 font-medium mb-2">
          {experience.company}
          <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        <div className="flex items-center text-slate-400 text-sm">
          <Calendar className="w-4 h-4 mr-2" />
          {experience.period}
        </div>
      </div>

      {/* Description */}
      <p className="text-slate-300 mb-6 leading-relaxed">
        {experience.description}
      </p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2">
        {experience.technologies.map((tech, i) => (
          <Badge
            key={i}
            variant="secondary"
            className="bg-slate-800/60 text-slate-300 hover:bg-emerald-600/20 hover:text-emerald-400 transition-colors text-xs"
          >
            {tech}
          </Badge>
        ))}
      </div>

      {/* 3D Hover Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl"></div>
    </div>
  );
};

export const Experience = ({ experience }) => {
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
            Experiencia laboral
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Trayectoria en desarrollo de software, datos y soporte técnico
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-400 via-emerald-600 to-transparent"></div>

          {/* Experience Cards */}
          <div className="space-y-12 ml-12">
            {experience.map((exp, index) => (
              <ExperienceCard key={exp.id} experience={exp} index={index} />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-600/20 rounded-full mb-4">
            <MapPin className="w-8 h-8 text-emerald-400" />
          </div>
          <h3 className="text-2xl font-semibold text-white mb-4">Listo para nuevos desafíos</h3>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Me entusiasma trabajar en proyectos innovadores y colaborar con equipos talentosos. ¡Construyamos algo increíble!
          </p>
        </div>
      </div>
    </section>
  );
};

