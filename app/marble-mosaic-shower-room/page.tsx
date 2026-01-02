"use client";

import Image from "next/image";
import { useState } from "react";

export default function MarbleMosaicShowerRoomPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "cover.jpg",
    "marble-mosaic-shower-room-1.jpg",
    "marble-mosaic-shower-room-2.jpg"
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
              src="/images/portfolio/marble-mosaic-shower-room/cover.jpg"
              alt="Marble & Mosaic Shower Room"
              fill
              priority
            />
          </div>

          {/* Supporting images */}
          <div className="gallery-secondary">
            {["marble-mosaic-shower-room-1.jpg", "marble-mosaic-shower-room-2.jpg"].map((img, idx) => (
              <div key={img} className="gallery-thumb" onClick={() => openLightbox(idx + 1)}>
                <Image
                  src={`/images/portfolio/marble-mosaic-shower-room/${img}`}
                  alt="Marble & Mosaic Shower Room detail"
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
              Marble & Mosaic Shower Room
            </h1>
            <span className="project-number-badge">#36</span>
          </div>
          <p>
            A contemporary bathroom renovation defined by its elegant tiling and modern lighting choices. The walls are finished in large-format white marble-effect porcelain, accented by a decorative mosaic border strip that runs the perimeter of the room, adding texture and breaking up the vertical space. The focal point of the vanity area is a striking hexagonal LED illuminated mirror, which complements the clean lines of the white gloss wall-hung unit. I installed a spacious shower enclosure featuring a rainfall system to create a luxurious daily experience. As the sole contractor, I executed the entire project, ensuring the mosaic detail was perfectly aligned and the finish was seamless.
          </p>

          <h3>Key Technical Work</h3>

          <ul>
            <li>Full Multi Trade Execution: Complete management of plumbing, tiling, and electrical finishing.</li>
            <li>Tiling Specification: Installation of large-format marble-effect wall and floor tiles, featuring a precise mosaic border strip at dado height.</li>
            <li>Lighting Design: Wiring and mounting of a feature hexagonal LED illuminated mirror and recessed ceiling spotlights.</li>
            <li>Shower Configuration: Fitting of a glass shower enclosure with a chrome thermostatic mixer column and overhead rainfall spray.</li>
            <li>Sanitaryware: Installation of a wall-hung white gloss two-drawer vanity unit and a modern close-coupled WC.</li>
            <li>Plumbing Fixtures: Fitting of a chrome mono basin mixer tap and waste.</li>
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
                src={`/images/portfolio/marble-mosaic-shower-room/${images[currentImageIndex]}`}
                alt="Marble & Mosaic Shower Room"
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
