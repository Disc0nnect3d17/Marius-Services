"use client";

import Image from "next/image";
import { useState } from "react";

export default function GreyMosaicWetRoomPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "/images/portfolio/Grey Mosaic Wet Room/cover.JPG",
    "/images/portfolio/Grey Mosaic Wet Room/grey-mosaic-wet-room-1.JPG",
    "/images/portfolio/Grey Mosaic Wet Room/grey-mosaic-wet-room-2.JPG",
    "/images/portfolio/Grey Mosaic Wet Room/grey-mosaic-wet-room-3.JPG",
    "/images/portfolio/Grey Mosaic Wet Room/grey-mosaic-wet-room-4.JPG",
    "/images/portfolio/Grey Mosaic Wet Room/grey-mosaic-wet-room-5.JPG"
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
              src="/images/portfolio/Grey Mosaic Wet Room/cover.JPG"
              alt="Grey Mosaic Wet Room"
              fill
              priority
            />
          </div>

          {/* Supporting images */}
          <div className="gallery-secondary">
            {["grey-mosaic-wet-room-1.JPG", "grey-mosaic-wet-room-2.JPG", "grey-mosaic-wet-room-3.JPG", "grey-mosaic-wet-room-4.JPG", "grey-mosaic-wet-room-5.JPG"].map((img, index) => (
              <div key={img} className="gallery-thumb" onClick={() => openLightbox(index + 1)}>
                <Image
                  src={`/images/portfolio/Grey Mosaic Wet Room/${img}`}
                  alt="Grey Mosaic Wet Room detail"
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
              Grey Mosaic Wet Room
            </h1>
            <span className="project-number-badge">#15</span>
          </div>
          <p>
            A seamless conversion of a bathroom into a modern, level-access wet room. 
            The design is built around a monochromatic grey palette, featuring large-format stone-effect tiles on the walls and floors to create a spacious feel. 
            A textured mosaic feature wall defines the shower zone. 
            To maintain an open and hygienic floor area, I installed wall-hung fixtures throughout, including a floating vanity and a WC. 
            As the sole contractor, I managed the technical formation of the wet room floor gradient and the complete fit-out.
          </p>

          <ul>
            <li>Full Multi Trade Execution: Complete management of wet room formation, plumbing, tiling, and carpentry.</li>
            <li>Wet Room Floor Construction: Creation of a level-entry shower floor using "envelope cuts" on large-format tiles to ensure perfect drainage to the square waste.</li>
            <li>Tiling Specification: Installation of grey ceramic wall and floor tiles, with a contrasting mosaic brick-effect feature wall inside the shower area.</li>
            <li>Concealed Plumbing: Structural construction of a tiled boxing unit to house the concealed cistern and wall-hung WC frame.</li>
            <li>Shower Configuration: Fitting of a fixed frameless glass wet room screen and a chrome dual-outlet thermostatic mixer valve.</li>
            <li>Sanitaryware: Installation of a wall-hung grey gloss two-drawer vanity unit and a wall-hung WC to maximize visible floor space.</li>
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
              alt={`Grey Mosaic Wet Room - Image ${currentImageIndex + 1}`}
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
