"use client";

import Image from "next/image";
import { useState } from "react";

export default function AnthraciteMarblePage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "/images/portfolio/the-anthracite-marble-suite/cover.jpg",
    "/images/portfolio/the-anthracite-marble-suite/anthracite-marble-suite-1.jpg",
    "/images/portfolio/the-anthracite-marble-suite/anthracite-marble-suite-2.jpg",
    "/images/portfolio/the-anthracite-marble-suite/anthracite-marble-suite-3.jpg",
    "/images/portfolio/the-anthracite-marble-suite/anthracite-marble-suite-4.jpg",
    "/images/portfolio/the-anthracite-marble-suite/anthracite-marble-suite-5.jpg"
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
              src="/images/portfolio/the-anthracite-marble-suite/cover.jpg"
              alt="The Anthracite & Marble Suite"
              fill
              priority
            />
          </div>

          {/* Supporting images */}
          <div className="gallery-secondary">
            {["anthracite-marble-suite-1.jpg", "anthracite-marble-suite-2.jpg", "anthracite-marble-suite-3.jpg", "anthracite-marble-suite-4.jpg", "anthracite-marble-suite-5.jpg"].map((img, index) => (
              <div key={img} className="gallery-thumb" onClick={() => openLightbox(index + 1)}>
                <Image
                  src={`/images/portfolio/the-anthracite-marble-suite/${img}`}
                  alt="The Anthracite & Marble Suite detail"
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
              The Anthracite & Marble Suite
            </h1>
            <span className="project-number-badge">#6</span>
          </div>
          <p>
            A sophisticated bathroom renovation centered around a luxury double vanity setup. 
            The design features large-format marble-effect floor tiles that coordinate with the dark anthracite cabinetry for a cohesive, modern look. 
            The layout utilizes a corner quadrant shower enclosure to maximize space, alongside a back-to-wall WC unit. 
            A wide illuminated mirror spans the double basin area, enhancing light and the feeling of space. 
            As the sole contractor, I managed all aspects of the installation from plumbing rough-in to final decoration.
          </p>

          <ul>
            <li>Full Multi Trade Execution: Complete management of plumbing, tiling, electrical, and carpentry.</li>
            <li>Tiling & Flooring: Large-format marble-effect floor tiles laid with precision alignment, paired with plain gloss wall tiling.</li>
            <li>Feature Joinery: Installation of a double vanity unit with twin vessel basins and tall chrome monobloc mixer taps.</li>
            <li>Shower Installation: Fitting of a quadrant shower enclosure with a thermostatic chrome rainfall mixer and handheld attachment.</li>
            <li>Electrical Integration: Wiring for a wide illuminated LED mirror, dual shaver sockets, and recessed ceiling downlights.</li>
            <li>Heating & Plumbing: Installation of a large chrome towel radiator and a concealed cistern WC unit matching the vanity cabinetry.</li>
          </ul>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white text-4xl font-bold hover:text-gray-300 z-50"
          >
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
              src={images[currentImageIndex]}
              alt={`The Anthracite & Marble Suite - Image ${currentImageIndex + 1}`}
              className="max-w-[90vw] max-h-[90vh] object-contain"
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
      )}
    </main>
  );
}
