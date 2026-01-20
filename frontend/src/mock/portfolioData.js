export const portfolioData = {
  personal: {
    name: "Alan Canto",
    title: "Full Stack Developer",
    location: "Montevideo, Uruguay",
    email: "alan.canto@example.com",
    github: "https://github.com/ajoca",
    bio: "Developer specializing in innovative digital solutions for web, mobile, and desktop applications. Always exploring new technologies and improving skills.",
    avatar: "https://avatars.githubusercontent.com/u/137518420?v=4"
  },
  
  skills: {
    languages: [
      { name: "JavaScript", level: 90, icon: "Code" },
      { name: "TypeScript", level: 85, icon: "FileCode" },
      { name: "Java", level: 88, icon: "Coffee" },
      { name: "Python", level: 82, icon: "Brain" },
      { name: "PHP", level: 80, icon: "Globe" },
      { name: "C#", level: 75, icon: "Terminal" },
      { name: "Dart", level: 78, icon: "Smartphone" }
    ],
    frameworks: [
      { name: "React", level: 92, icon: "Component" },
      { name: "React Native", level: 88, icon: "Smartphone" },
      { name: "Angular", level: 85, icon: "Triangle" },
      { name: "Node.js", level: 90, icon: "Server" },
      { name: "Express.js", level: 88, icon: "Zap" },
      { name: "Laravel", level: 82, icon: "Crown" },
      { name: "Flutter", level: 80, icon: "Bird" }
    ],
    databases: [
      { name: "MongoDB", level: 88, icon: "Database" },
      { name: "MySQL", level: 85, icon: "HardDrive" }
    ],
    tools: [
      { name: "VS Code", level: 95, icon: "Code2" },
      { name: "Git", level: 90, icon: "GitBranch" },
      { name: "Docker", level: 75, icon: "Package" },
      { name: "Postman", level: 88, icon: "Send" }
    ]
  },

  projects: [
  {
    id: 1,
    title: "RecypeIA",
    description: "App de recetas asistida por IA.",
    technologies: ["React", "Tailwind", "Node"],
    github: "https://github.com/ajoca/RecypeIA",
    demo: "https://recype-ioxbh8t41-alan-cantos-projects.vercel.app/",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
    category: "web",
    featured: true
  },
  {
    id: 2,
    title: "Barberiav2",
    description: "Barbería en Next.js con UI moderna.",
    technologies: ["Next.js", "Tailwind", "shadcn/ui"],
    github: "https://github.com/ajoca/Barberiav2",
    demo: "#",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=400&h=300&fit=crop",
    category: "web",
    featured: true
  },
  {
    id: 3,
    title: "Portfoliov3",
    description: "Portfolio con frontend + backend y deploy en Vercel.",
    technologies: ["React", "Node"],
    github: "https://github.com/ajoca/Portfoliov3",
    demo: "#",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop",
    category: "web",
    featured: false
  },
  {
    id: 4,
    title: "ajoca (perfil)",
    description: "Repo de perfil/config de GitHub.",
    technologies: ["Markdown"],
    github: "https://github.com/ajoca/ajoca",
    demo: "#",
    image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400&h=300&fit=crop",
    category: "web",
    featured: false
  },
  {
    id: 5,
    title: "Portfoliov2",
    description: "Portfolio con Next.js, MDX y animaciones.",
    technologies: ["Next.js", "Tailwind", "Framer Motion", "MDX"],
    github: "https://github.com/ajoca/Portfoliov2",
    demo: "#",
    image: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?w=400&h=300&fit=crop",
    category: "web",
    featured: false
  },
  {
    id: 6,
    title: "Barberia",
    description: "Proyecto de barbería (frontend + backend).",
    technologies: ["Next.js", "API"],
    github: "https://github.com/ajoca/Barberia",
    demo: "#",
    image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=400&h=300&fit=crop",
    category: "web",
    featured: false
  },
  {
    id: 7,
    title: "SearchProductIA",
    description: "Buscador de productos con IA (Node/Express + Sequelize + MySQL).",
    technologies: ["Node", "Express", "Sequelize", "MySQL"],
    github: "https://github.com/ajoca/SearchProductIA",
    demo: "#",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
    category: "web",
    featured: false
  },
  {
    id: 8,
    title: "StudyIA",
    description: "API que transforma PDFs en material de estudio.",
    technologies: [".NET 8", "EF Core", "Swagger", "SQL Server"],
    github: "https://github.com/ajoca/StudyIA",
    demo: "#",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
    category: "web",
    featured: false
  },
  {
    id: 9,
    title: "AppBooks",
    description: "App Android de libros con Jetpack Compose y Firebase.",
    technologies: ["Kotlin", "Compose", "Hilt", "Firebase", "Cloudinary"],
    github: "https://github.com/ajoca/AppBooks",
    demo: "#",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
    category: "mobile",
    featured: false
  },
  {
    id: 10,
    title: "Pr_Hossana",
    description: "E-commerce educativo en PHP + MySQL con panel y PDFs.",
    technologies: ["PHP", "MySQL", "Bootstrap", "FPDF"],
    github: "https://github.com/ajoca/Pr_Hossana",
    demo: "#",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
    category: "web",
    featured: false
  },
  {
    id: 11,
    title: "PetAdoption (Microservicios)",
    description: "Plataforma de adopción con microservicios Java/Spring.",
    technologies: ["Spring Boot", "Eureka", "JWT", "PostgreSQL", "MinIO"],
    github: "https://github.com/ajoca/PetAdoption",
    demo: "#",
    image: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=400&h=300&fit=crop",
    category: "web",
    featured: true
  },
  {
    id: 12,
    title: "Prueba Backend/Frontend",
    description: "Gestor de tareas: Laravel API + React frontend.",
    technologies: ["Laravel", "MySQL", "React", "Bootstrap"],
    github: "https://github.com/ajoca/Prueba-Backend-Frontend",
    demo: "#",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop",
    category: "web",
    featured: false
  },
  {
    id: 13,
    title: "Prueba (Expo)",
    description: "App móvil de tareas en React Native (Expo).",
    technologies: ["Expo", "React Native"],
    github: "https://github.com/ajoca/Prueba",
    demo: "#",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
    category: "mobile",
    featured: false
  },
  {
    id: 14,
    title: "Crypto",
    description: "Repositorio inicial para dashboard + chat IA.",
    technologies: ["React", "Tailwind"],
    github: "https://github.com/ajoca/Crypto",
    demo: "#",
    image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=400&h=300&fit=crop",
    category: "web",
    featured: false
  },
  {
    id: 15,
    title: "Portfolio",
    description: "Portfolio anterior en React/Tailwind.",
    technologies: ["React", "Tailwind"],
    github: "https://github.com/ajoca/Portfolio",
    demo: "#",
    image: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?w=400&h=300&fit=crop",
    category: "web",
    featured: false
  },
  {
    id: 16,
    title: "Game Shop",
    description: "Tienda de videojuegos con catálogo, carrito y admin.",
    technologies: ["React", "Spring Boot", "MySQL", "Tailwind"],
    github: "https://github.com/ajoca/Game-Shop",
    demo: "#",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop",
    category: "web",
    featured: true
  },
  {
    id: 17,
    title: "Árbol Genealógico",
    description: "App para construir y visualizar tu árbol genealógico.",
    technologies: ["React"],
    github: "https://github.com/ajoca/Arbol-Genealogico",
    demo: "#",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400&h=300&fit=crop",
    category: "web",
    featured: false
  },
  {
    id: 18,
    title: "Gimnasio CTC",
    description: "App móvil (Expo) para gestión de gimnasio.",
    technologies: ["Expo", "React Native"],
    github: "https://github.com/ajoca/Gimnasioctc",
    demo: "#",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
    category: "mobile",
    featured: false
  },
  {
    id: 19,
    title: "Tienda Online (fork)",
    description: "Fork de tienda React + Spring Boot.",
    technologies: ["React", "Spring Boot"],
    github: "https://github.com/ajoca/Tienda_Online_React_SpringBoot",
    demo: "#",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
    category: "web",
    featured: false
  },
  {
    id: 20,
    title: "DDA (Hotel Reservations)",
    description: "OB DDA en Java (educativo).",
    technologies: ["Java", "MySQL"],
    github: "https://github.com/ajoca/DDA",
    demo: "#",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop",
    category: "web",
    featured: true
  },
  {
    id: 22,
    title: "Calculadora React",
    description: "Calculadora funcional construida con React y Tailwind CSS.",
    technologies: ["React", "Tailwind"],
    github: "https://github.com/ajoca/Calculadora-React",
    demo: "#",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop",
    category: "web",
    featured: false
  },
  {
    id: 23,
    title: "App del Clima",
    description: "Aplicación del clima con API de OpenWeatherMap.",
    technologies: ["JavaScript", "API"],
    github: "https://github.com/ajoca/Weather-App",
    demo: "#",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=300&fit=crop",
    category: "web",
    featured: false
  },
  {
    id: 24,
    title: "Lista de Tareas",
    description: "App de lista de tareas con localStorage.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/ajoca/Todo-App",
    demo: "#",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=300&fit=crop",
    category: "web",
    featured: false
  }
],


 experience: [
    {
      id: 'check',
      position: 'Software Developer & Data Analyst',
      company: 'Check Food Tech Revolution (Remoto, Autónomo – España)',
      period: 'Abr 2025 – Jul 2025',
      description:
        'Desarrollo y mantenimiento de apps web con React y Node; automatización vía APIs; integraciones con MongoDB; dashboards en Power BI; reporting (Excel/JSON); uso de Postman/Insomnia; onboarding técnico y soporte (QR, pasarelas de pago, kioscos Sunmi); trabajo ágil.',
      technologies: [
        'React','Node.js','MongoDB','APIs REST','Power BI',
        'Excel/JSON','Postman','Insomnia','Scrum','Sunmi'
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
        'Microsoft 365','Windows','macOS','Impresoras','Inventario'
      ],
    },
    {
      id: 'intendencia-dev',
      position: 'Software Developer y Soporte Técnico',
      company: 'Intendencia de Colonia',
      period: 'Sep 2022 – Mar 2025',
      description:
        'Desarrollo de apps internas (Java, JavaScript, C#, PHP, .NET); APIs REST con Spring Boot y ASP.NET; SQL Server y MySQL; frontend con Angular y React; CI/CD y Git; automatizaciones con Power Automate/Power Apps; integraciones con Outlook, Excel, SharePoint y Dataverse; soporte a usuarios, redes y servidores.',
      technologies: [
        'Java','Spring Boot','ASP.NET','React','Angular',
        'SQL Server','MySQL','Power Automate','Power Apps','SharePoint'
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
        'Office 365','Excel','Documentación','Atención al público'
      ],
    },
  ],

  contact: {
    email: "alan.canto@example.com",
    github: "https://github.com/ajoca",
    linkedin: "#",
    location: "Montevideo, Uruguay",
    availability: "Open to remote work and collaborations worldwide"
  },

  blog: [
    {
      id: 1,
      title: "Tendencias en desarrollo web para 2026",
      excerpt: "Explorando las tendencias emergentes en desarrollo web para el próximo año, incluyendo IA integrada, sostenibilidad y frameworks modernos.",
      content: "En 2026, el desarrollo web continúa evolucionando con tecnologías innovadoras...",
      date: "2026-01-15",
      readTime: "5 min read",
      tags: ["Web Development", "AI", "Trends"],
      slug: "tendencias-2026"
    }
  ]
};