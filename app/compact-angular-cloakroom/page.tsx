"use client";

import Image from "next/image";
import { useState } from "react";

export default function CompactAngularCloakroomPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const images = [
    "cover.JPG",
    "compact-angular-cloakroom-1.JPG",
    "compact-angular-cloakroom-2.JPG",
    "compact-angular-cloakroom-3.JPG"
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
              src="/images/portfolio/Compact Angular Cloakroom/cover.JPG"
              alt="Compact Angular Cloakroom"
              fill
              priority
            />
          </div>

          {/* Supporting images */}
          <div className="gallery-secondary">
            {["compact-angular-cloakroom-1.JPG", "compact-angular-cloakroom-2.JPG", "compact-angular-cloakroom-3.JPG"].map(img => (
              <div key={img} className="gallery-thumb" onClick={() => openLightbox(img)}>
                <Image
                  src={`/images/portfolio/Compact Angular Cloakroom/${img}`}
                  alt="Compact Angular Cloakroom detail"
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
              Compact Angular Cloakroom
            </h1>
            <span className="project-number-badge">#34</span>
          </div>
          <p>
            A smart renovation of a small, irregularly shaped downstairs toilet (likely an under-stairs conversion). The goal was to create a functional and clean space within a very tight footprint. I installed a compact white gloss vanity unit tucked neatly into the corner to maximize floor area, paired with a modern close-coupled WC. The walls were painted in a soft neutral grey to keep the room feeling open, while a wipe-clean splashback panel was fitted behind the basin for practicality. As the sole contractor, I handled the plumbing, flooring installation, and final decoration.
          </p>

          <h3>Key Technical Work</h3>

          <ul>
            <li>Full Multi Trade Execution: Complete management of plumbing, flooring, joinery, and decoration.</li>
            <li>Space Optimization: Installation of a compact vanity unit specifically selected to fit the tight corner angles of the room.</li>
            <li>Sanitaryware: Fitting of a modern white close-coupled WC with a dual flush system.</li>
            <li>Heating: Plumbing and mounting of a white ladder-style heated towel rail, positioned behind the door to utilize dead space.</li>
            <li>Flooring: Installation of light wood-effect plank flooring, requiring precise cutting to accommodate the room's angular shape.</li>
            <li>Finishing: Installation of a mirrored wall cabinet and a clean white splashback panel behind the basin.</li>
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
              src={`/images/portfolio/Compact Angular Cloakroom/${currentImage}`}
              alt="Compact Angular Cloakroom"
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
