import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Connecting Global Businesses with Reliable <span className="gradient-text">Import-Export Solutions</span>
          </h1>
          <p className="hero-subtitle">
            We bridge international markets by sourcing quality products and ensuring smooth logistics from factory to your destination. Built on transparency, competitive pricing, and on-time delivery.
          </p>
          <div className="hero-buttons">
            <Link to="/contact" className="btn-primary">Get a Free Quote</Link>
            <Link to="/services" className="btn-secondary">View Our Services</Link>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="hero-stats">
          <div className="stat-box">
            <div className="stat-number">15+</div>
            <div className="stat-label">Countries Served</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">50+</div>
            <div className="stat-label">Successful Shipments</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">24hrs</div>
            <div className="stat-label">Avg Response Time</div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="value-section">
        <h2 className="section-title">Why Partner With Us?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🏭</div>
            <h3 className="feature-title">Direct Sourcing</h3>
            <p className="feature-description">
              We work directly with verified manufacturers to eliminate middlemen, ensuring competitive pricing and consistent quality for your business.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">✓</div>
            <h3 className="feature-title">Quality Assurance</h3>
            <p className="feature-description">
              Every shipment undergoes pre-shipment inspection. We verify specifications, packaging standards, and documentation before your goods leave the port.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🚢</div>
            <h3 className="feature-title">End-to-End Support</h3>
            <p className="feature-description">
              From initial inquiry to final delivery, we handle documentation, customs clearance, and logistics coordination so you can focus on your business.
            </p>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="process-section">
        <h2 className="section-title">Simple Process, Transparent Pricing</h2>
        <div className="process-steps">
          <div className="process-step">
            <div className="step-number">1</div>
            <h3 className="step-title">Send Your Requirement</h3>
            <p className="step-description">
              Share product specifications, quantity, and destination. We'll respond within 24 hours with initial feasibility.
            </p>
          </div>

          <div className="process-step">
            <div className="step-number">2</div>
            <h3 className="step-title">Get Quote & Samples</h3>
            <p className="step-description">
              Receive detailed quotation including product cost, shipping, and timeline. Sample verification available before bulk orders.
            </p>
          </div>

          <div className="process-step">
            <div className="step-number">3</div>
            <h3 className="step-title">Quality Check & Shipment</h3>
            <p className="step-description">
              Pre-shipment inspection, documentation, and real-time tracking until delivery to your designated port.
            </p>
          </div>
        </div>

        <div className="process-cta">
          <Link to="/contact" className="cta-button">Request Quote Now →</Link>
        </div>
      </section>

      {/* Trust Indicator / Testimonial */}
      <section className="testimonial-section">
        <h2 className="section-title">Built on Trust and Reliability</h2>
        <div className="testimonial-card">
          <div className="testimonial-quote">
            "As a new buyer from Europe, I was concerned about quality and timing. The team provided samples, factory verification, and kept me updated throughout. My first order arrived exactly as promised."
          </div>
          <div className="testimonial-author">
            <strong>Michael Schmidt</strong>
            <span className="author-role">Import Manager, Germany</span>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="cta-section">
        <h2 className="cta-title">Ready to Start Your Next Import?</h2>
        <p className="cta-description">
          Get competitive quotes, verified suppliers, and transparent pricing. No hidden costs, no surprises.
        </p>
        <div className="cta-buttons">
          <Link to="/contact" className="btn-primary-large">Send Inquiry →</Link>
          <a href="mailto:business@tradeportal.com" className="email-link">
            Or email us: business@tradeportal.com
          </a>
        </div>
      </section>
    </div>
  );
}

export default Home;
