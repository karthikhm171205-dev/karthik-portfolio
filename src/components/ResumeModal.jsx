import React, { useEffect } from "react";
import { X, Download, ExternalLink, FileText } from "lucide-react";

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-label="Resume Preview">
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title-group">
            <div className="modal-icon">
              <FileText size={20} />
            </div>
            <div>
              <h3 className="modal-title">Karthik H M — Resume</h3>
              <p className="modal-subtitle">CSE (AIML) Student &amp; Full-Stack Developer</p>
            </div>
          </div>
          <div className="modal-actions">
            <a
              href="/resume.pdf"
              download="Karthik_HM_Resume.pdf"
              className="btn btn-primary btn-sm"
              aria-label="Download Resume PDF"
            >
              <Download size={15} />
              <span>Download PDF</span>
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
              aria-label="Open Resume in New Tab"
            >
              <ExternalLink size={15} />
              <span>New Tab</span>
            </a>
            <button
              onClick={onClose}
              className="modal-close-btn"
              aria-label="Close Resume Modal"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        <div className="modal-body">
          <iframe
            src="/resume.pdf#toolbar=0"
            title="Karthik HM Resume PDF"
            className="resume-iframe"
          />
        </div>
      </div>
    </div>
  );
}
