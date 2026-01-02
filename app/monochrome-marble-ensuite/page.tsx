"use client";

import Image from "next/image";
import { useState } from "react";

export default function MonochromeMarbleEnsuitePage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "cover.jpg",
    "monochrome-marble-ensuite-1.jpg",
    "monochrome-marble-ensuite-2.jpg"
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
              src="/images/portfolio/monochrome-marble-ensuite/cover.jpg"
              alt="Monochrome Marble Ensuite bathroom"
              fill
              priority
            />
          </div>

          {/* Supporting images */}
          <div className="gallery-secondary">
            {["monochrome-marble-ensuite-1.jpg", "monochrome-marble-ensuite-2.jpg"].map((img, idx) => (
              <div key={img} className="gallery-thumb" onClick={() => openLightbox(idx + 1)}>
                <Image
                  src={`/images/portfolio/monochrome-marble-ensuite/${img}`}
                  alt="Monochrome Marble Ensuite detail"
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
              Monochrome Marble Ensuite
            </h1>
            <span className="project-number-badge">#26</span>
          </div>
          <p>
            A compact ensuite renovation designed to bring a touch of luxury to a narrow space. The room is enveloped in large-format white marble-effect tiles on both the walls and floor, which helps to reflect light and make the tight footprint feel larger. To create depth, I installed a dramatic black marble feature wall inside the shower area. Practicality was a priority for this layout, so I utilized a space-saving bi-fold shower door and compact sanitaryware to ensure easy movement within the room. As the sole contractor, I managed the entire fit-out from tiling to the final electrical connections.
          </p>

          <h3>Key Technical Work</h3>

          <ul>
            <li>Full Multi Trade Execution: Complete management of plumbing, tiling, and electrical installation.</li>
            <li>Tiling Specification: Floor-to-ceiling white marble-effect tiling with a striking black marble feature wall inside the shower enclosure.</li>
            <li>Space Optimization: Installation of a chrome bi-fold shower door to maximize usable floor space in the narrow room.</li>
            <li>Sanitaryware: Fitting of a white gloss vanity unit with an integrated mixer tap and a close-coupled WC.</li>
            <li>Heating: Plumbing and mounting of an anthracite grey heated towel rail.</li>
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
                src={`/images/portfolio/monochrome-marble-ensuite/${images[currentImageIndex]}`}
                alt="Monochrome Marble Ensuite"
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
