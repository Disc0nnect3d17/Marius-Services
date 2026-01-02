"use client";

import Image from "next/image";
import { useState } from "react";

export default function MarbleGoldPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const images = [
    "cover.jpg",
    "marble-gold-suite-1.jpg",
    "marble-gold-suite-2.jpg",
    "marble-gold-suite-3.jpg"
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
              src="/images/portfolio/Marble & Gold Suite/cover.jpg"
              alt="Marble & Gold Suite bathroom"
              fill
              priority
            />
          </div>

          {/* Supporting images */}
          <div className="gallery-secondary">
            {["marble-gold-suite-1.jpg", "marble-gold-suite-2.jpg", "marble-gold-suite-3.jpg"].map(img => (
              <div key={img} className="gallery-thumb" onClick={() => openLightbox(img)}>
                <Image
                  src={`/images/portfolio/Marble & Gold Suite/${img}`}
                  alt="Marble & Gold Suite detail"
                  fill
                />
              </div>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="project-description">
          <h2>Marble & Gold Suite</h2>
          <p>
            A luxury shower room renovation defined by its opulent finish and cohesive colour palette. The space is fully tiled in polished white marble-effect porcelain with gold veining, creating a bright and reflective backdrop. The standout feature is the use of brushed gold brassware throughout, including the shower profile, radiator, and taps, which complements the tile veining perfectly. I installed a spacious walk-in shower with a low-profile tray and a custom recessed storage niche. To add warmth, I fitted wood-effect cabinetry for the vanity and WC unit. As the sole contractor, I executed the entire high-end fit-out.
          </p>

          <h3>Key Technical Work</h3>

          <ul>
            <li>Full Multi Trade Execution: Complete management of plumbing, tiling, electrical, and joinery.</li>
            <li>Tiling Specification: Floor-to-ceiling installation of polished marble-effect tiles, matching the floor and walls for a seamless look.</li>
            <li>Brassware Installation: Fitting of a complete suite of brushed gold fixtures, including a rainfall shower system, wall-mounted taps, and accessories.</li>
            <li>Shower Configuration: Installation of a walk-in shower with a gold-profile glass screen and a tiled recessed storage niche.</li>
            <li>Heating: Plumbing and mounting of a traditional-style floor-standing gold towel radiator.</li>
            <li>Lighting Design: Installation of a feature five-pendant gold light fixture and recessed LED downlights.</li>
            <li>Fitted Furniture: Installation of wood-effect vanity and WC units to house the vessel basin and concealed cistern.</li>
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
              src={`/images/portfolio/Marble & Gold Suite/${currentImage}`}
              alt="Marble & Gold Suite"
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
