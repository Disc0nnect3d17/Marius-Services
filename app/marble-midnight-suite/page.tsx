"use client";

import Image from "next/image";
import { useState } from "react";

export default function MarbleMidnightPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const images = [
    "cover.JPG",
    "marble-midnight-1.JPG",
    "marble-midnight-2.JPG",
    "marble-midnight-3.JPG"
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
              src="/images/portfolio/Marble & Midnight Suite/cover.JPG"
              alt="Marble & Midnight Suite bathroom"
              fill
              priority
            />
          </div>

          {/* Supporting images */}
          <div className="gallery-secondary">
            {["marble-midnight-1.JPG", "marble-midnight-2.JPG", "marble-midnight-3.JPG"].map(img => (
              <div key={img} className="gallery-thumb" onClick={() => openLightbox(img)}>
                <Image
                  src={`/images/portfolio/Marble & Midnight Suite/${img}`}
                  alt="Marble & Midnight Suite detail"
                  fill
                />
              </div>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="project-description">
          <h2>Marble & Midnight Suite</h2>
          <p>
            A full bathroom renovation featuring a high contrast color palette. 
            The room is paved with large format, marble effect porcelain floor tiles which set the stage for the dark vanity and WC cabinetry. 
            The layout is configured to house both a curved bathtub and a separate glass quadrant shower enclosure within the existing footprint. 
            The walls are finished with light grey gloss tiling to dado height, extending to full height in the shower area.
          </p>

          <ul>
            <li>Full Multi Trade Execution: Complete management of plumbing, electrical, tiling, plastering, and joinery.</li>
            <li>Technical Plumbing: Concealed in wall pipework for wall mounted chrome bath taps.</li>
            <li>Layout Optimization: Integrated separate quadrant shower and curved bath within the existing footprint.</li>
            <li>Tiling & Flooring: Large format marble effect porcelain flooring with precision leveling and layout.</li>
            <li>Electrical Integration: Installation of recessed LED downlights, extraction fan, and illuminated vanity mirror.</li>
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
              src={`/images/portfolio/Marble & Midnight Suite/${currentImage}`}
              alt="Marble & Midnight Suite"
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
