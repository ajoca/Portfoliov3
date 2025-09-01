import React from "react";
import "./App.css";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/toaster";
import { portfolioData } from "./mock/portfolioData";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero data={portfolioData.personal} />
      <Projects projects={portfolioData.projects} />
      <Skills skills={portfolioData.skills} />
      <Experience experience={portfolioData.experience} />
      <Contact contact={portfolioData.contact} />
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;