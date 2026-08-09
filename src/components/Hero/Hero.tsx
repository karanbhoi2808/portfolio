import { personalInfo } from "../../data/portfolioData";
import "./Hero.css";

export const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-glow-bg" />
      <div className="container-max">
        {/* Status Pill */}
        <div className="hero-status-pill">
          <span className="pulse-dot" />
          <span>{personalInfo.status}</span>
        </div>

        {/* Name Title */}
        <h1 className="hero-title">{personalInfo.name}</h1>

        {/* Role Subtitle */}
        <p className="hero-subtitle">{personalInfo.title}</p>

        {/* Contact Bar */}
        <div className="hero-contact-bar">
          <a
            href={`mailto:${personalInfo.email}`}
            className="hero-contact-link"
          >
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>mail</span>
            <span>{personalInfo.email}</span>
          </a>

          <span className="hero-separator">•</span>

          <a
            href={personalInfo.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-contact-link"
          >
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>link</span>
            <span>LinkedIn</span>
          </a>

          <span className="hero-separator">•</span>

          <a
            href={personalInfo.gitHub}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-contact-link"
          >
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>code</span>
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};
