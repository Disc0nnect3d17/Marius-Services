"use client";

import Image from "next/image";
import { useState } from "react";

export default function MarbleMosaicShowerRoomPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const images = [
    "cover.JPG",
    "marble-mosaic-shower-room-1.JPG",
    "marble-mosaic-shower-room-2.JPG"
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
              src="/images/portfolio/Marble & Mosaic Shower Room/cover.JPG"
              alt="Marble & Mosaic Shower Room"
              fill
              priority
            />
          </div>

          {/* Supporting images */}
          <div className="gallery-secondary">
            {["marble-mosaic-shower-room-1.JPG", "marble-mosaic-shower-room-2.JPG"].map(img => (
              <div key={img} className="gallery-thumb" onClick={() => openLightbox(img)}>
                <Image
                  src={`/images/portfolio/Marble & Mosaic Shower Room/${img}`}
                  alt="Marble & Mosaic Shower Room detail"
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
              Marble & Mosaic Shower Room
            </h1>
            <span className="project-number-badge">#36</span>
          </div>
          <p>
            A contemporary bathroom renovation defined by its elegant tiling and modern lighting choices. The walls are finished in large-format white marble-effect porcelain, accented by a decorative mosaic border strip that runs the perimeter of the room, adding texture and breaking up the vertical space. The focal point of the vanity area is a striking hexagonal LED illuminated mirror, which complements the clean lines of the white gloss wall-hung unit. I installed a spacious shower enclosure featuring a rainfall system to create a luxurious daily experience. As the sole contractor, I executed the entire project, ensuring the mosaic detail was perfectly aligned and the finish was seamless.
          </p>

          <h3>Key Technical Work</h3>

          <ul>
            <li>Full Multi Trade Execution: Complete management of plumbing, tiling, and electrical finishing.</li>
            <li>Tiling Specification: Installation of large-format marble-effect wall and floor tiles, featuring a precise mosaic border strip at dado height.</li>
            <li>Lighting Design: Wiring and mounting of a feature hexagonal LED illuminated mirror and recessed ceiling spotlights.</li>
            <li>Shower Configuration: Fitting of a glass shower enclosure with a chrome thermostatic mixer column and overhead rainfall spray.</li>
            <li>Sanitaryware: Installation of a wall-hung white gloss two-drawer vanity unit and a modern close-coupled WC.</li>
            <li>Plumbing Fixtures: Fitting of a chrome mono basin mixer tap and waste.</li>
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
              src={`/images/portfolio/Marble & Mosaic Shower Room/${currentImage}`}
              alt="Marble & Mosaic Shower Room"
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
