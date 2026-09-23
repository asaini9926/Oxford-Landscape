import React, { useState, useEffect } from 'react';
import { Trees, PhoneCall, Menu, X } from 'lucide-react';
import './Navbar.css';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Clients', href: '#clients' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Team', href: '#team' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [atHeroTop, setAtHeroTop] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      setAtHeroTop(y < 60);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setMobileOpen(false);

  return (
    <nav
      className={[
        'navbar',
        scrolled ? 'scrolled' : '',
        atHeroTop ? 'hero-top' : '',
      ].join(' ')}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container navbar-inner">
        {/* Brand */}
        <a href="#home" className="nav-brand" onClick={close} aria-label="Oxford Landscape — Home">
          <div className="nav-logo-mark">
            <Trees size={22} />
          </div>
          <div className="nav-brand-text">
            <span className="nav-brand-name">Oxford Landscape</span>
            <span className="nav-brand-tagline">Landscaping is in our DNA</span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <ul className="nav-links" role="list">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a href="#contact" className="nav-cta btn hide-mobile">
          <PhoneCall size={15} />
          Book Consultation
        </a>

        {/* Mobile Hamburger */}
        <button
          className={`nav-hamburger ${mobileOpen ? 'open' : ''}`}
          onClick={() => setMobileOpen((o) => !o)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`nav-mobile-drawer ${mobileOpen ? 'open' : ''}`} role="dialog" aria-modal="true">
        <ul>
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={close}>{l.label}</a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="nav-cta-mobile" onClick={close}>
          Book Consultation
        </a>
      </div>
    </nav>
  );
}
