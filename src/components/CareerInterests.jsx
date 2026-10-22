import React from "react";
import {
  Compass,
  Layers,
  Server,
  Code,
  Bot,
  TrendingUp,
  Globe
} from "lucide-react";
import { careerInterests } from "../data/careerInterests";

export default function CareerInterests() {
  const iconMap = {
    Layers: Layers,
    Server: Server,
    Code: Code,
    Bot: Bot,
    TrendingUp: TrendingUp,
    Globe: Globe,
  };

  return (
    <section id="interests" className="section interests-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Compass size={14} />
            <span>Career Aspirations</span>
          </div>
          <h2 className="section-title">Areas of Interest</h2>
          <p className="section-subtitle">
            Domains where I am actively seeking internship opportunities to contribute, learn, and grow technically.
          </p>
        </div>

        <div className="interests-grid">
          {careerInterests.map((interest, idx) => {
            const Icon = iconMap[interest.icon] || Globe;
            return (
              <div key={idx} className="interest-card glass-card">
                <div className="interest-icon-box">
                  <Icon size={22} className="interest-icon" />
                </div>
                <h3 className="interest-title">{interest.title}</h3>
                <p className="interest-detail">{interest.detail}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
