import React from "react";
import { User, MapPin, GraduationCap, Code2, Target, CheckCircle2 } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Academic Background",
      detail: "3rd Year B.E. in CSE (AI & ML) at AJ Institute of Engineering and Technology (7.52 CGPA).",
    },
    {
      icon: Code2,
      title: "Technical Stack",
      detail: "React.js, Node.js, Express.js, MongoDB, REST APIs, and JWT authentication.",
    },
    {
      icon: MapPin,
      title: "Location",
      detail: "Karnataka, India. Open to in-person and remote developer internship roles.",
    },
    {
      icon: Target,
      title: "Career Objective",
      detail: "Seeking software development, full-stack, backend, or AI/ML internships to build impactful solutions.",
    },
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <User size={14} />
            <span>Profile Overview</span>
          </div>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Dedicated Computer Science student combining modern full-stack web engineering with Artificial Intelligence and Machine Learning fundamentals.
          </p>
        </div>

        <div className="about-grid">
          {/* Main narrative card */}
          <div className="about-main-card glass-card">
            <div className="about-bio-text">
              <p className="bio-lead">
                Karthik H M is a third-year Computer Science Engineering student specializing in Artificial Intelligence and Machine Learning. He has hands-on experience in full-stack web development and works with React.js, Node.js, Express.js, MongoDB, REST APIs, and JWT authentication.
              </p>
              <p className="bio-body">
                He is interested in software development, full-stack development, backend development, Artificial Intelligence, Machine Learning, and web application development. He focuses on building robust systems with clean architecture, protected API routing, and intuitive user experiences.
              </p>
            </div>

            <div className="about-focus-tags">
              <span className="focus-pill">
                <CheckCircle2 size={14} className="text-accent" />
                <span>Full-Stack Architecture</span>
              </span>
              <span className="focus-pill">
                <CheckCircle2 size={14} className="text-accent" />
                <span>REST API Engineering</span>
              </span>
              <span className="focus-pill">
                <CheckCircle2 size={14} className="text-accent" />
                <span>Database Design &amp; JWT Security</span>
              </span>
              <span className="focus-pill">
                <CheckCircle2 size={14} className="text-accent" />
                <span>AI &amp; Machine Learning Principles</span>
              </span>
            </div>
          </div>

          {/* Highlights grid */}
          <div className="about-highlights-grid">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="highlight-card glass-card">
                  <div className="highlight-icon-box">
                    <Icon size={20} className="highlight-icon" />
                  </div>
                  <div>
                    <h3 className="highlight-title">{item.title}</h3>
                    <p className="highlight-detail">{item.detail}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
