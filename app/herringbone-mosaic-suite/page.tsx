"use client";

import Image from "next/image";
import { useState } from "react";

export default function HerringboneMosaicPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const images = [
    "cover.JPG",
    "herringbone-mosaic-suite-1.JPG",
    "herringbone-mosaic-suite-2.JPG",
    "herringbone-mosaic-suite-3.JPG"
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
              src="/images/portfolio/Herringbone & Mosaic Suite/cover.JPG"
              alt="Herringbone & Mosaic Suite"
              fill
              priority
            />
          </div>

          {/* Supporting images */}
          <div className="gallery-secondary">
            {["herringbone-mosaic-suite-1.JPG", "herringbone-mosaic-suite-2.JPG", "herringbone-mosaic-suite-3.JPG"].map(img => (
              <div key={img} className="gallery-thumb" onClick={() => openLightbox(img)}>
                <Image
                  src={`/images/portfolio/Herringbone & Mosaic Suite/${img}`}
                  alt="Herringbone & Mosaic Suite detail"
                  fill
                />
              </div>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="project-description">
          <h2>Herringbone & Mosaic Suite</h2>
          <p>
            A complete renovation of a compact shower room, designed to maximize space within a room featuring sloping ceilings. 
            The aesthetic pairs neutral, warm beige wall tiling with a distinctive wood-effect floor laid in a herringbone pattern. 
            A vertical strip of mosaic tiling adds a focal point inside the shower area. 
            To ensure functionality in the tight footprint, I installed a corner quadrant shower and compact sanitaryware. 
            As the sole contractor, I managed the entire fit-out from the sub-floor preparation to the final accessory fixing.
          </p>

          <ul>
            <li>Full Multi Trade Execution: Complete management of plumbing, tiling, flooring, and electrical.</li>
            <li>Flooring Specification: Wood-effect flooring laid in a classic herringbone pattern to add texture and warmth.</li>
            <li>Tiling & Feature Work: Full-height beige ceramic wall tiling featuring a vertical mosaic accent strip within the shower zone.</li>
            <li>Shower Installation: Fitting of a corner quadrant enclosure with an exposed chrome thermostatic mixer and rainfall head.</li>
            <li>Space Optimization: Strategic placement of a compact white gloss vanity and close-coupled WC to accommodate the room's sloping ceiling.</li>
            <li>Heating & Electrical: Installation of a white heated towel rail, shaver socket, and high-level extraction fan.</li>
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
              src={`/images/portfolio/Herringbone & Mosaic Suite/${currentImage}`}
              alt="Herringbone & Mosaic Suite"
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
