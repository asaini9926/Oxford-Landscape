import React, { useState } from 'react';
import OxfordLogo from './OxfordLogo';
import './ProductDesigns.css';

export default function ProductDesigns() {
  const [activeTab, setActiveTab] = useState('pergola_water');

  return (
    <section id="products" className="products-slide-section theme-cream-editorial">
      <div className="container">
        {/* Navigation Tabs for Slides 10-13 */}
        <div className="products-deck-tabs">
          <button
            className={`deck-tab-btn ${activeTab === 'pergola_water' ? 'active' : ''}`}
            onClick={() => setActiveTab('pergola_water')}
          >
            <span>Pergola &amp; Water Feature (Slide 10)</span>
          </button>
          <button
            className={`deck-tab-btn ${activeTab === 'water_cascade' ? 'active' : ''}`}
            onClick={() => setActiveTab('water_cascade')}
          >
            <span>Water Feature Cascades (Slide 11)</span>
          </button>
          <button
            className={`deck-tab-btn ${activeTab === 'outdoor_seating' ? 'active' : ''}`}
            onClick={() => setActiveTab('outdoor_seating')}
          >
            <span>Outdoor Seating (Slide 12)</span>
          </button>
          <button
            className={`deck-tab-btn ${activeTab === 'gazebo' ? 'active' : ''}`}
            onClick={() => setActiveTab('gazebo')}
          >
            <span>Gazebo Collection (Slide 13)</span>
          </button>
        </div>

        {/* =========================================================
            SLIDE 10: EXACT 1-TO-1 MATCH OF SLIDE 10
            Bold Title + Pergola and Sitout + Water Feature
            ========================================================= */}
        {activeTab === 'pergola_water' && (
          <div className="slide10-content">
            <div className="slide10-header">
              <h2 className="slide-bold-title">
                PRODUCT DESIGNS OF OXFORD LANDSCAPE
              </h2>
            </div>

            <div className="slide-cards-row">
              <div className="product-arch-card">
                <div className="arch-card-frame">
                  <img
                    src="/images/products/wooden_pergola_bench.png"
                    alt="Pergola and Sitout by Oxford Landscape"
                    loading="lazy"
                  />
                </div>
                <h3 className="photo-label-serif">PERGOLA AND SITOUT</h3>
              </div>

              <div className="product-arch-card">
                <div className="arch-card-frame">
                  <img
                    src="/images/products/stone_sheet_waterfall.png"
                    alt="Sheer Water Curtain Wall Feature"
                    loading="lazy"
                  />
                </div>
                <h3 className="photo-label-serif">WATER FEATURE</h3>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================
            SLIDE 11: WATER FEATURE CASCADE COLLECTION
            ========================================================= */}
        {activeTab === 'water_cascade' && (
          <div className="slide11-content">
            <div className="slide-center-header">
              <h2 className="slide-serif-heading">WATER FEATURE</h2>
            </div>

            <div className="slide-cards-row">
              <div className="product-arch-card">
                <div className="arch-card-frame">
                  <img
                    src="/images/products/water_wall_cascade.png"
                    alt="Cascading Stone Waterfall Wall"
                    loading="lazy"
                  />
                </div>
                <h3 className="photo-label-serif">CASCADING WATER WALL</h3>
              </div>

              <div className="product-arch-card">
                <div className="arch-card-frame">
                  <img
                    src="/images/products/water_curtain.png"
                    alt="Linear Overflow Water Chute Basin"
                    loading="lazy"
                  />
                </div>
                <h3 className="photo-label-serif">LINEAR REFLECTING CASCADE</h3>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================
            SLIDE 12: OUTDOOR SEATING COLLECTION
            ========================================================= */}
        {activeTab === 'outdoor_seating' && (
          <div className="slide12-content">
            <div className="slide-left-header">
              <h2 className="slide-serif-heading-left">Outdoor Seating</h2>
            </div>

            <div className="slide-cards-row">
              <div className="product-arch-card">
                <div className="arch-card-frame rounded-20">
                  <img
                    src="/images/products/curved_firepit_sofa.jpeg"
                    alt="Outdoor Wicker Dining and Lawn Seating"
                    loading="lazy"
                  />
                </div>
                <h3 className="photo-label-serif">GARDEN DINING SET</h3>
              </div>

              <div className="product-arch-card">
                <div className="arch-card-frame rounded-20">
                  <img
                    src="/images/products/patio_lounge_seating.jpeg"
                    alt="Modern Patio Sunken Firepit Lounge"
                    loading="lazy"
                  />
                </div>
                <h3 className="photo-label-serif">SUNKEN FIREPIT LOUNGE</h3>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================
            SLIDE 13: GAZEBO 4-PHOTO SHOWCASE
            ========================================================= */}
        {activeTab === 'gazebo' && (
          <div className="slide13-content">
            <div className="slide-left-header">
              <h2 className="slide-bold-title-left">Gazebo</h2>
            </div>

            <div className="gazebo-quad-grid">
              <div className="gazebo-quad-card">
                <div className="arch-card-frame">
                  <img
                    src="/images/products/gazebo_wood_deck.png"
                    alt="Poolside Timber Gazebo Cabana"
                    loading="lazy"
                  />
                </div>
                <h4 className="photo-label-serif">POOLSIDE TIMBER CABANA</h4>
              </div>

              <div className="gazebo-quad-card">
                <div className="arch-card-frame">
                  <img
                    src="/images/products/octagonal_gazebo.png"
                    alt="Rooftop Deck Timber Gazebo with Firepit"
                    loading="lazy"
                  />
                </div>
                <h4 className="photo-label-serif">ROOFTOP DECK TIMBER GAZEBO</h4>
              </div>

              <div className="gazebo-quad-card">
                <div className="arch-card-frame">
                  <img
                    src="/images/products/modern_steel_pavilion.png"
                    alt="Solid Timber Garden Gazebo"
                    loading="lazy"
                  />
                </div>
                <h4 className="photo-label-serif">CLASSIC WOODEN GAZEBO</h4>
              </div>

              <div className="gazebo-quad-card">
                <div className="arch-card-frame">
                  <img
                    src="/images/products/garden_canopy_shelter.png"
                    alt="Contemporary Steel Shade Pavilion"
                    loading="lazy"
                  />
                </div>
                <h4 className="photo-label-serif">ARCHITECTURAL SHADE CANOPY</h4>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Slide Brand Watermark */}
        <div className="products-footer-logo">
          <OxfordLogo height={32} />
        </div>
      </div>
    </section>
  );
}
