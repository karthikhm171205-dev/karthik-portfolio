import React, { useState } from "react";
import {
  Mail,
  MapPin,
  ArrowRight,
  Copy,
  Check,
  Send,
  MessageSquare,
  Sparkles
} from "lucide-react";
import GithubIcon from "./GithubIcon";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "karthikhm171205@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="contact-card glass-card">
          <div className="contact-badge-wrapper">
            <span className="section-badge">
              <MessageSquare size={14} />
              <span>Get In Touch</span>
            </span>
          </div>

          <h2 className="contact-heading">Let's Build Something Together</h2>
          <p className="contact-subtitle">
            I'm currently interested in software development, full-stack, backend, and AI/ML internship opportunities. Feel free to reach out directly via email or explore my repositories on GitHub.
          </p>

          <div className="contact-grid">
            {/* Direct Email Card */}
            <div className="contact-channel-card glass-card">
              <div className="channel-icon-box">
                <Mail size={22} className="text-accent" />
              </div>
              <div className="channel-info">
                <span className="channel-label">Email Address</span>
                <a
                  href={`mailto:${email}`}
                  className="channel-value email-link"
                >
                  {email}
                </a>
              </div>
              <div className="channel-actions">
                <a
                  href={`mailto:${email}`}
                  className="btn btn-primary btn-sm channel-btn"
                >
                  <span>Send Me an Email</span>
                  <ArrowRight size={14} />
                </a>
                <button
                  onClick={handleCopy}
                  className="btn btn-secondary btn-sm channel-copy-btn"
                  aria-label="Copy email address"
                  title="Copy email"
                >
                  {copied ? (
                    <>
                      <Check size={14} className="text-emerald" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* GitHub Profile Card */}
            <div className="contact-channel-card glass-card">
              <div className="channel-icon-box">
                <GithubIcon size={22} className="text-cyan" />
              </div>
              <div className="channel-info">
                <span className="channel-label">GitHub Profile</span>
                <a
                  href="https://github.com/karthikhm171205-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="channel-value"
                >
                  github.com/karthikhm171205-dev
                </a>
              </div>
              <div className="channel-actions">
                <a
                  href="https://github.com/karthikhm171205-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-sm channel-btn"
                >
                  <span>Explore GitHub</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="contact-channel-card glass-card">
              <div className="channel-icon-box">
                <MapPin size={22} className="text-accent" />
              </div>
              <div className="channel-info">
                <span className="channel-label">Current Location</span>
                <span className="channel-value text-plain">Karnataka, India</span>
              </div>
              <div className="channel-status-pill">
                <span className="status-dot"></span>
                <span>Open for Relocation / Remote</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
