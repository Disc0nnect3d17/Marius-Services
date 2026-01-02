"use client";

import Image from "next/image";
import { useState } from "react";

export default function SlateBlueWhiteSuitePage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "cover.JPG",
    "slate-blue-white-suite-1.JPG"
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
              src="/images/portfolio/Slate Blue & White Suite/cover.JPG"
              alt="Slate Blue & White Suite bathroom"
              fill
              priority
            />
          </div>

          {/* Supporting images */}
          <div className="gallery-secondary">
            {["slate-blue-white-suite-1.JPG"].map((img, idx) => (
              <div key={img} className="gallery-thumb" onClick={() => openLightbox(idx + 1)}>
                <Image
                  src={`/images/portfolio/Slate Blue & White Suite/${img}`}
                  alt="Slate Blue & White Suite detail"
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
              Slate Blue & White Suite
            </h1>
            <span className="project-number-badge">#28</span>
          </div>
          <p>
            A bright and functional shower room renovation defined by its striking colour contrast. The design features deep slate-blue ceramic wall tiles, laid to full height in the shower and half-height behind the sanitaryware, creating a bold backdrop against the crisp white painted walls. To maximize space and storage, I installed a fitted white furniture run that seamlessly combines the washbasin and a concealed cistern WC. The focal point is a spacious shower enclosure with a glass deflector panel, offering easy access and a modern feel. As the sole contractor, I managed the entire fit-out, ensuring a clean and precise finish.
          </p>

          <h3>Key Technical Work</h3>

          <ul>
            <li>Full Multi Trade Execution: Complete management of plumbing, tiling, and joinery installation.</li>
            <li>Tiling Specification: Installation of slate-blue rectangular ceramic wall tiles with contrasting white grout, paired with neutral light floor tiles.</li>
            <li>Shower Configuration: Fitting of a large low-profile shower tray, a glass screen with a pivoting return panel, and a chrome thermostatic mixer shower.</li>
            <li>Integrated Furniture: Installation of a fitted white gloss vanity and WC combination unit with a continuous surface for a streamlined look.</li>
            <li>Sanitaryware: Fitting of a semi-recessed basin and a back-to-wall WC with a concealed cistern.</li>
            <li>Finishing: Installation of a round vanity mirror and final silicone sealing.</li>
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

            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="lightbox-nav-btn prev"
              aria-label="Previous image"
            >
              <svg viewBox="0 0 24 24">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>

            <img
              src={`/images/portfolio/Slate Blue & White Suite/${images[currentImageIndex]}`}
              alt="Slate Blue & White Suite"
              style={{ 
                maxWidth: '90vw', 
                maxHeight: '90vh', 
                width: 'auto', 
                height: 'auto',
                objectFit: 'contain'
              }}
              onClick={(e) => e.stopPropagation()}
            />

            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="lightbox-nav-btn next"
              aria-label="Next image"
            >
              <svg viewBox="0 0 24 24">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-lg">
              {currentImageIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
