"use client";

import Image from "next/image";
import { useState } from "react";

export default function GreyOakBedroomFlooringPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "cover.jpg",
    "grey-oak-bedroom-flooring-1.jpg"
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
              src="/images/portfolio/grey-oak-bedroom-flooring/cover.jpg"
              alt="Grey Oak Bedroom Flooring"
              fill
              priority
            />
          </div>

          {/* Supporting images */}
          <div className="gallery-secondary">
            {["grey-oak-bedroom-flooring-1.jpg"].map((img, idx) => (
              <div key={img} className="gallery-thumb" onClick={() => openLightbox(idx + 1)}>
                <Image
                  src={`/images/portfolio/grey-oak-bedroom-flooring/${img}`}
                  alt="Grey Oak Bedroom Flooring detail"
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
              Grey Oak Bedroom Flooring
            </h1>
            <span className="project-number-badge">#39</span>
          </div>
          <p>
            A flooring update designed to refresh a bedroom space with a modern, cohesive look. I installed durable grey wood-effect laminate flooring, carefully laying the planks in a staggered pattern to ensure structural stability and a natural aesthetic. To achieve a high-end finish, I removed the old skirtings and installed fresh white skirting boards around the perimeter, creating a crisp contrast against the pale grey walls. At the entrance, I undercut the oak door frame to allow the flooring to slide underneath for a neat termination, installing a metal threshold strip where the laminate meets the hallway tiling.
          </p>

          <h3>Key Technical Work</h3>

          <ul>
            <li>Laminate Installation: Fitting of grey wood-effect laminate flooring throughout the bedroom.</li>
            <li>Carpentry & Skirting: Measuring, cutting, and installing new white skirting boards to frame the room.</li>
            <li>Threshold Detailing: Installation of a metal door bar to bridge the transition between the bedroom laminate and the hallway tiles.</li>
            <li>Precision Cutting: Undercutting the existing oak door architraves to ensure a gap-free finish around the frame.</li>
            <li>Radiator Adaptation: Cutting precise holes for radiator pipework to ensure a tidy look.</li>
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
                src={`/images/portfolio/grey-oak-bedroom-flooring/${images[currentImageIndex]}`}
                alt="Grey Oak Bedroom Flooring"
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
