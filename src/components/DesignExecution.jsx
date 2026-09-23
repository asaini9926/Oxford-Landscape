import React, { useState } from 'react';
import OxfordLogo from './OxfordLogo';
import './DesignExecution.css';

export default function DesignExecution() {
  const [activeTab, setActiveTab] = useState('slide5');

  return (
    <section id="execution" className="execution-slide-section theme-cream-editorial">
      <div className="container">
        {/* Exact Slide 5 Editorial Serif Header */}
        <div className="execution-header">
          <h2 className="execution-serif-title">
            GARDEN LANDSCAPING AND TERRACE GARDEN
          </h2>
          <p className="execution-serif-subtitle">DESIGNING &amp; EXECUTION LIFECYCLE</p>
        </div>

        {/* Slide Selector Tabs styled like editorial architectural tabs */}
        <div className="execution-deck-tabs">
          <button
            className={`deck-tab-btn ${activeTab === 'slide5' ? 'active' : ''}`}
            onClick={() => setActiveTab('slide5')}
          >
            <span>Master Concept &amp; CAD (Slide 5)</span>
          </button>
          <button
            className={`deck-tab-btn ${activeTab === 'slide6' ? 'active' : ''}`}
            onClick={() => setActiveTab('slide6')}
          >
            <span>Civil Masonry &amp; Foundation (Slide 6)</span>
          </button>
          <button
            className={`deck-tab-btn ${activeTab === 'slide7' ? 'active' : ''}`}
            onClick={() => setActiveTab('slide7')}
          >
            <span>Hardscaping &amp; Pergola Build (Slide 7)</span>
          </button>
          <button
            className={`deck-tab-btn ${activeTab === 'slide8' ? 'active' : ''}`}
            onClick={() => setActiveTab('slide8')}
          >
            <span>Completed Terrace Oasis (Slide 8)</span>
          </button>
        </div>

        {/* SLIDE 5 VIEW: EXACT 1-TO-1 MATCH OF SLIDE 5 */}
        {activeTab === 'slide5' && (
          <div className="slide5-layout-grid">
            {/* Left Card: Designing CAD Layout */}
            <div className="slide5-plan-card">
              <div className="slide5-arch-frame">
                <img
                  src="/images/execution/plan_cad_2d.png"
                  alt="Garden Landscaping 2D CAD Layout Design"
                  loading="lazy"
                />
              </div>
              <h3 className="photo-label-serif">DESIGNING</h3>
            </div>

            {/* Right Card: Execution Colored Master Plan */}
            <div className="slide5-plan-card">
              <div className="slide5-arch-frame">
                <img
                  src="/images/execution/execution_layout.png"
                  alt="Terrace Garden Master Execution Plan with Gazebo"
                  loading="lazy"
                />
              </div>
              <h3 className="photo-label-serif">EXECUTION</h3>
            </div>
          </div>
        )}

        {/* SLIDE 6 VIEW: CIVIL MASONRY & FOUNDATION */}
        {activeTab === 'slide6' && (
          <div className="slide-photo-gallery-grid grid-3">
            <div className="gallery-photo-card">
              <div className="arch-card-frame">
                <img
                  src="/images/execution/site_prep.png"
                  alt="Excavation & Base Preparation"
                  loading="lazy"
                />
              </div>
              <h4 className="photo-label-serif">SITE PREPARATION</h4>
            </div>
            <div className="gallery-photo-card">
              <div className="arch-card-frame">
                <img
                  src="/images/execution/curved_masonry.png"
                  alt="Curved Stone Seating Construction"
                  loading="lazy"
                />
              </div>
              <h4 className="photo-label-serif">CURVED MASONRY</h4>
            </div>
            <div className="gallery-photo-card">
              <div className="arch-card-frame">
                <img
                  src="/images/execution/brick_seating.png"
                  alt="Brickwork Planter Enclosures"
                  loading="lazy"
                />
              </div>
              <h4 className="photo-label-serif">PLANTER ENCLOSURES</h4>
            </div>
          </div>
        )}

        {/* SLIDE 7 VIEW: HARDSCAPING & TIMBER PERGOLA */}
        {activeTab === 'slide7' && (
          <div className="slide-photo-gallery-grid grid-3">
            <div className="gallery-photo-card">
              <div className="arch-card-frame">
                <img
                  src="/images/execution/terrace_hardscape.png"
                  alt="Natural Stone Paving Grid"
                  loading="lazy"
                />
              </div>
              <h4 className="photo-label-serif">STONE PAVING</h4>
            </div>
            <div className="gallery-photo-card">
              <div className="arch-card-frame">
                <img
                  src="/images/execution/wooden_pergola_build.png"
                  alt="Solid Timber Pergola Assembly"
                  loading="lazy"
                />
              </div>
              <h4 className="photo-label-serif">PERGOLA FRAMING</h4>
            </div>
            <div className="gallery-photo-card">
              <div className="arch-card-frame">
                <img
                  src="/images/execution/paving_work.png"
                  alt="Flagstone Terrace Pathway"
                  loading="lazy"
                />
              </div>
              <h4 className="photo-label-serif">DECK HARDSCAPING</h4>
            </div>
          </div>
        )}

        {/* SLIDE 8 VIEW: COMPLETED OASIS & AMBIANCE */}
        {activeTab === 'slide8' && (
          <div className="slide-photo-gallery-grid grid-2">
            <div className="gallery-photo-card">
              <div className="arch-card-frame">
                <img
                  src="/images/execution/completed_terrace.png"
                  alt="Completed Terrace Garden Oasis"
                  loading="lazy"
                />
              </div>
              <h4 className="photo-label-serif">COMPLETED TERRACE OASIS</h4>
            </div>
            <div className="gallery-photo-card">
              <div className="arch-card-frame">
                <img
                  src="/images/execution/evening_ambiance.png"
                  alt="Evening Ambiance & Illumination"
                  loading="lazy"
                />
              </div>
              <h4 className="photo-label-serif">EVENING ILLUMINATION</h4>
            </div>
          </div>
        )}

        {/* Bottom Slide Brand Watermark */}
        <div className="execution-footer-logo">
          <OxfordLogo height={32} />
        </div>
      </div>
    </section>
  );
}
