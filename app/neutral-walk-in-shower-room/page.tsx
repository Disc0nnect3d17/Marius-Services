"use client";

import Image from "next/image";
import { useState } from "react";

export default function NeutralWalkInShowerRoomPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const images = [
    "cover.JPG",
    "neutral-walk-in-shower-room-1.JPG",
    "neutral-walk-in-shower-room-2.JPG"
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
              src="/images/portfolio/Neutral Walk-In Shower Room/cover.JPG"
              alt="Neutral Walk-In Shower Room"
              fill
              priority
            />
          </div>

          {/* Supporting images */}
          <div className="gallery-secondary">
            {["neutral-walk-in-shower-room-1.JPG", "neutral-walk-in-shower-room-2.JPG"].map(img => (
              <div key={img} className="gallery-thumb" onClick={() => openLightbox(img)}>
                <Image
                  src={`/images/portfolio/Neutral Walk-In Shower Room/${img}`}
                  alt="Neutral Walk-In Shower Room detail"
                  fill
                />
              </div>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="project-description">
          <h2>Neutral Walk-In Shower Room</h2>
          <p>
            A bright and modern renovation designed to create a calm, uncluttered space. The room is finished with light beige stone-effect wall tiles and light wood-effect flooring, maximizing the feeling of light and space. The centerpiece is a large walk-in shower area featuring a low-profile tray and a frameless glass screen. To add a touch of contrast and luxury, I installed a dark grey floor-standing vanity unit topped with a marble-effect surface and a modern vessel basin. As the sole contractor, I managed the entire fit-out, from the concealed plumbing work to the final fixture installation.
          </p>

          <h3>Key Technical Work</h3>

          <ul>
            <li>Full Multi Trade Execution: Complete management of plumbing, tiling, and flooring.</li>
            <li>Shower Configuration: Installation of a spacious walk-in shower with a large low-profile tray and a fixed frameless glass screen.</li>
            <li>Plumbing Specification: Fitting of a concealed chrome thermostatic shower valve with a dual-outlet system (overhead rainfall and handset).</li>
            <li>Statement Vanity: Installation of a dark grey vanity unit featuring a marble-effect countertop and a white ceramic vessel basin.</li>
            <li>Tiling & Flooring: Wall-to-ceiling installation of neutral light stone-effect tiles paired with durable wood-effect plank flooring.</li>
            <li>Heating & Storage: Mounting of a large white heated towel rail and a mirrored wall cabinet.</li>
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
              src={`/images/portfolio/Neutral Walk-In Shower Room/${currentImage}`}
              alt="Neutral Walk-In Shower Room"
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
