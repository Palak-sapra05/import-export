import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

function Services() {
  const services = [
    {
      id: 1,
      icon: '📥',
      title: 'Import Management',
      description: 'Comprehensive import solutions for businesses looking to source directly from verified manufacturers.',
      features: [
        'Supplier verification and sourcing',
        'Quality control and inspection',
        'Import compliance management',
        'Cargo consolidation services'
      ],
      price: 'Custom Pricing'
    },
    {
      id: 2,
      icon: '📤',
      title: 'Export Documentation',
      description: 'Complete documentation support to ensure your exports meet international standards and clear customs smoothly.',
      features: [
        'Commercial invoice preparation',
        'Certificate of origin processing',
        'Export licenses and permits',
        'Packing list management'
      ],
      price: 'From $299/shipment'
    },
    {
      id: 3,
      icon: '🚢',
      title: 'Logistics & Shipping',
      description: 'End-to-end logistics coordination with real-time tracking from factory to destination port.',
      features: [
        'Sea freight (FCL & LCL)',
        'Air freight for urgent orders',
        'Door-to-door delivery options',
        'Real-time shipment tracking'
      ],
      price: 'Custom Quote'
    },
    {
      id: 4,
      icon: '🛃',
      title: 'Customs Clearance',
      description: 'Expert customs brokerage and clearance services to navigate complex regulatory requirements.',
      features: [
        'Customs declaration filing',
        'Duty and tax calculation',
        'Import/export permits',
        'Compliance consulting'
      ],
      price: 'From $199/clearance'
    },
    {
      id: 5,
      icon: '📦',
      title: 'Warehousing',
      description: 'Secure, climate-controlled storage and efficient distribution facilities for your inventory.',
      features: [
        'Climate-controlled storage',
        'Inventory management',
        'Pick and pack services',
        'Cross-docking'
      ],
      price: 'From $99/month'
    },
    {
      id: 6,
      icon: '💼',
      title: 'Trade Consulting',
      description: 'Expert guidance on international trade regulations, market research, and risk assessment.',
      features: [
        'Market research and analysis',
        'Trade compliance training',
        'Risk assessment',
        'Strategy development'
      ],
      price: 'From $499/consultation'
    }
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <h1 className="services-title">
          Comprehensive <span className="gradient-text">Trade Solutions</span>
        </h1>
        <p className="services-subtitle">
          Professional import and export services designed to simplify your international operations and ensure business growth.
        </p>
      </section>

      {/* Services Grid */}
      <section className="services-grid-section">
        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="service-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>

              <div className="service-features">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="feature-item">
                    <span className="feature-check">✓</span>
                    <span className="feature-text">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="service-footer">
                <div className="service-price">{service.price}</div>
                <button className="service-btn">Get Service</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Quote Section */}
      <section className="services-trust">
        <div className="trust-content">
          <h2 className="section-title">Transparent & Reliability</h2>
          <p className="trust-text">
            No industry jargon, no hidden fees. You'll know exactly what you're paying for, when your goods will ship, and how they'll arrive.
          </p>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="services-cta">
        <h2 className="cta-title">Need a Custom B2B Solution?</h2>
        <p className="cta-description">
          Our team can create a tailored package that perfectly fits your specific industry and volume requirements.
        </p>
        <Link to="/contact" className="cta-btn">
          Request Custom Quote
        </Link>
      </section>
    </div>
  );
}

export default Services;
