"use client";

import Image from "next/image";
import { useState } from "react";

export default function ContemporaryStoneWetRoomPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "/images/portfolio/Contemporary Stone Wet Room/cover.JPG",
    "/images/portfolio/Contemporary Stone Wet Room/contemporary-stone-wet-room-1.JPG",
    "/images/portfolio/Contemporary Stone Wet Room/contemporary-stone-wet-room-2.JPG",
    "/images/portfolio/Contemporary Stone Wet Room/contemporary-stone-wet-room-3.JPG",
    "/images/portfolio/Contemporary Stone Wet Room/contemporary-stone-wet-room-4.JPG",
    "/images/portfolio/Contemporary Stone Wet Room/contemporary-stone-wet-room-5.JPG"
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
              src="/images/portfolio/Contemporary Stone Wet Room/cover.JPG"
              alt="Contemporary Stone Wet Room"
              fill
              priority
            />
          </div>

          {/* Supporting images */}
          <div className="gallery-secondary">
            {["contemporary-stone-wet-room-1.JPG", "contemporary-stone-wet-room-2.JPG", "contemporary-stone-wet-room-3.JPG", "contemporary-stone-wet-room-4.JPG", "contemporary-stone-wet-room-5.JPG"].map((img, index) => (
              <div key={img} className="gallery-thumb" onClick={() => openLightbox(index + 1)}>
                <Image
                  src={`/images/portfolio/Contemporary Stone Wet Room/${img}`}
                  alt="Contemporary Stone Wet Room detail"
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
              Contemporary Stone Wet Room
            </h1>
            <span className="project-number-badge">#10</span>
          </div>
          <p>
            A complete conversion of a standard bathroom into a spacious, modern wet room. 
            The design utilizes soft grey stone-effect tiling throughout to create a calm, neutral environment. 
            A key focus of this build was accessibility and seamless flow; the shower area features a level-entry floor with a formed gradient, finished in mosaic tiles for safety and drainage. 
            To maintain a streamlined look, I installed a run of fitted grey cabinetry that houses the washbasin, storage, and a concealed cistern WC. 
            As the sole contractor, I managed all technical aspects of the wet room formation and final fit-out.
          </p>

          <ul>
            <li>Full Multi Trade Execution: Complete management of wet room formation, plumbing, tiling, and joinery.</li>
            <li>Wet Room Construction: Formation of a level-access shower floor with a precision-laid mosaic tile gradient for effective drainage.</li>
            <li>Tiling Specification: Floor-to-ceiling installation of large-format soft grey tiles, transitioning to matching mosaics in the wet zone.</li>
            <li>Integrated Furniture: Installation of a fitted grey gloss unit run incorporating a semi-recessed basin, storage, and a back-to-wall WC with concealed cistern.</li>
            <li>Shower Configuration: Fitting of a large frameless glass screen, a chrome thermostatic bar mixer, and an integrated grab rail for accessibility.</li>
            <li>Heating: Plumbing and mounting of a large white heated towel rail.</li>
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
              alt={`Contemporary Stone Wet Room - Image ${currentImageIndex + 1}`}
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
