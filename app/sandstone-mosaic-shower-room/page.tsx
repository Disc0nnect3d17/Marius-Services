"use client";

import Image from "next/image";
import { useState } from "react";

export default function SandstoneMosaicPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "cover.JPG",
    "sandstone-sosaic-shower-1.JPG",
    "sandstone-sosaic-shower-2.JPG",
    "sandstone-sosaic-shower-3.JPG"
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
              src="/images/portfolio/Sandstone & Mosaic Shower Room/cover.JPG"
              alt="Sandstone & Mosaic Shower Room"
              fill
              priority
            />
          </div>

          {/* Supporting images */}
          <div className="gallery-secondary">
            {["sandstone-sosaic-shower-1.JPG", "sandstone-sosaic-shower-2.JPG", "sandstone-sosaic-shower-3.JPG"].map((img, idx) => (
              <div key={img} className="gallery-thumb" onClick={() => openLightbox(idx + 1)}>
                <Image
                  src={`/images/portfolio/Sandstone & Mosaic Shower Room/${img}`}
                  alt="Sandstone & Mosaic Shower Room detail"
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
              Sandstone & Mosaic Shower Room
            </h1>
            <span className="project-number-badge">#4</span>
          </div>
          <p>
            A full renovation of a bathroom into a fully tiled shower room. 
            The design features warm beige square ceramic tiles throughout, combining full-height tiling within the shower area with half-height tiling around the sanitaryware. 
            A continuous horizontal band of mosaic tiles adds a detailed accent perimeter. 
            The layout includes a corner glass shower enclosure, a classic pedestal basin, and a WC, all finished with chrome hardware. 
            As the sole contractor, I executed all trades from initial strip-out to completion.
          </p>

          <ul>
            <li>Full Multi Trade Execution: Complete management of plumbing, tiling, and sanitaryware fitting.</li>
            <li>Tiling Specification: Ceramic tiling throughout, featuring full-height coverage in the wet zone and a continuous mosaic border feature.</li>
            <li>Shower Installation: Fitting of a corner shower tray, glass enclosure, and an exposed chrome thermostatic mixer valve with riser rail.</li>
            <li>Sanitaryware: Installation of a traditional white pedestal basin with chrome pillar taps and a matching WC.</li>
            <li>Finishing Details: Fitting of all chrome accessories including towel ring and toilet roll holder, and final silicone sealing.</li>
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
              src={`/images/portfolio/Sandstone & Mosaic Shower Room/${images[currentImageIndex]}`}
              alt="Sandstone & Mosaic Shower Room"
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
