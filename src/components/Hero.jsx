import React from "react";
import {
  ArrowRight,
  Mail,
  Download,
  FileText,
  GraduationCap,
  Award,
  FolderGit2,
  Code2,
  Terminal,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import GithubIcon from "./GithubIcon";

export default function Hero({ onOpenResume }) {
  const stats = [
    {
      label: "Academic Standing",
      value: "3rd Year",
      subtext: "AIML Student",
      icon: GraduationCap,
    },
    {
      label: "Academic Record",
      value: "7.52",
      subtext: "CGPA / 10",
      icon: Award,
    },
    {
      label: "Portfolio Work",
      value: "4+",
      subtext: "Projects",
      icon: FolderGit2,
    },
    {
      label: "Core Specialization",
      value: "Full Stack",
      subtext: "& AI/ML Focus",
      icon: Code2,
    },
  ];

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Hero Content */}
          <div className="hero-content">
            {/* Status Pill */}
            <div className="hero-status-pill">
              <span className="status-dot"></span>
              <span>Available for Software Dev &amp; AI/ML Internships</span>
            </div>

            <h1 className="hero-title">
              Hi, I'm <span className="hero-gradient-text">Karthik H M</span>
            </h1>

            <p className="hero-tagline">
              CSE – Artificial Intelligence &amp; Machine Learning Student
              <span className="hero-tagline-divider">|</span>
              <span className="hero-tagline-highlight">Full-Stack Developer</span>
            </p>

            <p className="hero-description">
              I build responsive web applications and full-stack systems using modern frontend, backend, database and authentication technologies.
            </p>

            {/* Action Buttons */}
            <div className="hero-cta-group">
              <a href="#projects" className="btn btn-primary hero-btn">
                <span>View My Projects</span>
                <ArrowRight size={18} />
              </a>

              <a href="#contact" className="btn btn-secondary hero-btn">
                <Mail size={18} />
                <span>Contact Me</span>
              </a>

              <a
                href="https://github.com/karthikhm171205-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline hero-btn"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={18} />
                <span>GitHub</span>
              </a>

              <button
                onClick={onOpenResume}
                className="btn btn-outline hero-btn"
                aria-label="View Resume"
              >
                <FileText size={18} />
                <span>View Resume</span>
              </button>

              <a
                href="/resume.pdf"
                download="Karthik_HM_Resume.pdf"
                className="btn btn-outline hero-btn"
                aria-label="Download Resume"
              >
                <Download size={18} />
                <span>Download Resume</span>
              </a>
            </div>
          </div>

          {/* Right Column: AI / Developer Visual Terminal */}
          <div className="hero-visual-wrapper">
            <div className="hero-terminal-card glass-card">
              {/* Terminal Window Header */}
              <div className="terminal-header">
                <div className="terminal-dots">
                  <span className="dot dot-red"></span>
                  <span className="dot dot-yellow"></span>
                  <span className="dot dot-green"></span>
                </div>
                <div className="terminal-title">
                  <Terminal size={14} className="terminal-icon" />
                  <span>karthik_developer.tsx</span>
                </div>
                <div className="terminal-meta">
                  <span className="terminal-badge">AIML &amp; Full-Stack</span>
                </div>
              </div>

              {/* Terminal Body */}
              <div className="terminal-body font-mono">
                <div className="code-line">
                  <span className="code-keyword">const</span>{" "}
                  <span className="code-variable">developer</span>:{" "}
                  <span className="code-type">DeveloperProfile</span> = &#123;
                </div>
                <div className="code-line indent-1">
                  <span className="code-prop">name</span>:{" "}
                  <span className="code-string">"Karthik H M"</span>,
                </div>
                <div className="code-line indent-1">
                  <span className="code-prop">role</span>:{" "}
                  <span className="code-string">"CSE (AI &amp; ML) &amp; Full-Stack"</span>,
                </div>
                <div className="code-line indent-1">
                  <span className="code-prop">institution</span>:{" "}
                  <span className="code-string">"AJIET, Karnataka"</span>,
                </div>
                <div className="code-line indent-1">
                  <span className="code-prop">cgpa</span>:{" "}
                  <span className="code-number">7.52</span>,
                </div>
                <div className="code-line indent-1">
                  <span className="code-prop">coreStack</span>: [
                </div>
                <div className="code-line indent-2">
                  <span className="code-string">"React.js"</span>,{" "}
                  <span className="code-string">"Node.js"</span>,{" "}
                  <span className="code-string">"MongoDB"</span>,
                </div>
                <div className="code-line indent-2">
                  <span className="code-string">"Express.js"</span>,{" "}
                  <span className="code-string">"Python"</span>,{" "}
                  <span className="code-string">"AI / ML"</span>
                </div>
                <div className="code-line indent-1">],</div>
                <div className="code-line indent-1">
                  <span className="code-prop">status</span>:{" "}
                  <span className="code-string text-emerald">"Ready for Internship"</span>
                </div>
                <div className="code-line">&#125;;</div>

                {/* Simulated Terminal Status Footer */}
                <div className="terminal-footer">
                  <div className="terminal-chip">
                    <span className="status-dot"></span>
                    <span>&lt; Full Stack Developer /&gt;</span>
                  </div>
                  <div className="terminal-chip">
                    <Sparkles size={12} className="text-cyan" />
                    <span>AI / Machine Learning</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Statistics Row */}
        <div className="hero-stats-row">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="stat-card glass-card">
                <div className="stat-icon-wrapper">
                  <Icon size={24} className="stat-icon" />
                </div>
                <div className="stat-info">
                  <span className="stat-value">{stat.value}</span>
                  <span className="stat-subtext">{stat.subtext}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
