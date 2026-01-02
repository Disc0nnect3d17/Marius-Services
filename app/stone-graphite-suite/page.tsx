"use client";

import Image from "next/image";
import { useState } from "react";

export default function StoneGraphiteSuitePage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "/images/portfolio/Stone & Graphite Suite/cover.JPG",
    "/images/portfolio/Stone & Graphite Suite/stone-graphite-suite-1.JPG",
    "/images/portfolio/Stone & Graphite Suite/stone-graphite-suite-2.JPG",
    "/images/portfolio/Stone & Graphite Suite/stone-graphite-suite-3.JPG",
    "/images/portfolio/Stone & Graphite Suite/stone-graphite-suite-4.JPG"
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
              src="/images/portfolio/Stone & Graphite Suite/cover.JPG"
              alt="Stone & Graphite Suite"
              fill
              priority
            />
          </div>

          {/* Supporting images */}
          <div className="gallery-secondary">
            {["stone-graphite-suite-1.JPG", "stone-graphite-suite-2.JPG", "stone-graphite-suite-3.JPG", "stone-graphite-suite-4.JPG"].map((img, index) => (
              <div key={img} className="gallery-thumb" onClick={() => openLightbox(index + 1)}>
                <Image
                  src={`/images/portfolio/Stone & Graphite Suite/${img}`}
                  alt="Stone & Graphite Suite detail"
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
              Stone & Graphite Suite
            </h1>
            <span className="project-number-badge">#16</span>
          </div>
          <p>
            A modern family bathroom renovation designed to maximize storage and clean lines. 
            The room is fully tiled in a light stone-effect ceramic to create a bright, watertight shell. 
            The focal point is a run of fitted graphite-grey cabinetry that seamlessly integrates a tall storage unit, a semi-recessed basin, and a back-to-wall WC with a concealed cistern. 
            This is contrasted by a statement matte black towel radiator and an oak door, adding warmth and depth to the palette. 
            As the sole contractor, I managed the entire installation, including the precise fitting of the furniture run.
          </p>

          <ul>
            <li>Full Multi Trade Execution: Complete management of plumbing, tiling, joinery, and electrical.</li>
            <li>Integrated Furniture: Installation of a fitted graphite-grey furniture run housing a tall storage cupboard, washbasin, and concealed cistern WC.</li>
            <li>Tiling Specification: Floor-to-ceiling installation of light stone-effect tiles on both walls and floors for a cohesive look.</li>
            <li>Bathing Configuration: Fitting of a bath with a curved glass screen and a chrome dual-outlet shower mixer (rainfall and handset).</li>
            <li>Heating: Plumbing and mounting of a feature matte black ladder-style towel radiator.</li>
            <li>Electrical & Finishing: Installation of an LED illuminated mirror and hanging of a glazed oak door.</li>
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
              alt={`Stone & Graphite Suite - Image ${currentImageIndex + 1}`}
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
