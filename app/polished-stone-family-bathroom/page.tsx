'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function PolishedStoneFamilyBathroomPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    '/images/portfolio/Polished Stone Family Bathroom/cover.JPG',
    '/images/portfolio/Polished Stone Family Bathroom/polished-stone-family-bathroom-1.JPG',
    '/images/portfolio/Polished Stone Family Bathroom/polished-stone-family-bathroom-2.JPG',
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
              src="/images/portfolio/Polished Stone Family Bathroom/cover.JPG"
              alt="Polished Stone Family Bathroom"
              fill
              priority
            />
          </div>

          {/* Supporting images */}
          <div className="gallery-secondary">
            {images.slice(1).map((img, index) => (
              <div key={index} className="gallery-thumb" onClick={() => openLightbox(index + 1)}>
                <Image
                  src={img}
                  alt="Polished Stone Family Bathroom detail"
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
              Polished Stone Family Bathroom
            </h1>
            <span className="project-number-badge">#44</span>
          </div>
          <p>
            A complete bathroom renovation designed for durability and a clean, timeless aesthetic. The room is fully tiled from floor to ceiling in high-gloss stone-effect porcelain, creating a bright and watertight environment that is easy to maintain. A key feature of this layout is the custom boxing-in along the lower wall, which neatly conceals pipework behind the WC and basin while providing a useful tiled ledge for storage. I installed a multi-function shower bath setup, combining a rainfall showerhead with a glass screen to offer the versatility of both a bath and a shower. As the sole contractor, I managed the entire fit-out, including the plumbing, tiling, and installation of fixtures.
          </p>

          <ul>
            <li>
              <strong>Full Multi Trade Execution:</strong> Complete management of plumbing, tiling, and sanitaryware installation.
            </li>
            <li>
              <strong>Tiling Specification:</strong> Floor-to-ceiling installation of polished beige stone-effect wall tiles, paired with matching large-format floor tiles.
            </li>
            <li>
              <strong>Custom Joinery & Boxing:</strong> Construction of a tiled boxing section to conceal cistern plumbing and waste pipes, creating a functional shelf behind the sanitaryware.
            </li>
            <li>
              <strong>Shower Configuration:</strong> Installation of a chrome thermostatic mixer shower featuring an overhead rainfall head and a handheld attachment.
            </li>
            <li>
              <strong>Bathing Area:</strong> Fitting of a standard bath with a white panel and a frameless glass pivot screen.
            </li>
            <li>
              <strong>Sanitaryware:</strong> Installation of a classic white pedestal basin and a close-coupled WC.
            </li>
            <li>
              <strong>Heating & Storage:</strong> Mounting of a white ladder-style heated towel rail and a mirrored wall cabinet.
            </li>
          </ul>
        </div>
      </div>

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
              alt={`Polished Stone Family Bathroom - Image ${currentImageIndex + 1}`}
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
