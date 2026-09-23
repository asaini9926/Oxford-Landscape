import React from 'react';
import { Phone, Mail, MapPin, Globe, ArrowUp } from 'lucide-react';
import { getAssetUrl } from '../utils/asset';
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
              <img
                src={getAssetUrl('/images/logo.png')}
                alt="Oxford Landscape Logo"
                className="footer-logo-img"
              />
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
              <li><a href="#team">Scientific Team</a></li>
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
                  <span>Ganesh Road, Virat Nagar</span>
                  <span>Jaipur, Rajasthan, India</span>
                </div>
              </div>
              <div className="f-item">
                <Phone size={16} className="f-icon" />
                <div>
                  <strong>Direct Line</strong>
                  <a href="tel:+918505055304">+91 8505055304</a>
                </div>
              </div>
              <div className="f-item">
                <Mail size={16} className="f-icon" />
                <div>
                  <strong>Email</strong>
                  <a href="mailto:rajoriapawan664@gmail.com">rajoriapawan664@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-copy">
            © {new Date().getFullYear()} <strong>Oxford Landscape</strong> (oxfordlandscape.in). All rights reserved.
          </p>
          <p className="footer-credit">
            Made with care by <a href="https://www.a2solution.in/" target="_blank" rel="noopener noreferrer">A2Solution</a>
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
