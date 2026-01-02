"use client";

import Image from "next/image";
import { useState } from "react";

export default function TexturedGreyBrassPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "cover.jpg",
    "textured-grey-brass-suite-1.jpg",
    "textured-grey-brass-suite-2.jpg",
    "textured-grey-brass-suite-3.jpg",
    "textured-grey-brass-suite-4.jpg"
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
              src="/images/portfolio/textured-grey-brass-suite/cover.jpg"
              alt="Textured Grey & Brass Suite bathroom"
              fill
              priority
            />
          </div>

          {/* Supporting images */}
          <div className="gallery-secondary">
            {["textured-grey-brass-suite-1.jpg", "textured-grey-brass-suite-2.jpg", "textured-grey-brass-suite-3.jpg", "textured-grey-brass-suite-4.jpg"].map((img, idx) => (
              <div key={img} className="gallery-thumb" onClick={() => openLightbox(idx + 1)}>
                <Image
                  src={`/images/portfolio/textured-grey-brass-suite/${img}`}
                  alt="Textured Grey & Brass Suite detail"
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
              Textured Grey & Brass Suite
            </h1>
            <span className="project-number-badge">#24</span>
          </div>
          <p>
            A bathroom renovation that blends vintage charm with modern textures. The room is defined by floor-to-ceiling tiling using distinctive textured grey rectangular tiles laid in a brick bond pattern, adding significant depth and character to the walls. The centerpiece is a classic white freestanding bath with gold feet, paired with an elegant antique brass floor-mounted mixer tap. I installed matching gold brassware throughout, including the basin tap and a traditional-style towel radiator, to create a cohesive luxury feel. As the sole contractor, I managed the entire fit-out, from the tiling layout to the final plumbing connections.
          </p>

          <h3>Key Technical Work</h3>

          <ul>
            <li>Full Multi Trade Execution: Complete management of plumbing, tiling, electrical, and decoration.</li>
            <li>Tiling Specification: Floor-to-ceiling installation of textured grey brick-effect wall tiles, paired with large-format light stone floor tiles.</li>
            <li>Feature Bathing: Installation of a freestanding roll-top bath with gold feet and a floor-mounted antique brass bath filler with handheld shower attachment.</li>
            <li>Brassware & Heating: Fitting of a matching gold basin mixer and a traditional floor-standing towel radiator with a white column insert.</li>
            <li>Sanitaryware: Installation of a traditional white vanity unit with an integrated basin and a close-coupled WC.</li>
            <li>Lighting: Installation of a feature industrial-style gold pendant light fixture.</li>
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
                src={`/images/portfolio/textured-grey-brass-suite/${images[currentImageIndex]}`}
                alt="Textured Grey & Brass Suite"
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
