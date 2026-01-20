import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// the translations
// (tip: move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "Full Stack Developer": "Full Stack Developer",
      "Montevideo, Uruguay": "Montevideo, Uruguay",
      "Developer specializing in innovative digital solutions for web, mobile, and desktop applications. Always exploring new technologies and improving skills.": "Developer specializing in innovative digital solutions for web, mobile, and desktop applications. Always exploring new technologies and improving skills.",
      "Projects": "Projects",
      "Skills": "Skills",
      "Experience": "Experience",
      "Contact": "Contact",
      "Blog": "Blog",
      "Home": "Home",
      "View My Work": "View My Work",
      "GitHub Profile": "GitHub Profile",
      "View on GitHub": "View on GitHub",
      "Live Demo": "Live Demo",
      "All": "All",
      "Web": "Web",
      "Mobile": "Mobile",
      "Send Message": "Send Message",
      "Name": "Name",
      "Email": "Email",
      "Message": "Message",
      "Submit": "Submit",
      "Thank you for your message!": "Thank you for your message!",
      "Open to remote work and collaborations worldwide": "Open to remote work and collaborations worldwide"
    }
  },
  es: {
    translation: {
      "Full Stack Developer": "Desarrollador Full Stack",
      "Montevideo, Uruguay": "Montevideo, Uruguay",
      "Developer specializing in innovative digital solutions for web, mobile, and desktop applications. Always exploring new technologies and improving skills.": "Desarrollador especializado en soluciones digitales innovadoras para aplicaciones web, móviles y de escritorio. Siempre explorando nuevas tecnologías y mejorando habilidades.",
      "Projects": "Proyectos",
      "Skills": "Habilidades",
      "Experience": "Experiencia",
      "Contact": "Contacto",
      "Blog": "Blog",
      "Home": "Inicio",
      "View My Work": "Ver Mi Trabajo",
      "GitHub Profile": "Perfil de GitHub",
      "View on GitHub": "Ver en GitHub",
      "Live Demo": "Demo en Vivo",
      "All": "Todos",
      "Web": "Web",
      "Mobile": "Móvil",
      "Send Message": "Enviar Mensaje",
      "Name": "Nombre",
      "Email": "Correo",
      "Message": "Mensaje",
      "Submit": "Enviar",
      "Thank you for your message!": "¡Gracias por tu mensaje!",
      "Open to remote work and collaborations worldwide": "Abierto a trabajo remoto y colaboraciones en todo el mundo"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // language to use, more info here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already does escaping
    }
  });

export default i18n;