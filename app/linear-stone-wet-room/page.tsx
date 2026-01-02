"use client";

import Image from "next/image";
import { useState } from "react";

export default function LinearStoneWetRoomPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const images = [
    "cover.JPG",
    "linear-stone-wet-room-1.jpg",
    "linear-stone-wet-room-2.JPG",
    "linear-stone-wet-room-3.JPG"
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
              src="/images/portfolio/Linear Stone Wet Room/cover.JPG"
              alt="Linear Stone Wet Room"
              fill
              priority
            />
          </div>

          {/* Supporting images */}
          <div className="gallery-secondary">
            {["linear-stone-wet-room-1.jpg", "linear-stone-wet-room-2.JPG", "linear-stone-wet-room-3.JPG"].map(img => (
              <div key={img} className="gallery-thumb" onClick={() => openLightbox(img)}>
                <Image
                  src={`/images/portfolio/Linear Stone Wet Room/${img}`}
                  alt="Linear Stone Wet Room detail"
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
              Linear Stone Wet Room
            </h1>
            <span className="project-number-badge">#19</span>
          </div>
          <p>
            A sleek wet room conversion defined by its monochromatic palette and linear stone textures. 
            The room is fully tiled in matching grey stone-effect porcelain on both walls and floors, creating a seamless and expansive feel. 
            The design is punctuated by striking matte black fixtures, including a high-tech shower tower and a matching towel radiator. 
            As the sole contractor, I managed the entire wet room construction, ensuring perfect drainage gradients and a watertight finish throughout.
          </p>

          <ul>
            <li>Full Multi Trade Execution: Complete management of wet room formation, plumbing, tiling, and electrical.</li>
            <li>Wet Room Construction: Formation of a level-entry shower floor with precision envelope cuts to ensure correct drainage to the waste.</li>
            <li>Tiling Specification: Floor-to-ceiling installation of linear grey stone-effect tiles to create a continuous waterproof shell.</li>
            <li>Shower Configuration: Installation of a statement matte black shower tower featuring body jets, handset, and rainfall head.</li>
            <li>Contrast Fixtures: Fitting of a black floor-standing vanity unit, black mixer tap, and matching black heated towel radiator.</li>
            <li>Electrical Integration: Wiring and mounting of a square LED illuminated mirror with touch sensor control.</li>
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
              src={`/images/portfolio/Linear Stone Wet Room/${currentImage}`}
              alt="Linear Stone Wet Room"
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
