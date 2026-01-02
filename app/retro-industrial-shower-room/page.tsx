"use client";

import Image from "next/image";
import { useState } from "react";

export default function RetroIndustrialShowerRoomPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const images = [
    "cover.JPG",
    "retro-industrial-shower-room-1.JPG",
    "retro-industrial-shower-room-2.JPG",
    "retro-industrial-shower-room-3.JPG",
    "retro-industrial-shower-room-4.JPG",
    "retro-industrial-shower-room-5.JPG"
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
              src="/images/portfolio/Retro Industrial Shower Room/cover.JPG"
              alt="Retro Industrial Shower Room"
              fill
              priority
            />
          </div>

          {/* Supporting images */}
          <div className="gallery-secondary">
            {["retro-industrial-shower-room-1.JPG", "retro-industrial-shower-room-2.JPG", "retro-industrial-shower-room-3.JPG", "retro-industrial-shower-room-4.JPG", "retro-industrial-shower-room-5.JPG"].map(img => (
              <div key={img} className="gallery-thumb" onClick={() => openLightbox(img)}>
                <Image
                  src={`/images/portfolio/Retro Industrial Shower Room/${img}`}
                  alt="Retro Industrial Shower Room detail"
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
              Retro Industrial Shower Room
            </h1>
            <span className="project-number-badge">#37</span>
          </div>
          <p>
            A stylish shower room renovation that combines classic design elements with modern functionality. The space is defined by a high-contrast black and white theme, featuring white subway tiles laid with dark grout for an industrial edge. This is paired with striking geometric patterned floor tiles that add character to the room. To maximize the utility of the space, I installed a built-in storage cupboard above the heating area, blending seamlessly with the white walls. The shower area is designed for efficiency, utilizing a reliable electric shower unit and a custom recessed niche for toiletries. As the sole contractor, I managed the tiling, plumbing, and joinery to achieve this crisp finish.
          </p>

          <h3>Key Technical Work</h3>

          <ul>
            <li>Full Multi Trade Execution: Complete management of plumbing, tiling, and joinery.</li>
            <li>Tiling Specification: Installation of white subway tiles with contrasting black grout, paired with statement black and white geometric floor tiles.</li>
            <li>Shower Installation: Fitting of a corner shower enclosure with sliding glass doors and a white electric shower unit.</li>
            <li>Custom Storage: Creation of a recessed tiled niche within the shower and a built-in white cupboard unit for additional storage.</li>
            <li>Heating: Plumbing and mounting of a chrome ladder-style heated towel rail.</li>
            <li>Finishing: Precision siliconing and decoration of non-tiled areas.</li>
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
              src={`/images/portfolio/Retro Industrial Shower Room/${currentImage}`}
              alt="Retro Industrial Shower Room"
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
