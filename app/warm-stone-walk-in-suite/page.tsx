"use client";

import Image from "next/image";
import { useState } from "react";

export default function WarmStoneWalkInSuitePage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const images = [
    "cover.jpg",
    "warm-stone-walk-in-suite-1.jpg",
    "warm-stone-walk-in-suite-2.jpg",
    "warm-stone-walk-in-suite-3.jpg"
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
              src="/images/portfolio/Warm Stone Walk-In Suite/cover.jpg"
              alt="Warm Stone Walk-In Suite"
              fill
              priority
            />
          </div>

          {/* Supporting images */}
          <div className="gallery-secondary">
            {["warm-stone-walk-in-suite-1.jpg", "warm-stone-walk-in-suite-2.jpg", "warm-stone-walk-in-suite-3.jpg"].map(img => (
              <div key={img} className="gallery-thumb" onClick={() => openLightbox(img)}>
                <Image
                  src={`/images/portfolio/Warm Stone Walk-In Suite/${img}`}
                  alt="Warm Stone Walk-In Suite detail"
                  fill
                />
              </div>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="project-description">
          <h2>Warm Stone Walk-In Suite</h2>
          <p>
            A modern shower room renovation situated within a space featuring sloping ceilings, likely a loft conversion. 
            The design is defined by high-gloss travertine-effect wall tiles that add a warm, natural stone look to the room. 
            I installed these full-height in the wet zone and half-height behind the sanitaryware to balance practicality with aesthetics. 
            The shower area is designed as a spacious walk-in zone featuring a sleek linear drain and a frameless glass screen. 
            A wood-effect wall-hung vanity unit was chosen to complement the stone tones. 
            As the sole contractor, I managed the plumbing, tiling, and installation of all fixtures.
          </p>

          <ul>
            <li>Full Multi Trade Execution: Complete management of plumbing, tiling, and sanitaryware fitting.</li>
            <li>Shower Construction: Installation of a walk-in shower setup featuring a stainless steel linear drain set into the floor tiling.</li>
            <li>Tiling Specification: High-gloss stone-effect wall tiles laid half-height in dry areas and full-height in the shower, with precise cutting around the window reveal.</li>
            <li>Shower Fittings: Mounting of a fixed glass screen and a chrome shower mixer column with a rainfall head.</li>
            <li>Sanitaryware: Installation of a wall-hung wood-effect vanity unit with an integrated basin and a close-coupled white WC.</li>
            <li>Space Adaptation: Layout designed to accommodate the sloping ceiling architecture while maintaining full head height in the standing area.</li>
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
              src={`/images/portfolio/Warm Stone Walk-In Suite/${currentImage}`}
              alt="Warm Stone Walk-In Suite"
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
