import { FaCss3Alt, FaGitAlt, FaJava, FaNodeJs, FaReact } from "react-icons/fa";
import { GrGraphQl } from "react-icons/gr";
import { SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";
import experiences from "../../data/experiences";
import ExperienceItem from "./ExperienceItem";
import SkillCard from "./SkillCard";

const skills = [
  { name: "React", icon: <FaReact /> },
  { name: "CSS3", icon: <FaCss3Alt /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Java", icon: <FaJava /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "GraphQL", icon: <GrGraphQl /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "Express", icon: <SiExpress /> },
];

const SkillExperienceSection = () => (
  <section className="skills-section section" aria-labelledby="skills-title">
    <div className="container">
      <div className="section-heading">
        <p className="eyebrow">The toolkit</p>
        <h2 className="section-title" id="skills-title">
          Learning by building.
        </h2>
        <p className="section-description">
          Tools I use to turn ideas into working products, backed by hands-on
          project and internship experience.
        </p>
      </div>

      <div className="skills-layout">
        <div>
          <h3 className="column-title">Technologies</h3>
          <div className="skill-grid">
            {skills.map(({ name, icon }) => (
              <SkillCard key={name} name={name} icon={icon} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="column-title">Experience</h3>
          <div className="experience-list">
            {experiences.map((experience) => (
              <ExperienceItem key={`${experience.title}-${experience.years}`} {...experience} />
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SkillExperienceSection;
