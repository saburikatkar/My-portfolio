/**
 * Portfolio Data Configuration for Saburi Katkar
 * ===============================================
 * Centralized data source for personal details, projects, experience,
 * education, skills, and contact links.
 */

export const personalDetails = {
  name: "Saburi Katkar",
  role: "Computer Science Engineering Student",
  college: "Dhole Patil College of Engineering (DPCOE)",
  location: "Pune, Maharashtra, India",
  email: "saburikatkar031@gmail.com",
  github: "https://github.com/saburikatkar",
  linkedin: "https://www.linkedin.com/in/saburi-katkar-b83b32384",
  resumeUrl: "#contact",

  bioShort: "Computer Science Engineering student at DPCOE passionate about front-end architecture, user interface design, and tackling real-world engineering problems through collaborative hackathons and hands-on learning.",
  
  bioLong: [
    "I am an undergraduate Computer Science Engineering student at Dhole Patil College of Engineering (DPCOE), Pune (2025–2029). I enjoy translating ideas into clean, responsive user interfaces and modular software architectures.",
    "Currently, I am working with Team Synora on our Smart India Hackathon project (SIH26057), developing the user interface structure for our automated underwater sonar anomaly detection system. I also built Virtual Gurukul to digitize traditional Indian learning topics through an interactive web experience.",
    "Beyond coding, I have served as a Robotics Teaching Intern at ZPPS, where I strengthened my communication, mentoring, and team collaboration skills by making technical robotics concepts accessible and engaging for students."
  ],

  stats: [
    { label: "Institution", value: "DPCOE, Pune" },
    { label: "Degree Period", value: "2025–2029" },
    { label: "Hackathon", value: "SIH 2026 (Team Synora)" },
    { label: "Experience", value: "Robotics Teaching Intern (ZPPS)" }
  ]
};

export const skillsData = {
  frontendAndDesktop: [
    { name: "React.js", level: "UI Library" },
    { name: "JavaScript (ES6+)", level: "Core Language" },
    { name: "Vite", level: "Build Tooling" },
    { name: "HTML5 & CSS3", level: "Semantic & Responsive" },
    { name: "UI Architecture", level: "Component Design" },
    { name: "Modern CSS", level: "Flexbox, Grid, Layouts" }
  ],
  programmingAndBackend: [
    { name: "JavaScript", level: "Web Development" },
    { name: "Python", level: "Foundations & Scripting" },
    { name: "C / C++", level: "Computer Science Core" },
    { name: "Node.js Basics", level: "Runtime Environment" }
  ],
  toolsAndPlatforms: [
    { name: "Git", level: "Version Control" },
    { name: "GitHub", level: "Collaboration & Repositories" },
    { name: "VS Code", level: "Development Environment" },
    { name: "npm", level: "Package Management" },
    { name: "Web Audio API", level: "Audio Synthesis" }
  ],
  softSkills: [
    { name: "Technical Communication", level: "Instruction & Documentation" },
    { name: "Teamwork & Collaboration", level: "Team Synora / Hackathons" },
    { name: "Hands-on Mentoring", level: "Robotics at ZPPS" },
    { name: "Problem Solving", level: "Engineering Method" }
  ]
};

/**
 * Projects Section: Exactly two featured projects as requested.
 * (No Spam Message Detector or Developer Portfolio).
 */
export const projectsData = [
  {
    id: "sonnet-sih26057",
    title: "AI-Powered Automated Underwater Marine Debris and Anomaly Detection",
    subtitle: "Side-Scan Sonar (SSS) Imagery Analysis — Smart India Hackathon 2026",
    team: "Team Synora",
    statusBadge: "SIH 2026 (SIH26057)",
    statusType: "ongoing",
    overview: "An AI-powered system designed to identify underwater marine debris and anomalies using Side-Scan Sonar (SSS) imagery for the Smart India Hackathon 2026.",
    contributionTitle: "My Contribution — UI Developer (U1)",
    contribution: "As U1 in Team Synora, I am responsible for developing the user interface for the Sonnet project. My work focuses on creating the application's UI structure and a clear, responsive interface that will support the underwater sonar analysis workflow.",
    realisticNotice: "Project Status & Scope: Currently in active development with Team Synora for SIH 2026. The UI structure and foundational layouts are being built; AI detection pipeline, model inference, and backend integrations are actively handled by teammate sub-teams and are planned for upcoming integration phases.",
    // Strictly the AI and detection system technologies as specified:
    technologies: [
      "Python",
      "YOLOv11",
      "Computer Vision",
      "Side-Scan Sonar Imagery"
    ],
    githubUrl: "https://github.com/saburikatkar/Sonnet",
    liveUrl: null,
    highlights: [
      "Developing the application's user interface and layout for the Sonnet project.",
      "Organizing the interface into modular sections to support future sonar imagery visualization and detection-result presentation.",
      "Designing a clear, user-friendly workflow for interacting with the system.",
      "Collaborating with Team Synora to align the UI with the Python and YOLOv11-based detection pipeline.",
      "Preparing the interface for future integration with the project's AI detection and backend components."
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
    contributionTitle: "My Contribution",
    contribution: "Designed and built the interactive web interface, course modules, synthesizer audio elements, and content presentation logic.",
    realisticNotice: null,
    technologies: ["JavaScript", "HTML5", "CSS3", "Web Audio API"],
    githubUrl: "https://github.com/saburikatkar/Virtual-Gurukul",
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
    location: "Maharashtra, India",
    type: "Teaching Internship",
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
    duration: "2025–2029",
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
 * Achievements and Activities (Only the two verified achievements)
 */
export const achievementsData = [
  {
    id: "sih-2026",
    title: "Smart India Hackathon 2026 Participant — SIH26057",
    category: "Hackathon & Innovation",
    organization: "Ministry of Education / AICTE",
    team: "Team Synora",
    description: "Selected participant working on AI-powered underwater marine debris and anomaly detection using side-scan sonar imagery.",
    badge: "SIH 2026"
  },
  {
    id: "robotics-mentorship",
    title: "Robotics STEM Mentorship at ZPPS",
    category: "Teaching & Community",
    organization: "ZPPS",
    description: "Conducted practical robotics learning sessions, guiding students through hands-on kit assembly, basic robotics concepts, and introductory engineering logic.",
    badge: "Mentorship"
  }
];
