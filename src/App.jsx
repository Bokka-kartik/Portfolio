import React from "react";
import ThemeProvider from "./contexts/ThemeProvider";
import Navbar from "./components/Navbar/Index";
import ScrollDots from "./components/ScrollDots/Index";
import Hero from "./components/Hero/Index";
import ProjectSection from "./components/ProjectsSection/Index";
import SkillExperienceSection from "./components/SkillsExperienceSection/Index";
import RecommendationSection from "./components/RecommendationSection/Index";
import ContactSection from "./components/ContactSection/Index";
import Footer from "./components/Footer/Index";
import "./App.css"

const App = () => {
  return (
    <ThemeProvider>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Navbar />
        <ScrollDots />
        <div id="hero">
          <Hero />
        </div>
        <div id="projects">
          <ProjectSection />
        </div>
        <div id="skills">
          <SkillExperienceSection />
        </div>
        <div id="recommendations">
          <RecommendationSection />
        </div>
        <div id="contact">
          <ContactSection />
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
