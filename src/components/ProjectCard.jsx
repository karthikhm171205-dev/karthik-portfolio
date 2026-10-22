import React from "react";
import {
  ExternalLink,
  CheckCircle,
  Clock,
  Layers,
  Sparkles,
  ArrowUpRight,
  FolderKanban
} from "lucide-react";
import GithubIcon from "./GithubIcon";

export default function ProjectCard({ project }) {
  const isLive = project.status === "Live" && project.liveUrl;
  const isDev = project.status === "In Development";

  return (
    <article className="project-card glass-card">
      {/* Card Header: Type Badge & Status Indicator */}
      <div className="project-card-header">
        <div className="project-type-tag">
          <Layers size={13} />
          <span>{project.type}</span>
        </div>

        <div className="project-status-indicator">
          {isDev ? (
            <span className="badge badge-dev">
              <Clock size={12} />
              <span>In Development</span>
            </span>
          ) : isLive ? (
            <span className="badge badge-live">
              <span className="status-dot"></span>
              <span>Live Deployed</span>
            </span>
          ) : (
            <span className="badge badge-academic">
              <CheckCircle size={12} />
              <span>{project.status}</span>
            </span>
          )}
        </div>
      </div>

      {/* Project Title */}
      <h3 className="project-title">{project.title}</h3>

      {/* Description */}
      <p className="project-description">{project.description}</p>

      {/* Tech Stack Chips */}
      <div className="project-tech-stack">
        {project.technologies.map((tech, idx) => (
          <span key={idx} className="tech-tag">
            {tech}
          </span>
        ))}
      </div>

      {/* Key Features List */}
      <div className="project-features-block">
        <h4 className="features-heading">Key Highlights &amp; Features</h4>
        <ul className="features-list">
          {project.features.map((feature, fIdx) => (
            <li key={fIdx} className="feature-item">
              <CheckCircle size={14} className="feature-icon" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Card Actions */}
      <div className="project-actions">
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm project-btn"
            aria-label={`Live Demo for ${project.title}`}
          >
            <span>Live Demo</span>
            <ArrowUpRight size={15} />
          </a>
        ) : (
          <div className="project-inactive-note">
            {isDev ? (
              <span className="in-dev-label">
                <Clock size={13} /> Architecture &amp; APIs under active development
              </span>
            ) : project.status === "Live" ? (
              <span className="in-dev-label text-emerald">
                <CheckCircle size={13} /> Application Deployed &amp; Live
              </span>
            ) : (
              <span className="in-dev-label">
                <FolderKanban size={13} /> Academic Project Specification
              </span>
            )}
          </div>
        )}

        <a
          href={project.githubUrl || "https://github.com/karthikhm171205-dev"}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-secondary btn-sm project-btn"
          aria-label={project.githubUrl ? `View ${project.title} repository on GitHub` : "View Karthik's GitHub"}
        >
          <GithubIcon size={15} />
          <span>GitHub</span>
        </a>
      </div>
    </article>
  );
}
