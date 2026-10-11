import React from 'react';
import { experienceData } from '../data/portfolioData';
import { IconBriefcase, IconMapPin } from './Icons';

export default function Experience() {
  return (
    <section className="section section-alt" id="experience">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">Practical Experience</div>
          <h2 className="section-title">Internship & Experience</h2>
          <p className="section-subtitle">
            Applying technical knowledge, mentorship, and effective communication in real learning environments.
          </p>
        </div>

        <div className="experience-timeline">
          {experienceData.map((exp) => (
            <div key={exp.id} className="experience-card">
              <div className="experience-header">
                <div>
                  <h3 className="experience-role">{exp.role}</h3>
                  <div className="experience-org">{exp.organization}</div>
                </div>

                <div className="experience-meta">
                  <span className="badge badge-editable">
                    {exp.duration}
                  </span>
                  <span className="editable-link-hint">
                    <IconMapPin size={13} style={{ display: 'inline', marginRight: '3px' }} />
                    {exp.location}
                  </span>
                </div>
              </div>

              <p>{exp.description}</p>

              <ul className="experience-highlights">
                {exp.keyTakeaways.map((point, pIdx) => (
                  <li key={pIdx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
