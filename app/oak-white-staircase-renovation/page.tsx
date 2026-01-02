"use client";

import Image from "next/image";
import { useState } from "react";

export default function OakWhiteStaircaseRenovationPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "cover.jpg",
    "oak-white-staircase-renovation-1.jpg",
    "oak-white-staircase-renovation-2.jpg",
    "oak-white-staircase-renovation-3.jpg",
    "oak-white-staircase-renovation-4.jpg",
    "oak-white-staircase-renovation-5.jpg"
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
              src="/images/portfolio/oak-white-staircase-renovation/cover.jpg"
              alt="Oak & White Staircase Renovation"
              fill
              priority
            />
          </div>

          {/* Supporting images */}
          <div className="gallery-secondary">
            {["oak-white-staircase-renovation-1.jpg", "oak-white-staircase-renovation-2.jpg", "oak-white-staircase-renovation-3.jpg", "oak-white-staircase-renovation-4.jpg", "oak-white-staircase-renovation-5.jpg"].map((img, idx) => (
              <div key={img} className="gallery-thumb" onClick={() => openLightbox(idx + 1)}>
                <Image
                  src={`/images/portfolio/oak-white-staircase-renovation/${img}`}
                  alt="Oak & White Staircase Renovation detail"
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
              Oak & White Staircase Renovation
            </h1>
            <span className="project-number-badge">#40</span>
          </div>
          <p>
            A carpentry project focused on transforming a standard staircase into a stunning architectural feature. The design replaces or clads the existing treads with high-quality oak, creating a warm, premium surface that contrasts beautifully with the crisp white painted risers and stringers. A major challenge of this project was the "winder" layout (where the stairs turn a corner), requiring complex angular cuts to ensure the grain and nosing aligned perfectly. I also crafted a custom curved bottom step (bullnose) to provide an elegant inviting entry to the flight. As the sole contractor, I managed the precise cutting, installation, and final finishing of the timber.
          </p>

          <h3>Key Technical Work</h3>

          <ul>
            <li>Stair Transformation: Installation of oak treads over the existing structure, paired with white painted risers for a classic, clean aesthetic.</li>
            <li>Precision Winder Cutting: Technical cutting of triangular "winder" steps to navigate the turn in the staircase while maintaining tight, consistent gaps against the stringers.</li>
            <li>Bullnose Detailing: Custom shaping and installation of the curved bottom step (bullnose) to ensure a smooth, professional finish at the floor level.</li>
            <li>Seamless Transitions: Installation of matching oak flooring on the landing to ensure a continuous flow from the stairs to the upper level.</li>
            <li>Finishing: Application of durable varnish/oil to the oak treads and satin white paint to the woodwork, balustrades, and risers.</li>
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
                src={`/images/portfolio/oak-white-staircase-renovation/${images[currentImageIndex]}`}
                alt="Oak & White Staircase Renovation"
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
