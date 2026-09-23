import React, { useState } from 'react';
import { MapPin, CheckCircle, Sparkles, Layers, Info, ArrowRight } from 'lucide-react';
import './OngoingProjectGGaon.css';

export default function OngoingProjectGGaon() {
  const [selectedZone, setSelectedZone] = useState(0);

  const zones = [
    {
      id: 0,
      title: 'Timber Pergola & Outdoor Lounge',
      desc: 'Shaded bespoke wooden pergola featuring built-in cushioned seating, low coffee table, and concealed lighting for evening entertaining.',
      tag: 'Zone A - Social Hub',
      features: ['Seasoned Teak Timber', 'Weatherproof Upholstery', 'Warm 2700K Downlights']
    },
    {
      id: 1,
      title: 'Zen Buddha Water Sanctuary',
      desc: 'Central contemplative focal point with a handcrafted stone Buddha sculpture, vertical bamboo accent paneling, and a tranquil water basin.',
      tag: 'Zone B - Meditation Alcove',
      features: ['Hand-Carved Stone Idol', 'Natural Bamboo Trellis', 'Acoustic Water Basin']
    },
    {
      id: 2,
      title: 'Stepped Terrace Water Feature',
      desc: 'Linear water cascade built directly into the perimeter wall with underwater LED illumination and automated filtration.',
      tag: 'Zone C - Aquatic Wall',
      features: ['Slate Clad Spillway', 'Concealed Pump Submersible', 'Overflow Catchment']
    },
    {
      id: 3,
      title: 'Lawn Turf & Stepping Stone Walkway',
      desc: 'Expansive lush carpet lawn intersected by organic stone flag pavers connecting the villa entrance to the deck pavilion.',
      tag: 'Zone D - Central Green',
      features: ['Bermuda Selection Turf', 'Natural Sandstone Pavers', 'Automated Pop-Up Sprinklers']
    },
    {
      id: 4,
      title: 'Perimeter Planters & Elevated Benches',
      desc: 'Cast-in-place concrete planter troughs framing the terrace perimeter with mixed foliage and continuous floating wood benches.',
      tag: 'Zone E - Green Boundary',
      features: ['Root-Proof Waterproofing', 'Floating Hardwood Benches', 'Multi-Tiered Foliage']
    }
  ];

  return (
    <section id="ggaon" className="section section-dark ggaon-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge badge-gold">
            <MapPin size={14} />
            <span>CASE STUDY & SITE SPOTLIGHT</span>
          </div>
          <h2 className="section-title">Ongoing Project @ G Gaon</h2>
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.8)' }}>
            An inside look at our flagship estate execution in Gurgaon. Explore the architectural 
            landscape layout and see how each zone translates from CAD blueprint to luxury reality.
          </p>
        </div>

        {/* Master Project Layout Presentation */}
        <div className="ggaon-grid">
          {/* Blueprint & Master Visual */}
          <div className="ggaon-blueprint-col">
            <div className="ggaon-img-wrapper">
              <img 
                src="/images/ggaon/slide_view.png" 
                alt="G Gaon Architectural Blueprint and Zone Photos (Slide 16)" 
                className="ggaon-main-blueprint"
                loading="lazy"
              />
              <div className="blueprint-overlay-pill">
                <Layers size={16} />
                <span>Full Master Plan & Site Details (Slide 16)</span>
              </div>
            </div>
            
            <p className="blueprint-caption">
              *Annotated architectural site layout showing the integration of social zones, 
              meditation alcoves, central turfing, and boundary water cascades.
            </p>
          </div>

          {/* Interactive Zone Navigator */}
          <div className="ggaon-zones-col">
            <div className="zone-selector-header">
              <Sparkles size={20} className="zone-sparkle" />
              <h3>Key Execution Zones</h3>
            </div>

            <div className="zones-list">
              {zones.map((z, idx) => (
                <div 
                  key={z.id}
                  className={`zone-item-card ${selectedZone === idx ? 'active' : ''}`}
                  onClick={() => setSelectedZone(idx)}
                >
                  <div className="zone-item-head">
                    <span className="zone-tag">{z.tag}</span>
                    <span className="zone-num">0{idx + 1}</span>
                  </div>

                  <h4 className="zone-title">{z.title}</h4>
                  <p className="zone-desc">{z.desc}</p>

                  <div className="zone-specs">
                    {z.features.map((f, i) => (
                      <span key={i} className="spec-pill">
                        <CheckCircle size={12} />
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="ggaon-cta-box">
              <div>
                <strong>Have a similar site in Gurgaon or NCR?</strong>
                <p>Get a customized 2D/3D master layout plan for your estate.</p>
              </div>
              <a href="#contact" className="btn btn-gold">
                <span>Book Site Survey</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
