import React from 'react';
import { skillsData } from '../data/portfolioData';
import { IconCode, IconCpu, IconBriefcase, IconUsers } from './Icons';

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend & Desktop",
      icon: <IconCode size={22} />,
      skills: skillsData.frontendAndDesktop
    },
    {
      title: "Languages & Core",
      icon: <IconCpu size={22} />,
      skills: skillsData.programmingAndBackend
    },
    {
      title: "Tools & Workflows",
      icon: <IconBriefcase size={22} />,
      skills: skillsData.toolsAndPlatforms
    },
    {
      title: "Teamwork & Communication",
      icon: <IconUsers size={22} />,
      skills: skillsData.softSkills
    }
  ];

  return (
    <section className="section section-alt" id="skills">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">Technical Skills</div>
          <h2 className="section-title">My Technical Toolbox</h2>
          <p className="section-subtitle">
            Technologies, frameworks, and foundational competencies I apply in software development.
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((cat, index) => (
            <div key={index} className="skill-card">
              <div className="skill-card-header">
                <div className="skill-icon-wrap">
                  {cat.icon}
                </div>
                <h3 className="skill-card-title">{cat.title}</h3>
              </div>

              <div className="skill-tags">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-tag">
                    <span className="skill-tag-name">{skill.name}</span>
                    <span className="skill-tag-level">{skill.level}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
