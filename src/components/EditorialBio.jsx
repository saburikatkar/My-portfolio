import React from 'react';
import { personalDetails, experienceData, educationData, achievementsData } from '../data/portfolioData';
import { IconGithub, IconLinkedin, IconMail, IconExternalLink } from './Icons';

export default function EditorialBio() {
  const softwareBadges = [
    { name: "React", bg: "#0284c7", color: "#ffffff", label: "Re" },
    { name: "Python", bg: "#1e3a8a", color: "#fbbf24", label: "Py" },
    { name: "JavaScript", bg: "#eab308", color: "#000000", label: "JS" },
    { name: "Vite", bg: "#7c3aed", color: "#ffffff", label: "Vi" },
    { name: "YOLOv11", bg: "#ea580c", color: "#ffffff", label: "YO" },
    { name: "HTML5", bg: "#e11d48", color: "#ffffff", label: "H5" },
    { name: "CSS3", bg: "#2563eb", color: "#ffffff", label: "CS" },
    { name: "Git", bg: "#f97316", color: "#ffffff", label: "Gt" },
    { name: "VS Code", bg: "#0284c7", color: "#ffffff", label: "VS" }
  ];

  return (
    <section className="editorial-bio-section">
      <div className="editorial-bio-container">
        
        {/* Left Side: Hanging Lanyard ID Badge */}
        <div className="lanyard-column">
          <div className="lanyard-assembly">
            {/* Hanging Lanyard Strap */}
            <div className="lanyard-strap"></div>
            <div className="lanyard-clip"></div>

            {/* Realistic Plastic Sleeve Badge */}
            <div className="id-badge-card">
              <div className="badge-header">
                <span className="badge-college">DPCOE • PUNE</span>
                <span className="badge-chip">STUDENT ID</span>
              </div>

              <div className="badge-photo-wrapper">
                <img 
                  src="./images/badge_photo.jpg" 
                  alt="Saburi Katkar — DPCOE Student" 
                  className="badge-photo-img"
                />
              </div>

              <div className="badge-info">
                <div className="badge-name">Saburi Katkar</div>
                <div className="badge-sub">B.E. Computer Science Engineering</div>
                <div className="badge-sub">Team Synora (SIH26057) • U1</div>
              </div>

              <div className="badge-footer">
                <div className="badge-barcode">
                  <span></span><span></span><span></span><span></span><span></span>
                  <span></span><span></span><span></span><span></span><span></span>
                  <span></span><span></span><span></span><span></span><span></span>
                </div>
                <div className="badge-id-num">ID: DPCOE-2025-29</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Editorial Narrative & Columns */}
        <div className="narrative-column">
          
          {/* Greeting & Headline */}
          <div className="narrative-hero-text">
            <h2 className="narrative-greeting">
              HI, I'm <span className="highlight-tan">Saburi</span>
            </h2>
            <p className="narrative-paragraph">
              I am a Computer Science Engineering student and UI Developer because I love building intuitive interfaces, questioning "why", and making technology feel effortless and accessible. To me, software isn't just about code — it's about people, habits, and crafting thoughtful experiences that work seamlessly.
            </p>
          </div>

          {/* 3-Column Editorial Grid (matching image layout) */}
          <div className="editorial-columns-grid">
            
            {/* Column 1: EXPERIENCE */}
            <div className="editorial-col">
              <h3 className="col-heading">EXPERIENCE</h3>
              
              <div className="col-item">
                <div className="item-title">Robotics Teaching Intern</div>
                <div className="item-org">ZPPS (Maharashtra, India)</div>
                <div className="item-desc">
                  Assisted in teaching students basic robotics concepts through practical and engaging hands-on learning activities.
                </div>
              </div>

              <div className="col-item">
                <div className="item-title">UI Developer (U1)</div>
                <div className="item-org">Team Synora (SIH26057)</div>
                <div className="item-desc">
                  Developing the user interface layout and interaction workflow for the automated sonar anomaly detection system.
                </div>
              </div>
            </div>

            {/* Column 2: EDUCATION & ACHIEVEMENTS */}
            <div className="editorial-col">
              <h3 className="col-heading">EDUCATION</h3>
              
              <div className="col-item">
                <div className="item-title">B.E. Computer Science</div>
                <div className="item-org">Dhole Patil College of Engineering (DPCOE)</div>
                <div className="item-desc">
                  Academic Duration: 2025–2029 (Currently Pursuing). Core CS foundations & algorithms.
                </div>
              </div>

              <div className="col-item" style={{ marginTop: '0.85rem' }}>
                <h4 className="col-subheading">ACTIVITIES</h4>
                <div className="item-title" style={{ fontSize: '0.85rem' }}>Smart India Hackathon 2026</div>
                <div className="item-org">SIH26057 • Team Synora</div>
                <div className="item-title" style={{ fontSize: '0.85rem', marginTop: '0.4rem' }}>Robotics STEM Mentorship</div>
                <div className="item-org">ZPPS Community</div>
              </div>
            </div>

            {/* Column 3: CONTACT */}
            <div className="editorial-col">
              <h3 className="col-heading">CONTACT</h3>
              
              <div className="contact-links-list">
                <a 
                  href={personalDetails.github}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="contact-editorial-link"
                >
                  <span className="contact-badge-icon icon-gh">GH</span>
                  <div className="contact-text-wrap">
                    <span className="contact-link-label">github.com/saburikatkar</span>
                  </div>
                </a>

                <a 
                  href={personalDetails.linkedin}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="contact-editorial-link"
                >
                  <span className="contact-badge-icon icon-in">in</span>
                  <div className="contact-text-wrap">
                    <span className="contact-link-label">linkedin.com/in/saburi-katkar</span>
                  </div>
                </a>

                <a 
                  href={`mailto:${personalDetails.email}`}
                  className="contact-editorial-link"
                >
                  <span className="contact-badge-icon icon-mail">M</span>
                  <div className="contact-text-wrap">
                    <span className="contact-link-label">{personalDetails.email}</span>
                  </div>
                </a>
              </div>

              {/* SOFTWARES / TECH STACK SECTION (matching image) */}
              <div className="softwares-section">
                <h4 className="softwares-heading">SOFTWARES & TECH</h4>
                <div className="software-icons-row">
                  {softwareBadges.map((badge, idx) => (
                    <div 
                      key={idx} 
                      className="software-app-badge"
                      style={{ backgroundColor: badge.bg, color: badge.color }}
                      title={badge.name}
                    >
                      {badge.label}
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
