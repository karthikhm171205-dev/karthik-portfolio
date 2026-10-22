import React from "react";
import { GraduationCap, Award, MapPin, Calendar, BookOpen, CheckCircle } from "lucide-react";
import { educationData } from "../data/education";

export default function Education() {
  return (
    <section id="education" className="section education-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <GraduationCap size={14} />
            <span>Academic Background</span>
          </div>
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">
            Strong foundation in Computer Science, Artificial Intelligence, Mathematics, and Analytical problem solving.
          </p>
        </div>

        <div className="education-grid">
          {educationData.map((item, idx) => (
            <div key={idx} className="education-card glass-card">
              {/* Card top banner with academic badge */}
              <div className="education-card-header">
                <div className="education-badge-group">
                  <div className="edu-icon-circle">
                    {idx === 0 ? <GraduationCap size={24} /> : <BookOpen size={24} />}
                  </div>
                  <div>
                    <span className="edu-status-tag badge badge-academic">
                      <Calendar size={12} />
                      <span>{item.status}</span>
                    </span>
                  </div>
                </div>

                <div className="edu-grade-badge">
                  <Award size={16} className="grade-icon" />
                  <div className="grade-content">
                    <span className="grade-label">{item.gradeLabel}</span>
                    <span className="grade-value">{item.gradeValue}</span>
                  </div>
                </div>
              </div>

              {/* Degree Title & Field */}
              <h3 className="education-degree">{item.degree}</h3>
              <p className="education-field">{item.field}</p>

              {/* Institution & Location */}
              <div className="education-institution-row">
                <span className="institution-name">{item.institution}</span>
                <span className="institution-location">
                  <MapPin size={14} />
                  <span>{item.location}</span>
                </span>
              </div>

              {/* Description */}
              <p className="education-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
