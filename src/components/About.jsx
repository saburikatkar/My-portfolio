import React from 'react';
import { personalDetails } from '../data/portfolioData';
import { IconMapPin, IconGraduationCap, IconBriefcase } from './Icons';

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">About Me</div>
          <h2 className="section-title">Driven by Curiosity & Hands-On Engineering</h2>
          <p className="section-subtitle">
            Balancing strong computer science fundamentals with practical application development.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-text">
            {personalDetails.bioLong.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}

            <div className="about-highlight-box">
              <h4>Collaborative Mindset & Growth</h4>
              <p>
                Whether coordinating interface requirements in team hackathons or breaking down complex logic for students in robotics classrooms, I value clear communication, proactive collaboration, and continuous learning.
              </p>
            </div>
          </div>

          <div className="about-card">
            <h3 className="about-card-title">
              <IconGraduationCap size={20} color="var(--blue-primary)" />
              Quick Overview
            </h3>

            <div className="about-info-list">
              <div className="about-info-item">
                <span className="about-info-label">Degree & Major</span>
                <span className="about-info-val">B.E. Computer Science Engineering</span>
              </div>

              <div className="about-info-item">
                <span className="about-info-label">College</span>
                <span className="about-info-val">{personalDetails.college}</span>
              </div>

              <div className="about-info-item">
                <span className="about-info-label">Location</span>
                <span className="about-info-val">
                  <IconMapPin size={14} style={{ display: 'inline', marginRight: '4px' }} />
                  {personalDetails.location}
                </span>
              </div>

              <div className="about-info-item">
                <span className="about-info-label">Key Focus Areas</span>
                <span className="about-info-val">Electron Desktop Apps, React, Front-End Architecture</span>
              </div>

              <div className="about-info-item">
                <span className="about-info-label">Status</span>
                <span className="about-info-val">Undergraduate Student • Open to Opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
