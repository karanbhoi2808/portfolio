import { personalInfo } from "../../data/portfolioData";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer id="contact" className="footer-wrapper">
      <div className="container-max footer-content">
        {/* Top Connect Row */}
        <div className="footer-top-row">
          <div className="footer-connect-text">
            <h2 className="footer-connect-title">Let's connect.</h2>
            <p className="footer-connect-desc">
              Open for new opportunities and technical discussions. Drop a message
              to discuss backend systems or architecture.
            </p>
          </div>

          {/* Connect Action Buttons */}
          <div className="contact-buttons-group">
            <a
              href={`mailto:${personalInfo.email}`}
              className="connect-btn connect-btn-primary"
            >
              <span className="material-symbols-outlined">mail</span>
              <span>Email Me</span>
            </a>

            <a
              href={personalInfo.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="connect-btn connect-btn-secondary"
            >
              <span className="material-symbols-outlined">link</span>
              <span>LinkedIn</span>
            </a>

            <a
              href={personalInfo.gitHub}
              target="_blank"
              rel="noopener noreferrer"
              className="connect-btn connect-btn-secondary"
            >
              <span className="material-symbols-outlined">code</span>
              <span>GitHub</span>
            </a>

            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="connect-btn connect-btn-secondary"
            >
              <span className="material-symbols-outlined">description</span>
              <span>Resume</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div className="footer-brand-info">
            <span className="footer-logo-kb">{personalInfo.logoText}</span>
            <span className="footer-location-badge">• {personalInfo.location}</span>
          </div>
          <div className="footer-copy">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
