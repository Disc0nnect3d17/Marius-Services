"use client";

import Image from "next/image";
import { useState } from "react";

export default function CleanWhiteLoftShowerRoomPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const images = [
    "cover.JPG",
    "clean-white-loft-shower-room-1.JPG",
    "clean-white-loft-shower-room-2.JPG",
    "clean-white-loft-shower-room-3.JPG"
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
              src="/images/portfolio/Clean White Loft Shower Room/cover.JPG"
              alt="Clean White Loft Shower Room"
              fill
              priority
            />
          </div>

          {/* Supporting images */}
          <div className="gallery-secondary">
            {["clean-white-loft-shower-room-1.JPG", "clean-white-loft-shower-room-2.JPG", "clean-white-loft-shower-room-3.JPG"].map(img => (
              <div key={img} className="gallery-thumb" onClick={() => openLightbox(img)}>
                <Image
                  src={`/images/portfolio/Clean White Loft Shower Room/${img}`}
                  alt="Clean White Loft Shower Room detail"
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
              Clean White Loft Shower Room
            </h1>
            <span className="project-number-badge">#33</span>
          </div>
          <p>
            A bright and highly functional shower room renovation, situated in a space with a sloping ceiling which suggests a loft or attic conversion. The design prioritizes light and a sense of spaciousness, achieved by using large-format white gloss wall tiles from floor to ceiling. This simple, reflective finish helps to visually expand the compact footprint. I installed a sleek corner shower enclosure with a dual-outlet mixing valve to offer a luxurious shower experience without dominating the room. To maintain clear floor space, I fitted a compact wall-hung vanity unit. As the sole contractor, I managed the entire fit-out, ensuring a crisp and watertight finish.
          </p>

          <h3>Key Technical Work</h3>

          <ul>
            <li>Full Multi Trade Execution: Complete management of plumbing, tiling, and installation.</li>
            <li>Tiling Specification: Floor-to-ceiling installation of large-format white gloss ceramic tiles to reflect light and enhance space.</li>
            <li>Shower Configuration: Fitting of a corner glass shower enclosure with a chrome thermostatic mixer featuring both a rainfall head and a handset.</li>
            <li>Sanitaryware: Installation of a compact wall-hung vanity unit with storage and a modern close-coupled WC.</li>
            <li>Heating: Mounting of a white ladder-style heated towel rail to match the clean aesthetic.</li>
            <li>Flooring: Installation of warm neutral stone-effect floor tiles to ground the bright white scheme.</li>
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
              src={`/images/portfolio/Clean White Loft Shower Room/${currentImage}`}
              alt="Clean White Loft Shower Room"
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
