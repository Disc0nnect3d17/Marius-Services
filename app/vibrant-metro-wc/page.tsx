"use client";

import Image from "next/image";
import { useState } from "react";

export default function VibrantMetroWCPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "cover.jpg",
    "vibrant-metro-WC-1.jpg",
    "vibrant-metro-WC-2.jpg",
    "vibrant-metro-WC-3.jpg"
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
              src="/images/portfolio/vibrant-metro-wc/cover.jpg"
              alt="Vibrant Metro WC"
              fill
              priority
            />
          </div>

          {/* Supporting images */}
          <div className="gallery-secondary">
            {["vibrant-metro-WC-1.jpg", "vibrant-metro-WC-2.jpg", "vibrant-metro-WC-3.jpg"].map((img, idx) => (
              <div key={img} className="gallery-thumb" onClick={() => openLightbox(idx + 1)}>
                <Image
                  src={`/images/portfolio/vibrant-metro-wc/${img}`}
                  alt="Vibrant Metro WC detail"
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
              Vibrant Metro WC
            </h1>
            <span className="project-number-badge">#17</span>
          </div>
          <p>
            A bold renovation of a downstairs WC that combines practical accessibility with striking design. 
            The walls feature a two-tone layout, using neutral stone-effect tiles on the lower half and a vibrant, multi-coloured metro tile mix above dado height. 
            High-gloss marble-effect floor tiles add to the reflective, modern feel. 
            I installed a modern vanity and WC, along with specialized features including a handheld bidet spray and a fold-down support arm. 
            As the sole contractor, I executed all trades from the initial plumbing adjustments to the final tiling and electrical fit-out.
          </p>

          <ul>
            <li>Full Multi Trade Execution: Complete management of plumbing, tiling, and electrical installation.</li>
            <li>Feature Tiling: Installation of a complex multi-coloured metro tile layout in a brick-bond pattern, contrasted with neutral lower tiling.</li>
            <li>Flooring: High-gloss marble-effect porcelain tiles laid to maximize light reflection.</li>
            <li>Specialized Plumbing: Installation of a handheld bidet spray (douche) next to the WC, requiring specific isolation and feed work.</li>
            <li>Accessibility Features: Fitting of a wall-mounted fold-down support arm for improved accessibility.</li>
            <li>Heating & Electrical: Mounting of a chrome heated towel rail and an LED illuminated vanity mirror.</li>
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
              src={`/images/portfolio/vibrant-metro-wc/${images[currentImageIndex]}`}
              alt="Vibrant Metro WC"
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

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-lg">
              {currentImageIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
