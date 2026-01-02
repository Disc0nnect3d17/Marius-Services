"use client";

import Image from "next/image";
import { useState } from "react";

export default function CompactBrightShowerRoomPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "/images/portfolio/compact-bright-shower-room/cover1.jpg",
    "/images/portfolio/compact-bright-shower-room/compact-bright-shower-room-1.jpg",
    "/images/portfolio/compact-bright-shower-room/compact-bright-shower-room-2.jpg"
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
              src="/images/portfolio/compact-bright-shower-room/cover1.jpg"
              alt="Compact Bright Shower Room"
              fill
              priority
            />
          </div>

          {/* Supporting images */}
          <div className="gallery-secondary">
            {["compact-bright-shower-room-1.jpg", "compact-bright-shower-room-2.jpg"].map((img, index) => (
              <div key={img} className="gallery-thumb" onClick={() => openLightbox(index + 1)}>
                <Image
                  src={`/images/portfolio/compact-bright-shower-room/${img}`}
                  alt="Compact Bright Shower Room detail"
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
              Compact Bright Shower Room
            </h1>
            <span className="project-number-badge">#14</span>
          </div>
          <p>
            A renovation designed to maximize utility within a very tight footprint. 
            The room is fully tiled from floor to ceiling in large-format light ceramic tiles to reflect light and create a sense of space. 
            To ensure functionality without overcrowding the room, I selected space-saving fixtures, including a bi-fold shower door and a compact vanity unit. 
            The aesthetic is kept clean and airy with light grey wood-effect flooring and white hardware. 
            As the sole contractor, I executed the entire fit-out, ensuring every inch of space was utilized effectively.
          </p>

          <ul>
            <li>Full Multi Trade Execution: Complete management of plumbing, tiling, flooring, and electrical works.</li>
            <li>Space Optimization: Installation of a bi-fold glass shower door to allow full access without encroaching on the floor space.</li>
            <li>Tiling Specification: Floor-to-ceiling installation of light ceramic wall tiles, including precise cutting into the deep window reveal.</li>
            <li>Shower Configuration: Fitting of a chrome dual-function thermostatic mixer (rainfall and handset) with integrated corner storage shelving.</li>
            <li>Sanitaryware: Installation of a compact white gloss vanity unit and a close-coupled WC.</li>
            <li>Heating & Electrical: Mounting of a white heated towel rail and a square LED illuminated mirror.</li>
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
              alt={`Compact Bright Shower Room - Image ${currentImageIndex + 1}`}
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
