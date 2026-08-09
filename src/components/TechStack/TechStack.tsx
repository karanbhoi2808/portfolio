import { techStackData } from "../../data/portfolioData";
import "./TechStack.css";

export const TechStack = () => {
  return (
    <section id="tech" className="container-max tech-section">
      <div className="tech-grid">
        {/* Left Sidebar Header */}
        <div className="tech-sidebar">
          <h2 className="tech-title">Tech Stack</h2>
          <p className="tech-desc">
            Core competencies across backend architecture, modern web development,
            and deployment orchestration.
          </p>
        </div>

        {/* Right Categories Grid */}
        <div className="tech-categories-wrapper">
          <div className="tech-categories-grid">
            {techStackData.map((category) => (
              <div key={category.id} className="tech-card">
                <h3 className="tech-card-title">{category.name}</h3>
                <div className="tech-chips-flex">
                  {category.skills.map((skill) => (
                    <span key={skill} className="tech-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
