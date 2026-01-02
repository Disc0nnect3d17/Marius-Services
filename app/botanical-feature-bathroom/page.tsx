"use client";

import Image from "next/image";
import { useState } from "react";

export default function BotanicalFeatureBathroomPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "cover.JPG",
    "botanical-feature-bathroom-1.JPG",
    "botanical-feature-bathroom-2.JPG",
    "botanical-feature-bathroom-3.JPG"
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
              src="/images/portfolio/Botanical Feature Bathroom/cover.JPG"
              alt="Botanical Feature Bathroom"
              fill
              priority
            />
          </div>

          {/* Supporting images */}
          <div className="gallery-secondary">
            {["botanical-feature-bathroom-1.JPG", "botanical-feature-bathroom-2.JPG", "botanical-feature-bathroom-3.JPG"].map((img, idx) => (
              <div key={img} className="gallery-thumb" onClick={() => openLightbox(idx + 1)}>
                <Image
                  src={`/images/portfolio/Botanical Feature Bathroom/${img}`}
                  alt="Botanical Feature Bathroom detail"
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
              Botanical Feature Bathroom
            </h1>
            <span className="project-number-badge">#31</span>
          </div>
          <p>
            A bathroom renovation that injects personality into the space through a bold choice of materials. The focal point of the design is a feature wall above the bath, tiled with a striking large-scale tropical leaf pattern in cool blue tones. This is balanced by clean white matte tiling on the remaining walls to keep the room feeling bright and open. To ensure the space is versatile for daily use, I installed a multi-fold glass shower screen that tucks away neatly when not in use. The look is anchored by a dark blue wall-hung vanity unit that complements the feature tiles perfectly. As the sole contractor, I managed the plumbing, tiling, and installation to transform the room.
          </p>

          <h3>Key Technical Work</h3>

          <ul>
            <li>Full Multi Trade Execution: Complete management of plumbing, tiling, and sanitaryware fitting.</li>
            <li>Feature Tiling: Installation of a statement botanical leaf-print feature wall, set against plain white field tiles.</li>
            <li>Shower Screen Installation: Fitting of a 4-fold concertina glass shower screen to allow maximum access and space-saving functionality.</li>
            <li>Bathing Configuration: Installation of a bath with a chrome mixer tap and a wall-mounted shower riser rail.</li>
            <li>Sanitaryware: Fitting of a dark blue wall-hung vanity unit with a modern ceramic basin.</li>
            <li>Flooring: Installation of neutral, durable flooring to complement the cool tones of the room.</li>
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
                src={`/images/portfolio/Botanical Feature Bathroom/${images[currentImageIndex]}`}
                alt="Botanical Feature Bathroom"
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
