"use client";

import Image from "next/image";
import { useState } from "react";

export default function WhiteGlossGraphiteKitchenPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "cover.JPG",
    "white-gloss-graphite-kitchen-1.JPG",
    "white-gloss-graphite-kitchen-2.JPG",
    "white-gloss-graphite-kitchen-3.JPG",
    "white-gloss-graphite-kitchen-4.JPG"
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
              src="/images/portfolio/White Gloss & Graphite Kitchen/cover.JPG"
              alt="White Gloss & Graphite Kitchen"
              fill
              priority
            />
          </div>

          {/* Supporting images */}
          <div className="gallery-secondary">
            {["white-gloss-graphite-kitchen-1.JPG", "white-gloss-graphite-kitchen-2.JPG", "white-gloss-graphite-kitchen-3.JPG", "white-gloss-graphite-kitchen-4.JPG"].map((img, idx) => (
              <div key={img} className="gallery-thumb" onClick={() => openLightbox(idx + 1)}>
                <Image
                  src={`/images/portfolio/White Gloss & Graphite Kitchen/${img}`}
                  alt="White Gloss & Graphite Kitchen detail"
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
              White Gloss & Graphite Kitchen
            </h1>
            <span className="project-number-badge">#20</span>
          </div>
          <p>
            A sleek, ultra-modern kitchen renovation defined by its high-contrast monochrome palette. 
            The design features high-gloss white cabinetry paired with dark stone-effect worktops and matching grey splashback panels for a streamlined, low-maintenance finish. 
            The aesthetic is elevated with integrated colour-changing LED feature lighting and matte black hardware. 
            As the sole contractor, I managed the entire project, from the precise fitting of the cabinets to the electrical lighting installation and final flooring.
          </p>

          <ul>
            <li>Full Multi Trade Execution: Complete management of kitchen fitting, electrical, plumbing, and flooring.</li>
            <li>Cabinetry Installation: Fitting of high-gloss white slab units with contrasting black bar handles throughout.</li>
            <li>Surface Finishing: Installation of dark stone-effect worktops and continuous grey splashback panels.</li>
            <li>Lighting Design: Installation of a large architectural ceiling panel light and feature colour-changing LED strip lighting above the units.</li>
            <li>Appliance Integration: Fitting of an eye-level oven and microwave stack, a black induction hob, and housing for a freestanding black American fridge-freezer.</li>
            <li>Flooring: Laying of grey wood-effect plank flooring to complement the monochrome theme.</li>
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
              src={`/images/portfolio/White Gloss & Graphite Kitchen/${images[currentImageIndex]}`}
              alt="White Gloss & Graphite Kitchen"
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
