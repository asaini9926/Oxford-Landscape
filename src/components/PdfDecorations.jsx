import React from 'react';
import './PdfDecorations.css';

/**
 * Top-left olive green tab hanging from top edge (Slides 1, 2, 3, 4, 14, 17, 23)
 */
export function PdfCornerTab() {
  return <div className="pdf-corner-tab" aria-hidden="true" />;
}

/**
 * Bottom-left olive green horizontal rounded bar (Slides 1, 2, 4, etc.)
 */
export function PdfBottomBar() {
  return <div className="pdf-bottom-bar" aria-hidden="true" />;
}

/**
 * 3 signature green bullet circles (● ● ●) in #457800
 */
export function PdfDots({ className = '' }) {
  return (
    <div className={`pdf-dots-row ${className}`} aria-hidden="true">
      <span className="pdf-dot" />
      <span className="pdf-dot" />
      <span className="pdf-dot" />
    </div>
  );
}

/**
 * Sweeping 3-layer wave in Bottom Right corner (Slide 1, Slide 3, etc.)
 * Colors: Lime #88b548, Olive #457800, Deep Forest #0e4521
 */
export function PdfWaveBottomRight({ className = '' }) {
  return (
    <div className={`pdf-wave-wrap wave-br ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 650 450"
        fill="none"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="pdf-wave-svg"
      >
        {/* Layer 1: Outer lime curve */}
        <path
          d="M 0 450 C 220 430, 360 300, 650 100 L 650 450 Z"
          fill="#88b548"
        />
        {/* Layer 2: Middle olive green curve */}
        <path
          d="M 140 450 C 310 420, 420 280, 650 170 L 650 450 Z"
          fill="#457800"
        />
        {/* Layer 3: Inner deep forest green corner */}
        <path
          d="M 290 450 C 430 420, 500 300, 650 240 L 650 450 Z"
          fill="#0e4521"
        />
      </svg>
    </div>
  );
}

/**
 * Sweeping 3-layer wave in Top Right corner (Slide 2, Slide 4, etc.)
 */
export function PdfWaveTopRight({ className = '' }) {
  return (
    <div className={`pdf-wave-wrap wave-tr ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 650 400"
        fill="none"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="pdf-wave-svg"
      >
        {/* Layer 1: Lime */}
        <path
          d="M 650 0 L 0 0 C 180 200, 440 260, 650 180 Z"
          fill="#88b548"
        />
        {/* Layer 2: Olive */}
        <path
          d="M 650 0 L 60 0 C 240 160, 450 200, 650 120 Z"
          fill="#457800"
        />
        {/* Layer 3: Deep Forest */}
        <path
          d="M 650 0 L 190 0 C 320 110, 480 140, 650 70 Z"
          fill="#0e4521"
        />
      </svg>
    </div>
  );
}

/**
 * Sweeping 3-layer wave in Bottom Left corner (Slide 14, Slide 17, etc.)
 */
export function PdfWaveBottomLeft({ className = '' }) {
  return (
    <div className={`pdf-wave-wrap wave-bl ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 650 450"
        fill="none"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="pdf-wave-svg"
      >
        {/* Layer 1: Lime */}
        <path
          d="M 650 450 C 430 430, 290 300, 0 100 L 0 450 Z"
          fill="#88b548"
        />
        {/* Layer 2: Olive */}
        <path
          d="M 510 450 C 340 420, 230 280, 0 170 L 0 450 Z"
          fill="#457800"
        />
        {/* Layer 3: Deep Forest */}
        <path
          d="M 360 450 C 220 420, 150 300, 0 240 L 0 450 Z"
          fill="#0e4521"
        />
      </svg>
    </div>
  );
}
