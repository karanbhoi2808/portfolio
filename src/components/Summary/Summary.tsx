import { personalInfo } from "../../data/portfolioData";
import "./Summary.css";

export const Summary = () => {
  return (
    <section id="summary" className="container-max summary-hero-section">
      <div className="summary-grid">
        <div className="summary-content">
          {/* Status Badge */}
          <div className="status-badge-v3">
            <span className="pulse-dot-v3" />
            <span>{personalInfo.status}</span>
          </div>

          {/* Main Display Headline */}
          <h1 className="summary-headline-v3">
            {personalInfo.name}.{" "}
            <br className="br-desktop" />
            <span className="summary-headline-muted">{personalInfo.surname}</span>
          </h1>

          {/* Summary Paragraph */}
          <p className="summary-paragraph-v3">
            {personalInfo.summaryParagraph}
          </p>
        </div>
      </div>
    </section>
  );
};
