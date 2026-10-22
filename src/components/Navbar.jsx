import React, { useState, useEffect } from "react";
import { Menu, X, FileText, ChevronRight } from "lucide-react";
import GithubIcon from "./GithubIcon";

export default function Navbar({ onOpenResume }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Education", href: "#education" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active link detection
      const sections = ["home", "about", "education", "skills", "projects", "contact"];
      const scrollPos = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`navbar-header ${isScrolled ? "navbar-scrolled" : ""}`}>
      <div className="container navbar-container">
        {/* Brand / Logo */}
        <a href="#home" className="navbar-brand" aria-label="Karthik H M Home">
          <span className="brand-code">&lt;</span>
          <span className="brand-name">Karthik HM</span>
          <span className="brand-code">/&gt;</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="navbar-nav desktop-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.href} className="nav-item">
                <a
                  href={link.href}
                  className={`nav-link ${activeSection === link.href.substring(1) ? "active" : ""}`}
                  onClick={(e) => handleLinkClick(e, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop CTA actions */}
        <div className="navbar-actions desktop-actions">
          <a
            href="https://github.com/karthikhm171205-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-icon-link"
            aria-label="Karthik HM GitHub Profile"
          >
            <GithubIcon size={20} />
          </a>

          <button
            onClick={onOpenResume}
            className="btn btn-outline btn-sm navbar-resume-btn"
            aria-label="View Resume"
          >
            <FileText size={15} />
            <span>Resume</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="mobile-toggle-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? "open" : ""}`}>
        <div className="mobile-nav-inner">
          <ul className="mobile-nav-list">
            {navLinks.map((link) => (
              <li key={link.href} className="mobile-nav-item">
                <a
                  href={link.href}
                  className={`mobile-nav-link ${activeSection === link.href.substring(1) ? "active" : ""}`}
                  onClick={(e) => handleLinkClick(e, link.href)}
                >
                  <span>{link.label}</span>
                  <ChevronRight size={18} className="mobile-chevron" />
                </a>
              </li>
            ))}
          </ul>

          <div className="mobile-actions-group">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="btn btn-primary"
              style={{ width: "100%" }}
            >
              <FileText size={16} />
              <span>View &amp; Download Resume</span>
            </button>

            <a
              href="https://github.com/karthikhm171205-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{ width: "100%" }}
            >
              <GithubIcon size={16} />
              <span>GitHub Profile</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
