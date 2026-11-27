import ThemeProvider from "./contexts/ThemeProvider";
import Navbar from "./components/Navbar/Index";
import Hero from "./components/Hero/Index";
import ProjectSection from "./components/ProjectsSection/Index";
import SkillExperienceSection from "./components/SkillsExperienceSection/Index";
import ContactSection from "./components/ContactSection/Index";
import Footer from "./components/Footer/Index";
import CursorGlow from "./components/CursorGlow";
import "./App.css";

const App = () => (
  <ThemeProvider>
    <div className="site-shell">
      <CursorGlow />
      <Navbar />
      <main>
        <div id="hero">
          <Hero />
        </div>
        <div id="projects">
          <ProjectSection />
        </div>
        <div id="skills">
          <SkillExperienceSection />
        </div>
        <div id="contact">
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  </ThemeProvider>
);

export default App;
