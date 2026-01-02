"use client";

import Image from "next/image";
import { useState } from "react";

export default function CrimsonStoneWCPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "cover.JPG",
    "crimson-stone-1.JPG",
    "crimson-stone-2.JPG",
    "crimson-stone-3.JPG"
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
              src="/images/portfolio/Crimson & Stone WC/cover.JPG"
              alt="Crimson & Stone WC"
              fill
              priority
            />
          </div>

          {/* Supporting images */}
          <div className="gallery-secondary">
            {["crimson-stone-1.JPG", "crimson-stone-2.JPG", "crimson-stone-3.JPG"].map((img, idx) => (
              <div key={img} className="gallery-thumb" onClick={() => openLightbox(idx + 1)}>
                <Image
                  src={`/images/portfolio/Crimson & Stone WC/${img}`}
                  alt="Crimson & Stone WC detail"
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
              Crimson & Stone WC
            </h1>
            <span className="project-number-badge">#3</span>
          </div>
          <p>
            A complete renovation of a compact downstairs WC, optimizing a narrow footprint for maximum utility. 
            The design contrasts deep red textured walls with neutral stone-effect ceramic tiling that runs from the floor to dado height. 
            The layout features a slimline vanity unit and a wall-mounted heated towel rail to maintain a feeling of space. 
            As the sole contractor, I handled the entire refurbishment from the initial rip-out to the final decoration.
          </p>

          <ul>
            <li>Full Multi Trade Execution: Complete management of plumbing, tiling, electrical, and painting works.</li>
            <li>Tiling & Flooring: Matching stone-effect ceramic tiles installed on the floor and walls (half-height) with window reveal detailing.</li>
            <li>Sanitaryware: Installation of a compact white gloss vanity unit with a surface-mounted square vessel basin.</li>
            <li>Electrical Integration: Wiring and mounting of an illuminated LED mirror cabinet and high-level extraction fan.</li>
            <li>Heating: Plumbing and mounting of a white heated towel rail connected to the central heating system.</li>
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
              src={`/images/portfolio/Crimson & Stone WC/${images[currentImageIndex]}`}
              alt="Crimson & Stone WC"
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
