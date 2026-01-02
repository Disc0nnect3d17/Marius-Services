"use client";

import Image from "next/image";
import { useState } from "react";

export default function GreyOakBedroomFlooringPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const images = [
    "cover.JPG",
    "grey-oak-bedroom-flooring-1.JPG"
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
      <div className="project-layout">
        {/* Image gallery */}
        <div className="project-gallery">
          {/* Large feature image */}
          <div className="gallery-main" onClick={() => openLightbox("cover.JPG")}>
            <Image
              src="/images/portfolio/Grey Oak Bedroom Flooring/cover.JPG"
              alt="Grey Oak Bedroom Flooring"
              fill
              priority
            />
          </div>

          {/* Supporting images */}
          <div className="gallery-secondary">
            {["grey-oak-bedroom-flooring-1.JPG"].map(img => (
              <div key={img} className="gallery-thumb" onClick={() => openLightbox(img)}>
                <Image
                  src={`/images/portfolio/Grey Oak Bedroom Flooring/${img}`}
                  alt="Grey Oak Bedroom Flooring detail"
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
              Grey Oak Bedroom Flooring
            </h1>
            <span className="project-number-badge">#39</span>
          </div>
          <p>
            A flooring update designed to refresh a bedroom space with a modern, cohesive look. I installed durable grey wood-effect laminate flooring, carefully laying the planks in a staggered pattern to ensure structural stability and a natural aesthetic. To achieve a high-end finish, I removed the old skirtings and installed fresh white skirting boards around the perimeter, creating a crisp contrast against the pale grey walls. At the entrance, I undercut the oak door frame to allow the flooring to slide underneath for a neat termination, installing a metal threshold strip where the laminate meets the hallway tiling.
          </p>

          <h3>Key Technical Work</h3>

          <ul>
            <li>Laminate Installation: Fitting of grey wood-effect laminate flooring throughout the bedroom.</li>
            <li>Carpentry & Skirting: Measuring, cutting, and installing new white skirting boards to frame the room.</li>
            <li>Threshold Detailing: Installation of a metal door bar to bridge the transition between the bedroom laminate and the hallway tiles.</li>
            <li>Precision Cutting: Undercutting the existing oak door architraves to ensure a gap-free finish around the frame.</li>
            <li>Radiator Adaptation: Cutting precise holes for radiator pipework to ensure a tidy look.</li>
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
              src={`/images/portfolio/Grey Oak Bedroom Flooring/${currentImage}`}
              alt="Grey Oak Bedroom Flooring"
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
