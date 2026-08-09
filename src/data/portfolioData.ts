export interface PersonalInfo {
  name: string;
  surname: string;
  logoText: string;
  title: string;
  roleSubtitle: string;
  status: string;
  email: string;
  linkedIn: string;
  gitHub: string;
  location: string;
  summaryParagraph: string;
  resumeUrl: string;
}

export interface NavLink {
  id: string;
  label: string;
  href: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  icon: string;
  link: string;
  patternType: "dots" | "grid" | "lines";
}

export interface SkillCategory {
  id: string;
  name: string;
  skills: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  cgpa: string;
  isCurrent?: boolean;
}

export const personalInfo: PersonalInfo = {
  name: "Karan Bhoi",
  surname: "Software Engineer.",
  logoText: "KB",
  title: "Software Developer",
  roleSubtitle: "Software Developer focusing on robust backend systems and modern web architecture. Building scalable solutions with precision and performance in mind.",
  status: "Immediate Available for Work",
  email: "karanbhoi2808@gmail.com",
  linkedIn: "https://www.linkedin.com/in/karanbhoi28",
  gitHub: "https://github.com/karanbhoi2808",
  location: "Anand, Gujarat",
  summaryParagraph:
    "Software Developer focusing on robust backend systems and modern web architecture. Building scalable solutions with precision and performance in mind.",
  resumeUrl: "https://drive.google.com/file/d/1x2rU4fc4BeWlC-jJJv11KZoEI1ORv2jt/view?usp=drive_link",
};

export const navLinks: NavLink[] = [
  { id: "summary", label: "Summary", href: "#summary" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "tech", label: "Tech Stack", href: "#tech" },
  { id: "education", label: "Education", href: "#education" },
  { id: "contact", label: "Contact", href: "#contact" },
];

export const projectsData: ProjectItem[] = [
  {
    id: "buyfurn",
    title: "BuyFurn",
    subtitle: "Academic Project",
    description:
      "A comprehensive E-commerce platform architecture. Built focusing on scalable inventory management, secure Razorpay transactions, and AWS Elastic Beanstalk deployment.",
    tags: ["Spring Boot", "Angular", "AWS", "Razorpay", "MySQL"],
    icon: "shopping_bag",
    link: "https://buyfurn.netlify.app",
    patternType: "dots",
  },
  // {
  //   id: "discussion-board",
  //   title: "Multi-Tenant Discussion API",
  //   subtitle: "Associate Software Developer - OpenEyes Technologies",
  //   description:
  //     "High-throughput REST API with schema-per-tenant isolation, dynamic tenant resolution, JWT auth, Spring Async bulk processing, and OpenAI moderation integration.",
  //   tags: ["Spring Boot", "PostgreSQL", "Flyway", "Spring Security", "Docker"],
  //   icon: "database",
  //   link: "https://github.com/karanbhoi",
  //   patternType: "grid",
  // },
  // {
  //   id: "hrms-project-mgmt",
  //   title: "HRMS Project & Task Engine",
  //   subtitle: "Intern - OpenEyes Technologies",
  //   description:
  //     "Core Project Management features for HRMS including project-based credentials, task assignments, and RxJS state management for high-performance reactive UI.",
  //   tags: ["Angular", "RxJS", "Spring Boot", "REST APIs"],
  //   icon: "task_alt",
  //   link: "https://github.com/karanbhoi",
  //   patternType: "lines",
  // },
];

export const techStackData: SkillCategory[] = [
  {
    id: "languages",
    name: "Languages",
    skills: ["Java", "JavaScript", "TypeScript", "SQL", "Python"],
  },
  {
    id: "frameworks",
    name: "Frameworks",
    skills: ["Spring MVC", "Spring Boot", "Hibernate/JPA", "REST APIs", "Angular", "RxJS"],
  },
  {
    id: "database",
    name: "Database",
    skills: ["MySQL", "PostgreSQL", "Flyway"],
  },
  {
    id: "tools",
    name: "Tools & VC",
    skills: ["Docker", "Git", "GitHub", "AWS"],
  },
];

export const educationData: EducationItem[] = [
  {
    id: "mca",
    degree: "Master of Computer Applications",
    institution: "Parul University",
    location: "Vadodara, Gujarat",
    period: "2023 — 2025",
    cgpa: "8.06 / 10",
    isCurrent: true,
  },
  {
    id: "bca",
    degree: "Bachelor of Computer Applications",
    institution: "Sardar Patel University",
    location: "Anand, Gujarat",
    period: "2020 — 2023",
    cgpa: "8.82 / 10",
    isCurrent: false,
  },
];
