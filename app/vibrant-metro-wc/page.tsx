"use client";

import Image from "next/image";
import { useState } from "react";

export default function VibrantMetroWCPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const images = [
    "cover.JPG",
    "vibrant-metro-WC-1.JPG",
    "vibrant-metro-WC-2.JPG",
    "vibrant-metro-WC-3.JPG"
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
              src="/images/portfolio/Vibrant Metro WC/cover.JPG"
              alt="Vibrant Metro WC"
              fill
              priority
            />
          </div>

          {/* Supporting images */}
          <div className="gallery-secondary">
            {["vibrant-metro-WC-1.JPG", "vibrant-metro-WC-2.JPG", "vibrant-metro-WC-3.JPG"].map(img => (
              <div key={img} className="gallery-thumb" onClick={() => openLightbox(img)}>
                <Image
                  src={`/images/portfolio/Vibrant Metro WC/${img}`}
                  alt="Vibrant Metro WC detail"
                  fill
                />
              </div>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="project-description">
          <h2>Vibrant Metro WC</h2>
          <p>
            A bold renovation of a downstairs WC that combines practical accessibility with striking design. 
            The walls feature a two-tone layout, using neutral stone-effect tiles on the lower half and a vibrant, multi-coloured metro tile mix above dado height. 
            High-gloss marble-effect floor tiles add to the reflective, modern feel. 
            I installed a modern vanity and WC, along with specialized features including a handheld bidet spray and a fold-down support arm. 
            As the sole contractor, I executed all trades from the initial plumbing adjustments to the final tiling and electrical fit-out.
          </p>

          <ul>
            <li>Full Multi Trade Execution: Complete management of plumbing, tiling, and electrical installation.</li>
            <li>Feature Tiling: Installation of a complex multi-coloured metro tile layout in a brick-bond pattern, contrasted with neutral lower tiling.</li>
            <li>Flooring: High-gloss marble-effect porcelain tiles laid to maximize light reflection.</li>
            <li>Specialized Plumbing: Installation of a handheld bidet spray (douche) next to the WC, requiring specific isolation and feed work.</li>
            <li>Accessibility Features: Fitting of a wall-mounted fold-down support arm for improved accessibility.</li>
            <li>Heating & Electrical: Mounting of a chrome heated towel rail and an LED illuminated vanity mirror.</li>
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
              src={`/images/portfolio/Vibrant Metro WC/${currentImage}`}
              alt="Vibrant Metro WC"
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
