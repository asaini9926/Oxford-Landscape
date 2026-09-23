import React from 'react';
import { Trees, Phone, Mail, MapPin, Globe, ArrowUp } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <a href="#home" className="footer-logo" aria-label="Oxford Landscape Home">
              <div className="footer-logo-mark"><Trees size={22} /></div>
              <div>
                <div className="footer-brand-name">Oxford Landscape</div>
                <div className="footer-brand-tag">Landscaping is in our DNA</div>
              </div>
            </a>
            <p className="footer-desc">
              North India's trusted partner for turnkey landscape architecture,
              custom hardscaping, terrace gardens, and scientific horticultural maintenance.
              Over 10+ years of excellence.
            </p>
            <div className="footer-domain">
              <Globe size={14} />
              oxfordlandscape.in
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-nav-list">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Our Services</a></li>
              <li><a href="#clients">Top Clients</a></li>
              <li><a href="#gallery">Portfolio</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="footer-col-title">Core Services</h4>
            <ul className="footer-nav-list">
              <li><a href="#services">Landscaping Services</a></li>
              <li><a href="#services">Terrace Garden</a></li>
              <li><a href="#services">Farmhouse Construction</a></li>
              <li><a href="#services">Horticulture & Turfing</a></li>
              <li><a href="#services">Garden AMC</a></li>
              <li><a href="#services">Vertical Gardens</a></li>
              <li><a href="#services">Tree Transplantation</a></li>
              <li><a href="#services">Garden Re-Innovation</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="footer-col-title">Contact & Office</h4>
            <div className="footer-contact-items">
              <div className="f-item">
                <MapPin size={16} className="f-icon" />
                <div>
                  <strong>Head Office</strong>
                  <span>A-126, Sector 63, Noida</span>
                  <span>UP – 201301, India</span>
                </div>
              </div>
              <div className="f-item">
                <Phone size={16} className="f-icon" />
                <div>
                  <strong>Direct Line</strong>
                  <a href="tel:+919811222276">+91 9811222276</a>
                </div>
              </div>
              <div className="f-item">
                <Mail size={16} className="f-icon" />
                <div>
                  <strong>Email</strong>
                  <a href="mailto:contact@oxfordlandscape.in">contact@oxfordlandscape.in</a>
                  <a href="mailto:info@oxfordlandscape.in">info@oxfordlandscape.in</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-copy">
            © {new Date().getFullYear()} <strong>Oxford Landscape</strong> (oxfordlandscape.in).
            All rights reserved. Crafted with excellence for living spaces across North India.
          </p>
          <button className="back-to-top" onClick={scrollTop} aria-label="Back to top">
            <ArrowUp size={14} />
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
}
