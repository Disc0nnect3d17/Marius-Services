"use client";

import Image from "next/image";
import { useState } from "react";

export default function AcousticSlatFeatureWallPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const images = [
    "cover.JPG",
    "acoustic-slat-feature-wall-1.JPG"
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
              src="/images/portfolio/Acoustic Slat Feature Wall/cover.JPG"
              alt="Acoustic Slat Feature Wall"
              fill
              priority
            />
          </div>

          {/* Supporting images */}
          <div className="gallery-secondary">
            {["acoustic-slat-feature-wall-1.JPG"].map(img => (
              <div key={img} className="gallery-thumb" onClick={() => openLightbox(img)}>
                <Image
                  src={`/images/portfolio/Acoustic Slat Feature Wall/${img}`}
                  alt="Acoustic Slat Feature Wall detail"
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
              Acoustic Slat Feature Wall
            </h1>
            <span className="project-number-badge">#42</span>
          </div>
          <p>
            A contemporary carpentry update designed to create a striking focal point in the room. I installed full-height vertical wood slat panels, chosen for their popular modern aesthetic and acoustic properties. The installation required precise measuring to ensure a seamless fit from wall to wall. A critical part of this job was the integration of the electrical and media points; I carefully cut the panels to accommodate the sockets, ensuring they sat neatly against the new textured surface for a professional finish. The warm wood tones contrast effectively with the cool grey walls and white skirting, adding significant depth to the space.
          </p>

          <h3>Key Technical Work</h3>

          <ul>
            <li>Feature Wall Installation: Installation of floor-to-ceiling vertical wooden slat panels to create a textured statement wall.</li>
            <li>Electrical Integration: Precision cutting of the panels to accommodate multiple power sockets and media points for a TV setup.</li>
            <li>Finishing Carpentry: Installation of white skirting boards along the base to frame the new paneling cleanly.</li>
            <li>Decoration: Painting of the surrounding walls in a cool grey to make the wood features stand out.</li>
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
              src={`/images/portfolio/Acoustic Slat Feature Wall/${currentImage}`}
              alt="Acoustic Slat Feature Wall"
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
