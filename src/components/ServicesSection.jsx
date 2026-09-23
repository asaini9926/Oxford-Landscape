import React, { useState } from 'react';
import {
  Shovel, RefreshCcw, Leaf, Layers, Home, Building, Wrench, TreePine,
  ArrowRight, CheckCircle, PhoneCall, X
} from 'lucide-react';
import './ServicesSection.css';
import useReveal from './useReveal';
import { getAssetUrl } from '../utils/asset';

const SERVICES = [
  {
    id: 'tree-transplant',
    name: 'Tree Transplantation',
    tagline: 'Scientific Relocation of Mature Flora',
    desc: 'Specialized scientific relocation of mature and heritage trees using root-ball preservation, crane transit, and post-transplant root stimulants.',
    scope: [
      'Arborist health assessment & canopy trimming',
      'Excavation with geotextile root-ball wrapping',
      'Safe crane transit & fertile soil replanting',
      'Shock management with specialized rooting hormones',
    ],
    icon: <TreePine size={20} />,
    img: '/images/services/tree_transplant.jpg',
  },
  {
    id: 're-innovation',
    name: 'Re-Innovation Services',
    tagline: 'Garden Upgrades & Modernization',
    desc: 'Breathing fresh life into neglected or outdated landscapes through contemporary layouts, soil revival, modern water features, and hardscape rehabilitation.',
    scope: [
      'Site evaluation and aesthetic gap analysis',
      'Selective flora retention & modern species introduction',
      'Hardscape refinishing & deck revival',
      'Smart LED lighting & automated micro-irrigation retrofits',
    ],
    icon: <RefreshCcw size={20} />,
    img: '/images/services/reinnovation.jpg',
  },
  {
    id: 'horticulture',
    name: 'Horticulture Services',
    tagline: 'Expert Flora Selection & Soil Science',
    desc: 'Complete plant care solutions covering plant selection, plantation, soil preparation, lawn turf development, and seasonal nutrition regimes.',
    scope: [
      'Climate-adapted species curation & soil enrichment',
      'Lawn turf laying & automated drip/sprinkler networks',
      'Ornamental shrubs, topiaries & seasonal flowering beds',
      'Customized organic nutrition & pest management',
    ],
    icon: <Leaf size={20} />,
    img: '/images/services/horticulture.jpg',
  },
  {
    id: 'landscaping',
    name: 'Landscaping Services',
    tagline: 'Turnkey Architectural Outdoor Execution',
    desc: 'Master landscape development spanning 2D/3D conceptualization, site grading, natural stone walkways, ambient illumination, and greenery integration.',
    scope: [
      'Comprehensive 2D architectural master planning',
      'Precision civil hardscaping, drainage & grading',
      'Designer stone walkways, plazas & retaining walls',
      'Turnkey execution with milestone-driven delivery',
    ],
    icon: <Layers size={20} />,
    img: '/images/services/landscaping.jpg',
  },
  {
    id: 'farmhouse',
    name: 'Farmhouse Construction',
    tagline: 'Expansive Country Estates & Luxury Grounds',
    desc: 'Transforming rural acreage into luxury farmhouse retreats with rolling lawns, private fruit orchards, custom pergolas, and stone-paved driveways.',
    scope: [
      'Acreage master planning & boundary green belts',
      'Swimming pool surrounds, decks & outdoor cabanas',
      'Native fruit orchard cultivation & kitchen gardens',
      'Heavy-duty cobble driveways and boundary treatments',
    ],
    icon: <Home size={20} />,
    img: '/images/services/farmhouse.jpg',
  },
  {
    id: 'terrace',
    name: 'Terrace Garden Services',
    tagline: 'Skyline Sanctuaries & Rooftop Lounges',
    desc: 'Engineered rooftop sanctuaries using lightweight soil mediums, advanced waterproofing, automated micro-irrigation, and structural wood decking.',
    scope: [
      'Certified weight-load & structural drainage planning',
      'Integrated waterproofing membrane protection',
      'Custom modular planters, benches & mood lighting',
      'Weather-resistant pergolas and shaded sit-outs',
    ],
    icon: <Building size={20} />,
    img: '/images/services/terrace.jpg',
  },
  {
    id: 'amc',
    name: 'Landscaping AMC',
    tagline: 'Perpetual Health, Pruning & Beauty',
    desc: 'Proactive Annual Maintenance Contracts managed by certified horticulturists, ensuring your landscape maintains its lush vigor and immaculate presentation.',
    scope: [
      'Weekly or bi-weekly scheduled site visits',
      'Precision pruning, hedge trimming & lawn aeration',
      'Seasonal replanting & organic fertilization cycles',
      'Dedicated site supervisors & rapid incident response',
    ],
    icon: <Wrench size={20} />,
    img: '/images/services/amc.jpg',
  },
  {
    id: 'vertical',
    name: 'Vertical Garden Services',
    tagline: 'Living Bio-Walls & Space Optimization',
    desc: 'Striking living green walls that maximize greenery in compact urban spaces, improving air quality, thermal insulation, and biophilic elegance.',
    scope: [
      'Modular UV-stabilized geotextile pocket systems',
      'Automated self-circulating nutrient irrigation',
      'Indoor low-light air purifying foliage options',
      'Architectural indoor lobby & outdoor façade installations',
    ],
    icon: <Shovel size={20} />,
    img: '/images/services/vertical.jpg',
  },
];

export default function ServicesSection() {
  const [activeModal, setActiveModal] = useState(null);
  useReveal();

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header reveal">
          <p className="eyebrow">What We Offer</p>
          <h2 className="section-title">Complete Landscape Solutions</h2>
          <p className="section-subtitle">
            From concept to completion — we handle every aspect of your outdoor environment
            as a one-stop solution provider.
          </p>
        </div>

        <div className="services-grid">
          {SERVICES.map((srv, i) => (
            <div
              key={srv.id}
              className={`service-card reveal delay-${Math.min(i % 4 + 1, 5)}`}
              onClick={() => setActiveModal(srv)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setActiveModal(srv)}
              aria-label={`Learn more about ${srv.name}`}
            >
              <div className="service-card-img">
                <img src={getAssetUrl(srv.img)} alt={srv.name} loading="lazy" />
              </div>
              <div className="service-card-overlay" />
              <div className="service-card-body">
                <div className="service-card-icon">{srv.icon}</div>
                <h3 className="service-card-name">{srv.name}</h3>
                <p className="service-card-tagline">{srv.tagline}</p>
                <span className="service-card-learn">
                  Learn More <ArrowRight size={13} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {activeModal && (
        <div className="modal-overlay" onClick={() => setActiveModal(null)}>
          <div className="modal-content service-modal" onClick={(e) => e.stopPropagation()}>
            <div className="service-modal-img">
              <img src={getAssetUrl(activeModal.img)} alt={activeModal.name} />
              <div className="service-modal-badge">{activeModal.tagline}</div>
              <button
                className="service-modal-close"
                onClick={() => setActiveModal(null)}
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>
            <div className="service-modal-body">
              <h3 className="service-modal-title">{activeModal.name}</h3>
              <p className="service-modal-desc">{activeModal.desc}</p>
              <div className="service-modal-scope">
                <h4>Core Scope & Deliverables</h4>
                <ul>
                  {activeModal.scope.map((item, idx) => (
                    <li key={idx}>
                      <CheckCircle size={15} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="service-modal-actions">
                <a
                  href="#contact"
                  className="btn btn-primary"
                  onClick={() => setActiveModal(null)}
                >
                  Book Site Survey <ArrowRight size={15} />
                </a>
                <a href="tel:+919811222276" className="btn btn-outline">
                  <PhoneCall size={15} /> Call +91 9811222276
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
