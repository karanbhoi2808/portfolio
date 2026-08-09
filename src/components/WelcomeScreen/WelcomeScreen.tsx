import React, { useState, useEffect } from "react";
import "./WelcomeScreen.css";

interface WelcomeScreenProps {
  onComplete?: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState<number>(0);
  const [isFadingOut, setIsFadingOut] = useState<boolean>(false);
  const [isHidden, setIsHidden] = useState<boolean>(false);

  useEffect(() => {
    // Lock scroll during animation
    document.body.style.overflow = "hidden";

    const duration = 1600; // ms total loading time
    const interval = 20; // ms step
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const currentProgress = Math.min(Math.round((currentStep / steps) * 100), 100);
      setProgress(currentProgress);

      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(() => {
          setIsFadingOut(true);
          setTimeout(() => {
            setIsHidden(true);
            document.body.style.overflow = "";
            if (onComplete) onComplete();
          }, 800); // match fade/slide out duration
        }, 300);
      }
    }, interval);

    return () => {
      clearInterval(timer);
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  if (isHidden) return null;

  return (
    <div className={`welcome-screen ${isFadingOut ? "fade-out" : ""}`}>
      {/* Background glow effects */}
      <div className="welcome-glow-bg"></div>
      <div className="welcome-grid-pattern"></div>

      <div className="welcome-content">
        {/* Animated KB Logo Badge */}
        <div className="welcome-logo-wrapper">
          <div className="welcome-ring-outer"></div>
          <div className="welcome-ring-inner"></div>
          <div className="welcome-logo-text">KB</div>
        </div>

        {/* Welcome Headline & Subtitle */}
        <div className="welcome-text-group">
          <h1 className="welcome-title">
            <span className="welcome-name">Karan Bhoi</span>
          </h1>
          <p className="welcome-subtitle">Software Developer</p>
        </div>

        {/* Progress bar & percentage counter */}
        <div className="welcome-progress-container">
          <div className="welcome-progress-bar">
            <div
              className="welcome-progress-fill"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="welcome-counter">
            <span>Loading experience</span>
            <span className="counter-val">{progress}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};
