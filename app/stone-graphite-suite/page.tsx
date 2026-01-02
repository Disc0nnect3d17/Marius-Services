"use client";

import Image from "next/image";
import { useState } from "react";

export default function StoneGraphiteSuitePage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const images = [
    "cover.JPG",
    "stone-graphite-suite-1.JPG",
    "stone-graphite-suite-2.JPG",
    "stone-graphite-suite-3.JPG",
    "stone-graphite-suite-4.JPG"
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
              src="/images/portfolio/Stone & Graphite Suite/cover.JPG"
              alt="Stone & Graphite Suite"
              fill
              priority
            />
          </div>

          {/* Supporting images */}
          <div className="gallery-secondary">
            {["stone-graphite-suite-1.JPG", "stone-graphite-suite-2.JPG", "stone-graphite-suite-3.JPG", "stone-graphite-suite-4.JPG"].map(img => (
              <div key={img} className="gallery-thumb" onClick={() => openLightbox(img)}>
                <Image
                  src={`/images/portfolio/Stone & Graphite Suite/${img}`}
                  alt="Stone & Graphite Suite detail"
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
              Stone & Graphite Suite
            </h1>
            <span className="project-number-badge">#16</span>
          </div>
          <p>
            A modern family bathroom renovation designed to maximize storage and clean lines. 
            The room is fully tiled in a light stone-effect ceramic to create a bright, watertight shell. 
            The focal point is a run of fitted graphite-grey cabinetry that seamlessly integrates a tall storage unit, a semi-recessed basin, and a back-to-wall WC with a concealed cistern. 
            This is contrasted by a statement matte black towel radiator and an oak door, adding warmth and depth to the palette. 
            As the sole contractor, I managed the entire installation, including the precise fitting of the furniture run.
          </p>

          <ul>
            <li>Full Multi Trade Execution: Complete management of plumbing, tiling, joinery, and electrical.</li>
            <li>Integrated Furniture: Installation of a fitted graphite-grey furniture run housing a tall storage cupboard, washbasin, and concealed cistern WC.</li>
            <li>Tiling Specification: Floor-to-ceiling installation of light stone-effect tiles on both walls and floors for a cohesive look.</li>
            <li>Bathing Configuration: Fitting of a bath with a curved glass screen and a chrome dual-outlet shower mixer (rainfall and handset).</li>
            <li>Heating: Plumbing and mounting of a feature matte black ladder-style towel radiator.</li>
            <li>Electrical & Finishing: Installation of an LED illuminated mirror and hanging of a glazed oak door.</li>
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
              src={`/images/portfolio/Stone & Graphite Suite/${currentImage}`}
              alt="Stone & Graphite Suite"
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
