"use client";

import Image from "next/image";
import { useState } from "react";

export default function GeometricSagePage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const images = [
    "cover.jpg",
    "geometric-sage-suite-1.jpg",
    "geometric-sage-suite-2.jpg",
    "geometric-sage-suite-3.jpg",
    "geometric-sage-suite-4.jpg"
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
              src="/images/portfolio/Geometric Sage Suite/cover.jpg"
              alt="Geometric Sage Suite bathroom"
              fill
              priority
            />
          </div>

          {/* Supporting images */}
          <div className="gallery-secondary">
            {["geometric-sage-suite-1.jpg", "geometric-sage-suite-2.jpg", "geometric-sage-suite-3.jpg", "geometric-sage-suite-4.jpg"].map(img => (
              <div key={img} className="gallery-thumb" onClick={() => openLightbox(img)}>
                <Image
                  src={`/images/portfolio/Geometric Sage Suite/${img}`}
                  alt="Geometric Sage Suite detail"
                  fill
                />
              </div>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="project-description">
          <h2>Geometric Sage Suite</h2>
          <p>
            A stylish bathroom renovation that balances bold pattern with calming tones. The design features a striking black and white geometric floor that acts as the room's centerpiece. This is softened by classic white subway tiles laid to half-height and walls painted in a soothing sage green. To provide versatility for family living, I installed a P-shaped shower bath, which offers a spacious showering area without compromising on bathing space. As the sole contractor, I managed the entire refurbishment, including the precise floor tiling and final decoration.
          </p>

          <h3>Key Technical Work</h3>

          <ul>
            <li>Full Multi Trade Execution: Complete management of plumbing, tiling, flooring, and decoration.</li>
            <li>Flooring Specification: Installation of statement black and white geometric floor tiles in a triangular pattern.</li>
            <li>Wall Tiling & Decor: Classic white subway tiles laid in a brick bond pattern to half-height, paired with sage green painted upper walls.</li>
            <li>Bathing Configuration: Fitting of a P-shaped shower bath with a matching curved glass screen to maximize standing space.</li>
            <li>Shower Installation: Installation of a chrome thermostatic mixer shower with riser rail over the bath.</li>
            <li>Sanitaryware: Fitting of a freestanding grey vanity unit with a ceramic basin and a close-coupled WC.</li>
            <li>Heating: Mounting of a chrome heated towel rail.</li>
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
              src={`/images/portfolio/Geometric Sage Suite/${currentImage}`}
              alt="Geometric Sage Suite"
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
