import React from 'react';
import { Home, Building2, Landmark, Trees, Award, ShieldCheck, CheckCircle2, Clock } from 'lucide-react';
import './AboutSection.css';
import useReveal from './useReveal';
import { getAssetUrl } from '../utils/asset';

const sectors = [
  {
    icon: <Home size={18} />,
    title: 'Residential',
    desc: 'Courtyard gardens, rooftop terraces & intimate patio sit-outs.'
  },
  {
    icon: <Building2 size={18} />,
    title: 'Commercial & IT Parks',
    desc: 'Corporate green campuses, break-out zones & water plazas.'
  },
  {
    icon: <Landmark size={18} />,
    title: 'Institutions & Clubs',
    desc: 'Golf courses, academic academies & luxury hospitality resorts.'
  },
  {
    icon: <Trees size={18} />,
    title: 'Farmhouses & Estates',
    desc: 'Orchard developments, infinity lawns & perimeter plantations.'
  },
];

const pillars = [
  { icon: <Award size={16} />, label: '10+ Years Experience' },
  { icon: <ShieldCheck size={16} />, label: 'Quality Materials' },
  { icon: <CheckCircle2 size={16} />, label: 'Attention to Detail' },
  { icon: <Clock size={16} />, label: 'Timely Delivery' },
];

export default function AboutSection() {
  useReveal();
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">
          {/* Visual */}
          <div className="about-visual reveal-left">
            <div className="about-img-main">
              <img
                src={getAssetUrl('/images/about/rooftop_lawn.png')}
                alt="Oxford Landscape manicured green estate"
                loading="lazy"
              />
            </div>
            <div className="about-img-accent">
              <img
                src={getAssetUrl('/images/about/backyard_patio.jpeg')}
                alt="Oxford Landscape bespoke patio and greenery"
                loading="lazy"
              />
            </div>
            <div className="about-experience-badge">
              <span className="exp-badge-number">10+</span>
              <span className="exp-badge-label">Years of<br />Excellence</span>
            </div>
          </div>

          {/* Text */}
          <div className="about-text reveal-right">
            <p className="eyebrow">About Oxford Landscape</p>
            <h2 className="section-title">
              Turning Spaces Into<br />
              <em style={{ fontStyle: 'italic', color: 'var(--primary)' }}>Living Masterpieces</em>
            </h2>
            <p className="about-desc">
              Oxford Landscape is a premier landscaping and garden development company
              with over <strong>10+ years of industry experience</strong>. We specialize in
              landscape design, construction, consultancy, hardscaping, and complete
              execution — delivering high-quality, aesthetically pleasing, and sustainable
              outdoor environments across North India.
            </p>
            <p className="about-desc">
              We follow a performance-driven approach, focusing on quality materials,
              attention to detail, transparent processes, and timely project delivery.
              Serving residential, commercial, institutional, and farmhouse projects
              across Delhi NCR and North India.
            </p>

            <div className="about-sectors">
              {sectors.map((s, i) => (
                <div key={i} className="sector-item">
                  <div className="sector-icon">{s.icon}</div>
                  <div>
                    <h4>{s.title}</h4>
                    <p>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="about-pillars">
              {pillars.map((p, i) => (
                <div key={i} className="pillar">
                  {p.icon}
                  {p.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
