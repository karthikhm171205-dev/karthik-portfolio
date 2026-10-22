import React, { useState } from "react";
import { FolderGit2, Sparkles, Filter } from "lucide-react";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const filteredProjects = projects.filter((project) => {
    if (filter === "live") return project.status === "Live";
    if (filter === "fullstack") return project.type === "Full Stack";
    return true;
  });

  const fullStackCount = projects.filter((p) => p.type === "Full Stack").length;
  const liveCount = projects.filter((p) => p.status === "Live").length;

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <FolderGit2 size={14} />
            <span>Project Portfolio</span>
          </div>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Hands-on full-stack applications implementing React, Node.js, Express, MongoDB, REST APIs, and JWT authentication.
          </p>

          {/* Filter buttons */}
          <div className="project-filter-bar">
            <button
              onClick={() => setFilter("all")}
              className={`filter-btn ${filter === "all" ? "active" : ""}`}
            >
              All Projects ({projects.length})
            </button>
            <button
              onClick={() => setFilter("fullstack")}
              className={`filter-btn ${filter === "fullstack" ? "active" : ""}`}
            >
              Full Stack ({fullStackCount})
            </button>
            <button
              onClick={() => setFilter("live")}
              className={`filter-btn ${filter === "live" ? "active" : ""}`}
            >
              Live Deployed ({liveCount})
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
