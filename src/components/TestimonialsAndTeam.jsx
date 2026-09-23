import React from 'react';
import { Star, Quote } from 'lucide-react';
import './TestimonialsAndTeam.css';
import useReveal from './useReveal';

const REVIEWS = [
  {
    name: 'Col. Devendra Rathore (Retd.)',
    project: '2.5-Acre Farmhouse Estate, Chattarpur',
    rating: 5,
    review:
      'Oxford Landscape transformed our empty acreage into a breathtaking resort-like sanctuary. The bespoke pergola, cascading water wall, and fruit orchard were delivered with immaculate craftsmanship.',
  },
  {
    name: 'Megha Singhania',
    project: 'Corporate Biophilic Campus, DLF CyberCity, Gurgaon',
    rating: 5,
    review:
      'Their AMC team keeps our commercial plaza looking vibrant 365 days a year. The water plaza and vertical greenery have drastically boosted employee wellness and visitor impressions.',
  },
  {
    name: 'Rohan & Shweta Agarwal',
    project: 'Luxury Penthouse Terrace Garden, Golf Course Ext.',
    rating: 5,
    review:
      "Zero water leakage, brilliant smart lighting, and exquisite plant health. Oxford Landscape's superiority is evident in every detail of our rooftop sanctuary.",
  },
];

export default function TestimonialsAndTeam() {
  useReveal();
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <div className="section-header reveal">
          <p className="eyebrow gold">Client Satisfaction</p>
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">
            From luxury farmhouse estates to corporate green campuses — our clients
            speak for the quality of our craftsmanship.
          </p>
        </div>

        <div className="testimonials-grid">
          {REVIEWS.map((rev, i) => (
            <div key={i} className={`testimonial-card reveal delay-${i + 1}`}>
              <div className="tc-stars">
                {Array.from({ length: rev.rating }).map((_, s) => (
                  <Star key={s} size={15} fill="#c49a2a" color="#c49a2a" />
                ))}
              </div>
              <Quote size={32} className="tc-quote-icon" />
              <p className="tc-text">"{rev.review}"</p>
              <div className="tc-author">
                <div className="tc-avatar">{rev.name[0]}</div>
                <div className="tc-author-info">
                  <strong>{rev.name}</strong>
                  <span>{rev.project}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="satisfaction-bar reveal">
          <div className="sat-item">
            <strong>100%</strong>
            <span>Client Satisfaction Rate</span>
          </div>
          <div className="sat-item">
            <strong>500+</strong>
            <span>Projects Completed</span>
          </div>
          <div className="sat-item">
            <strong>10+</strong>
            <span>Years of Excellence</span>
          </div>
          <div className="sat-item">
            <strong>24+</strong>
            <span>Prestigious Clients</span>
          </div>
        </div>
      </div>
    </section>
  );
}
