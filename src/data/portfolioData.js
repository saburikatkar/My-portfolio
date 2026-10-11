/**
 * Portfolio Data Configuration for Saburi Katkar
 * ===============================================
 * All personal details, project details, and links are centralized here.
 * Incomplete or future details are clearly marked with [EDITABLE] tags.
 */

export const personalDetails = {
  name: "Saburi Katkar",
  role: "Computer Science Engineering Student",
  college: "Dhole Patil College of Engineering (DPCOE)",
  location: "Pune, Maharashtra, India",
  
  // EDITABLE: Your email address (editable at any time)
  email: "saburikatkar031@gmail.com",
  
  // Profiles
  github: "https://github.com/saburikatkar",
  linkedin: "https://www.linkedin.com/in/saburi-katkar-b83b32384",
  
  // EDITABLE: Add a resume link (e.g. Google Drive link or file in /public/resume.pdf)
  resumeUrl: "#contact",

  bioShort: "Computer Science Engineering student at DPCOE passionate about front-end architecture, building desktop and web applications with React & Vite, and tackling real-world problems through collaborative hackathons and hands-on learning.",
  
  bioLong: [
    "I am an undergraduate Computer Science Engineering student at Dhole Patil College of Engineering (DPCOE), Pune. I enjoy translating ideas into clean, responsive user interfaces and modular software architectures.",
    "Currently, I am working with Team Synora on our Smart India Hackathon project (SIH26057), developing the core desktop application shell using Electron, React, and Vite. I also built Virtual Gurukul to digitize traditional Indian knowledge through an interactive web experience.",
    "Beyond coding, I've served as a Robotics Teaching Intern at ZPPS, where I strengthened my communication, mentoring, and team collaboration skills by making technical robotics concepts accessible and exciting for students."
  ],

  stats: [
    { label: "Institution", value: "DPCOE, Pune" },
    { label: "Focus", value: "CS Engineering" },
    { label: "Hackathon", value: "SIH 2026 (Synora)" },
    { label: "Mentorship", value: "Robotics Intern (ZPPS)" }
  ]
};

export const skillsData = {
  frontendAndDesktop: [
    { name: "React.js", level: "Core Framework" },
    { name: "Electron", level: "Desktop Apps" },
    { name: "Vite", level: "Build Tooling" },
    { name: "JavaScript (ES6+)", level: "Language" },
    { name: "HTML5 & CSS3", level: "Semantic & Responsive" },
    { name: "Modern CSS / UI", level: "Flexbox, Grid, Clean UI" }
  ],
  programmingAndBackend: [
    { name: "JavaScript", level: "Primary" },
    { name: "Python", level: "Foundations & Scripting" },
    { name: "C / C++", level: "CS Core [Editable]" },
    { name: "Node.js Basics", level: "Environment" }
  ],
  toolsAndPlatforms: [
    { name: "Git", level: "Version Control" },
    { name: "GitHub", level: "Collaboration & CI/CD" },
    { name: "VS Code", level: "Development IDE" },
    { name: "npm", level: "Package Management" },
    { name: "Web Audio API", level: "Interactive Audio" }
  ],
  softSkills: [
    { name: "Technical Communication", level: "Teaching & Documentation" },
    { name: "Teamwork & Collaboration", level: "Team Synora / Hackathons" },
    { name: "Hands-on Mentoring", level: "Robotics at ZPPS" },
    { name: "Analytical Problem Solving", level: "Engineering Foundation" }
  ]
};

/**
 * Projects Section: Exactly two featured projects as requested.
 * (No Spam Message Detector or Developer Portfolio).
 */
export const projectsData = [
  {
    id: "sonnet-sih26057",
    title: "Sonnet — SIH26057",
    subtitle: "AI-Powered Automated Underwater Marine Debris and Anomaly Detection using Side-Scan Sonar Imagery",
    team: "Team Synora",
    statusBadge: "Ongoing Project • SIH 2026",
    statusType: "ongoing", // 'ongoing' | 'completed'
    overview: "An automated system aimed at detecting underwater marine debris and sonar anomalies using side-scan sonar (SSS) imagery, developed for the Smart India Hackathon.",
    contribution: "Developing the basic Electron + React + Vite application shell, establishing the desktop window management, contract testing setup, and responsive UI layout.",
    realisticNotice: "Ongoing Project: Actively developing the frontend desktop shell with Team Synora. AI detection pipeline, model inference, and backend integration are handled across specialized sub-teams and remain in continuous development.",
    technologies: ["Electron", "React", "Vite", "JavaScript"],
    githubUrl: "https://github.com/saburikatkar/Sonnet", // Editable repository URL
    liveUrl: null, // Desktop application
    highlights: [
      "Crafted the lightweight Electron + React application shell using Vite",
      "Modular UI structure prepared for real-time sonar feeds and map layers",
      "Cross-functional collaboration with Team Synora teammates"
    ]
  },
  {
    id: "virtual-gurukul",
    title: "Virtual Gurukul",
    subtitle: "Digital Learning Platform for Traditional Indian Knowledge Systems",
    team: "Independent Project",
    statusBadge: "Interactive Platform",
    statusType: "completed",
    overview: "An educational web project focused on presenting traditional learning topics such as Vedic mathematics, yoga, astronomy, and Sanskrit through a modern, engaging digital learning experience.",
    contribution: "Designed and built the interactive web interface, course modules, synthesizer audio elements, and content presentation logic.",
    realisticNotice: null,
    // Technologies actually present in repository + editable placeholders
    technologies: ["JavaScript", "HTML5", "CSS3", "Web Audio API", "Interactive DOM"],
    githubUrl: "https://github.com/saburikatkar/Virtual-Gurukul", // Repository URL
    liveUrl: null,
    highlights: [
      "Modular lesson views for Vedic mathematics, yoga, astronomy, and Sanskrit",
      "Interactive audio integration and multimedia study aids",
      "Accessible, responsive learning interface designed for students"
    ]
  }
];

/**
 * Experience Section: ZPPS Robotics Teaching Internship
 */
export const experienceData = [
  {
    id: "zpps-robotics",
    role: "Robotics Teaching Intern",
    organization: "ZPPS",
    // EDITABLE: Add your exact internship dates/period below
    duration: "Teaching Internship [Editable: e.g., Jun 2024 – Jul 2024]",
    location: "Maharashtra, India [Editable]",
    type: "Internship",
    description: "Assisted in teaching students basic robotics concepts through practical and engaging hands-on learning activities.",
    keyTakeaways: [
      "Hands-on STEM Education: Guided students through fundamental robotics mechanisms, hardware components, and introductory problem-solving exercises.",
      "Clear Technical Communication: Translated complex mechanical and logic concepts into intuitive, age-appropriate explanations that spark curiosity.",
      "Collaborative Instruction: Partnered with team educators to design interactive classroom activities, manage group kit exercises, and ensure safe lab participation.",
      "Mentorship & Patience: Encouraged student experimentation, helping learners troubleshoot their robotics builds methodically."
    ]
  }
];

/**
 * Education Section
 */
export const educationData = [
  {
    institution: "Dhole Patil College of Engineering (DPCOE)",
    location: "Pune, Maharashtra",
    degree: "Bachelor of Engineering (B.E.) in Computer Science Engineering",
    // EDITABLE: Update with your exact graduation / academic year
    duration: "Undergraduate [Editable: 2022 – 2026]",
    status: "Currently Pursuing",
    coursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (OOP)",
      "Database Management Systems (DBMS)",
      "Computer Networks",
      "Software Engineering",
      "Operating Systems"
    ],
    highlights: "Focusing on core computer science foundations, front-end software development, and practical engineering projects."
  }
];

/**
 * Achievements and Activities (with editable placeholders)
 */
export const achievementsData = [
  {
    id: "sih-2026",
    title: "Smart India Hackathon 2026 Participant (SIH26057)",
    category: "Hackathon & Innovation",
    organization: "Ministry of Education / AICTE",
    description: "Selected participant with Team Synora working on underwater marine debris and anomaly detection using side-scan sonar technology.",
    badge: "SIH 2026"
  },
  {
    id: "robotics-mentorship",
    title: "Robotics STEM Mentorship at ZPPS",
    category: "Teaching & Community",
    organization: "ZPPS",
    description: "Conducted practical robotics learning sessions, mentoring students through hands-on kit assemblies and introductory engineering logic.",
    badge: "Mentorship"
  },
  {
    id: "editable-achievement",
    title: "Technical Workshops & College Activities [Editable]",
    category: "Academic & Extracurricular",
    organization: "DPCOE, Pune",
    description: "Active participant in departmental technical workshops, coding forums, and collaborative engineering seminars. (Click to edit or replace with specific awards/certifications).",
    badge: "Editable Slot"
  }
];
