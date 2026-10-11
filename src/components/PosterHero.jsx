import React from 'react';
import { personalDetails } from '../data/portfolioData';

export default function PosterHero() {
  return (
    <section className="poster-hero-section">
      <div className="poster-hero-container">
        
        {/* Top Graphic Poster Header */}
        <div className="poster-title-wrapper">
          <div className="poster-subheading">
            SABURI KATKAR
          </div>

          <h1 className="poster-main-title" aria-label="Portfolio '26">
            <span className="char char-p">P</span>
            <span className="char char-o">O</span>
            <span className="char char-r">R</span>
            <span className="char char-t">T</span>
            <span className="char char-f">F</span>
            <span className="char char-o2">O</span>
            <span className="char char-l">L</span>
            <span className="char char-i">I</span>
            <span className="char char-o3">O</span>
            <span className="poster-year-badge">'26</span>
          </h1>

          {/* Centered Illustrated Avatar (matching the image) */}
          <div className="poster-avatar-anchor">
            <div className="poster-avatar-frame">
              <img 
                src="./images/avatar.jpg" 
                alt="Saburi Katkar — Illustrated Portrait"
                className="poster-avatar-img"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
