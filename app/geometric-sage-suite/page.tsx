"use client";

import Image from "next/image";
import { useState } from "react";

export default function GeometricSagePage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "cover.jpg",
    "geometric-sage-suite-1.jpg",
    "geometric-sage-suite-2.jpg",
    "geometric-sage-suite-3.jpg",
    "geometric-sage-suite-4.jpg"
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
              src="/images/portfolio/Geometric Sage Suite/cover.jpg"
              alt="Geometric Sage Suite bathroom"
              fill
              priority
            />
          </div>

          {/* Supporting images */}
          <div className="gallery-secondary">
            {["geometric-sage-suite-1.jpg", "geometric-sage-suite-2.jpg", "geometric-sage-suite-3.jpg", "geometric-sage-suite-4.jpg"].map((img, idx) => (
              <div key={img} className="gallery-thumb" onClick={() => openLightbox(idx + 1)}>
                <Image
                  src={`/images/portfolio/Geometric Sage Suite/${img}`}
                  alt="Geometric Sage Suite detail"
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
              Geometric Sage Suite
            </h1>
            <span className="project-number-badge">#25</span>
          </div>
          <p>
            A stylish bathroom renovation that balances bold pattern with calming tones. The design features a striking black and white geometric floor that acts as the room's centerpiece. This is softened by classic white subway tiles laid to half-height and walls painted in a soothing sage green. To provide versatility for family living, I installed a P-shaped shower bath, which offers a spacious showering area without compromising on bathing space. As the sole contractor, I managed the entire refurbishment, including the precise floor tiling and final decoration.
          </p>

          <h3>Key Technical Work</h3>

          <ul>
            <li>Full Multi Trade Execution: Complete management of plumbing, tiling, flooring, and decoration.</li>
            <li>Flooring Specification: Installation of statement black and white geometric floor tiles in a triangular pattern.</li>
            <li>Wall Tiling & Decor: Classic white subway tiles laid in a brick bond pattern to half-height, paired with sage green painted upper walls.</li>
            <li>Bathing Configuration: Fitting of a P-shaped shower bath with a matching curved glass screen to maximize standing space.</li>
            <li>Shower Installation: Installation of a chrome thermostatic mixer shower with riser rail over the bath.</li>
            <li>Sanitaryware: Fitting of a freestanding grey vanity unit with a ceramic basin and a close-coupled WC.</li>
            <li>Heating: Mounting of a chrome heated towel rail.</li>
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
                src={`/images/portfolio/Geometric Sage Suite/${images[currentImageIndex]}`}
                alt="Geometric Sage Suite"
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
