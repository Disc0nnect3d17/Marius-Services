"use client";

import Image from "next/image";
import { useState } from "react";

export default function VibrantMagentaCloakroomPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "cover.jpg",
    "vibrant-magenta-cloakroom-1.jpg",
    "vibrant-magenta-cloakroom-2.jpg",
    "vibrant-magenta-cloakroom-3.jpg"
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
              src="/images/portfolio/vibrant-magenta-cloakroom/cover.jpg"
              alt="Vibrant Magenta Cloakroom"
              fill
              priority
            />
          </div>

          {/* Supporting images */}
          <div className="gallery-secondary">
            {["vibrant-magenta-cloakroom-1.jpg", "vibrant-magenta-cloakroom-2.jpg", "vibrant-magenta-cloakroom-3.jpg"].map((img, idx) => (
              <div key={img} className="gallery-thumb" onClick={() => openLightbox(idx + 1)}>
                <Image
                  src={`/images/portfolio/vibrant-magenta-cloakroom/${img}`}
                  alt="Vibrant Magenta Cloakroom detail"
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
              Vibrant Magenta Cloakroom
            </h1>
            <span className="project-number-badge">#29</span>
          </div>
          <p>
            A compact downstairs WC renovation that proves small spaces can handle bold design. The room features a striking contrast between the neutral lower half and the vibrant upper walls. I installed beige stone-effect tiles to dado height to provide a durable, splash-proof surface, finished with a neat trim. The upper walls and ceiling were painted in a deep magenta to add character and warmth. To make the most of the narrow layout, I fitted a slimline white gloss vanity unit that provides storage without encroaching on the floor space. As the sole contractor, I managed the tiling, plumbing, flooring, and decoration.
          </p>

          <h3>Key Technical Work</h3>

          <ul>
            <li>Full Multi Trade Execution: Complete management of plumbing, tiling, flooring, and decoration.</li>
            <li>Feature Decoration: Application of a bold magenta paint finish to the upper walls and ceiling for high visual impact.</li>
            <li>Tiling Specification: Installation of beige stone-effect ceramic tiles to half-height, finished with a chrome edge trim.</li>
            <li>Space-Saving Sanitaryware: Fitting of a slimline white gloss vanity unit with a compact basin and mixer tap.</li>
            <li>Flooring: Installation of dark wood-effect plank flooring to contrast with the light sanitaryware.</li>
            <li>Heating: Mounting of a chrome ladder-style heated towel rail.</li>
            <li>Finishing: Installation of a bevelled rectangular mirror and white electrical fittings.</li>
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
              src={`/images/portfolio/vibrant-magenta-cloakroom/${images[currentImageIndex]}`}
              alt="Vibrant Magenta Cloakroom"
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
