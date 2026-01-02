"use client";

import Image from "next/image";
import { useState } from "react";

export default function NeutralStoneGlossPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const images = [
    "cover.JPG",
    "neutral-stone-gloss-suite-1.JPG",
    "neutral-stone-gloss-suite-2.JPG",
    "neutral-stone-gloss-suite-3.JPG",
    "neutral-stone-gloss-suite-4.JPG"
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
              src="/images/portfolio/Neutral Stone & Gloss Suite/cover.JPG"
              alt="Neutral Stone & Gloss Suite"
              fill
              priority
            />
          </div>

          {/* Supporting images */}
          <div className="gallery-secondary">
            {["neutral-stone-gloss-suite-1.JPG", "neutral-stone-gloss-suite-2.JPG", "neutral-stone-gloss-suite-3.JPG", "neutral-stone-gloss-suite-4.JPG"].map(img => (
              <div key={img} className="gallery-thumb" onClick={() => openLightbox(img)}>
                <Image
                  src={`/images/portfolio/Neutral Stone & Gloss Suite/${img}`}
                  alt="Neutral Stone & Gloss Suite detail"
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
              Neutral Stone & Gloss Suite
            </h1>
            <span className="project-number-badge">#13</span>
          </div>
          <p>
            A sleek, modern bathroom renovation utilizing a neutral color palette to create a spacious and calming atmosphere. 
            The walls are fully tiled in large-format stone-effect ceramic, paired with contrasting grey wood-effect flooring. 
            The layout features a large sliding-door shower enclosure with a custom recessed storage niche. 
            To maintain clean lines, I installed a wall-hung vanity and a WC with a concealed cistern housed in custom tiled boxing. 
            As the sole contractor, I managed the entire project from the structural boxing to the final silicone seal.
          </p>

          <ul>
            <li>Full Multi Trade Execution: Complete management of plumbing, tiling, electrical, and carpentry.</li>
            <li>Tiling Specification: Floor-to-ceiling installation of large-format neutral stone-effect tiles throughout the room.</li>
            <li>Shower Configuration: Fitting of a spacious sliding-door shower enclosure featuring a custom tiled recessed niche for storage and chrome fittings.</li>
            <li>Concealed Plumbing: Construction of a tiled boxing unit to house the concealed cistern, finished with a flush plate.</li>
            <li>Sanitaryware & Storage: Installation of a modern white gloss wall-hung vanity unit and an illuminated mirror cabinet.</li>
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
              src={`/images/portfolio/Neutral Stone & Gloss Suite/${currentImage}`}
              alt="Neutral Stone & Gloss Suite"
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
