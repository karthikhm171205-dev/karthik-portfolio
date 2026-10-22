import React from "react";
import {
  Code2,
  Layout,
  Server,
  Database,
  ShieldCheck,
  Wrench,
  Cpu,
  Layers
} from "lucide-react";
import { skillCategories } from "../data/skills";

export default function Skills() {
  const iconMap = {
    Code2: Code2,
    Layout: Layout,
    Server: Server,
    Database: Database,
    ShieldCheck: ShieldCheck,
    Wrench: Wrench,
  };

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Cpu size={14} />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            Core technologies, programming languages, and developer tools applied in building responsive full-stack applications.
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, idx) => {
            const IconComponent = iconMap[category.icon] || Layers;
            return (
              <div key={idx} className="skill-category-card glass-card">
                <div className="skill-card-top">
                  <div className="skill-icon-wrapper">
                    <IconComponent size={22} className="skill-cat-icon" />
                  </div>
                  <h3 className="skill-category-title">{category.title}</h3>
                </div>

                <p className="skill-category-desc">{category.description}</p>

                <div className="skill-pill-list">
                  {category.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="tech-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
