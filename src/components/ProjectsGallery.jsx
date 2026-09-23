import React, { useState } from 'react';
import { Maximize2, X } from 'lucide-react';
import './ProjectsGallery.css';
import useReveal from './useReveal';
import { getAssetUrl } from '../utils/asset';

const GALLERY = [
  {
    src: '/images/services/farmhouse.jpg',
    label: 'Luxury Farmhouse Estate',
    category: 'Farmhouse',
    location: 'Chattarpur, New Delhi',
  },
  {
    src: '/images/hero.jpg',
    label: 'Formal Villa Garden & Fountain',
    category: 'Villa Grounds',
    location: 'Gurugram, Haryana',
  },
  {
    src: '/images/services/terrace.jpg',
    label: 'Rooftop Terrace Sanctuary',
    category: 'Terrace Garden',
    location: 'Golf Course Road, Gurugram',
  },
  {
    src: '/images/services/landscaping.jpg',
    label: 'Grand Architectural Hardscape',
    category: 'Hardscaping',
    location: 'Noida Expressway, UP',
  },
  {
    src: '/images/services/pergola.jpg',
    label: 'Bespoke Pergola & Water Feature',
    category: 'Water Features',
    location: 'Vasant Kunj, New Delhi',
  },
  {
    src: '/images/services/vertical.jpg',
    label: 'Living Bio-Wall & Greenery',
    category: 'Vertical Garden',
    location: 'Corporate Park, CyberHub',
  },
];

export default function ProjectsGallery() {
  const [selectedImg, setSelectedImg] = useState(null);
  useReveal();

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <div className="section-header reveal">
          <p className="eyebrow">Our Portfolio</p>
          <h2 className="section-title">Landscapes We've Brought to Life</h2>
          <p className="section-subtitle">
            Every project is a unique expression of space, purpose, and natural beauty — 
            crafted with precision for lasting impact across North India.
          </p>
        </div>

        <div className="gallery-grid reveal">
          {GALLERY.map((item, i) => (
            <div
              key={i}
              className="gallery-item"
              onClick={() => setSelectedImg(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setSelectedImg(item)}
              aria-label={`View ${item.label}`}
            >
              <img src={getAssetUrl(item.src)} alt={item.label} loading="lazy" />
              <div className="gallery-item-overlay">
                <div className="gallery-item-info">
                  <span className="gallery-item-cat">{item.category}</span>
                  <span className="gallery-item-label">{item.label}</span>
                </div>
                <div className="gallery-item-zoom">
                  <Maximize2 size={18} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImg && (
        <div className="gallery-modal-overlay" onClick={() => setSelectedImg(null)}>
          <div className="gallery-modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="gallery-modal-close"
              onClick={() => setSelectedImg(null)}
              aria-label="Close image preview"
            >
              <X size={20} />
            </button>
            <img src={getAssetUrl(selectedImg.src)} alt={selectedImg.label} />
            <div className="gallery-modal-footer">
              <div>
                <span className="gallery-modal-cat">{selectedImg.category}</span>
                <h4 className="gallery-modal-title">{selectedImg.label}</h4>
                <p className="gallery-modal-loc">{selectedImg.location}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
