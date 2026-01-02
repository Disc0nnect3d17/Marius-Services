"use client";

import Image from "next/image";
import { useState } from "react";

export default function PatternedFloorStonePage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const images = [
    "cover.JPG",
    "patterned-floor-stone-suite-1.JPG",
    "patterned-floor-stone-suite-2.JPG",
    "patterned-floor-stone-suite-3.JPG",
    "patterned-floor-stone-suite-4.JPG",
    "patterned-floor-stone-suite-5.JPG"
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
              src="/images/portfolio/Patterned Floor & Stone Suite/cover.JPG"
              alt="Patterned Floor & Stone Suite"
              fill
              priority
            />
          </div>

          {/* Supporting images */}
          <div className="gallery-secondary">
            {["patterned-floor-stone-suite-1.JPG", "patterned-floor-stone-suite-2.JPG", "patterned-floor-stone-suite-3.JPG", "patterned-floor-stone-suite-4.JPG", "patterned-floor-stone-suite-5.JPG"].map(img => (
              <div key={img} className="gallery-thumb" onClick={() => openLightbox(img)}>
                <Image
                  src={`/images/portfolio/Patterned Floor & Stone Suite/${img}`}
                  alt="Patterned Floor & Stone Suite detail"
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
              Patterned Floor & Stone Suite
            </h1>
            <span className="project-number-badge">#12</span>
          </div>
          <p>
            A bright, modern bathroom renovation featuring a striking contrast between the polished walls and the decorative flooring. 
            The walls are finished floor-to-ceiling in large-format, high-gloss stone-effect tiles, creating a light and airy feel. 
            This is grounded by a feature floor laid with vintage-style patterned tiles. 
            To maintain clean lines, I installed wall-hung sanitaryware, including a dark grey vanity and a WC with a concealed cistern. 
            The bath is integrated with a custom tiled front panel to match the walls perfectly. 
            As the sole contractor, I executed the entire project from the plumbing first-fix to the final accessory installation.
          </p>

          <ul>
            <li>Full Multi Trade Execution: Complete management of plumbing, tiling, electrical, and carpentry.</li>
            <li>Flooring Specification: Installation of statement vintage-style patterned floor tiles to create a focal point.</li>
            <li>Tiling & Finish: Floor-to-ceiling polished stone-effect wall tiles, including a seamless tiled bath panel and precise tiling into the window reveal.</li>
            <li>Concealed Plumbing: Structural installation of a wall-hung WC frame with a concealed cistern and chrome flush plate.</li>
            <li>Bathing Integration: Fitting of a bath with a pivoting glass screen and a chrome dual-function shower system (rainfall and handset).</li>
            <li>Storage & Electrical: Installation of a wall-hung anthracite vanity unit and a mirrored LED cabinet.</li>
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
              src={`/images/portfolio/Patterned Floor & Stone Suite/${currentImage}`}
              alt="Patterned Floor & Stone Suite"
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
