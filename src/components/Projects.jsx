import React from 'react';
import { projectsData } from '../data/portfolioData';
import { IconGithub, IconExternalLink } from './Icons';

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">Featured Work</div>
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            Engineering projects focused on automated sonar anomaly detection and digital educational platforms.
          </p>
        </div>

        <div className="projects-grid">
          {projectsData.map((project) => (
            <article key={project.id} className="project-card">
              
              <div className="project-card-header">
                <div className="project-title-area">
                  <div className="project-team-tag">
                    {project.team}
                  </div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>
                </div>

                <div className="project-badges">
                  {project.statusType === 'ongoing' ? (
                    <span className="badge badge-ongoing">
                      ● {project.statusBadge}
                    </span>
                  ) : (
                    <span className="badge badge-completed">
                      ✓ {project.statusBadge}
                    </span>
                  )}
                </div>
              </div>

              <div className="project-body">
                {/* Project Overview */}
                <div className="project-section-block">
                  <span className="project-block-label">Project Overview</span>
                  <p>{project.overview}</p>
                </div>

                {/* Contribution */}
                <div className="project-section-block">
                  <span className="project-block-label">{project.contributionTitle || "My Contribution"}</span>
                  <p>{project.contribution}</p>
                </div>

                {/* Status Notice */}
                {project.realisticNotice && (
                  <div className="project-notice-box">
                    <div className="project-notice-title">
                      Project Status & Scope
                    </div>
                    <p>{project.realisticNotice}</p>
                  </div>
                )}

                {/* Key Highlights */}
                {project.highlights && (
                  <div className="project-section-block">
                    <span className="project-block-label">Key Highlights</span>
                    <ul className="project-highlights-list">
                      {project.highlights.map((highlight, hIdx) => (
                        <li key={hIdx}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technologies Used */}
                <div className="project-section-block">
                  <span className="project-block-label">Technologies Used</span>
                  <div className="project-tech-tags">
                    {project.technologies.map((tech, tIdx) => (
                      <span key={tIdx} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="project-card-footer">
                <div className="project-actions">
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn-secondary btn-sm"
                      title={`View ${project.title} repository`}
                    >
                      <IconGithub size={16} />
                      <span>View GitHub Repository</span>
                      <IconExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>

            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
