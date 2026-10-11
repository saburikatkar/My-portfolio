import React, { useState } from 'react';
import { personalDetails } from '../data/portfolioData';
import { IconMenu, IconX } from './Icons';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <header className="navbar">
      <div className="container navbar-container">
        <a href="#" className="nav-brand" onClick={closeMenu}>
          <div className="nav-brand-logo">SK</div>
          <div>
            <span>{personalDetails.name}</span>
            <span className="nav-brand-role">CS Engineering Student</span>
          </div>
        </a>

        {/* Desktop and Mobile Menu */}
        <ul className={`nav-menu ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.label}>
              <a 
                href={link.href} 
                className="nav-link"
                onClick={closeMenu}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="mobile-only-btn">
            <a 
              href="#contact" 
              className="btn btn-primary btn-sm"
              onClick={closeMenu}
            >
              Get in Touch
            </a>
          </li>
        </ul>

        <div className="nav-actions">
          <a href="#contact" className="btn btn-primary btn-sm desktop-only">
            Get in Touch
          </a>
          <button 
            className="mobile-toggle" 
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <IconX size={22} /> : <IconMenu size={22} />}
          </button>
        </div>
      </div>
    </header>
  );
}
