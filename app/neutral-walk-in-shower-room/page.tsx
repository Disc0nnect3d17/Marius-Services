"use client";

import Image from "next/image";
import { useState } from "react";

export default function NeutralWalkInShowerRoomPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "cover.JPG",
    "neutral-walk-in-shower-room-1.JPG",
    "neutral-walk-in-shower-room-2.JPG"
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
              src="/images/portfolio/Neutral Walk-In Shower Room/cover.JPG"
              alt="Neutral Walk-In Shower Room"
              fill
              priority
            />
          </div>

          {/* Supporting images */}
          <div className="gallery-secondary">
            {["neutral-walk-in-shower-room-1.JPG", "neutral-walk-in-shower-room-2.JPG"].map((img, idx) => (
              <div key={img} className="gallery-thumb" onClick={() => openLightbox(idx + 1)}>
                <Image
                  src={`/images/portfolio/Neutral Walk-In Shower Room/${img}`}
                  alt="Neutral Walk-In Shower Room detail"
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
              Neutral Walk-In Shower Room
            </h1>
            <span className="project-number-badge">#30</span>
          </div>
          <p>
            A bright and modern renovation designed to create a calm, uncluttered space. The room is finished with light beige stone-effect wall tiles and light wood-effect flooring, maximizing the feeling of light and space. The centerpiece is a large walk-in shower area featuring a low-profile tray and a frameless glass screen. To add a touch of contrast and luxury, I installed a dark grey floor-standing vanity unit topped with a marble-effect surface and a modern vessel basin. As the sole contractor, I managed the entire fit-out, from the concealed plumbing work to the final fixture installation.
          </p>

          <h3>Key Technical Work</h3>

          <ul>
            <li>Full Multi Trade Execution: Complete management of plumbing, tiling, and flooring.</li>
            <li>Shower Configuration: Installation of a spacious walk-in shower with a large low-profile tray and a fixed frameless glass screen.</li>
            <li>Plumbing Specification: Fitting of a concealed chrome thermostatic shower valve with a dual-outlet system (overhead rainfall and handset).</li>
            <li>Statement Vanity: Installation of a dark grey vanity unit featuring a marble-effect countertop and a white ceramic vessel basin.</li>
            <li>Tiling & Flooring: Wall-to-ceiling installation of neutral light stone-effect tiles paired with durable wood-effect plank flooring.</li>
            <li>Heating & Storage: Mounting of a large white heated towel rail and a mirrored wall cabinet.</li>
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
              src={`/images/portfolio/Neutral Walk-In Shower Room/${images[currentImageIndex]}`}
              alt="Neutral Walk-In Shower Room"
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
