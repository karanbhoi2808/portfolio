import { useState, useEffect } from "react";
import { projectsData } from "../../data/portfolioData";
import "./Projects.css";

export const Projects = () => {
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const maxSlides = isMobile
    ? projectsData.length - 1
    : Math.max(0, projectsData.length - 2);

  const handleNext = () => {
    setSlideIndex((prev) => Math.min(prev + 1, maxSlides));
  };

  const handlePrev = () => {
    setSlideIndex((prev) => Math.max(prev - 1, 0));
  };

  // Calculate slide displacement
  const translateXPercent = isMobile ? slideIndex * 100 : slideIndex * 50;

  return (
    <section id="projects" className="container-max projects-section">
      {/* Header with Title & Carousel Buttons */}
      <div className="projects-header">
        <h2 className="projects-title">Projects</h2>
        <div className="carousel-controls">
          <button
            id="prev-project"
            className="carousel-btn"
            onClick={handlePrev}
            disabled={slideIndex === 0}
            aria-label="Previous project"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <button
            id="next-project"
            className="carousel-btn"
            onClick={handleNext}
            disabled={slideIndex >= maxSlides}
            aria-label="Next project"
          >
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </div>

      {/* Carousel Track Container */}
      <div className="carousel-wrapper">
        <div
          id="project-carousel"
          className="carousel-track"
          style={{ transform: `translateX(-${translateXPercent}%)` }}
        >
          {projectsData.map((project) => (
            <div key={project.id} className="project-card group">
              {/* Card Graphic Header */}
              <div className="project-card-header">
                <div
                  className={
                    project.patternType === "dots"
                      ? "card-pattern-dots"
                      : project.patternType === "grid"
                      ? "card-pattern-grid"
                      : "card-pattern-lines"
                  }
                />
                <span className="material-symbols-outlined card-header-icon">
                  {project.icon}
                </span>
              </div>

              {/* Card Body */}
              <div className="project-card-body">
                <div className="project-title-row">
                  <div>
                    <h3 className="project-card-title">{project.title}</h3>
                    <span className="project-card-subtitle">
                      {project.subtitle}
                    </span>
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link-icon"
                    aria-label={`View ${project.title}`}
                  >
                    <span className="material-symbols-outlined">
                      open_in_new
                    </span>
                  </a>
                </div>

                <p className="project-card-desc">{project.description}</p>

                {/* Tech Chips */}
                <div className="project-tags-row">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
