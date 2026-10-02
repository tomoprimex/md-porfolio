'use client';

import { useEffect, useState } from 'react';
import './contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    revealElements.forEach(el => revealObserver.observe(el));

    return () => revealObserver.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:Mdgraphics04@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <div className="contact-page">
      <section className="contact-header">
        <div className="container">
          <h1 className="page-title reveal-scale">Get In Touch</h1>
          <p className="page-subtitle reveal">
            Let's discuss your project and bring your vision to life
          </p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info reveal-left">
              <h2 className="info-title">Contact Information</h2>
              <p className="info-description">
                Feel free to reach out through any of these channels. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">📧</div>
                  <div className="contact-text">
                    <h3>Email</h3>
                    <a href="mailto:Mdgraphics04@gmail.com" className="contact-link">Mdgraphics04@gmail.com</a>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">�</div>
                  <div className="contact-text">
                    <h3>WhatsApp</h3>
                    <a href="https://wa.me/2348104095304" className="contact-link">+234 810 409 5304</a>
                  </div>
                </div>
              </div>

              <div className="social-links">
                <h3 className="social-title">Follow Me</h3>
                <div className="social-buttons">
                  <a href="https://instagram.com/Md_digitals01" className="social-btn" aria-label="Instagram">
                    <span>📷 Instagram</span>
                  </a>
                  <a href="https://www.behance.net/mdgraphics04" className="social-btn" aria-label="Behance">
                    <span>🎨 Behance</span>
                  </a>
                  <a href="https://pin.it/1QnbXeKy4" className="social-btn" aria-label="Pinterest">
                    <span>📌 Pinterest</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-form-wrapper reveal-right">
              <h2 className="form-title">Send a Message</h2>
              
              {submitted ? (
                <div className="success-message">
                  <div className="success-icon">✓</div>
                  <h3>Message Sent!</h3>
                  <p>Thank you for reaching out. I'll get back to you soon.</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Project inquiry"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell me about your project..."
                      rows={6}
                    />
                  </div>
                  
                  <button type="submit" className="btn btn-primary btn-large">
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <h2 className="section-title reveal">Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-card reveal-left">
              <h3 className="faq-question">What is your typical turnaround time?</h3>
              <p className="faq-answer">
                Turnaround time varies depending on the project scope. Simple designs like social media graphics typically take 2-3 days, while comprehensive branding projects may take 2-3 weeks.
              </p>
            </div>
            
            <div className="faq-card reveal">
              <h3 className="faq-question">Do you offer revisions?</h3>
              <p className="faq-answer">
                Yes, I include revision rounds in all my projects. The number of revisions depends on the package, but I always ensure you're completely satisfied with the final result.
              </p>
            </div>
            
            <div className="faq-card reveal-right">
              <h3 className="faq-question">What file formats do you provide?</h3>
              <p className="faq-answer">
                I provide all necessary file formats including high-resolution print files (PDF, AI, EPS) and web-ready files (PNG, JPG, SVG) to ensure your designs work across all platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>MD Digital Solutions</h3>
              <p>Professional graphics design services</p>
            </div>
            <div className="footer-section">
              <a href="mailto:Mdgraphics04@gmail.com" className="footer-contact">
                Mdgraphics04@gmail.com
              </a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 MD Digital Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
