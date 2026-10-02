'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import './services.css';

const services = [
  {
    id: 1,
    icon: '🎨',
    title: 'Brand Identity Design',
    description: 'Complete brand identity packages including logo design, color palettes, typography, and visual guidelines that establish your brand\'s unique personality.',
    features: ['Logo Design', 'Color Schemes', 'Typography', 'Brand Guidelines', 'Visual Identity']
  },
  {
    id: 2,
    icon: '📱',
    title: 'Social Media Design',
    description: 'Engaging social media graphics that capture attention and drive engagement across all platforms including Instagram, Facebook, Twitter, and LinkedIn.',
    features: ['Post Graphics', 'Story Templates', 'Cover Images', 'Ad Creatives', 'Profile Branding']
  },
  {
    id: 3,
    icon: '📄',
    title: 'Flyer Design',
    description: 'Professional flyer designs for events, promotions, and announcements that effectively communicate your message and attract your target audience.',
    features: ['Event Flyers', 'Promotional Flyers', 'Corporate Flyers', 'Club Flyers', 'Sale Flyers']
  },
  {
    id: 4,
    icon: '🖼️',
    title: 'Poster Design',
    description: 'Eye-catching poster designs for movies, events, products, and artistic displays that make a lasting impression and stand out from the crowd.',
    features: ['Event Posters', 'Movie Posters', 'Product Posters', 'Artistic Posters', 'Promotional Posters']
  },
  {
    id: 5,
    icon: '✨',
    title: 'Print Design',
    description: 'High-quality print materials including business cards, brochures, and stationery that maintain brand consistency across all physical touchpoints.',
    features: ['Business Cards', 'Brochures', 'Stationery', 'Menus', 'Catalogs']
  },
  {
    id: 6,
    icon: '🎯',
    title: 'Digital Graphics',
    description: 'Digital graphics for websites, apps, and online platforms that enhance user experience and reinforce your brand\'s digital presence.',
    features: ['Web Banners', 'App Graphics', 'Email Templates', 'Digital Ads', 'UI Elements']
  }
];

export default function Services() {
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

  return (
    <div className="services-page">
      <section className="services-header">
        <div className="container">
          <h1 className="page-title reveal-scale">My Services</h1>
          <p className="page-subtitle reveal">
            Professional design solutions tailored to elevate your brand and captivate your audience
          </p>
        </div>
      </section>

      <section className="services-list">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`service-card reveal ${index % 2 === 0 ? 'reveal-left' : 'reveal-right'}`}
              >
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="feature-item">
                      <span className="feature-bullet">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="container">
          <h2 className="section-title reveal">My Process</h2>
          <div className="process-steps">
            <div className="process-step reveal-left">
              <div className="step-number">01</div>
              <h3 className="step-title">Discovery</h3>
              <p className="step-description">
                Understanding your brand, goals, and target audience to create a solid foundation for the design.
              </p>
            </div>
            <div className="process-step reveal">
              <div className="step-number">02</div>
              <h3 className="step-title">Concept Development</h3>
              <p className="step-description">
                Creating initial concepts and exploring creative directions that align with your vision.
              </p>
            </div>
            <div className="process-step reveal-right">
              <div className="step-number">03</div>
              <h3 className="step-title">Design & Refine</h3>
              <p className="step-description">
                Developing the chosen concept with attention to detail and refining based on feedback.
              </p>
            </div>
            <div className="process-step reveal-left">
              <div className="step-number">04</div>
              <h3 className="step-title">Final Delivery</h3>
              <p className="step-description">
                Delivering high-quality files in all necessary formats for print and digital use.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
