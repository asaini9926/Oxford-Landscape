import React from 'react';
import { Lightbulb, Maximize2, Compass, Droplet, Sun, ArrowRight } from 'lucide-react';
import './DesignIdeasSection.css';

export default function DesignIdeasSection() {
  const ideas = [
    {
      slide: 'Slide 17',
      title: 'Stepped Topography & Terraced Plantings',
      category: 'Sloped Gardens',
      desc: 'Tiered natural stone steps flanked by ornamental creeping groundcovers, transforming elevation changes into stunning focal points.',
      img: '/images/design_ideas/stepped_stone_steps.jpeg'
    },
    {
      slide: 'Slide 17',
      title: 'Infinity Lawns with Scenic Overlooks',
      category: 'Estate Lawns',
      desc: 'Seamless carpet turf extending toward panoramic horizon views with boundary glass balustrades and subtle perimeter uplighting.',
      img: '/images/design_ideas/infinity_lawn_overlook.jpeg'
    },
    {
      slide: 'Slide 18',
      title: 'Nocturnal Sky Lounge & Fire Feature',
      category: 'Rooftop Entertaining',
      desc: 'Warm ambient LED recessed base lighting, custom granite fire table, and weather-resistant outdoor lounge sectionals for nighttime luxury.',
      img: '/images/design_ideas/rooftop_lounge_night.png'
    },
    {
      slide: 'Slide 19',
      title: 'Japanese Zen Rock & Water Oasis',
      category: 'Tranquil Courtyard',
      desc: 'River rock beds, bespoke stone basin bubblers, and delicate Japanese maples creating a serene, low-maintenance retreat.',
      img: '/images/design_ideas/zen_rock_fountain.png'
    },
    {
      slide: 'Slide 20',
      title: 'Luxury Courtyard & Water Reflection',
      category: 'Villa Courtyards',
      desc: 'Geometric water mirrors paired with vertical greenery and travertine pavers, delivering architectural harmony and natural cooling.',
      img: '/images/design_ideas/luxury_courtyard_pool.png'
    }
  ];

  const pillars = [
    {
      icon: <Maximize2 size={24} />,
      title: 'Space Optimization',
      desc: 'Unlocking every square foot of balconies, side alleys, and courtyards into functional living extensions.'
    },
    {
      icon: <Compass size={24} />,
      title: 'Aesthetic Balance',
      desc: 'Seamless synergy between architectural hardscaping, geometric paving, and natural organic flora.'
    },
    {
      icon: <Sun size={24} />,
      title: 'Ecological Sustainability',
      desc: 'Solar-friendly planting, rainwater recharge wells, and hardy climate-resilient species.'
    }
  ];

  return (
    <section className="section design-ideas-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">CLIENT INSPIRATION</div>
          <h2 className="section-title">Design Ideas For Clients</h2>
          <p className="section-subtitle">
            We provide innovative, customized concepts tailored to your space, lifestyle, and budget—ensuring 
            a perfect harmony of greenery, architectural structure, and long-term sustainability.
          </p>
        </div>

        {/* 3 Core Design Pillars */}
        <div className="design-pillars-grid">
          {pillars.map((p, i) => (
            <div key={i} className="design-pillar-card">
              <div className="dp-icon">{p.icon}</div>
              <h4>{p.title}</h4>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Design Concepts Gallery (Slides 17-20) */}
        <div className="ideas-grid">
          {ideas.map((item, idx) => (
            <div key={idx} className={`idea-card ${idx === 0 || idx === 1 ? 'idea-card-wide' : ''}`}>
              <div className="idea-img-wrap">
                <img src={item.img} alt={item.title} loading="lazy" />
                <div className="idea-badge">{item.slide}</div>
              </div>
              <div className="idea-content">
                <span className="idea-category">{item.category}</span>
                <h3 className="idea-title">{item.title}</h3>
                <p className="idea-desc">{item.desc}</p>
                <a href="#contact" className="idea-link">
                  <span>Inquire for this style &rarr;</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
