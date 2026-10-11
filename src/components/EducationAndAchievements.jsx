import React from 'react';
import { educationData, achievementsData } from '../data/portfolioData';
import { IconGraduationCap, IconAward, IconBookOpen } from './Icons';

export default function EducationAndAchievements() {
  return (
    <section className="section" id="education">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">Academic Background</div>
          <h2 className="section-title">Education & Achievements</h2>
          <p className="section-subtitle">
            Formal engineering education, hackathon participation, and extracurricular engagements.
          </p>
        </div>

        <div className="edu-achieve-grid">
          {/* Education Column */}
          <div className="edu-card">
            <h3 className="edu-card-title">
              <IconGraduationCap size={22} color="var(--blue-primary)" />
              Education
            </h3>

            {educationData.map((edu, idx) => (
              <div key={idx} className="edu-item">
                <h4 className="edu-institution">{edu.institution}</h4>
                <div className="edu-degree">{edu.degree}</div>
                
                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                  <span className="badge badge-blue">{edu.status}</span>
                  <span className="badge badge-editable">{edu.duration}</span>
                </div>

                <p style={{ fontSize: '0.925rem', marginBottom: '1rem' }}>
                  {edu.highlights}
                </p>

                <div className="edu-coursework">
                  <div className="edu-coursework-title">Relevant CS Coursework</div>
                  <div className="coursework-pills">
                    {edu.coursework.map((course, cIdx) => (
                      <span key={cIdx} className="coursework-pill">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Achievements & Activities Column */}
          <div className="achieve-card">
            <h3 className="achieve-card-title">
              <IconAward size={22} color="var(--blue-primary)" />
              Achievements & Activities
            </h3>

            <div className="achievements-list">
              {achievementsData.map((item) => (
                <div key={item.id} className="achievement-item">
                  <div className="achievement-header">
                    <h4 className="achievement-title">{item.title}</h4>
                    <span className={`badge ${item.badge === 'Editable Slot' ? 'badge-editable' : 'badge-blue'}`}>
                      {item.badge}
                    </span>
                  </div>
                  <div className="achievement-org">{item.organization}</div>
                  <p className="achievement-desc">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
