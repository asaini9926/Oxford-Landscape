import React from 'react';
import { Play, ChevronLeft } from 'lucide-react';
import { PdfWaveBottomRight } from './PdfDecorations';
import './VisionMission.css';

export default function VisionMission() {
  return (
    <section id="vision" className="vision-slide-section theme-white-waves">
      <div className="container vision-slide-container">
        {/* Left Column: Mission Card + 2 Arched Vertical Photos */}
        <div className="vision-left-col">
          {/* Company Mission Green Container Card */}
          <div className="pdf-green-card mission-card">
            <div className="pdf-card-header-pill">
              <span className="pill-icon-circle">
                <Play size={14} fill="#ffffff" />
              </span>
              <span className="pill-title-text">Company Mission</span>
            </div>
            <p className="pdf-card-body-text">
              We live in an urban jungle surrounded by concrete structures. Oxford Landscape 
              aims to soften these spaces with green patches, ensuring every family has access 
              to a lawn, garden, or green environment.
            </p>
          </div>

          {/* 2 Vertical Arched Photos matching Slide 3 */}
          <div className="vision-arched-photos-row">
            <div className="vision-arched-card">
              <img
                src="/images/about/zen_courtyard.jpeg"
                alt="Zen Garden Walkway with Sculptural Feature"
                loading="lazy"
              />
            </div>
            <div className="vision-arched-card">
              <img
                src="/images/about/rooftop_lawn.png"
                alt="Urban Rooftop Lawn and Apartments"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Right Column: Title + Paragraph + Vision Card */}
        <div className="vision-right-col">
          <div className="vision-title-wrap">
            <h2 className="vision-main-title">Vision & Mission</h2>
            <p className="vision-lead-text">
              We aim to soften concrete structures with nature, making gardens, terraces, 
              and green spaces accessible to everyone – regardless of space or budget through 
              cost effective design, efficient resource management, transparent processes, 
              and timely project delivery.
            </p>
          </div>

          {/* Company Vision Green Container Card */}
          <div className="pdf-green-card vision-card">
            <div className="pdf-card-header-pill vision-pill">
              <span className="pill-title-text">Company Vision</span>
              <span className="pill-icon-circle">
                <ChevronLeft size={16} strokeWidth={3} />
              </span>
            </div>
            <p className="pdf-card-body-text">
              The company acts as a one-stop solution provider, handling projects of all 
              sizes from concept to completion and long-term maintenance.
            </p>
          </div>
        </div>
      </div>

      {/* Signature Bottom-right 3-Layer Green Wave */}
      <PdfWaveBottomRight />
    </section>
  );
}
