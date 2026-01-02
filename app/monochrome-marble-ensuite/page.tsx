"use client";

import Image from "next/image";
import { useState } from "react";

export default function MonochromeMarbleEnsuitePage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const images = [
    "cover.jpg",
    "monochrome-marble-ensuite-1.jpg",
    "monochrome-marble-ensuite-2.jpg"
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
              src="/images/portfolio/Monochrome Marble Ensuite/cover.jpg"
              alt="Monochrome Marble Ensuite bathroom"
              fill
              priority
            />
          </div>

          {/* Supporting images */}
          <div className="gallery-secondary">
            {["monochrome-marble-ensuite-1.jpg", "monochrome-marble-ensuite-2.jpg"].map(img => (
              <div key={img} className="gallery-thumb" onClick={() => openLightbox(img)}>
                <Image
                  src={`/images/portfolio/Monochrome Marble Ensuite/${img}`}
                  alt="Monochrome Marble Ensuite detail"
                  fill
                />
              </div>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="project-description">
          <h2>Monochrome Marble Ensuite</h2>
          <p>
            A compact ensuite renovation designed to bring a touch of luxury to a narrow space. The room is enveloped in large-format white marble-effect tiles on both the walls and floor, which helps to reflect light and make the tight footprint feel larger. To create depth, I installed a dramatic black marble feature wall inside the shower area. Practicality was a priority for this layout, so I utilized a space-saving bi-fold shower door and compact sanitaryware to ensure easy movement within the room. As the sole contractor, I managed the entire fit-out from tiling to the final electrical connections.
          </p>

          <h3>Key Technical Work</h3>

          <ul>
            <li>Full Multi Trade Execution: Complete management of plumbing, tiling, and electrical installation.</li>
            <li>Tiling Specification: Floor-to-ceiling white marble-effect tiling with a striking black marble feature wall inside the shower enclosure.</li>
            <li>Space Optimization: Installation of a chrome bi-fold shower door to maximize usable floor space in the narrow room.</li>
            <li>Sanitaryware: Fitting of a white gloss vanity unit with an integrated mixer tap and a close-coupled WC.</li>
            <li>Heating: Plumbing and mounting of an anthracite grey heated towel rail.</li>
            <li>Electrical: Installation of a geometric LED illuminated mirror and a feature square ceiling light.</li>
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
              src={`/images/portfolio/Monochrome Marble Ensuite/${currentImage}`}
              alt="Monochrome Marble Ensuite"
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
