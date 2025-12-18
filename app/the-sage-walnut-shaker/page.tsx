"use client";

import Image from "next/image";
import { useState } from "react";

export default function SageWalnutPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const images = [
    "sage-walnut-1.JPG",
    "sage-walnut-2.JPG",
    "sage-walnut-3.JPG"
  ];

  const openLightbox = (img: string) => {
    setCurrentImage(img);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <main className="project-page">
      <h1 className="project-title">The Sage & Walnut Shaker</h1>

      <div className="project-layout">
        {/* Image gallery */}
        <div className="project-gallery organic">
          {images.map((img, index) => (
            <div 
              key={img}
              className={`gallery-item item-${index + 1}`}
              onClick={() => openLightbox(img)}
            >
              <Image
                src={`/images/portfolio/sage-walnut/${img}`}
                alt="The Sage & Walnut Shaker"
                fill
                sizes="(max-width: 900px) 100vw, 60vw"
              />
            </div>
          ))}
        </div>

        {/* Description */}
        <div className="project-description">
          <h2>Project Overview</h2>
          <p>
            This bespoke Sage & Walnut Shaker kitchen combines timeless shaker
            cabinetry with rich walnut accents. Designed for both elegance and
            practicality, the space balances warm natural materials with modern
            craftsmanship.
          </p>

          <ul>
            <li>Custom shaker cabinetry</li>
            <li>Solid walnut detailing</li>
            <li>Soft-close drawers and doors</li>
            <li>Hand-finished installation</li>
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
            <img
              src={`/images/portfolio/sage-walnut/${currentImage}`}
              alt="The Sage & Walnut Shaker"
              style={{ 
                maxWidth: '90vw', 
                maxHeight: '90vh', 
                width: 'auto', 
                height: 'auto',
                objectFit: 'contain'
              }}
            />
          </div>
        </div>
      )}
    </main>
  );
}
