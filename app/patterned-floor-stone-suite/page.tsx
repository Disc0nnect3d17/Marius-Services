"use client";

import Image from "next/image";
import { useState } from "react";

export default function PatternedFloorStonePage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "/images/portfolio/Patterned Floor & Stone Suite/cover.JPG",
    "/images/portfolio/Patterned Floor & Stone Suite/patterned-floor-stone-suite-1.JPG",
    "/images/portfolio/Patterned Floor & Stone Suite/patterned-floor-stone-suite-2.JPG",
    "/images/portfolio/Patterned Floor & Stone Suite/patterned-floor-stone-suite-3.JPG",
    "/images/portfolio/Patterned Floor & Stone Suite/patterned-floor-stone-suite-4.JPG",
    "/images/portfolio/Patterned Floor & Stone Suite/patterned-floor-stone-suite-5.JPG"
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
              src="/images/portfolio/Patterned Floor & Stone Suite/cover.JPG"
              alt="Patterned Floor & Stone Suite"
              fill
              priority
            />
          </div>

          {/* Supporting images */}
          <div className="gallery-secondary">
            {["patterned-floor-stone-suite-1.JPG", "patterned-floor-stone-suite-2.JPG", "patterned-floor-stone-suite-3.JPG", "patterned-floor-stone-suite-4.JPG", "patterned-floor-stone-suite-5.JPG"].map((img, index) => (
              <div key={img} className="gallery-thumb" onClick={() => openLightbox(index + 1)}>
                <Image
                  src={`/images/portfolio/Patterned Floor & Stone Suite/${img}`}
                  alt="Patterned Floor & Stone Suite detail"
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
              Patterned Floor & Stone Suite
            </h1>
            <span className="project-number-badge">#12</span>
          </div>
          <p>
            A bright, modern bathroom renovation featuring a striking contrast between the polished walls and the decorative flooring. 
            The walls are finished floor-to-ceiling in large-format, high-gloss stone-effect tiles, creating a light and airy feel. 
            This is grounded by a feature floor laid with vintage-style patterned tiles. 
            To maintain clean lines, I installed wall-hung sanitaryware, including a dark grey vanity and a WC with a concealed cistern. 
            The bath is integrated with a custom tiled front panel to match the walls perfectly. 
            As the sole contractor, I executed the entire project from the plumbing first-fix to the final accessory installation.
          </p>

          <ul>
            <li>Full Multi Trade Execution: Complete management of plumbing, tiling, electrical, and carpentry.</li>
            <li>Flooring Specification: Installation of statement vintage-style patterned floor tiles to create a focal point.</li>
            <li>Tiling & Finish: Floor-to-ceiling polished stone-effect wall tiles, including a seamless tiled bath panel and precise tiling into the window reveal.</li>
            <li>Concealed Plumbing: Structural installation of a wall-hung WC frame with a concealed cistern and chrome flush plate.</li>
            <li>Bathing Integration: Fitting of a bath with a pivoting glass screen and a chrome dual-function shower system (rainfall and handset).</li>
            <li>Storage & Electrical: Installation of a wall-hung anthracite vanity unit and a mirrored LED cabinet.</li>
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
              alt={`Patterned Floor & Stone Suite - Image ${currentImageIndex + 1}`}
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
