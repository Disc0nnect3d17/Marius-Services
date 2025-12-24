"use client";

import Image from "next/image";
import { useState } from "react";

export default function GreyMosaicWetRoomPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const images = [
    "cover.JPG",
    "grey-mosaic-wet-room-1.JPG",
    "grey-mosaic-wet-room-2.JPG",
    "grey-mosaic-wet-room-3.JPG",
    "grey-mosaic-wet-room-4.JPG",
    "grey-mosaic-wet-room-5.JPG"
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
              src="/images/portfolio/Grey Mosaic Wet Room/cover.JPG"
              alt="Grey Mosaic Wet Room"
              fill
              priority
            />
          </div>

          {/* Supporting images */}
          <div className="gallery-secondary">
            {["grey-mosaic-wet-room-1.JPG", "grey-mosaic-wet-room-2.JPG", "grey-mosaic-wet-room-3.JPG", "grey-mosaic-wet-room-4.JPG", "grey-mosaic-wet-room-5.JPG"].map(img => (
              <div key={img} className="gallery-thumb" onClick={() => openLightbox(img)}>
                <Image
                  src={`/images/portfolio/Grey Mosaic Wet Room/${img}`}
                  alt="Grey Mosaic Wet Room detail"
                  fill
                />
              </div>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="project-description">
          <h2>Grey Mosaic Wet Room</h2>
          <p>
            A seamless conversion of a bathroom into a modern, level-access wet room. 
            The design is built around a monochromatic grey palette, featuring large-format stone-effect tiles on the walls and floors to create a spacious feel. 
            A textured mosaic feature wall defines the shower zone. 
            To maintain an open and hygienic floor area, I installed wall-hung fixtures throughout, including a floating vanity and a WC. 
            As the sole contractor, I managed the technical formation of the wet room floor gradient and the complete fit-out.
          </p>

          <ul>
            <li>Full Multi Trade Execution: Complete management of wet room formation, plumbing, tiling, and carpentry.</li>
            <li>Wet Room Floor Construction: Creation of a level-entry shower floor using "envelope cuts" on large-format tiles to ensure perfect drainage to the square waste.</li>
            <li>Tiling Specification: Installation of grey ceramic wall and floor tiles, with a contrasting mosaic brick-effect feature wall inside the shower area.</li>
            <li>Concealed Plumbing: Structural construction of a tiled boxing unit to house the concealed cistern and wall-hung WC frame.</li>
            <li>Shower Configuration: Fitting of a fixed frameless glass wet room screen and a chrome dual-outlet thermostatic mixer valve.</li>
            <li>Sanitaryware: Installation of a wall-hung grey gloss two-drawer vanity unit and a wall-hung WC to maximize visible floor space.</li>
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
              src={`/images/portfolio/Grey Mosaic Wet Room/${currentImage}`}
              alt="Grey Mosaic Wet Room"
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
