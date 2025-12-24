"use client";

import Image from "next/image";
import { useState } from "react";

export default function AnthraciteMarblePage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const images = [
    "cover.JPG",
    "anthracite-marble-suite-1.JPG",
    "anthracite-marble-suite-2.JPG",
    "anthracite-marble-suite-3.JPG",
    "anthracite-marble-suite-4.JPG",
    "anthracite-marble-suite-5.JPG"
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
              src="/images/portfolio/The Anthracite & Marble Suite/cover.JPG"
              alt="The Anthracite & Marble Suite"
              fill
              priority
            />
          </div>

          {/* Supporting images */}
          <div className="gallery-secondary">
            {["anthracite-marble-suite-1.JPG", "anthracite-marble-suite-2.JPG", "anthracite-marble-suite-3.JPG", "anthracite-marble-suite-4.JPG", "anthracite-marble-suite-5.JPG"].map(img => (
              <div key={img} className="gallery-thumb" onClick={() => openLightbox(img)}>
                <Image
                  src={`/images/portfolio/The Anthracite & Marble Suite/${img}`}
                  alt="The Anthracite & Marble Suite detail"
                  fill
                />
              </div>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="project-description">
          <h2>The Anthracite & Marble Suite</h2>
          <p>
            A sophisticated bathroom renovation centered around a luxury double vanity setup. 
            The design features large-format marble-effect floor tiles that coordinate with the dark anthracite cabinetry for a cohesive, modern look. 
            The layout utilizes a corner quadrant shower enclosure to maximize space, alongside a back-to-wall WC unit. 
            A wide illuminated mirror spans the double basin area, enhancing light and the feeling of space. 
            As the sole contractor, I managed all aspects of the installation from plumbing rough-in to final decoration.
          </p>

          <ul>
            <li>Full Multi Trade Execution: Complete management of plumbing, tiling, electrical, and carpentry.</li>
            <li>Tiling & Flooring: Large-format marble-effect floor tiles laid with precision alignment, paired with plain gloss wall tiling.</li>
            <li>Feature Joinery: Installation of a double vanity unit with twin vessel basins and tall chrome monobloc mixer taps.</li>
            <li>Shower Installation: Fitting of a quadrant shower enclosure with a thermostatic chrome rainfall mixer and handheld attachment.</li>
            <li>Electrical Integration: Wiring for a wide illuminated LED mirror, dual shaver sockets, and recessed ceiling downlights.</li>
            <li>Heating & Plumbing: Installation of a large chrome towel radiator and a concealed cistern WC unit matching the vanity cabinetry.</li>
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
              src={`/images/portfolio/The Anthracite & Marble Suite/${currentImage}`}
              alt="The Anthracite & Marble Suite"
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
