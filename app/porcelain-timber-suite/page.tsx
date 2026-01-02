"use client";

import Image from "next/image";
import { useState } from "react";

export default function PorcelainTimberPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "/images/portfolio/porcelain-timber-suite/cover.jpg",
    "/images/portfolio/porcelain-timber-suite/porcelain-timber-suite-1.jpg",
    "/images/portfolio/porcelain-timber-suite/porcelain-timber-suite-2.jpg",
    "/images/portfolio/porcelain-timber-suite/porcelain-timber-suite-3.jpg",
    "/images/portfolio/porcelain-timber-suite/porcelain-timber-suite-4.jpg"
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
              src="/images/portfolio/porcelain-timber-suite/cover.jpg"
              alt="Porcelain & Timber Suite"
              fill
              priority
            />
          </div>

          {/* Supporting images */}
          <div className="gallery-secondary">
            {["porcelain-timber-suite-1.jpg", "porcelain-timber-suite-2.jpg", "porcelain-timber-suite-3.jpg", "porcelain-timber-suite-4.jpg"].map((img, index) => (
              <div key={img} className="gallery-thumb" onClick={() => openLightbox(index + 1)}>
                <Image
                  src={`/images/portfolio/porcelain-timber-suite/${img}`}
                  alt="Porcelain & Timber Suite detail"
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
              Porcelain & Timber Suite
            </h1>
            <span className="project-number-badge">#7</span>
          </div>
          <p>
            A contemporary bathroom renovation designed with a focus on minimalism and clean lines. 
            The room is fully enveloped in warm, neutral porcelain tiles from floor to ceiling, creating a seamless and calming aesthetic. 
            To maximize floor space and enhance the modern feel, I installed wall-hung fixtures, including a floating vanity and a WC with a concealed cistern. 
            The design is grounded by rich timber-effect cabinetry and finished with sophisticated brushed metal brassware. 
            As the sole contractor, I managed the project from the structural framing of the concealed units to the final tile sealing.
          </p>

          <ul>
            <li>Full Multi Trade Execution: Complete management of plumbing, tiling, electrical, and carpentry.</li>
            <li>Tiling Specification: Floor-to-ceiling installation of large-format neutral porcelain tiles, with precision cutting around window reveals.</li>
            <li>Concealed Plumbing: Structural boxing and installation of a wall-hung WC frame with a concealed cistern and flush plate.</li>
            <li>Shower Integration: Fitting of a dual-function shower system over the bath, featuring a concealed thermostatic mixer valve and brushed metal rainfall head.</li>
            <li>Feature Joinery: Installation of a wall-hung walnut-effect vanity unit with a surface-integrated basin and matching round wooden mirror.</li>
            <li>Heating: Plumbing and mounting of a matte grey heated towel rail to contrast with the warm tile tones.</li>
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
              alt={`Porcelain & Timber Suite - Image ${currentImageIndex + 1}`}
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
