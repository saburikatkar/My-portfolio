import React from 'react';
import { personalDetails } from '../data/portfolioData';
import { IconGithub, IconLinkedin, IconMail } from './Icons';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-grid">
          
          <div className="hero-tag">
            <span className="hero-dot"></span>
            <span>{personalDetails.college} • Computer Science (2025–2029)</span>
          </div>

          <h1 className="hero-title">
            Hi, I'm <span className="hero-title-highlight">{personalDetails.name}</span>
          </h1>

          <p className="hero-subtitle">
            {personalDetails.role} passionate about front-end architecture, building intuitive user interfaces, 
            and solving real-world engineering problems through collaboration and hands-on learning.
          </p>

          <div className="hero-context">
            Currently developing the UI structure for <strong>Team Synora</strong>'s Smart India Hackathon project (SIH26057) and continuously building practical software projects.
          </div>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn btn-secondary">
              <IconMail size={16} /> Contact Me
            </a>
          </div>

          <div className="hero-socials">
            <a 
              href={personalDetails.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link"
              title="Saburi's GitHub Profile"
            >
              <IconGithub size={18} />
              <span>GitHub</span>
            </a>

            <a 
              href={personalDetails.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link"
              title="Saburi's LinkedIn Profile"
            >
              <IconLinkedin size={18} />
              <span>LinkedIn</span>
            </a>

            <a 
              href={`mailto:${personalDetails.email}`} 
              className="social-link"
              title="Send an email"
            >
              <IconMail size={18} />
              <span>Email</span>
            </a>
          </div>

          <div className="hero-stats">
            {personalDetails.stats.map((stat, idx) => (
              <div key={idx} className="stat-item">
                <div className="stat-label">{stat.label}</div>
                <div className="stat-value">{stat.value}</div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
