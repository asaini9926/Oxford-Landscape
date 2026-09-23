import React from 'react';
import { 
  PdfCornerTab, 
  PdfBottomBar, 
  PdfDots, 
  PdfWaveTopRight, 
  PdfWaveBottomLeft 
} from './PdfDecorations';
import OxfordLogo from './OxfordLogo';
import './HorticultureSection.css';

export default function HorticultureSection() {
  return (
    <div id="horticulture">
      {/* =========================================================
          SLIDE 14: WHITE THEME + GREEN WAVES + HORTICULTURAL SERVICE
          ========================================================= */}
      <section className="hort-slide14-section theme-white-waves">
        {/* Top-left olive tab */}
        <PdfCornerTab />

        <div className="container hort-slide14-container">
          {/* Left Column: Arched Photo of Gardeners & Lawn */}
          <div className="hort14-visual-col">
            <div className="hort14-arch-frame">
              <img
                src="/images/horticulture/manicured_lawn_trees.png"
                alt="Professional Horticulture Care & Garden Maintenance"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column: Exact Slide 14 Text & Hierarchy */}
          <div className="hort14-text-col">
            <h2 className="hort14-main-title">Horticultural Service</h2>

            <p className="hort14-lead-desc">
              Our horticultural services cover complete plant care solutions, including plant 
              selection, plantation, soil preparation, lawn development, and seasonal maintenance. 
              We focus on maintaining plant health, improving soil quality, and ensuring sustainable 
              growth through proper irrigation, pruning, and nutrient management. Our experienced 
              team ensures that all plants and green areas remain healthy, vibrant, and well-maintained 
              throughout the year.
            </p>

            {/* Signature 3 Green Dots from Slide 14 */}
            <PdfDots />

            <p className="hort14-footer-summary">
              We offer professional horticultural services to ensure healthy plant growth, 
              sustainable greenery, and long-term landscape beauty.
            </p>
          </div>
        </div>

        {/* Waves & Bottom Bar matching Slide 14 */}
        <PdfWaveBottomLeft />
        <PdfWaveTopRight />
      </section>

      {/* =========================================================
          SLIDE 15: EDITORIAL CREAM THEME + 4-PHOTO BOTANICAL SHOWCASE
          ========================================================= */}
      <section className="hort-slide15-section theme-cream-editorial">
        <div className="container">
          <div className="hort15-header">
            <h2 className="hort15-serif-title">HORTICULTURAL SERVICE</h2>
          </div>

          {/* Exact Slide 15 4-Photo Botanical Composition */}
          <div className="hort15-quad-layout">
            {/* Left Column: 2 Stacked Photos */}
            <div className="hort15-stacked-col">
              <div className="hort15-img-card">
                <img
                  src="/images/horticulture/lawn_grass_detail.png"
                  alt="Stepped stone lawn pathway and lush retaining flower border"
                  loading="lazy"
                />
              </div>
              <div className="hort15-img-card">
                <img
                  src="/images/horticulture/garden_bed_cultivation.png"
                  alt="Hands in red gardening gloves planting flower seedlings in rich soil"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Middle Column: Lush Turf Pathway */}
            <div className="hort15-middle-col">
              <div className="hort15-img-card full-height">
                <img
                  src="/images/horticulture/exotic_indoor_greenery.jpeg"
                  alt="Lush green garden walkway with white and purple foliage border"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right Column: Grand Bismarckia Palm in Heart-shaped Bed */}
            <div className="hort15-right-col">
              <div className="hort15-img-card full-height">
                <img
                  src="/images/horticulture/palm_topiary_landscape.png"
                  alt="Majestic silver Bismarckia palm in heart-shaped red foliage bed"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Bottom Slide Brand Watermark */}
          <div className="hort-footer-logo">
            <OxfordLogo height={32} />
          </div>
        </div>
      </section>
    </div>
  );
}
