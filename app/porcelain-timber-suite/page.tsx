"use client";

import Image from "next/image";
import { useState } from "react";

export default function PorcelainTimberPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const images = [
    "cover.JPG",
    "porcelain-timber-suite-1.JPG",
    "porcelain-timber-suite-2.JPG",
    "porcelain-timber-suite-3.JPG",
    "porcelain-timber-suite-4.JPG"
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
              src="/images/portfolio/Porcelain & Timber Suite/cover.JPG"
              alt="Porcelain & Timber Suite"
              fill
              priority
            />
          </div>

          {/* Supporting images */}
          <div className="gallery-secondary">
            {["porcelain-timber-suite-1.JPG", "porcelain-timber-suite-2.JPG", "porcelain-timber-suite-3.JPG", "porcelain-timber-suite-4.JPG"].map(img => (
              <div key={img} className="gallery-thumb" onClick={() => openLightbox(img)}>
                <Image
                  src={`/images/portfolio/Porcelain & Timber Suite/${img}`}
                  alt="Porcelain & Timber Suite detail"
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
              Porcelain & Timber Suite
            </h1>
            <span className="project-number-badge">#7</span>
          </div>
          <p>
            A contemporary bathroom renovation designed with a focus on minimalism and clean lines. 
            The room is fully enveloped in warm, neutral porcelain tiles from floor to ceiling, creating a seamless and calming aesthetic. 
            To maximize floor space and enhance the modern feel, I installed wall-hung fixtures, including a floating vanity and a WC with a concealed cistern. 
            The design is grounded by rich timber-effect cabinetry and finished with sophisticated brushed metal brassware. 
            As the sole contractor, I managed the project from the structural framing of the concealed units to the final tile sealing.
          </p>

          <ul>
            <li>Full Multi Trade Execution: Complete management of plumbing, tiling, electrical, and carpentry.</li>
            <li>Tiling Specification: Floor-to-ceiling installation of large-format neutral porcelain tiles, with precision cutting around window reveals.</li>
            <li>Concealed Plumbing: Structural boxing and installation of a wall-hung WC frame with a concealed cistern and flush plate.</li>
            <li>Shower Integration: Fitting of a dual-function shower system over the bath, featuring a concealed thermostatic mixer valve and brushed metal rainfall head.</li>
            <li>Feature Joinery: Installation of a wall-hung walnut-effect vanity unit with a surface-integrated basin and matching round wooden mirror.</li>
            <li>Heating: Plumbing and mounting of a matte grey heated towel rail to contrast with the warm tile tones.</li>
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
              src={`/images/portfolio/Porcelain & Timber Suite/${currentImage}`}
              alt="Porcelain & Timber Suite"
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
