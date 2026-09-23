import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight, PhoneCall, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { getAssetUrl } from '../utils/asset';
import './Hero.css';

const HERO_SLIDES = [
  {
    id: 1,
    image: '/images/hero.jpg',
    tag: "North India's Premier Landscape Firm",
    title: (
      <>
        Crafting <em>Living</em><br />
        Outdoor Masterpieces
      </>
    ),
    subtitle:
      'Oxford Landscape transforms raw spaces into stunning, sustainable outdoor environments. From luxury farmhouse estates to corporate green campuses — we build landscapes that endure.',
    location: 'Luxury Villa Garden & Water Fountain',
  },
  {
    id: 2,
    image: '/images/services/farmhouse.jpg',
    tag: 'Farmhouse & Country Acreage Development',
    title: (
      <>
        Expansive <em>Country</em><br />
        Estate Sanctuaries
      </>
    ),
    subtitle:
      'Rolling emerald lawns, private fruit orchards, custom pergolas, and serene pool surrounds crafted with timeless precision across Delhi NCR & North India.',
    location: 'Private 3-Acre Farmhouse Estate',
  },
  {
    id: 3,
    image: '/images/services/landscaping.jpg',
    tag: 'Turnkey Architectural Hardscaping',
    title: (
      <>
        Harmonizing <em>Stone</em><br />
        Water & Living Flora
      </>
    ),
    subtitle:
      'Master landscape execution spanning natural stone walkways, bougainvillea pergolas, designer fountains, ambient illumination, and resilient horticulture.',
    location: 'Grand Stone Plaza & Water Cascades',
  },
  {
    id: 4,
    image: '/images/services/terrace.jpg',
    tag: 'Urban Terrace & Rooftop Sanctuaries',
    title: (
      <>
        Elevated <em>Skyline</em><br />
        Green Sanctuaries
      </>
    ),
    subtitle:
      'Engineered rooftop retreats using lightweight soil mediums, advanced waterproofing, mood lighting, shaded sit-outs, and automated micro-irrigation.',
    location: 'Luxury Penthouse Terrace Lounge',
  },
];

const HERO_FEATURES = [
  'Complete Landscape Design & Execution',
  'Hardscaping, Pergolas & Water Features',
  'Terrace Gardens & Vertical Green Walls',
  'Annual Maintenance Contracts (AMC)',
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  // Auto-play slideshow every 6s
  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  const goToSlide = (idx) => {
    setCurrent(idx);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const activeSlide = HERO_SLIDES[current];

  return (
    <section
      id="home"
      className="hero"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Oxford Landscape Hero Showcase"
    >
      {/* Background Slides with crossfade */}
      <div className="hero-bg-carousel" aria-hidden="true">
        {HERO_SLIDES.map((slide, idx) => (
          <div
            key={slide.id}
            className={`hero-slide-bg ${idx === current ? 'active' : ''}`}
          >
            <img
              src={getAssetUrl(slide.image)}
              alt={slide.location}
              fetchPriority={idx === 0 ? 'high' : 'auto'}
              loading={idx === 0 ? 'eager' : 'lazy'}
            />
          </div>
        ))}
      </div>
      <div className="hero-overlay" aria-hidden="true" />

      {/* Content */}
      <div className="hero-content container">
        <div className="hero-inner">
          {/* Left: Text */}
          <div className="hero-text" key={activeSlide.id}>
            <p className="hero-eyebrow">
              <span />
              {activeSlide.tag}
              <span />
            </p>

            <h1 className="hero-title">{activeSlide.title}</h1>

            <p className="hero-subtitle">{activeSlide.subtitle}</p>

            <div className="hero-actions">
              <a href="#services" className="btn btn-gold">
                Explore Services <ArrowRight size={16} />
              </a>
              <a href="#contact" className="btn btn-white">
                <PhoneCall size={15} />
                Book Consultation
              </a>
            </div>

            {/* Current Project Caption */}
            <div className="hero-slide-location">
              <span className="location-dot" />
              <span>{activeSlide.location}</span>
            </div>
          </div>

          {/* Right: Glass Stats Card */}
          <div className="hero-stats-card">
            <div className="hero-stats-grid">
              <div className="hero-stat-item">
                <div className="hero-stat-number">10<sup>+</sup></div>
                <div className="hero-stat-label">Years Experience</div>
              </div>
              <div className="hero-stat-item">
                <div className="hero-stat-number">500<sup>+</sup></div>
                <div className="hero-stat-label">Projects Done</div>
              </div>
              <div className="hero-stat-item">
                <div className="hero-stat-number">24<sup>+</sup></div>
                <div className="hero-stat-label">Top Clients</div>
              </div>
              <div className="hero-stat-item">
                <div className="hero-stat-number">8</div>
                <div className="hero-stat-label">Core Services</div>
              </div>
            </div>

            <div className="hero-divider" />

            <ul className="hero-features-list">
              {HERO_FEATURES.map((f, i) => (
                <li key={i}>
                  <CheckCircle size={15} />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Carousel Navigation Bar */}
        <div className="hero-carousel-controls">
          <div className="hero-nav-arrows">
            <button
              onClick={prevSlide}
              className="hero-arrow-btn"
              aria-label="Previous slide"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={nextSlide}
              className="hero-arrow-btn"
              aria-label="Next slide"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          <div className="hero-dots">
            {HERO_SLIDES.map((_, idx) => (
              <button
                key={idx}
                className={`hero-dot ${idx === current ? 'active' : ''}`}
                onClick={() => goToSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              >
                <span className="dot-fill" />
              </button>
            ))}
          </div>

          <div className="hero-slide-count">
            <span>0{current + 1}</span> / 0{HERO_SLIDES.length}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="hero-scroll-cue" aria-hidden="true">
        <span>Scroll</span>
        <div className="scroll-mouse" />
      </div>
    </section>
  );
}
