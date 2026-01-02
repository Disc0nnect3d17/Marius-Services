"use client";

import Image from "next/image";
import { useState } from "react";

export default function ContemporaryStoneWetRoomPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const images = [
    "cover.JPG",
    "contemporary-stone-wet-room-1.JPG",
    "contemporary-stone-wet-room-2.JPG",
    "contemporary-stone-wet-room-3.JPG",
    "contemporary-stone-wet-room-4.JPG",
    "contemporary-stone-wet-room-5.JPG"
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
              src="/images/portfolio/Contemporary Stone Wet Room/cover.JPG"
              alt="Contemporary Stone Wet Room"
              fill
              priority
            />
          </div>

          {/* Supporting images */}
          <div className="gallery-secondary">
            {["contemporary-stone-wet-room-1.JPG", "contemporary-stone-wet-room-2.JPG", "contemporary-stone-wet-room-3.JPG", "contemporary-stone-wet-room-4.JPG", "contemporary-stone-wet-room-5.JPG"].map(img => (
              <div key={img} className="gallery-thumb" onClick={() => openLightbox(img)}>
                <Image
                  src={`/images/portfolio/Contemporary Stone Wet Room/${img}`}
                  alt="Contemporary Stone Wet Room detail"
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
              Contemporary Stone Wet Room
            </h1>
            <span className="project-number-badge">#10</span>
          </div>
          <p>
            A complete conversion of a standard bathroom into a spacious, modern wet room. 
            The design utilizes soft grey stone-effect tiling throughout to create a calm, neutral environment. 
            A key focus of this build was accessibility and seamless flow; the shower area features a level-entry floor with a formed gradient, finished in mosaic tiles for safety and drainage. 
            To maintain a streamlined look, I installed a run of fitted grey cabinetry that houses the washbasin, storage, and a concealed cistern WC. 
            As the sole contractor, I managed all technical aspects of the wet room formation and final fit-out.
          </p>

          <ul>
            <li>Full Multi Trade Execution: Complete management of wet room formation, plumbing, tiling, and joinery.</li>
            <li>Wet Room Construction: Formation of a level-access shower floor with a precision-laid mosaic tile gradient for effective drainage.</li>
            <li>Tiling Specification: Floor-to-ceiling installation of large-format soft grey tiles, transitioning to matching mosaics in the wet zone.</li>
            <li>Integrated Furniture: Installation of a fitted grey gloss unit run incorporating a semi-recessed basin, storage, and a back-to-wall WC with concealed cistern.</li>
            <li>Shower Configuration: Fitting of a large frameless glass screen, a chrome thermostatic bar mixer, and an integrated grab rail for accessibility.</li>
            <li>Heating: Plumbing and mounting of a large white heated towel rail.</li>
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
              src={`/images/portfolio/Contemporary Stone Wet Room/${currentImage}`}
              alt="Contemporary Stone Wet Room"
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
