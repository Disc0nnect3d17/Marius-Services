"use client";

import Image from "next/image";
import { useState } from "react";

export default function CompactBrightShowerRoomPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const images = [
    "cover1.JPG",
    "compact-bright-shower-room-1.JPG",
    "compact-bright-shower-room-2.JPG"
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
          <div className="gallery-main" onClick={() => openLightbox("cover1.JPG")}>
            <Image
              src="/images/portfolio/Compact Bright Shower Room/cover1.JPG"
              alt="Compact Bright Shower Room"
              fill
              priority
            />
          </div>

          {/* Supporting images */}
          <div className="gallery-secondary">
            {["compact-bright-shower-room-1.JPG", "compact-bright-shower-room-2.JPG"].map(img => (
              <div key={img} className="gallery-thumb" onClick={() => openLightbox(img)}>
                <Image
                  src={`/images/portfolio/Compact Bright Shower Room/${img}`}
                  alt="Compact Bright Shower Room detail"
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
              Compact Bright Shower Room
            </h1>
            <span className="project-number-badge">#14</span>
          </div>
          <p>
            A renovation designed to maximize utility within a very tight footprint. 
            The room is fully tiled from floor to ceiling in large-format light ceramic tiles to reflect light and create a sense of space. 
            To ensure functionality without overcrowding the room, I selected space-saving fixtures, including a bi-fold shower door and a compact vanity unit. 
            The aesthetic is kept clean and airy with light grey wood-effect flooring and white hardware. 
            As the sole contractor, I executed the entire fit-out, ensuring every inch of space was utilized effectively.
          </p>

          <ul>
            <li>Full Multi Trade Execution: Complete management of plumbing, tiling, flooring, and electrical works.</li>
            <li>Space Optimization: Installation of a bi-fold glass shower door to allow full access without encroaching on the floor space.</li>
            <li>Tiling Specification: Floor-to-ceiling installation of light ceramic wall tiles, including precise cutting into the deep window reveal.</li>
            <li>Shower Configuration: Fitting of a chrome dual-function thermostatic mixer (rainfall and handset) with integrated corner storage shelving.</li>
            <li>Sanitaryware: Installation of a compact white gloss vanity unit and a close-coupled WC.</li>
            <li>Heating & Electrical: Mounting of a white heated towel rail and a square LED illuminated mirror.</li>
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
              src={`/images/portfolio/Compact Bright Shower Room/${currentImage}`}
              alt="Compact Bright Shower Room"
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
