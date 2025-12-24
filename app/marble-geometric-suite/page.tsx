"use client";

import Image from "next/image";
import { useState } from "react";

export default function MarbleGeometricSuitePage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const images = [
    "cover.JPG",
    "marble-geometric-suite-1.JPG",
    "marble-geometric-suite-2.JPG",
    "marble-geometric-suite-3.JPG"
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
              src="/images/portfolio/Marble & Geometric Suite/cover.JPG"
              alt="Marble & Geometric Suite"
              fill
              priority
            />
          </div>

          {/* Supporting images */}
          <div className="gallery-secondary">
            {["marble-geometric-suite-1.JPG", "marble-geometric-suite-2.JPG", "marble-geometric-suite-3.JPG"].map(img => (
              <div key={img} className="gallery-thumb" onClick={() => openLightbox(img)}>
                <Image
                  src={`/images/portfolio/Marble & Geometric Suite/${img}`}
                  alt="Marble & Geometric Suite detail"
                  fill
                />
              </div>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="project-description">
          <h2>Marble & Geometric Suite</h2>
          <p>
            A modern shower room renovation that balances luxury finishes with bold pattern. 
            The walls are clad from floor to ceiling in large-format white marble-effect tiles, creating a bright and expansive feel. 
            This is contrasted by a statement geometric patterned floor that adds character and depth to the space. 
            To optimize the layout, I installed a run of fitted dark wood-effect cabinetry that integrates the washbasin, storage, and a concealed cistern WC. 
            The shower area features a sleek sliding glass door and a custom recessed storage niche. 
            As the sole contractor, I managed the entire build, from the technical niche construction to the final electrical fit-out.
          </p>

          <ul>
            <li>Full Multi Trade Execution: Complete management of plumbing, tiling, joinery, and electrical installation.</li>
            <li>Tiling & Flooring: Floor-to-ceiling large-format marble-effect wall tiles paired with a feature geometric patterned floor.</li>
            <li>Shower Construction: Installation of a sliding glass shower enclosure featuring a custom-built recessed tiled niche for storage.</li>
            <li>Integrated Furniture: Fitting of a dark wood-effect furniture run incorporating a semi-recessed basin and concealed cistern WC.</li>
            <li>Electrical Integration: Wiring and mounting of a feature LED illuminated mirror with an integrated digital display.</li>
            <li>Heating: Installation of a chrome heated towel rail to complement the modern bright aesthetic.</li>
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
              src={`/images/portfolio/Marble & Geometric Suite/${currentImage}`}
              alt="Marble & Geometric Suite"
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
