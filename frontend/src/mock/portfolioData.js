export const portfolioData = {
  personal: {
    name: "Alan Canto",
    title: "Full Stack Developer",
    location: "Montevideo, Uruguay",
    email: "alan.canto@example.com",
    github: "https://github.com/ajoca",
    bio: "Analista Programador specializing in innovative digital solutions for web, mobile, and desktop applications. Always exploring new technologies and improving skills.",
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
      title: "Game Shop",
      description: "Online video game store with complete cart functionality and admin panel. Features user authentication, product catalog, and order management.",
      technologies: ["JavaScript", "HTML", "CSS", "PHP", "MySQL"],
      github: "https://github.com/ajoca/Game-Shop",
      demo: "#",
      image: "https://images.unsplash.com/photo-1556438064-2d7646166914?w=500&h=300&fit=crop",
      category: "web",
      featured: true
    },
    {
      id: 2,
      title: "Pet Adoption Platform",
      description: "Full-stack pet adoption platform connecting pets with loving families. Includes user profiles, pet listings, and adoption process management.",
      technologies: ["Java", "Spring Boot", "MySQL", "React"],
      github: "https://github.com/ajoca/PetAdoption",
      demo: "#",
      image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=500&h=300&fit=crop",
      category: "web",
      featured: true
    },
    {
      id: 3,
      title: "Hotel Reservation System",
      description: "Comprehensive hotel booking management system with room availability, reservation handling, and customer management features.",
      technologies: ["Java", "MySQL", "JSP", "CSS"],
      github: "https://github.com/ajoca/DDA",
      demo: "#",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&h=300&fit=crop",
      category: "web",
      featured: true
    },
    {
      id: 4,
      title: "CTC Gym Mobile",
      description: "React Native mobile application for gym routines and fitness tracking. Features workout plans, progress tracking, and user profiles.",
      technologies: ["React Native", "JavaScript", "Firebase"],
      github: "https://github.com/ajoca/Gimnasioctc",
      demo: "#",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop",
      category: "mobile",
      featured: false
    },
    {
      id: 5,
      title: "StudyIA",
      description: "AI-powered study assistant application built with C#. Helps students organize study materials and provides intelligent recommendations.",
      technologies: ["C#", ".NET", "SQLite", "AI/ML"],
      github: "https://github.com/ajoca/StudyIA",
      demo: "#",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&h=300&fit=crop",
      category: "desktop",
      featured: false
    },
    {
      id: 6,
      title: "AppBooks",
      description: "Android book management application developed in Kotlin. Features book catalog, reading progress, and personal library management.",
      technologies: ["Kotlin", "Android", "SQLite", "Material Design"],
      github: "https://github.com/ajoca/AppBooks",
      demo: "#",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&h=300&fit=crop",
      category: "mobile",
      featured: false
    },
    {
      id: 7,
      title: "Family Tree Generator",
      description: "Interactive family tree application that allows users to create and visualize their genealogy with dynamic tree structures.",
      technologies: ["JavaScript", "HTML5", "CSS3", "SVG"],
      github: "https://github.com/ajoca/Arbol-Genealogico",
      demo: "#",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500&h=300&fit=crop",
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
  }
};