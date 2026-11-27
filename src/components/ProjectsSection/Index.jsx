import { useState } from "react";
import projects from "../../data/projects";
import ProjectCard from "./ProjectCard";

const projectTypes = ["All", ...new Set(projects.map((project) => project.type))];

const ProjectSection = () => {
  const [selectedType, setSelectedType] = useState("All");
  const filteredProjects =
    selectedType === "All"
      ? projects
      : projects.filter((project) => project.type === selectedType);

  return (
    <section
      className="project-section section"
      aria-labelledby="projects-title"
    >
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Selected work</p>
          <h2 className="section-title" id="projects-title">
            Built to solve.
          </h2>
          <p className="section-description">
            A collection of projects across web development, backend systems,
            and machine learning.
          </p>
        </div>

        <div className="project-toolbar">
          <div className="project-filters" aria-label="Filter projects">
            {projectTypes.map((type) => (
              <button
                key={type}
                className="filter-button"
                type="button"
                onClick={() => setSelectedType(type)}
                aria-pressed={selectedType === type}
              >
                {type}
              </button>
            ))}
          </div>
          <span className="project-count" aria-live="polite">
            {String(filteredProjects.length).padStart(2, "0")} projects
          </span>
        </div>

        <div className="project-grid">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
