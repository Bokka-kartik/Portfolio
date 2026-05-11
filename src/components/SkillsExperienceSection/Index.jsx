import React from "react";
import experiences from "../../data/experiences";
import ExperienceItem from "./ExperienceItem";
import { FaReact, FaCss3Alt, FaNodeJs, FaJava, FaGitAlt } from "react-icons/fa";
import { GrGraphQl } from "react-icons/gr";
import { SiMongodb, SiTailwindcss, SiExpress } from "react-icons/si";
import SkillCard from "./SkillCard";

const skills = [
  { name: "React", icon: <FaReact className="text-blue-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-gree-600" /> },
  { name: "Java", icon: <FaJava className="text-orange-500" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
  { name: "GraphQL", icon: <GrGraphQl className="text-pink-600" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-700" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-500" /> },
  { name: "Express", icon: <SiExpress className="text-black-600" /> },
];
const SkillExperienceSection = () => {
  return (
    <section className="min-h-screen py-20">
      <h2 className="text-3xl font-semibold text-center">
        Skills & Experience
      </h2>
      <h3 className="text-4xl font-bold text-center mb-16 text-blue-600 dark:text-blue-400">
        What I Do & Where I've Been
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <div>
          <h4 className="text-2xl font-semibold mb-4">Skills</h4>
          <div className="grid grid-cols-3 gap-6">
            {skills.map((skill, idx) => (
              <SkillCard name={skill.name} key={idx} icon={skill.icon} />
            ))}
          </div>
        </div>
        <div className="border-l-4 border-blue-600 dark:border-blue-400 pl-6 space-y-8">
          <h4 className="text-2xl font-semibold mb-4">Experience</h4>
          {experiences.map((exp,idx)=>(
            // <div key={idx}>{exp.title}</div>
            <ExperienceItem key={idx} title={exp.title} company={exp.company} years={exp.years} description={exp.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillExperienceSection;
