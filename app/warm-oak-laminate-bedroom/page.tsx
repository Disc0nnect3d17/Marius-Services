"use client";

import Image from "next/image";
import { useState } from "react";

export default function WarmOakLaminateBedroomPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "cover.jpg",
    "warm-oak-laminate-bedroom-1.jpg",
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
              src="/images/portfolio/warm-oak-laminate-bedroom/cover.jpg"
              alt="Warm Oak Laminate Bedroom"
              fill
              priority
            />
          </div>

          {/* Supporting images */}
          <div className="gallery-secondary">
            {["warm-oak-laminate-bedroom-1.jpg"].map((img, idx) => (
              <div key={img} className="gallery-thumb" onClick={() => openLightbox(idx + 1)}>
                <Image
                  src={`/images/portfolio/warm-oak-laminate-bedroom/${img}`}
                  alt="Warm Oak Laminate Bedroom detail"
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
              Warm Oak Laminate Bedroom
            </h1>
            <span className="project-number-badge">#43</span>
          </div>
          <p>
            A bedroom update designed to bring warmth and durability to the space. I installed a medium-toned oak-effect laminate floor, chosen to add natural texture while remaining easy to clean and maintain. The warm wood grain contrasts effectively with the neutral beige walls and white ceiling. To ensure a high-standard finish, I fitted fresh white skirting boards around the entire perimeter, creating a crisp junction between the floor and walls. The installation was executed with precision, ensuring a neat fit around the radiator and a smooth transition at the doorway.
          </p>

          <h3>Key Technical Work</h3>
          <ul>
            <li>Laminate Installation: Fitting of warm oak-effect laminate flooring laid in a staggered pattern for stability.</li>
            <li>Finishing Carpentry: Installation of new white skirting boards to frame the new flooring cleanly.</li>
            <li>Radiator Integration: Precise cutting of the flooring around radiator pipework for a tidy finish.</li>
            <li>Doorway Transition: Ensuring the flooring meets the oak door frame neatly for a seamless entrance.</li>
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
                src={`/images/portfolio/warm-oak-laminate-bedroom/${images[currentImageIndex]}`}
                alt="Warm Oak Laminate Bedroom"
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
