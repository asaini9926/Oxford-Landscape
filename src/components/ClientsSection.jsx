import React from 'react';
import { Award, ShieldCheck, Building, CheckCircle2, ArrowRight } from 'lucide-react';
import './ClientsSection.css';
import useReveal from './useReveal';
import { getAssetUrl } from '../utils/asset';

const CLIENT_SECTORS = [
  {
    label: 'Infrastructure & Engineering',
    clients: ['Larsen & Toubro (L&T)', 'Bechtel', 'NHAI', 'Varindera Constructions', 'Deep Infra Tollway'],
  },
  {
    label: 'Government & Public Sector',
    clients: ['BHEL', 'Haryana Tourism', 'BrahMos Aerospace'],
  },
  {
    label: 'Real Estate & Developers',
    clients: ['M3M India', 'Great Value Homes', 'Siddharth Developers', 'GLC Group', 'M2K', 'Windsor', 'Green Beauty Farms'],
  },
  {
    label: 'Corporate & Retail',
    clients: ['Adidas', 'Reebok', 'Capgemini', 'Jaquar Group', 'S. Gopal Overseas'],
  },
  {
    label: 'Education & Institutions',
    clients: ['Delhi Public School (DPS)', 'ABES Engineering College', 'NGF College', 'Delhi Golf Club'],
  },
];

const CLIENT_LOGOS = [
  { name: 'Larsen & Toubro', logo: '/images/clients/larsen_toubro.png' },
  { name: 'BHEL', logo: '/images/clients/bhel.png' },
  { name: 'Bechtel', logo: '/images/clients/bechtel.png' },
  { name: 'NHAI', logo: '/images/clients/nhai.png' },
  { name: 'M3M India', logo: '/images/clients/m3m.png' },
  { name: 'Adidas', logo: '/images/clients/adidas.png' },
  { name: 'Reebok', logo: '/images/clients/reebok.png' },
  { name: 'Capgemini', logo: '/images/clients/capgemini.png' },
  { name: 'Jaquar Group', logo: '/images/clients/jaquar_group.png' },
  { name: 'DPS', logo: '/images/clients/delhi_public_school.png' },
  { name: 'BrahMos Aerospace', logo: '/images/clients/brahmos_aerospace.png' },
  { name: 'Haryana Tourism', logo: '/images/clients/haryana_tourism.png' },
];

export default function ClientsSection() {
  useReveal();
  return (
    <section id="clients" className="clients-section">
      <div className="container">
        <div className="section-header reveal">
          <p className="eyebrow gold">Esteemed Clientele</p>
          <h2 className="section-title">Trusted by India's Best</h2>
          <p className="section-subtitle">
            Trusted by leading multinational corporations, governmental authorities,
            premier developers, and academic institutions across Delhi NCR and North India.
          </p>
        </div>

        {/* Logo Carousel / Marquee */}
        <div className="client-logos-marquee reveal">
          <div className="client-logos-track">
            {CLIENT_LOGOS.concat(CLIENT_LOGOS).map((cl, i) => (
              <div key={i} className="client-logo-card" title={cl.name}>
                <img
                  src={getAssetUrl(cl.logo)}
                  alt={cl.name}
                  loading="lazy"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="clients-trust-strip reveal">
          <div className="trust-strip-item">
            <ShieldCheck size={18} />
            <span>Govt. & PSU Accredited</span>
          </div>
          <div className="trust-strip-item">
            <Building size={18} />
            <span>Top Tier Real Estate Developers</span>
          </div>
          <div className="trust-strip-item">
            <CheckCircle2 size={18} />
            <span>Fortune 500 Corporate Campuses</span>
          </div>
          <div className="trust-strip-item">
            <Award size={18} />
            <span>24+ Prestigious Clients</span>
          </div>
        </div>

        {/* Grouped Client Badges */}
        <div className="clients-sectors">
          {CLIENT_SECTORS.map((sector, si) => (
            <div key={si} className={`client-sector-group reveal delay-${si + 1}`}>
              <div className="client-sector-label">{sector.label}</div>
              <div className="client-badges-row">
                {sector.clients.map((name, ci) => (
                  <div key={ci} className="client-badge">
                    <span className="client-badge-dot" />
                    {name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Strip */}
        <div className="clients-cta-strip reveal">
          <div className="clients-cta-text">
            <h3>Join Our Growing Family of Premium Clients</h3>
            <p>Get a customized landscape proposal tailored to your space and vision.</p>
          </div>
          <a href="#contact" className="btn btn-gold">
            Request Proposal <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
