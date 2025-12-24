"use client";

import Image from "next/image";
import { useState } from "react";

export default function CrimsonStoneWCPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const images = [
    "cover.JPG",
    "crimson-stone-1.JPG",
    "crimson-stone-2.JPG",
    "crimson-stone-3.JPG"
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
              src="/images/portfolio/Crimson & Stone WC/cover.JPG"
              alt="Crimson & Stone WC"
              fill
              priority
            />
          </div>

          {/* Supporting images */}
          <div className="gallery-secondary">
            {["crimson-stone-1.JPG", "crimson-stone-2.JPG", "crimson-stone-3.JPG"].map(img => (
              <div key={img} className="gallery-thumb" onClick={() => openLightbox(img)}>
                <Image
                  src={`/images/portfolio/Crimson & Stone WC/${img}`}
                  alt="Crimson & Stone WC detail"
                  fill
                />
              </div>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="project-description">
          <h2>Crimson & Stone WC</h2>
          <p>
            A complete renovation of a compact downstairs WC, optimizing a narrow footprint for maximum utility. 
            The design contrasts deep red textured walls with neutral stone-effect ceramic tiling that runs from the floor to dado height. 
            The layout features a slimline vanity unit and a wall-mounted heated towel rail to maintain a feeling of space. 
            As the sole contractor, I handled the entire refurbishment from the initial rip-out to the final decoration.
          </p>

          <ul>
            <li>Full Multi Trade Execution: Complete management of plumbing, tiling, electrical, and painting works.</li>
            <li>Tiling & Flooring: Matching stone-effect ceramic tiles installed on the floor and walls (half-height) with window reveal detailing.</li>
            <li>Sanitaryware: Installation of a compact white gloss vanity unit with a surface-mounted square vessel basin.</li>
            <li>Electrical Integration: Wiring and mounting of an illuminated LED mirror cabinet and high-level extraction fan.</li>
            <li>Heating: Plumbing and mounting of a white heated towel rail connected to the central heating system.</li>
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
              src={`/images/portfolio/Crimson & Stone WC/${currentImage}`}
              alt="Crimson & Stone WC"
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
