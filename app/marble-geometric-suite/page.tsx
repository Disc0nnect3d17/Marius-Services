"use client";

import Image from "next/image";
import { useState } from "react";

export default function MarbleGeometricSuitePage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "cover.jpg",
    "marble-geometric-suite-1.jpg",
    "marble-geometric-suite-2.jpg",
    "marble-geometric-suite-3.jpg"
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
              src="/images/portfolio/marble-geometric-suite/cover.jpg"
              alt="Marble & Geometric Suite"
              fill
              priority
            />
          </div>

          {/* Supporting images */}
          <div className="gallery-secondary">
            {["marble-geometric-suite-1.jpg", "marble-geometric-suite-2.jpg", "marble-geometric-suite-3.jpg"].map((img, idx) => (
              <div key={img} className="gallery-thumb" onClick={() => openLightbox(idx + 1)}>
                <Image
                  src={`/images/portfolio/marble-geometric-suite/${img}`}
                  alt="Marble & Geometric Suite detail"
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
              Marble & Geometric Suite
            </h1>
            <span className="project-number-badge">#18</span>
          </div>
          <p>
            A modern shower room renovation that balances luxury finishes with bold pattern. 
            The walls are clad from floor to ceiling in large-format white marble-effect tiles, creating a bright and expansive feel. 
            This is contrasted by a statement geometric patterned floor that adds character and depth to the space. 
            To optimize the layout, I installed a run of fitted dark wood-effect cabinetry that integrates the washbasin, storage, and a concealed cistern WC. 
            The shower area features a sleek sliding glass door and a custom recessed storage niche. 
            As the sole contractor, I managed the entire build, from the technical niche construction to the final electrical fit-out.
          </p>

          <ul>
            <li>Full Multi Trade Execution: Complete management of plumbing, tiling, joinery, and electrical installation.</li>
            <li>Tiling & Flooring: Floor-to-ceiling large-format marble-effect wall tiles paired with a feature geometric patterned floor.</li>
            <li>Shower Construction: Installation of a sliding glass shower enclosure featuring a custom-built recessed tiled niche for storage.</li>
            <li>Integrated Furniture: Fitting of a dark wood-effect furniture run incorporating a semi-recessed basin and concealed cistern WC.</li>
            <li>Electrical Integration: Wiring and mounting of a feature LED illuminated mirror with an integrated digital display.</li>
            <li>Heating: Installation of a chrome heated towel rail to complement the modern bright aesthetic.</li>
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
              src={`/images/portfolio/marble-geometric-suite/${images[currentImageIndex]}`}
              alt="Marble & Geometric Suite"
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
