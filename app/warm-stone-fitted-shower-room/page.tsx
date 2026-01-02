"use client";

import Image from "next/image";
import { useState } from "react";

export default function WarmStoneFittedShowerRoomPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const images = [
    "cover.JPG",
    "warm-stone-fitted-shower-room-1.JPG",
    "warm-stone-fitted-shower-room-2.JPG",
    "warm-stone-fitted-shower-room-3.JPG",
    "warm-stone-fitted-shower-room-4.JPG"
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
              src="/images/portfolio/Warm Stone & Fitted Shower Room/cover.JPG"
              alt="Warm Stone & Fitted Shower Room"
              fill
              priority
            />
          </div>

          {/* Supporting images */}
          <div className="gallery-secondary">
            {["warm-stone-fitted-shower-room-1.JPG", "warm-stone-fitted-shower-room-2.JPG", "warm-stone-fitted-shower-room-3.JPG", "warm-stone-fitted-shower-room-4.JPG"].map(img => (
              <div key={img} className="gallery-thumb" onClick={() => openLightbox(img)}>
                <Image
                  src={`/images/portfolio/Warm Stone & Fitted Shower Room/${img}`}
                  alt="Warm Stone & Fitted Shower Room detail"
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
              Warm Stone & Fitted Shower Room
            </h1>
            <span className="project-number-badge">#35</span>
          </div>
          <p>
            A contemporary shower room renovation designed for warmth and practicality. The walls are fully tiled in a soft taupe stone-effect ceramic, creating a cozy yet modern atmosphere that is easy to maintain. To maximize the floor plan and provide essential storage, I installed a run of fitted gloss cabinetry that seamlessly integrates the washbasin and a concealed cistern WC, hiding all unsightly pipework. The shower area is generous, featuring a low-level tray and a high-performance dual-outlet mixer. As the sole contractor, I managed the entire installation, ensuring a high-quality finish from the plumbing first-fix to the final tiling.
          </p>

          <h3>Key Technical Work</h3>

          <ul>
            <li>Full Multi Trade Execution: Complete management of plumbing, tiling, joinery, and installation.</li>
            <li>Tiling Specification: Floor-to-ceiling installation of warm taupe stone-effect wall tiles with matching floor tiles.</li>
            <li>Integrated Furniture: Installation of a fitted gloss vanity and WC combination unit to conceal the cistern and maximize storage.</li>
            <li>Shower Configuration: Fitting of a spacious low-profile shower tray with a glass screen and chrome support bar.</li>
            <li>Plumbing: Installation of a chrome dual-outlet thermostatic shower mixer (rainfall head and handset).</li>
            <li>Heating: Mounting of a white ladder-style heated towel rail.</li>
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
              src={`/images/portfolio/Warm Stone & Fitted Shower Room/${currentImage}`}
              alt="Warm Stone & Fitted Shower Room"
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
