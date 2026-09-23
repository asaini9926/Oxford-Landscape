import React, { useState } from 'react';
import {
  Phone, Mail, MapPin, Globe, Clock,
  Send, MessageSquare, CheckCircle2
} from 'lucide-react';
import './ContactSection.css';
import useReveal from './useReveal';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Landscaping Services',
    area: '1,000 - 5,000 sq ft',
    message: '',
  });

  useReveal();

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Oxford Landscape! My name is ${formData.name || 'a visitor'}. I am interested in ${formData.service} for approximately ${formData.area}. ${formData.message ? 'Message: ' + formData.message : 'Please share a consultation.'}`
    );
    window.open(`https://wa.me/918505055304?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="contact-section section">
      <div className="container">
        <div className="section-header reveal">
          <p className="eyebrow">Get In Touch</p>
          <h2 className="section-title">Start Your Landscape Journey</h2>
          <p className="section-subtitle">
            Whether you're planning a rooftop terrace, luxury farmhouse estate, or corporate campus —
            Oxford Landscape is ready to bring your vision to life.
          </p>
        </div>

        <div className="contact-grid">
          {/* Info Column */}
          <div className="contact-info reveal-left">
            <p className="contact-intro">
              Our senior landscape architects and horticulturists are ready to assess your
              space and create a customized proposal tailored to your vision and budget.
            </p>

            <div className="contact-details">
              <a href="tel:+918505055304" className="contact-detail-item">
                <div className="cdi-icon"><Phone size={20} /></div>
                <div>
                  <span className="cdi-label">Call or WhatsApp</span>
                  <span className="cdi-value">+91 8505055304</span>
                </div>
              </a>

              <a href="mailto:rajoriapawan664@gmail.com" className="contact-detail-item">
                <div className="cdi-icon"><Mail size={20} /></div>
                <div>
                  <span className="cdi-label">Official Inquiries</span>
                  <span className="cdi-value">rajoriapawan664@gmail.com</span>
                </div>
              </a>

              <div className="contact-detail-item">
                <div className="cdi-icon"><MapPin size={20} /></div>
                <div>
                  <span className="cdi-label">Corporate Office</span>
                  <span className="cdi-value">Ganesh Road, Virat Nagar</span>
                  <span className="cdi-sub">Jaipur, Rajasthan, India</span>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="cdi-icon"><Globe size={20} /></div>
                <div>
                  <span className="cdi-label">Official Website</span>
                  <span className="cdi-value">oxfordlandscape.in</span>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="cdi-icon"><Clock size={20} /></div>
                <div>
                  <span className="cdi-label">Working Hours</span>
                  <span className="cdi-value">Mon – Sat: 9:00 AM – 7:00 PM</span>
                </div>
              </div>
            </div>

            <div className="wa-callout">
              <MessageSquare size={22} color="#16a34a" />
              <div className="wa-callout-text">
                <strong>Need Instant Consultation?</strong>
                <p>Chat directly with our landscape team on WhatsApp</p>
              </div>
              <button onClick={handleWhatsApp} className="wa-callout-btn">
                WhatsApp Now
              </button>
            </div>
          </div>

          {/* Form Card */}
          <div className="contact-form-card reveal-right">
            {submitted ? (
              <div className="form-success">
                <div className="form-success-icon">
                  <CheckCircle2 size={36} />
                </div>
                <h3>Inquiry Received!</h3>
                <p>
                  Thank you, <strong>{formData.name}</strong>. Our senior landscape architect will
                  contact you at <strong>{formData.phone}</strong> within 24 business hours
                  to schedule your initial site assessment.
                </p>
                <button
                  className="btn btn-primary"
                  onClick={() => setSubmitted(false)}
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <>
                <h3 className="contact-form-title">Request a Site Assessment</h3>
                <p className="contact-form-sub">
                  Fill out your project specifications for a customized proposal.
                </p>

                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-field">
                      <label htmlFor="cf-name">Full Name *</label>
                      <input
                        type="text"
                        id="cf-name"
                        name="name"
                        required
                        placeholder="e.g. Vikramaditya Singhania"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-field">
                      <label htmlFor="cf-phone">Phone Number *</label>
                      <input
                        type="tel"
                        id="cf-phone"
                        name="phone"
                        required
                        placeholder="+91 98112 22276"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-field">
                      <label htmlFor="cf-email">Email Address *</label>
                      <input
                        type="email"
                        id="cf-email"
                        name="email"
                        required
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-field">
                      <label htmlFor="cf-service">Service Required</label>
                      <select id="cf-service" name="service" value={formData.service} onChange={handleChange}>
                        <option value="Landscaping Services">Landscaping Services (Turnkey)</option>
                        <option value="Terrace Garden Services">Terrace Garden & Sky Lounge</option>
                        <option value="Farmhouse Construction">Farmhouse Construction Services</option>
                        <option value="Horticulture Services">Horticulture Services & Turfing</option>
                        <option value="Garden Maintenance AMC">Garden & Landscaping AMC</option>
                        <option value="Pergola & Water Features">Pergolas, Gazebos & Fountains</option>
                        <option value="Vertical Gardens">Vertical Living Green Wall</option>
                        <option value="Tree Transplantation">Tree Transplantation Services</option>
                        <option value="Garden Re-Innovation">Garden Re-Innovation & Redesign</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-field">
                    <label htmlFor="cf-area">Approximate Space / Area</label>
                    <select id="cf-area" name="area" value={formData.area} onChange={handleChange}>
                      <option value="Under 1,000 sq ft">Under 1,000 sq ft (Balcony / Small Terrace)</option>
                      <option value="1,000 - 5,000 sq ft">1,000 – 5,000 sq ft (Villa Lawn / Medium Terrace)</option>
                      <option value="5,000 - 15,000 sq ft">5,000 – 15,000 sq ft (Large Courtyard / Estate)</option>
                      <option value="Acreage / Farmhouse">1 Acre+ (Luxury Country Farmhouse)</option>
                      <option value="Commercial / Institutional">Multi-Acre Institutional / Corporate Campus</option>
                    </select>
                  </div>

                  <div className="form-field">
                    <label htmlFor="cf-message">Project Details / Special Requests</label>
                    <textarea
                      id="cf-message"
                      name="message"
                      rows="4"
                      placeholder="Tell us about your space, key ideas (e.g. firepit, water wall, gazebo), and preferred timelines..."
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-submit-row">
                    <button type="submit" className="btn btn-primary">
                      Submit Inquiry <Send size={15} />
                    </button>
                    <button type="button" className="btn btn-outline" onClick={handleWhatsApp}>
                      <MessageSquare size={15} /> Send via WhatsApp
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
