"use client";

import Image from "next/image";
import { useState } from "react";

export default function HerringboneMosaicPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "/images/portfolio/herringbone-mosaic-suite/cover.jpg",
    "/images/portfolio/herringbone-mosaic-suite/herringbone-mosaic-suite-1.jpg",
    "/images/portfolio/herringbone-mosaic-suite/herringbone-mosaic-suite-2.jpg",
    "/images/portfolio/herringbone-mosaic-suite/herringbone-mosaic-suite-3.jpg"
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
              src="/images/portfolio/herringbone-mosaic-suite/cover.jpg"
              alt="Herringbone & Mosaic Suite"
              fill
              priority
            />
          </div>

          {/* Supporting images */}
          <div className="gallery-secondary">
            {["herringbone-mosaic-suite-1.jpg", "herringbone-mosaic-suite-2.jpg", "herringbone-mosaic-suite-3.jpg"].map((img, index) => (
              <div key={img} className="gallery-thumb" onClick={() => openLightbox(index + 1)}>
                <Image
                  src={`/images/portfolio/herringbone-mosaic-suite/${img}`}
                  alt="Herringbone & Mosaic Suite detail"
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
              Herringbone & Mosaic Suite
            </h1>
            <span className="project-number-badge">#8</span>
          </div>
          <p>
            A complete renovation of a compact shower room, designed to maximize space within a room featuring sloping ceilings. 
            The aesthetic pairs neutral, warm beige wall tiling with a distinctive wood-effect floor laid in a herringbone pattern. 
            A vertical strip of mosaic tiling adds a focal point inside the shower area. 
            To ensure functionality in the tight footprint, I installed a corner quadrant shower and compact sanitaryware. 
            As the sole contractor, I managed the entire fit-out from the sub-floor preparation to the final accessory fixing.
          </p>

          <ul>
            <li>Full Multi Trade Execution: Complete management of plumbing, tiling, flooring, and electrical.</li>
            <li>Flooring Specification: Wood-effect flooring laid in a classic herringbone pattern to add texture and warmth.</li>
            <li>Tiling & Feature Work: Full-height beige ceramic wall tiling featuring a vertical mosaic accent strip within the shower zone.</li>
            <li>Shower Installation: Fitting of a corner quadrant enclosure with an exposed chrome thermostatic mixer and rainfall head.</li>
            <li>Space Optimization: Strategic placement of a compact white gloss vanity and close-coupled WC to accommodate the room's sloping ceiling.</li>
            <li>Heating & Electrical: Installation of a white heated towel rail, shaver socket, and high-level extraction fan.</li>
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
              alt={`Herringbone & Mosaic Suite - Image ${currentImageIndex + 1}`}
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
