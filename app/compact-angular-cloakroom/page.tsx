"use client";

import Image from "next/image";
import { useState } from "react";

export default function CompactAngularCloakroomPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "cover.jpg",
    "compact-angular-cloakroom-1.jpg",
    "compact-angular-cloakroom-2.jpg",
    "compact-angular-cloakroom-3.jpg"
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
              src="/images/portfolio/compact-angular-cloakroom/cover.jpg"
              alt="Compact Angular Cloakroom"
              fill
              priority
            />
          </div>

          {/* Supporting images */}
          <div className="gallery-secondary">
            {["compact-angular-cloakroom-1.jpg", "compact-angular-cloakroom-2.jpg", "compact-angular-cloakroom-3.jpg"].map((img, idx) => (
              <div key={img} className="gallery-thumb" onClick={() => openLightbox(idx + 1)}>
                <Image
                  src={`/images/portfolio/compact-angular-cloakroom/${img}`}
                  alt="Compact Angular Cloakroom detail"
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
              Compact Angular Cloakroom
            </h1>
            <span className="project-number-badge">#34</span>
          </div>
          <p>
            A smart renovation of a small, irregularly shaped downstairs toilet (likely an under-stairs conversion). The goal was to create a functional and clean space within a very tight footprint. I installed a compact white gloss vanity unit tucked neatly into the corner to maximize floor area, paired with a modern close-coupled WC. The walls were painted in a soft neutral grey to keep the room feeling open, while a wipe-clean splashback panel was fitted behind the basin for practicality. As the sole contractor, I handled the plumbing, flooring installation, and final decoration.
          </p>

          <h3>Key Technical Work</h3>

          <ul>
            <li>Full Multi Trade Execution: Complete management of plumbing, flooring, joinery, and decoration.</li>
            <li>Space Optimization: Installation of a compact vanity unit specifically selected to fit the tight corner angles of the room.</li>
            <li>Sanitaryware: Fitting of a modern white close-coupled WC with a dual flush system.</li>
            <li>Heating: Plumbing and mounting of a white ladder-style heated towel rail, positioned behind the door to utilize dead space.</li>
            <li>Flooring: Installation of light wood-effect plank flooring, requiring precise cutting to accommodate the room's angular shape.</li>
            <li>Finishing: Installation of a mirrored wall cabinet and a clean white splashback panel behind the basin.</li>
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
                src={`/images/portfolio/compact-angular-cloakroom/${images[currentImageIndex]}`}
                alt="Compact Angular Cloakroom"
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
