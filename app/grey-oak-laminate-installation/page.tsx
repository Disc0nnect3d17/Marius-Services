"use client";

import Image from "next/image";
import { useState } from "react";

export default function GreyOakLaminateInstallationPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const images = [
    "cover.JPG",
    "IMG_3377.JPG",
    "IMG_3379.JPG"
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
              src="/images/portfolio/Grey Oak Laminate Installation/cover.JPG"
              alt="Grey Oak Laminate Installation"
              fill
              priority
            />
          </div>

          {/* Supporting images */}
          <div className="gallery-secondary">
            {["IMG_3377.JPG", "IMG_3379.JPG"].map(img => (
              <div key={img} className="gallery-thumb" onClick={() => openLightbox(img)}>
                <Image
                  src={`/images/portfolio/Grey Oak Laminate Installation/${img}`}
                  alt="Grey Oak Laminate Installation detail"
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
              Grey Oak Laminate Installation
            </h1>
            <span className="project-number-badge">#38</span>
          </div>
          <p>
            A carpentry and flooring project designed to modernize a spacious living area. I installed high-quality grey wood-effect laminate flooring throughout the room, chosen for its durability and contemporary look. A key aspect of this installation was the attention to detail at the thresholds; I undercut the timber door frames and architraves to ensure the flooring slid underneath for a seamless, gap-free appearance, rather than using unsightly beading. Where the new laminate met the existing white hallway tiles, I installed a sleek metal threshold strip to create a safe and neat transition. As the sole contractor, I handled the floor laying and the installation of new skirting boards to finish the room.
          </p>

          <h3>Key Technical Work</h3>

          <ul>
            <li>Laminate Installation: Fitting of grey wood-effect laminate planks across a large surface area, ensuring a staggered layout for stability.</li>
            <li>Transition Detailing: Installation of a metal door bar to create a clean, flush junction between the new laminate and the existing white porcelain tiles.</li>
            <li>Precision Carpentry: Undercutting of door linings and architraves to allow the flooring to sit neatly underneath without visible cuts or expansion gaps.</li>
            <li>Finishing: Installation of fresh white skirting boards around the perimeter to cover expansion gaps and frame the room.</li>
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
              src={`/images/portfolio/Grey Oak Laminate Installation/${currentImage}`}
              alt="Grey Oak Laminate Installation"
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
