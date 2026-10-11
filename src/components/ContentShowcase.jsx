import React, { useState } from 'react';
import ProjectModal from './ProjectModal';
import { projectsData } from '../data/portfolioData';

export default function ContentShowcase() {
  const [selectedItem, setSelectedItem] = useState(null);

  const columnsData = [
    {
      id: "sonnet",
      number: "1",
      numberLabel: "01",
      accentColor: "#3b82f6",
      bgGradient: "linear-gradient(180deg, #60a5fa 0%, #2563eb 100%)",
      badge: "SONNET • SIH26057",
      title: "AI-Powered Underwater Marine Debris Detection",
      subtitle: "Side-Scan Sonar Imagery Analysis — Smart India Hackathon 2026",
      overview: "An AI-powered system designed to identify underwater marine debris and anomalies using Side-Scan Sonar (SSS) imagery for the Smart India Hackathon 2026.",
      contributionTitle: "My Contribution — UI Developer (U1)",
      contribution: "As U1 in Team Synora, I am responsible for developing the user interface for the Sonnet project. My work focuses on creating the application's UI structure and a clear, responsive interface that will support the underwater sonar analysis workflow.",
      statusNotice: "Currently in active development with Team Synora for SIH 2026. The UI structure and foundational layouts are being built; AI detection pipeline, model inference, and backend integrations are actively handled by teammate sub-teams and are planned for upcoming integration phases.",
      technologies: ["Python", "YOLOv11", "Computer Vision", "Side-Scan Sonar Imagery"],
      highlights: [
        "Developing the application's user interface and layout for the Sonnet project.",
        "Organizing the interface into modular sections to support future sonar imagery visualization and detection-result presentation.",
        "Designing a clear, user-friendly workflow for interacting with the system.",
        "Collaborating with Team Synora to align the UI with the Python and YOLOv11-based detection pipeline.",
        "Preparing the interface for future integration with the project's AI detection and backend components."
      ],
      githubUrl: "https://github.com/saburikatkar/Sonnet",
      mockupType: "dual-mobile"
    },
    {
      id: "virtual-gurukul",
      number: "2",
      numberLabel: "02",
      accentColor: "#d97706",
      bgGradient: "linear-gradient(180deg, #f59e0b 0%, #b45309 100%)",
      badge: "VIRTUAL GURUKUL",
      title: "Virtual Gurukul",
      subtitle: "Digital Learning Platform for Traditional Indian Knowledge Systems",
      overview: "An educational web project focused on presenting traditional learning topics such as Vedic mathematics, yoga, astronomy, and Sanskrit through a modern, engaging digital learning experience.",
      contributionTitle: "My Contribution",
      contribution: "Designed and built the interactive web interface, course modules, synthesizer audio elements, and content presentation logic.",
      statusNotice: null,
      technologies: ["JavaScript", "HTML5", "CSS3", "Web Audio API"],
      highlights: [
        "Modular lesson views for Vedic mathematics, yoga, astronomy, and Sanskrit",
        "Interactive audio integration and multimedia study aids",
        "Accessible, responsive learning interface designed for students"
      ],
      githubUrl: "https://github.com/saburikatkar/Virtual-Gurukul",
      mockupType: "document"
    },
    {
      id: "zpps-robotics",
      number: "3",
      numberLabel: "03",
      accentColor: "#16a34a",
      bgGradient: "linear-gradient(180deg, #22c55e 0%, #15803d 100%)",
      badge: "ZPPS ROBOTICS",
      title: "Robotics Teaching Internship",
      subtitle: "Hands-on STEM Education & Student Mentorship at ZPPS",
      overview: "Assisted in teaching students basic robotics concepts through practical and engaging hands-on learning activities.",
      contributionTitle: "Internship Responsibilities",
      contribution: "Guided students through hands-on robotics mechanisms, hardware components, and introductory engineering logic. Fostered collaborative teamwork and patience in lab exercises.",
      statusNotice: null,
      technologies: ["Robotics Kits", "STEM Education", "Technical Communication", "Mentoring"],
      highlights: [
        "Hands-on STEM Education: Guided students through fundamental robotics mechanisms and hardware kits.",
        "Clear Technical Communication: Translated complex mechanical and logic concepts into intuitive explanations.",
        "Collaborative Instruction: Partnered with team educators to manage classroom activities and lab participation.",
        "Mentorship & Patience: Encouraged student experimentation and methodical build troubleshooting."
      ],
      githubUrl: null,
      mockupType: "angled-phones"
    },
    {
      id: "dpcoe-cs",
      number: "4",
      numberLabel: "04",
      accentColor: "#dc2626",
      bgGradient: "linear-gradient(180deg, #ef4444 0%, #b91c1c 100%)",
      badge: "DPCOE • CS CORE",
      title: "Computer Science Engineering",
      subtitle: "Dhole Patil College of Engineering (DPCOE) • 2025–2029",
      overview: "Undergraduate Computer Science Engineering curriculum focusing on core engineering fundamentals, algorithms, systems, and modern software design.",
      contributionTitle: "Relevant Coursework",
      contribution: "Pursuing rigorous coursework in Data Structures & Algorithms, Object-Oriented Programming (OOP), Database Management Systems (DBMS), Computer Networks, Software Engineering, and Operating Systems.",
      statusNotice: null,
      technologies: ["C / C++", "Python", "Data Structures", "DBMS", "Computer Networks"],
      highlights: [
        "Strong foundation in algorithmic thinking and data structure optimization",
        "Object-Oriented Programming and modular software architecture",
        "Relational database design and query optimization",
        "Active student collaborator at DPCOE, Pune"
      ],
      githubUrl: null,
      mockupType: "laptop"
    },
    {
      id: "team-synora",
      number: "5",
      numberLabel: "05",
      accentColor: "#4f46e5",
      bgGradient: "linear-gradient(180deg, #6366f1 0%, #4338ca 100%)",
      badge: "TEAM SYNORA",
      title: "Team Synora — SIH26057",
      subtitle: "Smart India Hackathon 2026 Innovation Initiative",
      overview: "Selected participant with Team Synora for the Smart India Hackathon 2026, working on underwater marine debris and anomaly detection using side-scan sonar technology.",
      contributionTitle: "Team Collaboration & UI Role",
      contribution: "Serving as U1 (UI Developer) to ensure seamless interface ergonomics and prepare the frontend layout to receive data from the team's Python/YOLOv11 model pipeline.",
      statusNotice: null,
      technologies: ["Teamwork", "Hackathon Sprint", "UI Architecture", "Workflow Alignment"],
      highlights: [
        "Cross-functional team coordination with backend and model engineers",
        "Agile task boards and contract-based UI integration planning",
        "Preparation for national-level Smart India Hackathon presentation"
      ],
      githubUrl: "https://github.com/saburikatkar/Sonnet",
      mockupType: "clean-mobile"
    }
  ];

  return (
    <section className="content-showcase-section" id="projects">
      <div className="content-showcase-container">
        
        {/* Outlined "C O N T E N T" Typography with Floating Numbers (Matching Reference Image) */}
        <div className="content-watermark-header">
          <div className="watermark-numbers-row">
            <span>01</span>
            <span>02</span>
            <span>03</span>
            <span>04</span>
            <span>05</span>
          </div>
          <div className="watermark-title">
            CONTENT
          </div>
        </div>

        {/* 5 Vertical Colored Strips with Mockups & Big Numbers */}
        <div className="content-columns-strip">
          {columnsData.map((col) => (
            <div 
              key={col.id} 
              className="strip-column"
              style={{ background: col.bgGradient }}
              onClick={() => setSelectedItem(col)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter') setSelectedItem(col); }}
              aria-label={`View details for ${col.title}`}
            >
              <div className="strip-header">
                <span className="strip-badge">{col.badge}</span>
              </div>

              {/* Graphic Mockup Simulation based on type */}
              <div className="strip-mockup-area">
                {col.mockupType === "dual-mobile" && (
                  <div className="mockup-dual-phones">
                    <div className="phone-screen phone-1">
                      <div className="screen-notch"></div>
                      <div className="screen-content sonar-screen">
                        <div className="sonar-grid-line"></div>
                        <div className="sonar-tag">SONNET AI</div>
                        <div className="sonar-radar"></div>
                      </div>
                    </div>
                    <div className="phone-screen phone-2">
                      <div className="screen-notch"></div>
                      <div className="screen-content">
                        <div className="screen-bar"></div>
                        <div className="screen-pill"></div>
                      </div>
                    </div>
                  </div>
                )}

                {col.mockupType === "document" && (
                  <div className="mockup-document-sheet">
                    <div className="doc-paper">
                      <div className="doc-header-line"></div>
                      <div className="doc-circle"></div>
                      <div className="doc-lines">
                        <span></span><span></span><span></span>
                      </div>
                    </div>
                  </div>
                )}

                {col.mockupType === "angled-phones" && (
                  <div className="mockup-angled-phones">
                    <div className="phone-screen angled-phone-1">
                      <div className="screen-content robot-screen">
                        <div className="bot-head"></div>
                        <div className="bot-circ"></div>
                      </div>
                    </div>
                    <div className="phone-screen angled-phone-2">
                      <div className="screen-content">
                        <div className="screen-bar"></div>
                      </div>
                    </div>
                  </div>
                )}

                {col.mockupType === "laptop" && (
                  <div className="mockup-laptop">
                    <div className="laptop-lid">
                      <div className="laptop-screen">
                        <div className="code-editor-sim">
                          <span className="code-dot red"></span>
                          <span className="code-dot yellow"></span>
                          <span className="code-dot green"></span>
                          <div className="code-line"></div>
                          <div className="code-line short"></div>
                        </div>
                      </div>
                    </div>
                    <div className="laptop-base"></div>
                  </div>
                )}

                {col.mockupType === "clean-mobile" && (
                  <div className="mockup-clean-phone">
                    <div className="phone-screen clean-phone">
                      <div className="screen-notch"></div>
                      <div className="screen-content clean-app">
                        <div className="clean-app-logo">SYNORA</div>
                        <div className="clean-app-card"></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Huge Bold White Number At The Base */}
              <div className="strip-footer-number">
                <span className="strip-big-number">{col.number}</span>
                <div className="strip-caption">
                  <span className="strip-caption-title">{col.badge}</span>
                  <span className="strip-caption-hint">Click to inspect</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Interactive Detail Modal */}
      <ProjectModal 
        item={selectedItem} 
        onClose={() => setSelectedItem(null)} 
      />
    </section>
  );
}
