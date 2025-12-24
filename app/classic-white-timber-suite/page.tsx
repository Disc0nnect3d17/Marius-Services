"use client";

import Image from "next/image";
import { useState } from "react";

export default function ClassicWhiteTimberPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const images = [
    "cover.JPG",
    "classic-white-timber-suite-1.JPG",
    "classic-white-timber-suite-2.JPG",
    "classic-white-timber-suite-3.JPG"
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
              src="/images/portfolio/Classic White & Timber Suite/cover.JPG"
              alt="Classic White & Timber Suite"
              fill
              priority
            />
          </div>

          {/* Supporting images */}
          <div className="gallery-secondary">
            {["classic-white-timber-suite-1.JPG", "classic-white-timber-suite-2.JPG", "classic-white-timber-suite-3.JPG"].map(img => (
              <div key={img} className="gallery-thumb" onClick={() => openLightbox(img)}>
                <Image
                  src={`/images/portfolio/Classic White & Timber Suite/${img}`}
                  alt="Classic White & Timber Suite detail"
                  fill
                />
              </div>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="project-description">
          <h2>Classic White & Timber Suite</h2>
          <p>
            A family bathroom renovation that combines a clean, traditional aesthetic with practical modern features. 
            The design is defined by white gloss ceramic tiles laid in a classic brick-bond pattern, broken up by a contrasting horizontal border strip that runs the perimeter of the room. 
            Warm wood-effect flooring provides a natural balance to the crisp white finishes. 
            The layout utilizes a shower-bath setup to offer maximum flexibility, alongside a vanity unit for essential storage. 
            As the sole contractor, I handled the entire refurbishment from the initial plumbing alterations to the final flooring installation.
          </p>

          <ul>
            <li>Full Multi Trade Execution: Complete management of plumbing, tiling, flooring, and decoration.</li>
            <li>Tiling Specification: White gloss ceramic wall tiles laid in a brick pattern with a contrasting feature border, extending to full height in the shower zone.</li>
            <li>Bathing Integration: Installation of a fitted bath with a pivoting glass screen and a chrome dual-function shower system (rainfall and handset).</li>
            <li>Sanitaryware & Storage: Fitting of a white gloss two-drawer vanity unit with an integrated basin and a matching close-coupled WC.</li>
            <li>Flooring: Installation of warm wood-effect plank flooring to create a natural contrast against the white sanitaryware.</li>
            <li>Heating: Plumbing and mounting of a large white heated towel rail connected to the central heating system.</li>
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
              src={`/images/portfolio/Classic White & Timber Suite/${currentImage}`}
              alt="Classic White & Timber Suite"
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
