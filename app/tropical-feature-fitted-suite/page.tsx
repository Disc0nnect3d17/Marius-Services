"use client";

import Image from "next/image";
import { useState } from "react";

export default function TropicalFeatureFittedSuitePage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "cover.JPG",
    "tropical-feature-fitted-suite-1.JPG",
    "tropical-feature-fitted-suite-2.JPG"
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
              src="/images/portfolio/Tropical Feature & Fitted Suite/cover.JPG"
              alt="Tropical Feature & Fitted Suite bathroom"
              fill
              priority
            />
          </div>

          {/* Supporting images */}
          <div className="gallery-secondary">
            {["tropical-feature-fitted-suite-1.JPG", "tropical-feature-fitted-suite-2.JPG"].map((img, idx) => (
              <div key={img} className="gallery-thumb" onClick={() => openLightbox(idx + 1)}>
                <Image
                  src={`/images/portfolio/Tropical Feature & Fitted Suite/${img}`}
                  alt="Tropical Feature & Fitted Suite detail"
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
              Tropical Feature & Fitted Suite
            </h1>
            <span className="project-number-badge">#32</span>
          </div>
          <p>
            A bathroom renovation that injects personality into the space while maximizing utility. The focal point is a vibrant feature wall above the bath, tiled with a large-scale tropical leaf print, which contrasts sharply with the clean white horizontal tiling on the remaining walls. A key requirement for this project was storage; I installed a custom fitted run of dark blue cabinetry, including a floor-to-ceiling unit that conceals the WC cistern and provides extensive cupboard space. To ensure the bath area remained versatile, I fitted a multi-fold glass screen that retracts fully to open up the room. As the sole contractor, I managed the plumbing, tiling, and precise joinery work required for the fitted furniture.
          </p>

          <h3>Key Technical Work</h3>

          <ul>
            <li>Full Multi Trade Execution: Complete management of plumbing, tiling, and joinery.</li>
            <li>Feature Tiling: Installation of a statement tropical botanical leaf-print feature wall.</li>
            <li>Custom Fitted Furniture: Installation of matched dark blue cabinetry, including a vanity and a floor-to-ceiling unit housing the concealed cistern and storage.</li>
            <li>Space-Saving Shower Screen: Fitting of a 4-fold concertina glass shower screen to allow the space to function easily as both a bath and shower.</li>
            <li>Sanitaryware: Installation of a back-to-wall WC and a modern ceramic basin integrated into the furniture.</li>
            <li>Heating: Mounting of a standard white panel radiator below the window.</li>
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

            <div className="relative flex items-center justify-center">
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
                src={`/images/portfolio/Tropical Feature & Fitted Suite/${images[currentImageIndex]}`}
                alt="Tropical Feature & Fitted Suite"
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
            </div>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-lg">
              {currentImageIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
