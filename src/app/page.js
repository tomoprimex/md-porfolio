'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import './page.css';

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const featuredImages = [
    { src: '/image/JAYKAY/JK LOGO.png', title: 'Jaykay Delights Branding', subtitle: 'Complete Brand Identity' },
    { src: '/image/JAYKAY/BUYMORE/PLANTAIN CHIPS_RIPE.jpg', title: 'Buymore Product Branding', subtitle: 'Product Packaging Design' },
    { src: '/image/JAYKAY/FLYERS/2026/february/HAPPY VAL.jpg', title: 'Seasonal Promotional Flyers', subtitle: 'Holiday Campaign Design' },
    { src: '/image/JAYKAY/CHIN CHIN.jpg', title: 'Chin Chin Product Design', subtitle: 'Snack Packaging' },
    { src: '/image/JAYKAY/BRO WOLE/ABANACARS CAFE/ABANACARS CAFE LOGO.PNG', title: 'Abanacars Cafe Logo', subtitle: 'Restaurant Branding' },
    { src: '/image/JAYKAY/FLYERS/2026/APRIL_JK/JK_BACKDROP.png', title: 'Event Backdrop Design', subtitle: 'Large Format Print' },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Marketing Director, Jaykay Delights',
      avatar: 'SJ',
      testimonial: 'MD Digital Solutions transformed our brand identity completely. The attention to detail and creative vision exceeded our expectations. Our new logo and packaging have received incredible feedback from customers.',
      service: 'Brand Identity & Packaging Design'
    },
    {
      name: 'Emeka Okafor',
      role: 'Owner, Abanacars Cafe',
      avatar: 'EO',
      testimonial: 'Working with MD Digital Solutions was a game-changer for our restaurant. The menu design, logo, and promotional materials perfectly capture our brand essence. Professional, creative, and highly recommended.',
      service: 'Restaurant Branding'
    },
    {
      name: 'Chioma Nwosu',
      role: 'Product Manager, Buymore',
      avatar: 'CN',
      testimonial: 'The packaging designs for our snack products are outstanding. MD Digital Solutions understood our market and delivered designs that stand out on shelves. Sales have increased significantly since the rebrand.',
      service: 'Product Packaging Design'
    },
    {
      name: 'David Adeleke',
      role: 'Campaign Manager',
      avatar: 'DA',
      testimonial: 'Our social media campaigns have never looked better. The creative graphics and promotional materials MD Digital Solutions created helped us achieve record engagement rates. Truly exceptional work.',
      service: 'Social Media Campaigns'
    },
    {
      name: 'Fatima Ibrahim',
      role: 'Event Coordinator',
      avatar: 'FI',
      testimonial: 'The event backdrop and promotional materials were absolutely stunning. MD Digital Solutions brought our vision to life with professionalism and creativity. We\'ve received countless compliments on the design.',
      service: 'Event Design & Large Format Print'
    }
  ];

  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem('hasSeenIntro');
    if (hasSeenIntro) {
      setIntroComplete(true);
    } else {
      const timer = setTimeout(() => {
        setIntroComplete(true);
        sessionStorage.setItem('hasSeenIntro', 'true');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, []);

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
    <>
      {!introComplete && (
        <div className="intro-overlay">
          <div className="intro-box">
            <h1 className="intro-name">ADURAGNEMI MICHAEL</h1>
            <p className="intro-title">Professional Graphics Designer</p>
            <p className="intro-welcome">Welcome to MD Digital Solutions.</p>
          </div>
        </div>
      )}

      <div className="home-page" style={{ opacity: introComplete ? 1 : 0, transition: 'opacity 0.5s ease' }}>
          <section className="hero">
            <div className="hero-background">
              <div className="hero-blur hero-blur-1"></div>
              <div className="hero-blur hero-blur-2"></div>
              <div className="hero-blur hero-blur-3"></div>
            </div>
            
            <div className="hero-content">
              <h1 className="hero-title reveal-scale">MD DIGITAL SOLUTIONS</h1>
              <p className="hero-tagline reveal">Crafting Visual Excellence Through Design</p>
              <p className="hero-description reveal">
                I'm Aduragnemi Michael, a professional graphics designer specializing in 
                branding, social media designs, flyers, and posters. I transform ideas into 
                compelling visual stories that captivate and inspire.
              </p>
              <div className="hero-buttons reveal">
                <Link href="/projects" className="btn btn-primary">
                  View My Work
                </Link>
                <Link href="/contact" className="btn btn-secondary">
                  Let's Work Together
                </Link>
              </div>
            </div>
          </section>

          <section className="featured-work">
            <div className="container">
              <h2 className="section-title reveal">Featured Work</h2>
              <div className="featured-grid">
                {featuredImages.map((image, index) => (
                  <div
                    key={index}
                    className={`featured-card reveal ${index % 3 === 0 ? 'reveal-left' : index % 3 === 1 ? 'reveal' : 'reveal-right'}`}
                    onClick={() => setSelectedImage(image)}
                  >
                    <div className="featured-image">
                      <img 
                        src={image.src} 
                        alt={image.title}
                        className="featured-img"
                      />
                    </div>
                    <div className="featured-info">
                      <h3>{image.title}</h3>
                      <p>{image.subtitle}</p>
                      <button className="view-design-btn">View Design</button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="featured-cta reveal">
                <Link href="/projects" className="btn btn-secondary">
                  See More Projects
                </Link>
              </div>
            </div>
          </section>

          <section className="about-section">
            <div className="container">
              <div className="about-content reveal">
                <h2 className="section-title">About Me</h2>
                <p className="about-text">
                  I'm Aduragnemi Michael, a professional graphics designer with a passion for creating 
                  compelling visual stories. With expertise in branding, social media design, flyers, 
                  and campaign materials, I help businesses communicate their message effectively through 
                  innovative design solutions. My approach combines artistic vision with strategic thinking 
                  to deliver designs that not only look stunning but also achieve your business objectives.
                </p>
              </div>
            </div>
          </section>

          <section className="services-section">
            <div className="container">
              <h2 className="section-title reveal">Services</h2>
              <div className="services-grid">
                <div className="service-card reveal-left">
                  <div className="service-icon">📱</div>
                  <h3>Social Media Design</h3>
                  <p>Engaging social media graphics that boost your online presence and audience engagement.</p>
                </div>
                <div className="service-card reveal">
                  <div className="service-icon">📄</div>
                  <h3>Flyers & Posters</h3>
                  <p>Professional print materials that communicate your message effectively and drive action.</p>
                </div>
                <div className="service-card reveal-right">
                  <div className="service-icon">🎨</div>
                  <h3>Branding & Visual Identity</h3>
                  <p>Complete brand identity including logos, color schemes, and comprehensive visual guidelines.</p>
                </div>
                <div className="service-card reveal-left">
                  <div className="service-icon">✏️</div>
                  <h3>Logo Design</h3>
                  <p>Unique and memorable logos that capture your brand essence and leave lasting impressions.</p>
                </div>
                <div className="service-card reveal">
                  <div className="service-icon">🚀</div>
                  <h3>Campaign Design</h3>
                  <p>Strategic campaign materials that tell your story and achieve your marketing goals.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="testimonials-section">
            <div className="container">
              <h2 className="section-title reveal">Client Recommendations</h2>
              <div className="testimonials-grid">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className={`testimonial-card reveal ${index % 2 === 0 ? 'reveal-left' : 'reveal-right'}`}
                  >
                    <div className="testimonial-avatar">
                      <span>{testimonial.avatar}</span>
                    </div>
                    <div className="testimonial-content">
                      <p className="testimonial-text">"{testimonial.testimonial}"</p>
                      <div className="testimonial-author">
                        <h4>{testimonial.name}</h4>
                        <p className="testimonial-role">{testimonial.role}</p>
                        <p className="testimonial-service">{testimonial.service}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="process-section">
            <div className="container">
              <h2 className="section-title reveal">Design Process</h2>
              <div className="process-steps">
                <div className="process-step reveal-left">
                  <div className="step-number">01</div>
                  <h3>Discover</h3>
                  <p>Understanding your brand, goals, and target audience to create a solid foundation.</p>
                </div>
                <div className="process-step reveal">
                  <div className="step-number">02</div>
                  <h3>Concept</h3>
                  <p>Brainstorming creative ideas and developing strategic concepts that align with your vision.</p>
                </div>
                <div className="process-step reveal-right">
                  <div className="step-number">03</div>
                  <h3>Design</h3>
                  <p>Bringing concepts to life with polished, professional designs that stand out.</p>
                </div>
                <div className="process-step reveal-left">
                  <div className="step-number">04</div>
                  <h3>Deliver</h3>
                  <p>Finalizing and delivering high-quality assets ready for production and deployment.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="final-cta-section">
            <div className="container">
              <div className="final-cta-content reveal-scale">
                <h2>Ready to Start Your Project?</h2>
                <p>Let's create something amazing together. Get in touch and let's bring your vision to life.</p>
                <Link href="/contact" className="btn btn-primary btn-large">
                  Start Your Project
                </Link>
              </div>
            </div>
          </section>

          <footer className="site-footer">
            <div className="container">
              <div className="footer-content">
                <div className="footer-section">
                  <h3>MD Digital Solutions</h3>
                  <p>Professional graphics design services for brands that want to stand out.</p>
                </div>
                <div className="footer-section">
                  <h3>Contact</h3>
                  <div className="contact-item">
                    <span className="contact-icon">📧</span>
                    <a href="mailto:Mdgraphics04@gmail.com" className="contact-link">Mdgraphics04@gmail.com</a>
                  </div>
                  <div className="contact-item">
                    <span className="contact-icon">📱</span>
                    <a href="https://wa.me/2348104095304" className="contact-link">+234 810 409 5304</a>
                  </div>
                </div>
                <div className="footer-section">
                  <h3>Social</h3>
                  <div className="social-links">
                    <a href="https://instagram.com/Md_digitals01" className="social-link">
                      <span className="social-icon">📷</span> Instagram
                    </a>
                    <a href="https://www.behance.net/mdgraphics04" className="social-link">
                      <span className="social-icon">🎨</span> Behance
                    </a>
                    <a href="https://pin.it/1QnbXeKy4" className="social-link">
                      <span className="social-icon">📌</span> Pinterest
                    </a>
                  </div>
                </div>
              </div>
              <div className="footer-bottom">
                <p>&copy; 2026 MD Digital Solutions. All rights reserved.</p>
              </div>
            </div>
          </footer>

          {selectedImage && (
            <div className="image-modal" onClick={() => setSelectedImage(null)}>
              <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={() => setSelectedImage(null)}>×</button>
                <img src={selectedImage.src} alt={selectedImage.title} className="modal-image" />
                <div className="modal-info">
                  <h3>{selectedImage.title}</h3>
                  <p>{selectedImage.subtitle}</p>
                </div>
              </div>
            </div>
          )}

          <section className="cta-section">
            <div className="container">
              <div className="cta-content reveal-scale">
                <h2>Ready to Elevate Your Brand?</h2>
                <p>Let's create something amazing together.</p>
                <Link href="/contact" className="btn btn-primary btn-large">
                  Get In Touch
                </Link>
              </div>
            </div>
          </section>
        </div>
    </>
  );
}
