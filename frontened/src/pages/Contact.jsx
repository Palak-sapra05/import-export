import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';

function Contact() {
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', country: '', requirement: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Assuming the backend handles the new fields
      await axios.post('http://localhost:5000/api/enquiry', form);
      alert('✅ Inquiry sent successfully! Our trade consultant will contact you within 24 hours.');
      setForm({ name: '', company: '', email: '', phone: '', country: '', requirement: '', message: '' });
    } catch (err) {
      alert('❌ Failed to send inquiry. Please try again or email us directly at business@tradeportal.com');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <h1 className="contact-title">
          Ready to Discuss Your <span className="gradient-text">Import-Export Needs?</span>
        </h1>
        <p className="contact-subtitle">
          Whether you're looking for new suppliers, need quality assurance, or want transparent shipping quotes—we're here to help. Typical response time: 24 hours.
        </p>
      </section>

      {/* Main Content */}
      <div className="contact-container">
        {/* Contact Information */}
        <div className="contact-info">
          <h2 className="info-title">Global Contact Info</h2>
          <p className="info-subtitle">Fill out the form or reach us directly via email</p>

          <div className="info-cards">
            <div className="info-card">
              <div className="info-icon">📧</div>
              <div className="info-text">
                <h3 className="info-label">Email</h3>
                <p className="info-value">business@tradeportal.com</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">📞</div>
              <div className="info-text">
                <h3 className="info-label">Phone</h3>
                <p className="info-value">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">🕐</div>
              <div className="info-text">
                <h3 className="info-label">Business Hours</h3>
                <p className="info-value">Mon - Fri: 9AM - 6PM EST</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">📍</div>
              <div className="info-text">
                <h3 className="info-label">Headquarters</h3>
                <p className="info-value">123 Trade Street, Rotterdam, Netherlands</p>
              </div>
            </div>
          </div>

          <div className="trust-badges">
            <p className="trust-label">✓ Pre-shipment Inspections Available</p>
            <p className="trust-label">✓ Verified Supplier Network</p>
            <p className="trust-label">✓ Transparent Incoterms & Pricing</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form-section">
          <form onSubmit={handleSubmit} className="contact-form">
            <h2 className="form-title">Send Detailed Inquiry</h2>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Full Name*</label>
                <input
                  id="name"
                  type="text"
                  className="form-input"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="company" className="form-label">Company Name*</label>
                <input
                  id="company"
                  type="text"
                  className="form-input"
                  placeholder="Your Company Ltd."
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address*</label>
                <input
                  id="email"
                  type="email"
                  className="form-input"
                  placeholder="john@company.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone" className="form-label">Phone Number</label>
                <input
                  id="phone"
                  type="tel"
                  className="form-input"
                  placeholder="+1 (555) 000-0000"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="country" className="form-label">Destination Country*</label>
              <input
                id="country"
                type="text"
                className="form-input"
                placeholder="e.g. USA, Germany, UAE"
                value={form.country}
                onChange={(e) => setForm({ ...form, country: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="requirement" className="form-label">Product/Service Requirement*</label>
              <select
                id="requirement"
                className="form-select"
                value={form.requirement}
                onChange={(e) => setForm({ ...form, requirement: e.target.value })}
                required
              >
                <option value="">Select a service</option>
                <option value="Sourcing">Product Sourcing</option>
                <option value="Inspection">Quality Inspection</option>
                <option value="Shipping">Logistics & Shipping</option>
                <option value="Customs">Customs Clearance</option>
                <option value="Other">Other Inquiry</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Additional Details</label>
              <textarea
                id="message"
                className="form-textarea"
                placeholder="Please describe your volume, timeline, and specific needs..."
                rows="4"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </div>

            <button type="submit" className="form-submit" disabled={loading}>
              {loading ? <span className="spinner"></span> : 'Send Inquiry →'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
