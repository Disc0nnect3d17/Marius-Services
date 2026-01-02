"use client";

import Image from "next/image";
import { useState } from "react";

export default function AcousticSlatFeatureWallPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "cover.jpg",
    "acoustic-slat-feature-wall-1.jpg"
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
              src="/images/portfolio/acoustic-slat-feature-wall/cover.jpg"
              alt="Acoustic Slat Feature Wall"
              fill
              priority
            />
          </div>

          {/* Supporting images */}
          <div className="gallery-secondary">
            {["acoustic-slat-feature-wall-1.jpg"].map((img, idx) => (
              <div key={img} className="gallery-thumb" onClick={() => openLightbox(idx + 1)}>
                <Image
                  src={`/images/portfolio/acoustic-slat-feature-wall/${img}`}
                  alt="Acoustic Slat Feature Wall detail"
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
              Acoustic Slat Feature Wall
            </h1>
            <span className="project-number-badge">#42</span>
          </div>
          <p>
            A contemporary carpentry update designed to create a striking focal point in the room. I installed full-height vertical wood slat panels, chosen for their popular modern aesthetic and acoustic properties. The installation required precise measuring to ensure a seamless fit from wall to wall. A critical part of this job was the integration of the electrical and media points; I carefully cut the panels to accommodate the sockets, ensuring they sat neatly against the new textured surface for a professional finish. The warm wood tones contrast effectively with the cool grey walls and white skirting, adding significant depth to the space.
          </p>

          <h3>Key Technical Work</h3>

          <ul>
            <li>Feature Wall Installation: Installation of floor-to-ceiling vertical wooden slat panels to create a textured statement wall.</li>
            <li>Electrical Integration: Precision cutting of the panels to accommodate multiple power sockets and media points for a TV setup.</li>
            <li>Finishing Carpentry: Installation of white skirting boards along the base to frame the new paneling cleanly.</li>
            <li>Decoration: Painting of the surrounding walls in a cool grey to make the wood features stand out.</li>
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
              src={`/images/portfolio/acoustic-slat-feature-wall/${images[currentImageIndex]}`}
              alt="Acoustic Slat Feature Wall"
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
