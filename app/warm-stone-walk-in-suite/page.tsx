"use client";

import Image from "next/image";
import { useState } from "react";

export default function WarmStoneWalkInSuitePage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "cover.jpg",
    "warm-stone-walk-in-suite-1.jpg",
    "warm-stone-walk-in-suite-2.jpg",
    "warm-stone-walk-in-suite-3.jpg"
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
              src="/images/portfolio/warm-stone-walk-in-suite/cover.jpg"
              alt="Warm Stone Walk-In Suite"
              fill
              priority
            />
          </div>

          {/* Supporting images */}
          <div className="gallery-secondary">
            {["warm-stone-walk-in-suite-1.jpg", "warm-stone-walk-in-suite-2.jpg", "warm-stone-walk-in-suite-3.jpg"].map((img, idx) => (
              <div key={img} className="gallery-thumb" onClick={() => openLightbox(idx + 1)}>
                <Image
                  src={`/images/portfolio/warm-stone-walk-in-suite/${img}`}
                  alt="Warm Stone Walk-In Suite detail"
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
              Warm Stone Walk-In Suite
            </h1>
            <span className="project-number-badge">#21</span>
          </div>
          <p>
            A modern shower room renovation situated within a space featuring sloping ceilings, likely a loft conversion. 
            The design is defined by high-gloss travertine-effect wall tiles that add a warm, natural stone look to the room. 
            I installed these full-height in the wet zone and half-height behind the sanitaryware to balance practicality with aesthetics. 
            The shower area is designed as a spacious walk-in zone featuring a sleek linear drain and a frameless glass screen. 
            A wood-effect wall-hung vanity unit was chosen to complement the stone tones. 
            As the sole contractor, I managed the plumbing, tiling, and installation of all fixtures.
          </p>

          <ul>
            <li>Full Multi Trade Execution: Complete management of plumbing, tiling, and sanitaryware fitting.</li>
            <li>Shower Construction: Installation of a walk-in shower setup featuring a stainless steel linear drain set into the floor tiling.</li>
            <li>Tiling Specification: High-gloss stone-effect wall tiles laid half-height in dry areas and full-height in the shower, with precise cutting around the window reveal.</li>
            <li>Shower Fittings: Mounting of a fixed glass screen and a chrome shower mixer column with a rainfall head.</li>
            <li>Sanitaryware: Installation of a wall-hung wood-effect vanity unit with an integrated basin and a close-coupled white WC.</li>
            <li>Space Adaptation: Layout designed to accommodate the sloping ceiling architecture while maintaining full head height in the standing area.</li>
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
              src={`/images/portfolio/warm-stone-walk-in-suite/${images[currentImageIndex]}`}
              alt="Warm Stone Walk-In Suite"
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
