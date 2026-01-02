"use client";

import Image from "next/image";
import { useState } from "react";

export default function ClassicWhiteTimberPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "/images/portfolio/classic-white-timber-suite/cover.jpg",
    "/images/portfolio/classic-white-timber-suite/classic-white-timber-suite-1.jpg",
    "/images/portfolio/classic-white-timber-suite/classic-white-timber-suite-2.jpg",
    "/images/portfolio/classic-white-timber-suite/classic-white-timber-suite-3.jpg"
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
              src="/images/portfolio/classic-white-timber-suite/cover.jpg"
              alt="Classic White & Timber Suite"
              fill
              priority
            />
          </div>

          {/* Supporting images */}
          <div className="gallery-secondary">
            {["classic-white-timber-suite-1.jpg", "classic-white-timber-suite-2.jpg", "classic-white-timber-suite-3.jpg"].map((img, index) => (
              <div key={img} className="gallery-thumb" onClick={() => openLightbox(index + 1)}>
                <Image
                  src={`/images/portfolio/classic-white-timber-suite/${img}`}
                  alt="Classic White & Timber Suite detail"
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
              Classic White & Timber Suite
            </h1>
            <span className="project-number-badge">#9</span>
          </div>
          <p>
            A family bathroom renovation that combines a clean, traditional aesthetic with practical modern features. 
            The design is defined by white gloss ceramic tiles laid in a classic brick-bond pattern, broken up by a contrasting horizontal border strip that runs the perimeter of the room. 
            Warm wood-effect flooring provides a natural balance to the crisp white finishes. 
            The layout utilizes a shower-bath setup to offer maximum flexibility, alongside a vanity unit for essential storage. 
            As the sole contractor, I handled the entire refurbishment from the initial plumbing alterations to the final flooring installation.
          </p>

          <ul>
            <li>Full Multi Trade Execution: Complete management of plumbing, tiling, flooring, and decoration.</li>
            <li>Tiling Specification: White gloss ceramic wall tiles laid in a brick pattern with a contrasting feature border, extending to full height in the shower zone.</li>
            <li>Bathing Integration: Installation of a fitted bath with a pivoting glass screen and a chrome dual-function shower system (rainfall and handset).</li>
            <li>Sanitaryware & Storage: Fitting of a white gloss two-drawer vanity unit with an integrated basin and a matching close-coupled WC.</li>
            <li>Flooring: Installation of warm wood-effect plank flooring to create a natural contrast against the white sanitaryware.</li>
            <li>Heating: Plumbing and mounting of a large white heated towel rail connected to the central heating system.</li>
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
              alt={`Classic White & Timber Suite - Image ${currentImageIndex + 1}`}
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
