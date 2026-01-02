"use client";

import Image from "next/image";
import { useState } from "react";

export default function MidnightBlueOnyxSuitePage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const images = [
    "cover.jpg",
    "midnight-blue-onyx-suite-1.jpg",
    "midnight-blue-onyx-suite-2.jpg",
    "midnight-blue-onyx-suite-3.jpg"
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
          <div className="gallery-main" onClick={() => openLightbox("cover.jpg")}>
            <Image
              src="/images/portfolio/Midnight Blue Onyx Suite/cover.jpg"
              alt="Midnight Blue Onyx Suite"
              fill
              priority
            />
          </div>

          {/* Supporting images */}
          <div className="gallery-secondary">
            {["midnight-blue-onyx-suite-1.jpg", "midnight-blue-onyx-suite-2.jpg", "midnight-blue-onyx-suite-3.jpg"].map(img => (
              <div key={img} className="gallery-thumb" onClick={() => openLightbox(img)}>
                <Image
                  src={`/images/portfolio/Midnight Blue Onyx Suite/${img}`}
                  alt="Midnight Blue Onyx Suite detail"
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
              Midnight Blue Onyx Suite
            </h1>
            <span className="project-number-badge">#22</span>
          </div>
          <p>
            A high-end bathroom renovation designed to make a dramatic statement. 
            The space is defined by large-format porcelain tiles featuring bold blue and grey veining, creating a luxurious "blue onyx" marble effect that wraps around the room. 
            Inside the shower, I installed a contrasting dark marble feature wall to add depth. 
            The design is centered around unique artistic fixtures, including a navy blue vanity unit topped with a striking glass vessel basin and waterfall tap. 
            As the sole contractor, I managed the entire project, ensuring the complex tile layout pattern flowed seamlessly from floor to wall.
          </p>

          <ul>
            <li>Full Multi Trade Execution: Complete management of plumbing, tiling, electrical, and installation works.</li>
            <li>Feature Tiling: Installation of large-format blue-veined marble tiles on walls and floors, with a contrasting dark feature wall in the shower zone.</li>
            <li>Statement Sanitaryware: Fitting of a navy blue wall-hung vanity unit with a feature glass vessel sink and waterfall mixer tap.</li>
            <li>Shower Configuration: Installation of a spacious walk-in shower enclosure with a low-profile tray, rainfall head, and a custom recessed storage niche.</li>
            <li>Lighting Design: Wiring and mounting of a contemporary curved LED ceiling chandelier and a feature "infinity effect" LED mirror.</li>
            <li>Heating: Installation of a matte black towel radiator to contrast with the polished tile finish.</li>
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
              src={`/images/portfolio/Midnight Blue Onyx Suite/${currentImage}`}
              alt="Midnight Blue Onyx Suite"
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
