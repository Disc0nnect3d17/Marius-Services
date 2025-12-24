"use client";

import Image from "next/image";
import { useState } from "react";

export default function SlateChromePage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const images = [
    "cover.JPG",
    "slate-chrome-shower-1.JPG",
    "slate-chrome-shower-2.JPG",
    "slate-chrome-shower-3.JPG",
    "slate-chrome-shower-4.JPG"
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
              src="/images/portfolio/Slate & Chrome Shower Room/cover.JPG"
              alt="Slate & Chrome Shower Room"
              fill
              priority
            />
          </div>

          {/* Supporting images */}
          <div className="gallery-secondary">
            {["slate-chrome-shower-1.JPG", "slate-chrome-shower-2.JPG", "slate-chrome-shower-3.JPG", "slate-chrome-shower-4.JPG"].map(img => (
              <div key={img} className="gallery-thumb" onClick={() => openLightbox(img)}>
                <Image
                  src={`/images/portfolio/Slate & Chrome Shower Room/${img}`}
                  alt="Slate & Chrome Shower Room detail"
                  fill
                />
              </div>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="project-description">
          <h2>Slate & Chrome Shower Room</h2>
          <p>
            A contemporary shower room renovation defined by clean lines and a monochromatic grey palette. 
            The space features floor-to-ceiling wall tiling in a soft stone effect, creating a seamless and low-maintenance finish. 
            The layout is designed for modern living, centering around a spacious walk-in shower and a wall-hung WC with a concealed cistern to maximize floor space. 
            A matte black towel radiator adds a striking visual contrast to the chrome brassware. 
            As the sole contractor, I managed the entire build from structural boxing to the final fix.
          </p>

          <ul>
            <li>Full Multi Trade Execution: Complete management of plumbing, tiling, carpentry, and electrical works.</li>
            <li>Tiling Specification: Floor-to-ceiling installation of large-format grey wall tiles with precision mitering around the window reveal.</li>
            <li>Shower Configuration: Fitting of a low-profile walk-in shower tray, frameless glass screen, and a chrome rainfall mixer with handheld attachment.</li>
            <li>Concealed Plumbing: Construction of a custom tiled housing unit for the concealed cistern and installation of the wall-hung WC.</li>
            <li>Heating & Storage: Installation of a feature matte black towel radiator and a colour-matched grey gloss vanity unit.</li>
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
              src={`/images/portfolio/Slate & Chrome Shower Room/${currentImage}`}
              alt="Slate & Chrome Shower Room"
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
