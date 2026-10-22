import React from "react";
import { Mail, ArrowUp, Heart } from "lucide-react";
import GithubIcon from "./GithubIcon";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer-wrapper">
      <div className="container footer-container">
        <div className="footer-top-row">
          <div className="footer-brand-block">
            <a href="#home" className="footer-brand">
              <span className="brand-code">&lt;</span>
              <span className="brand-name">Karthik HM</span>
              <span className="brand-code">/&gt;</span>
            </a>
            <p className="footer-bio">
              CSE – Artificial Intelligence &amp; Machine Learning Student | Full-Stack Developer
            </p>
          </div>

          <div className="footer-links-group">
            <a
              href="https://github.com/karthikhm171205-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link-item"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={18} />
              <span>GitHub</span>
            </a>
            <a
              href="mailto:karthikhm171205@gmail.com"
              className="footer-link-item"
              aria-label="Send Email"
            >
              <Mail size={18} />
              <span>Email</span>
            </a>
            <button
              onClick={scrollToTop}
              className="footer-link-item back-to-top-btn"
              aria-label="Scroll to top"
            >
              <ArrowUp size={18} />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom-row">
          <p className="footer-copyright">
            &copy; 2026 Karthik H M. All rights reserved.
          </p>
          <p className="footer-tech-note">
            Built with React &amp; Vite
          </p>
        </div>
      </div>
    </footer>
  );
}
