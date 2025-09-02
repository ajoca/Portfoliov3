export type ProjectCategory = "web" | "mobile" | "desktop";

export type Project = {
  id: string;
  title: string;
  description: string;
  github: string;
  demo: string;      // "#" si no hay demo
  image: string;     // OG image de GitHub o ruta local
  language?: string;
  category: ProjectCategory;
  featured?: boolean;
  technologies?: string[];
};

const og = (repo: string) => `https://opengraph.githubassets.com/1/ajoca/${repo}`;

export const projects: Project[] = [
  {
    id: "RecypeIA",
    title: "RecypeIA",
    description: "App de recetas asistida por IA.",
    github: "https://github.com/ajoca/RecypeIA",
    demo: "https://recype-ia.vercel.app/",
    image: og("RecypeIA"),
    language: "JavaScript",
    category: "web",
    technologies: ["React", "Tailwind", "Node"]
  },
  {
    id: "Barberiav2",
    title: "Barberiav2",
    description: "Barbería en Next.js (App Router) con UI moderna.",
    github: "https://github.com/ajoca/Barberiav2",
    demo: "https://barberiav2.vercel.app",
    image: og("Barberiav2"),
    language: "TypeScript",
    category: "web",
    technologies: ["Next.js", "Tailwind", "shadcn/ui"]
  },
  {
    id: "Portfoliov3",
    title: "Portfoliov3",
    description: "Portfolio con frontend + backend y deployment en Vercel.",
    github: "https://github.com/ajoca/Portfoliov3",
    demo: "https://portfoliov3-orpin-three.vercel.app",
    image: og("Portfoliov3"),
    language: "JavaScript",
    category: "web",
    technologies: ["React", "Node"]
  },
  {
    id: "ajoca",
    title: "ajoca",
    description: "Repo de perfil/config de GitHub.",
    github: "https://github.com/ajoca/ajoca",
    demo: "#",
    image: og("ajoca"),
    category: "web",
    technologies: ["Markdown"]
  },
  {
    id: "Portfoliov2",
    title: "Portfoliov2",
    description: "Portfolio moderno con Next.js, MDX y animaciones.",
    github: "https://github.com/ajoca/Portfoliov2",
    demo: "#",
    image: og("Portfoliov2"),
    language: "TypeScript",
    category: "web",
    technologies: ["Next.js", "Tailwind", "Framer Motion", "MDX"]
  },
  {
    id: "Barberia",
    title: "Barberia",
    description: "Proyecto de barbería (frontend + backend).",
    github: "https://github.com/ajoca/Barberia",
    demo: "#",
    image: og("Barberia"),
    language: "TypeScript",
    category: "web",
    technologies: ["Next.js", "API"]
  },
  {
    id: "SearchProductIA",
    title: "SearchProductIA",
    description: "Buscador de productos con IA (Node/Express + Sequelize + MySQL).",
    github: "https://github.com/ajoca/SearchProductIA",
    demo: "#",
    image: og("SearchProductIA"),
    language: "JavaScript",
    category: "web",
    technologies: ["Node", "Express", "Sequelize", "MySQL"]
  },
  {
    id: "StudyIA",
    title: "StudyIA",
    description: "API que transforma PDFs en material de estudio (resúmenes, planes, quizzes).",
    github: "https://github.com/ajoca/StudyIA",
    demo: "#",
    image: og("StudyIA"),
    language: "C#",
    category: "web",
    technologies: [".NET 8", "EF Core", "Swagger", "SQL Server"]
  },
  {
    id: "AppBooks",
    title: "AppBooks",
    description: "App Android de libros con Jetpack Compose y Firebase.",
    github: "https://github.com/ajoca/AppBooks",
    demo: "#",
    image: og("AppBooks"),
    language: "Kotlin",
    category: "mobile",
    technologies: ["Compose", "Hilt", "Firebase", "Cloudinary"]
  },
  {
    id: "Pr_Hossana",
    title: "Pr_Hossana",
    description: "E-commerce educativo en PHP + MySQL con panel y PDFs.",
    github: "https://github.com/ajoca/Pr_Hossana",
    demo: "#",
    image: og("Pr_Hossana"),
    language: "PHP",
    category: "web",
    technologies: ["PHP", "MySQL", "Bootstrap", "FPDF"]
  },
  {
    id: "PetAdoption",
    title: "PetAdoption",
    description: "Plataforma de adopción con microservicios en Java/Spring.",
    github: "https://github.com/ajoca/PetAdoption",
    demo: "#",
    image: og("PetAdoption"),
    language: "Java",
    category: "web",
    technologies: ["Spring Boot", "Eureka", "JWT", "PostgreSQL", "MinIO"]
  },
  {
    id: "Prueba-Backend-Frontend",
    title: "Prueba Backend/Frontend",
    description: "Gestor de tareas Fullstack: Laravel API + React frontend.",
    github: "https://github.com/ajoca/Prueba-Backend-Frontend",
    demo: "#",
    image: og("Prueba-Backend-Frontend"),
    language: "Blade / PHP / JS",
    category: "web",
    technologies: ["Laravel", "MySQL", "React", "Bootstrap"]
  },
  {
    id: "Prueba",
    title: "Prueba (Expo)",
    description: "App móvil de tareas en React Native (Expo) consumiendo DummyJSON.",
    github: "https://github.com/ajoca/Prueba",
    demo: "#",
    image: og("Prueba"),
    language: "TypeScript",
    category: "mobile",
    technologies: ["Expo", "React Native"]
  },
  {
    id: "Crypto",
    title: "Crypto",
    description: "Repositorio vacío por ahora.",
    github: "https://github.com/ajoca/Crypto",
    demo: "#",
    image: og("Crypto"),
    category: "web"
  },
  {
    id: "Portfolio",
    title: "Portfolio",
    description: "Portfolio anterior en React/Tailwind.",
    github: "https://github.com/ajoca/Portfolio",
    demo: "#",
    image: og("Portfolio"),
    language: "JavaScript",
    category: "web",
    technologies: ["React", "Tailwind"]
  },
  {
    id: "Game-Shop",
    title: "Game Shop",
    description: "Tienda de videojuegos: catálogo, carrito, admin y auth.",
    github: "https://github.com/ajoca/Game-Shop",
    demo: "#",
    image: og("Game-Shop"),
    language: "JS / Java",
    category: "web",
    technologies: ["React", "Spring Boot", "MySQL", "Tailwind"]
  },
  {
    id: "Arbol-Genealogico",
    title: "Árbol Genealógico",
    description: "App para construir y visualizar tu árbol genealógico.",
    github: "https://github.com/ajoca/Arbol-Genealogico",
    demo: "#",
    image: og("Arbol-Genealogico"),
    language: "JavaScript",
    category: "web",
    technologies: ["React"]
  },
  {
    id: "Gimnasioctc",
    title: "Gimnasio CTC",
    description: "App móvil (Expo) para gestión de gimnasio (socios, rutinas, etc.).",
    github: "https://github.com/ajoca/Gimnasioctc",
    demo: "#",
    image: og("Gimnasioctc"),
    language: "JavaScript",
    category: "mobile",
    technologies: ["Expo", "React Native"]
  },
  {
    id: "Tienda_Online_React_SpringBoot",
    title: "Tienda Online (fork)",
    description: "Fork de tienda React + Spring Boot.",
    github: "https://github.com/ajoca/Tienda_Online_React_SpringBoot",
    demo: "#",
    image: og("Tienda_Online_React_SpringBoot"),
    language: "Java",
    category: "web",
    technologies: ["React", "Spring Boot"]
  },
  {
    id: "DDA",
    title: "DDA",
    description: "OB DDA en Java (educativo).",
    github: "https://github.com/ajoca/DDA",
    demo: "#",
    image: og("DDA"),
    language: "Java",
    category: "web"
  },
  {
    id: "Codigos-html-con-css-interactivos-",
    title: "Códigos HTML + CSS interactivos",
    description: "Colección de mini-experimentos HTML interactivos.",
    github: "https://github.com/ajoca/Codigos-html-con-css-interactivos-",
    demo: "#",
    image: og("Codigos-html-con-css-interactivos-"),
    language: "HTML",
    category: "web"
  },
];
