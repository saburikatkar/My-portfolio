import React, { useState } from 'react';
import { personalDetails } from '../data/portfolioData';
import { IconMail, IconLinkedin, IconGithub, IconMapPin, IconSend, IconCopy, IconCheck } from './Icons';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalDetails.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Trigger user mail client fallback directly
    const mailtoUrl = `mailto:${personalDetails.email}?subject=${encodeURIComponent(
      formData.subject || `Portfolio Message from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    window.location.href = mailtoUrl;
    setIsSubmitted(true);
  };

  return (
    <section className="section section-alt" id="contact">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">Get In Touch</div>
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">
            Have a question, collaborative idea, or internship inquiry? Feel free to reach out directly.
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Details List */}
          <div className="contact-info-col">
            
            {/* Email Card */}
            <div className="contact-card">
              <div className="contact-icon-box">
                <IconMail size={22} />
              </div>
              <div className="contact-details">
                <div className="contact-label">Email (Click to Copy / Write)</div>
                <a href={`mailto:${personalDetails.email}`} className="contact-value">
                  {personalDetails.email}
                </a>
              </div>
              <button 
                type="button" 
                className="contact-copy-btn"
                onClick={handleCopyEmail}
                title="Copy email to clipboard"
              >
                {copied ? <IconCheck size={14} color="#16a34a" /> : <IconCopy size={14} />}
                <span style={{ marginLeft: '4px' }}>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            {/* LinkedIn Card */}
            <a 
              href={personalDetails.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-card"
            >
              <div className="contact-icon-box">
                <IconLinkedin size={22} />
              </div>
              <div className="contact-details">
                <div className="contact-label">LinkedIn Profile</div>
                <div className="contact-value">linkedin.com/in/saburi-katkar</div>
              </div>
            </a>

            {/* GitHub Card */}
            <a 
              href={personalDetails.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-card"
            >
              <div className="contact-icon-box">
                <IconGithub size={22} />
              </div>
              <div className="contact-details">
                <div className="contact-label">GitHub Profile</div>
                <div className="contact-value">github.com/saburikatkar</div>
              </div>
            </a>

            {/* Location Card */}
            <div className="contact-card">
              <div className="contact-icon-box">
                <IconMapPin size={22} />
              </div>
              <div className="contact-details">
                <div className="contact-label">Location & College</div>
                <div className="contact-value">{personalDetails.college}, Pune</div>
              </div>
            </div>

          </div>

          {/* Contact Form */}
          <div className="contact-form-box">
            {isSubmitted ? (
              <div className="form-success">
                <h4 style={{ marginBottom: '0.5rem', color: '#065f46' }}>✓ Message Prepared!</h4>
                <p style={{ color: '#047857', fontSize: '0.9rem' }}>
                  Your email client has been opened with your message directed to <strong>{personalDetails.email}</strong>. If your email client didn't open automatically, you can email directly at {personalDetails.email}.
                </p>
                <button 
                  type="button" 
                  className="btn btn-secondary btn-sm" 
                  style={{ marginTop: '1rem' }}
                  onClick={() => setIsSubmitted(false)}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Your Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="e.g. Alex Johnson"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Your Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="e.g. alex@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="e.g. Inquiry regarding project / internship"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Hello Saburi, I came across your portfolio..."
                    value={formData.message}
                    onChange={handleChange}
                    className="form-textarea"
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
                  <IconSend size={16} />
                  <span>Send Message</span>
                </button>

                <p className="form-notice">
                  * Opens your default mail client with a pre-formatted message addressed to Saburi.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
