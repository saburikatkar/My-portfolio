import React from 'react';
import { IconGithub, IconExternalLink, IconX } from './Icons';

export default function ProjectModal({ item, onClose }) {
  if (!item) return null;

  return (
    <div className="project-modal-backdrop" onClick={onClose}>
      <div className="project-modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="project-modal-close" onClick={onClose} aria-label="Close modal">
          <IconX size={20} />
        </button>

        <div className="project-modal-header" style={{ borderLeftColor: item.accentColor }}>
          <div className="modal-num-badge" style={{ backgroundColor: item.accentColor }}>
            {item.number}
          </div>
          <div>
            <div className="modal-team-tag">{item.badge}</div>
            <h3 className="modal-title">{item.title}</h3>
            <p className="modal-subtitle">{item.subtitle}</p>
          </div>
        </div>

        <div className="project-modal-body">
          <div className="modal-section">
            <h4 className="modal-section-title">Overview</h4>
            <p>{item.overview}</p>
          </div>

          {item.contribution && (
            <div className="modal-section">
              <h4 className="modal-section-title">{item.contributionTitle || "My Contribution"}</h4>
              <p>{item.contribution}</p>
            </div>
          )}

          {item.statusNotice && (
            <div className="modal-notice-box">
              <h4 className="modal-notice-title">Status & Scope</h4>
              <p>{item.statusNotice}</p>
            </div>
          )}

          {item.highlights && item.highlights.length > 0 && (
            <div className="modal-section">
              <h4 className="modal-section-title">Key Highlights</h4>
              <ul className="modal-highlights-list">
                {item.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
          )}

          {item.technologies && item.technologies.length > 0 && (
            <div className="modal-section">
              <h4 className="modal-section-title">Technologies Used</h4>
              <div className="modal-tech-tags">
                {item.technologies.map((tech, i) => (
                  <span key={i} className="modal-tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          )}
        </div>

        {item.githubUrl && (
          <div className="project-modal-footer">
            <a 
              href={item.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary"
            >
              <IconGithub size={18} />
              <span>View GitHub Repository</span>
              <IconExternalLink size={16} />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
