"use client";

import Image from "next/image";
import { useState } from "react";

export default function SageWalnutPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const images = [
    "sage-walnut-1.JPG",
    "sage-walnut-2.JPG",
    "sage-walnut-3.JPG"
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
      <h1 className="project-title">The Sage & Walnut Shaker</h1>

      <div className="project-layout">
        {/* Image gallery */}
        <div className="project-gallery">
          {/* Large feature image */}
          <div className="gallery-main" onClick={() => openLightbox("sage-walnut-1.JPG")}>
            <Image
              src="/images/portfolio/sage-walnut/sage-walnut-1.JPG"
              alt="The Sage & Walnut Shaker kitchen"
              fill
              priority
            />
          </div>

          {/* Supporting images */}
          <div className="gallery-secondary">
            {["sage-walnut-2.JPG", "sage-walnut-3.JPG"].map(img => (
              <div key={img} className="gallery-thumb" onClick={() => openLightbox(img)}>
                <Image
                  src={`/images/portfolio/sage-walnut/${img}`}
                  alt="The Sage & Walnut Shaker detail"
                  fill
                />
              </div>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="project-description">
          <h2>Project Overview</h2>
          <p>
            A complete turn-key renovation executed entirely by a single specialist. 
            This project transformed a bare shell into a sophisticated kitchen by blending traditional farmhouse elements with modern contrasts.
            From the initial electrical rough in and plastering to the precision joinery and flooring, every aspect of the build was handled in house to ensure a seamless, high-quality finish. 
            The design features soft sage shaker cabinetry, solid walnut butcher block worktops, and a striking vertical-stack black backsplash..
          </p>

          <ul>
            <li>Full Multi Trade Execution: Electrical, plastering, plumbing, and painting.</li>
            <li>Bespoke Joinery: Custom fit sage shaker units with soft-close hardware.</li>
            <li>Solid Timber: Walnut butcher block worktops and breakfast bar, oiled and sealed.</li>
            <li>Tiling & Flooring: Matte black "kit-kat" splashback and continuous engineered oak flooring.</li>
            <li>Detailing: Double Belfast sink integration and custom appliance housing.</li>
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
              src={`/images/portfolio/sage-walnut/${currentImage}`}
              alt="The Sage & Walnut Shaker"
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
