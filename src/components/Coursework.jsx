import React from "react";
import { BookOpen, GraduationCap, CheckCircle } from "lucide-react";
import { relevantCoursework } from "../data/coursework";

export default function Coursework() {
  return (
    <section id="coursework" className="section coursework-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <BookOpen size={14} />
            <span>Academic Curriculum</span>
          </div>
          <h2 className="section-title">Relevant Coursework</h2>
          <p className="section-subtitle">
            Core computer science subjects and specialized Artificial Intelligence &amp; Machine Learning topics completed.
          </p>
        </div>

        <div className="coursework-grid">
          {relevantCoursework.map((course, idx) => (
            <div key={idx} className="coursework-chip glass-card">
              <div className="coursework-indicator">
                <span className="course-code-badge">{course.code}</span>
              </div>
              <div className="coursework-content">
                <span className="course-name">{course.name}</span>
                <span className="course-category">{course.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
