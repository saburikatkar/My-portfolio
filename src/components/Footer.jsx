import React from 'react';
import { personalDetails } from '../data/portfolioData';
import { IconGithub, IconLinkedin, IconMail, IconArrowUp } from './Icons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <span className="footer-name">{personalDetails.name}</span>
            <span className="footer-sub">
              {personalDetails.role} • {personalDetails.college}
            </span>
          </div>

          <div className="footer-links">
            <a 
              href={personalDetails.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-link"
              title="GitHub"
            >
              GitHub
            </a>
            <a 
              href={personalDetails.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-link"
              title="LinkedIn"
            >
              LinkedIn
            </a>
            <a 
              href={`mailto:${personalDetails.email}`} 
              className="footer-link"
              title="Email"
            >
              Email
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()} Saburi Katkar. All rights reserved.
          </div>

          <button 
            type="button" 
            onClick={scrollToTop} 
            className="contact-copy-btn"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}
          >
            <span>Back to top</span>
            <IconArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
