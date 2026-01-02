"use client";

import Image from "next/image";
import { useState } from "react";

export default function HighContrastFeatureEnsuitePage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "cover.jpg",
    "high-contrast-feature-ensuite-1.jpg",
    "high-contrast-feature-ensuite-2.jpg",
    "high-contrast-feature-ensuite-3.jpg",
    "high-contrast-feature-ensuite-4.jpg"
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
              src="/images/portfolio/High-Contrast Feature Ensuite/cover.jpg"
              alt="High-Contrast Feature Ensuite bathroom"
              fill
              priority
            />
          </div>

          {/* Supporting images */}
          <div className="gallery-secondary">
            {["high-contrast-feature-ensuite-1.jpg", "high-contrast-feature-ensuite-2.jpg", "high-contrast-feature-ensuite-3.jpg", "high-contrast-feature-ensuite-4.jpg"].map((img, idx) => (
              <div key={img} className="gallery-thumb" onClick={() => openLightbox(idx + 1)}>
                <Image
                  src={`/images/portfolio/High-Contrast Feature Ensuite/${img}`}
                  alt="High-Contrast Feature Ensuite detail"
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
              High-Contrast Feature Ensuite
            </h1>
            <span className="project-number-badge">#27</span>
          </div>
          <p>
            A compact ensuite renovation designed to create a visual impact within a small footprint. The design relies on a high-contrast theme, utilizing bright, polished white stone-effect tiles for the main walls to maximize light, paired with a dramatic black marble-effect feature wall inside the shower. To ensure the space remains practical and easy to navigate, I installed a bi-fold shower door and a compact vanity unit. As the sole contractor, I managed the entire fit-out, focusing on precise tiling to ensure the transition between the contrasting colours was sharp and seamless.
          </p>

          <h3>Key Technical Work</h3>

          <ul>
            <li>Full Multi Trade Execution: Complete management of plumbing, tiling, and electrical installation.</li>
            <li>Feature Tiling: Floor-to-ceiling white tiling contrasted by a statement black marble-effect feature wall within the shower zone.</li>
            <li>Space Optimization: Installation of a chrome bi-fold glass shower door to maximize entry width and floor space in the narrow room.</li>
            <li>Sanitaryware: Fitting of a white gloss vanity unit with an integrated mixer tap and a close-coupled WC.</li>
            <li>Heating: Plumbing and mounting of an anthracite grey heated towel rail to tie in with the darker feature tones.</li>
            <li>Electrical: Installation of a geometric LED illuminated mirror and a feature square ceiling light.</li>
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
                src={`/images/portfolio/High Contrast Feature Ensuite/${images[currentImageIndex]}`}
                alt="High Contrast Feature Ensuite"
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
