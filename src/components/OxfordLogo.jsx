import React from 'react';

export default function OxfordLogo({ className = '', dark = false, height = 40 }) {
  const textColor = dark ? '#ffffff' : '#457800';
  const leafColor = dark ? '#a3cc66' : '#579412';
  const leafDark = dark ? '#d8f3dc' : '#38660c';

  return (
    <div className={`oxford-logo-wrap ${className}`} style={{ display: 'inline-flex', alignItems: 'center' }}>
      <svg 
        height={height} 
        viewBox="0 0 320 54" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: 'block', maxWidth: '100%', height: 'auto', maxHeight: height }}
      >
        {/* Left Leaf Accent swoosh */}
        <path 
          d="M 12 36 C 4 28, 6 18, 16 12 C 22 22, 18 32, 12 36 Z" 
          fill={leafColor} 
        />
        <path 
          d="M 10 32 Q 16 22 20 14" 
          stroke={leafDark} 
          strokeWidth="1.5" 
          fill="none" 
        />

        {/* Text: Oxford Landscape */}
        <text 
          x="28" 
          y="37" 
          fontFamily="'Montserrat', -apple-system, sans-serif" 
          fontSize="29" 
          fontWeight="800" 
          letterSpacing="-0.5px"
          fill={textColor}
        >
          Oxford Landscape
        </text>

        {/* Right Leaf Accent fluttering off the 'e' */}
        <path 
          d="M 300 24 C 314 20, 318 28, 312 38 C 304 36, 298 30, 300 24 Z" 
          fill={leafColor} 
        />
        <path 
          d="M 302 26 Q 308 30 312 36" 
          stroke={leafDark} 
          strokeWidth="1.5" 
          fill="none" 
        />
        {/* Underline swoosh branch */}
        <path 
          d="M 240 44 Q 280 46 304 38" 
          stroke={leafColor} 
          strokeWidth="2" 
          strokeLinecap="round" 
          fill="none" 
        />
      </svg>
    </div>
  );
}
