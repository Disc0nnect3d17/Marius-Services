"use client";

import Image from "next/image";
import { useState } from "react";

export default function SageWalnutPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "/images/portfolio/sage-walnut/cover.jpg",
    "/images/portfolio/sage-walnut/sage-walnut-1.jpg",
    "/images/portfolio/sage-walnut/sage-walnut-2.jpg",
    "/images/portfolio/sage-walnut/sage-walnut-3.jpg",
    "/images/portfolio/sage-walnut/sage-walnut-4.jpg"
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
              src="/images/portfolio/sage-walnut/cover.jpg"
              alt="The Sage & Walnut Shaker kitchen"
              fill
              priority
            />
          </div>

          {/* Supporting images */}
          <div className="gallery-secondary">
            {["sage-walnut-1.jpg", "sage-walnut-2.jpg", "sage-walnut-3.jpg", "sage-walnut-4.jpg"].map((img, index) => (
              <div key={img} className="gallery-thumb" onClick={() => openLightbox(index + 1)}>
                <Image
                  src={`/images/portfolio/sage-walnut/${img}`}
                  alt="The Sage & Walnut Shaker detail"
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
              The Sage & Walnut Shaker
            </h1>
            <span className="project-number-badge">#1</span>
          </div>
          <p>
            A complete turn-key renovation executed entirely by a single specialist. 
            This project transformed a bare shell into a sophisticated kitchen by blending traditional farmhouse elements with modern contrasts.
            From the initial electrical rough in and plastering to the precision joinery and flooring, every aspect of the build was handled in house to ensure a seamless, high-quality finish. 
            The design features soft sage shaker cabinetry, solid walnut butcher block worktops, and a striking vertical-stack black backsplash..
          </p>

          <ul>
            <li>Full Multi Trade Execution: Electrical, plastering, plumbing, and painting.</li>
            <li>Bespoke Joinery: Custom fit sage shaker units with soft-close hardware.</li>
            <li>Solid Timber: Walnut butcher block worktops and breakfast bar, oiled and sealed.</li>
            <li>Tiling & Flooring: Matte black "kit-kat" splashback and continuous engineered oak flooring.</li>
            <li>Detailing: Double Belfast sink integration and custom appliance housing.</li>
          </ul>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white text-4xl font-bold hover:text-gray-300 z-50"
          >
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
              src={images[currentImageIndex]}
              alt={`The Sage & Walnut Shaker - Image ${currentImageIndex + 1}`}
              className="max-w-[90vw] max-h-[90vh] object-contain"
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
      )}
    </main>
  );
}
