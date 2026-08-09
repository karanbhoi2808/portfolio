import { educationData } from "../../data/portfolioData";
import "./Education.css";

export const Education = () => {
  return (
    <section id="education" className="container-max education-section">
      <div className="education-grid">
        {/* Sidebar Title & Subtitle */}
        <div className="education-sidebar">
          <div className="education-title-row">
            {/* <span className="material-symbols-outlined education-title-icon">
              school
            </span> */}
            <h2 className="education-title">Education</h2>
          </div>
          <p className="education-desc">
            Academic qualifications, computing foundations, and formal degree programs.
          </p>
        </div>

        {/* Timeline Content Wrapped in Surface Container Card */}
        <div className="education-timeline-wrapper">
          <div className="education-container-card">
            <div className="education-timeline">
              {educationData.map((item) => (
                <div key={item.id} className="timeline-item">
                  {/* Glowing Node Dot */}
                  <div
                    className={`timeline-dot ${item.isCurrent ? "active" : ""}`}
                  />

                  <div className="timeline-header-row">
                    <h3 className="degree-name">{item.degree}</h3>
                    <span className="period-badge">{item.period}</span>
                  </div>

                  <div className="institution-name">
                    <span>{item.institution}</span>
                    <span className="institution-location">
                      • {item.location}
                    </span>
                  </div>

                  <div className="cgpa-chip">
                    <span>CGPA:</span>
                    <span className="cgpa-highlight">{item.cgpa}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
