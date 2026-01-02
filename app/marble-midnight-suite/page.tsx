"use client";

import Image from "next/image";
import { useState } from "react";

export default function MarbleMidnightPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "cover.jpg",
    "marble-midnight-1.jpg",
    "marble-midnight-2.jpg",
    "marble-midnight-3.jpg"
  ];

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <main className="project-page">
      <div className="project-layout">
        {/* Image gallery */}
        <div className="project-gallery">
          {/* Large feature image */}
          <div className="gallery-main" onClick={() => openLightbox(0)}>
            <Image
              src="/images/portfolio/marble-midnight-suite/cover.jpg"
              alt="Marble & Midnight Suite bathroom"
              fill
              priority
            />
          </div>

          {/* Supporting images */}
          <div className="gallery-secondary">
            {["marble-midnight-1.jpg", "marble-midnight-2.jpg", "marble-midnight-3.jpg"].map((img, idx) => (
              <div key={img} className="gallery-thumb" onClick={() => openLightbox(idx + 1)}>
                <Image
                  src={`/images/portfolio/marble-midnight-suite/${img}`}
                  alt="Marble & Midnight Suite detail"
                  fill
                />
              </div>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="project-description">
          <div className="flex items-center gap-4 mb-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Marble & Midnight Suite
            </h1>
            <span className="project-number-badge">#2</span>
          </div>
          <p>
            A full bathroom renovation featuring a high contrast color palette. 
            The room is paved with large format, marble effect porcelain floor tiles which set the stage for the dark vanity and WC cabinetry. 
            The layout is configured to house both a curved bathtub and a separate glass quadrant shower enclosure within the existing footprint. 
            The walls are finished with light grey gloss tiling to dado height, extending to full height in the shower area.
          </p>

          <ul>
            <li>Full Multi Trade Execution: Complete management of plumbing, electrical, tiling, plastering, and joinery.</li>
            <li>Technical Plumbing: Concealed in wall pipework for wall mounted chrome bath taps.</li>
            <li>Layout Optimization: Integrated separate quadrant shower and curved bath within the existing footprint.</li>
            <li>Tiling & Flooring: Large format marble effect porcelain flooring with precision leveling and layout.</li>
            <li>Electrical Integration: Installation of recessed LED downlights, extraction fan, and illuminated vanity mirror.</li>
          </ul>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content">
            <button className="lightbox-close" onClick={closeLightbox}>
              &times;
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="lightbox-nav-btn prev"
              aria-label="Previous image"
            >
              <svg viewBox="0 0 24 24">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>

            <img
              src={`/images/portfolio/marble-midnight-suite/${images[currentImageIndex]}`}
              alt="Marble & Midnight Suite"
              style={{ 
                maxWidth: '90vw', 
                maxHeight: '90vh', 
                width: 'auto', 
                height: 'auto',
                objectFit: 'contain'
              }}
              onClick={(e) => e.stopPropagation()}
            />

            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="lightbox-nav-btn next"
              aria-label="Next image"
            >
              <svg viewBox="0 0 24 24">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-lg">
              {currentImageIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
