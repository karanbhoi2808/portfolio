import { useState, useEffect, useRef } from "react";
import { navLinks, personalInfo } from "../../data/portfolioData";
import { useTheme } from "../../context/ThemeContext";
import "./Header.css";

export const Header = () => {
  const [activeSection, setActiveSection] = useState<string>("summary");
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const { theme, toggleTheme } = useTheme();

  const isNavClickRef = useRef<boolean>(false);
  const navClickTimerRef = useRef<number | null>(null);

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    closeMobileMenu();

    // Lock handleScroll from overwriting activeSection while smooth scrolling
    isNavClickRef.current = true;
    if (navClickTimerRef.current) {
      window.clearTimeout(navClickTimerRef.current);
    }
    navClickTimerRef.current = window.setTimeout(() => {
      isNavClickRef.current = false;
    }, 800);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Do not overwrite active section if user just clicked a nav link
      if (isNavClickRef.current) return;

      // Check if user is scrolled near bottom of page for contact section
      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 60;

      if (isAtBottom) {
        setActiveSection("contact");
        return;
      }

      const sections = document.querySelectorAll("section[id], footer[id]");
      const scrollPosition = window.scrollY + 160;

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute("id") || "";

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (navClickTimerRef.current) window.clearTimeout(navClickTimerRef.current);
    };
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className="header-glass">
      <div className="container-max header-container">
        {/* Brand Logo (v3 text logo KB) */}
        <a href="#summary" className="header-logo-v3" onClick={() => handleNavClick("summary")}>
          {personalInfo.logoText}
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden-mobile">
          <ul className="nav-links-desktop">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className={`nav-link-item ${activeSection === link.id ? "active" : ""
                    }`}
                  onClick={() => handleNavClick(link.id)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Actions (Resume & Theme Toggle) */}
        <div className="header-actions header-actions-desktop">
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-resume"
          >
            View Resume
            <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>
              visibility
            </span>
          </a>
          <button
            className="btn-theme-toggle"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            onClick={toggleTheme}
          >
            <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>
              {theme === "dark" ? "light_mode" : "dark_mode"}
            </span>
          </button>
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className={`mobile-menu-btn ${mobileMenuOpen ? "active" : ""}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
        >
          <span className="material-symbols-outlined" style={{ fontSize: "24px" }}>
            {mobileMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`mobile-drawer ${mobileMenuOpen ? "open" : ""}`}>
        <ul className="mobile-nav-list">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                className="mobile-nav-link"
                onClick={() => handleNavClick(link.id)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li style={{ marginTop: "16px", display: "flex", gap: "12px", alignItems: "center" }}>
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-resume"
              style={{ display: "inline-flex", flex: 1, justifyContent: "center" }}
              onClick={closeMobileMenu}
            >
              View Resume
              <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>
                visibility
              </span>
            </a>
            <button
              className="btn-theme-toggle"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              onClick={toggleTheme}
            >
              <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>
                {theme === "dark" ? "light_mode" : "dark_mode"}
              </span>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};
