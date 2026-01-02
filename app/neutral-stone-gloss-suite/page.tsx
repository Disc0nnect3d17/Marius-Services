"use client";

import Image from "next/image";
import { useState } from "react";

export default function NeutralStoneGlossPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "/images/portfolio/Neutral Stone & Gloss Suite/cover.JPG",
    "/images/portfolio/Neutral Stone & Gloss Suite/neutral-stone-gloss-suite-1.JPG",
    "/images/portfolio/Neutral Stone & Gloss Suite/neutral-stone-gloss-suite-2.JPG",
    "/images/portfolio/Neutral Stone & Gloss Suite/neutral-stone-gloss-suite-3.JPG",
    "/images/portfolio/Neutral Stone & Gloss Suite/neutral-stone-gloss-suite-4.JPG"
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
              src="/images/portfolio/Neutral Stone & Gloss Suite/cover.JPG"
              alt="Neutral Stone & Gloss Suite"
              fill
              priority
            />
          </div>

          {/* Supporting images */}
          <div className="gallery-secondary">
            {["neutral-stone-gloss-suite-1.JPG", "neutral-stone-gloss-suite-2.JPG", "neutral-stone-gloss-suite-3.JPG", "neutral-stone-gloss-suite-4.JPG"].map((img, index) => (
              <div key={img} className="gallery-thumb" onClick={() => openLightbox(index + 1)}>
                <Image
                  src={`/images/portfolio/Neutral Stone & Gloss Suite/${img}`}
                  alt="Neutral Stone & Gloss Suite detail"
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
              Neutral Stone & Gloss Suite
            </h1>
            <span className="project-number-badge">#13</span>
          </div>
          <p>
            A sleek, modern bathroom renovation utilizing a neutral color palette to create a spacious and calming atmosphere. 
            The walls are fully tiled in large-format stone-effect ceramic, paired with contrasting grey wood-effect flooring. 
            The layout features a large sliding-door shower enclosure with a custom recessed storage niche. 
            To maintain clean lines, I installed a wall-hung vanity and a WC with a concealed cistern housed in custom tiled boxing. 
            As the sole contractor, I managed the entire project from the structural boxing to the final silicone seal.
          </p>

          <ul>
            <li>Full Multi Trade Execution: Complete management of plumbing, tiling, electrical, and carpentry.</li>
            <li>Tiling Specification: Floor-to-ceiling installation of large-format neutral stone-effect tiles throughout the room.</li>
            <li>Shower Configuration: Fitting of a spacious sliding-door shower enclosure featuring a custom tiled recessed niche for storage and chrome fittings.</li>
            <li>Concealed Plumbing: Construction of a tiled boxing unit to house the concealed cistern, finished with a flush plate.</li>
            <li>Sanitaryware & Storage: Installation of a modern white gloss wall-hung vanity unit and an illuminated mirror cabinet.</li>
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
              alt={`Neutral Stone & Gloss Suite - Image ${currentImageIndex + 1}`}
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
