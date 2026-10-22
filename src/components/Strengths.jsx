import React from "react";
import {
  Zap,
  Brain,
  Layers,
  Cpu,
  Users,
  Sparkles,
  ShieldAlert
} from "lucide-react";
import { coreStrengths } from "../data/strengths";

export default function Strengths() {
  const iconMap = {
    Brain: Brain,
    Zap: Zap,
    Layers: Layers,
    Cpu: Cpu,
    Users: Users,
    Sparkles: Sparkles,
  };

  return (
    <section id="strengths" className="section strengths-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Zap size={14} />
            <span>Attributes &amp; Work Ethic</span>
          </div>
          <h2 className="section-title">Core Strengths</h2>
          <p className="section-subtitle">
            Key professional traits and engineering mindset brought to collaborative development teams.
          </p>
        </div>

        <div className="strengths-grid">
          {coreStrengths.map((item, idx) => {
            const Icon = iconMap[item.icon] || Sparkles;
            return (
              <div key={idx} className="strength-card glass-card">
                <div className="strength-icon-box">
                  <Icon size={22} className="strength-icon" />
                </div>
                <h3 className="strength-title">{item.title}</h3>
                <p className="strength-desc">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
