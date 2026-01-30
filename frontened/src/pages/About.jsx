import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <h1 className="about-title">
          About <span className="gradient-text">Trade Portal</span>
        </h1>
        <p className="about-subtitle">
          Connecting international buyers with reliable suppliers while ensuring transparency at every step.
        </p>
      </section>

      {/* Company Introduction */}
      <section className="intro-section">
        <div className="intro-content">
          <h2 className="section-title">Who We Are</h2>
          <p className="intro-text">
            We're a newly established import-export company driven by a simple mission: connecting international buyers with reliable suppliers while ensuring transparency at every step.
          </p>
          <p className="intro-text">
            Founded in 2026, we leverage our network of verified manufacturers across Asia and Europe to offer competitive pricing and quality products to B2B buyers worldwide.
          </p>
        </div>
      </section>

      {/* Founder Story */}
      <section className="founder-section">
        <h2 className="section-title">Our Story</h2>
        <div className="founder-content">
          <p className="founder-text">
            After working 5+ years in international trade and supply chain, our founder recognized a common challenge: small and medium businesses struggle with finding reliable suppliers, managing quality, and navigating complex shipping processes.
          </p>
          <p className="founder-text">
            We started this company to bridge that gap—offering personalized service, transparent communication, and direct factory access to businesses looking for long-term trading relationships.
          </p>
          <p className="founder-highlight">
            <strong>Not looking to be the biggest. Just the most reliable.</strong>
          </p>
        </div>
      </section>

      {/* Our Approach */}
      <section className="approach-section">
        <h2 className="section-title">How We Operate</h2>
        <div className="approach-grid">
          <div className="approach-card">
            <div className="approach-icon">🏭</div>
            <h3 className="approach-title">Direct Factory Partnerships</h3>
            <p className="approach-description">
              We work exclusively with manufacturers we've personally visited and verified. No layers of middlemen—just direct access to competitive pricing.
            </p>
          </div>

          <div className="approach-card">
            <div className="approach-icon">✓</div>
            <h3 className="approach-title">Quality First</h3>
            <p className="approach-description">
              Every order includes pre-shipment inspection with photo/video reports. We check specifications, packaging, and labeling before goods leave the factory.
            </p>
          </div>

          <div className="approach-card">
            <div className="approach-icon">💬</div>
            <h3 className="approach-title">Clear Communication</h3>
            <p className="approach-description">
              No industry jargon, no hidden fees. You'll know exactly what you're paying for, when your goods will ship, and how they'll arrive.
            </p>
          </div>

          <div className="approach-card">
            <div className="approach-icon">🤝</div>
            <h3 className="approach-title">Long-Term Relationships</h3>
            <p className="approach-description">
              We're building a business based on repeat orders and referrals. Your success is our success.
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="offerings-section">
        <h2 className="section-title">What We Offer</h2>
        <div className="offerings-list">
          <div className="offering-item">
            <span className="offering-icon">✓</span>
            <span>Product sourcing and supplier verification</span>
          </div>
          <div className="offering-item">
            <span className="offering-icon">✓</span>
            <span>Quality inspection and compliance checks</span>
          </div>
          <div className="offering-item">
            <span className="offering-icon">✓</span>
            <span>Export documentation and customs support</span>
          </div>
          <div className="offering-item">
            <span className="offering-icon">✓</span>
            <span>Logistics coordination and shipment tracking</span>
          </div>
          <div className="offering-item">
            <span className="offering-icon">✓</span>
            <span>After-sales support and issue resolution</span>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-number">5+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">15+</div>
            <div className="stat-label">Countries Served</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">50+</div>
            <div className="stat-label">Clients Worldwide</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">98%</div>
            <div className="stat-label">On-Time Delivery</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <h2 className="cta-title">Ready to Start Trading?</h2>
        <p className="cta-description">
          Let's discuss your import-export requirements and build a long-term partnership.
        </p>
        <div className="cta-buttons">
          <Link to="/contact" className="btn-primary">Discuss Your Requirements →</Link>
          <Link to="/services" className="btn-secondary">View Our Services</Link>
        </div>
      </section>
    </div >
  );
}

export default About;
