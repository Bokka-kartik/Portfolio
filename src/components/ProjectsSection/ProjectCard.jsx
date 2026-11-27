import { ArrowUpRight } from "lucide-react";

const categoryColors = {
  "AI & ML": "#a388f5",
  "Developer Tools": "#58c4d2",
  "Full Stack": "#eb7f91",
  Learning: "#e5a84d",
};

const ProjectCard = ({ project, index }) => {
  const initials = project.title
    .split(/[\s_-]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  return (
    <article
      className="project-card"
      style={{ "--art-accent": categoryColors[project.type] ?? "#b6e65b" }}
    >
      <div className="project-art" aria-hidden="true">
        <span className="project-index">
          {String(index).padStart(2, "0")}
        </span>
        <span className="project-art-mark">{initials}</span>
      </div>
      <div className="project-content">
        <span className="project-category">{project.type}</span>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-links">
          <a href={project.repoUrl} target="_blank" rel="noreferrer">
            GitHub <ArrowUpRight size={14} aria-hidden="true" />
          </a>
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noreferrer">
              Live demo <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
