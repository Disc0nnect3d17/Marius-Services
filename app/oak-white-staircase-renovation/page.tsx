"use client";

import Image from "next/image";
import { useState } from "react";

export default function OakWhiteStaircaseRenovationPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const images = [
    "cover.JPG",
    "oak-white-staircase-renovation-1.JPG",
    "oak-white-staircase-renovation-2.JPG",
    "oak-white-staircase-renovation-3.JPG",
    "oak-white-staircase-renovation-4.JPG",
    "oak-white-staircase-renovation-5.jpg"
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
              src="/images/portfolio/Oak & White Staircase Renovation/cover.JPG"
              alt="Oak & White Staircase Renovation"
              fill
              priority
            />
          </div>

          {/* Supporting images */}
          <div className="gallery-secondary">
            {["oak-white-staircase-renovation-1.JPG", "oak-white-staircase-renovation-2.JPG", "oak-white-staircase-renovation-3.JPG", "oak-white-staircase-renovation-4.JPG", "oak-white-staircase-renovation-5.jpg"].map(img => (
              <div key={img} className="gallery-thumb" onClick={() => openLightbox(img)}>
                <Image
                  src={`/images/portfolio/Oak & White Staircase Renovation/${img}`}
                  alt="Oak & White Staircase Renovation detail"
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
              Oak & White Staircase Renovation
            </h1>
            <span className="project-number-badge">#40</span>
          </div>
          <p>
            A carpentry project focused on transforming a standard staircase into a stunning architectural feature. The design replaces or clads the existing treads with high-quality oak, creating a warm, premium surface that contrasts beautifully with the crisp white painted risers and stringers. A major challenge of this project was the "winder" layout (where the stairs turn a corner), requiring complex angular cuts to ensure the grain and nosing aligned perfectly. I also crafted a custom curved bottom step (bullnose) to provide an elegant inviting entry to the flight. As the sole contractor, I managed the precise cutting, installation, and final finishing of the timber.
          </p>

          <h3>Key Technical Work</h3>

          <ul>
            <li>Stair Transformation: Installation of oak treads over the existing structure, paired with white painted risers for a classic, clean aesthetic.</li>
            <li>Precision Winder Cutting: Technical cutting of triangular "winder" steps to navigate the turn in the staircase while maintaining tight, consistent gaps against the stringers.</li>
            <li>Bullnose Detailing: Custom shaping and installation of the curved bottom step (bullnose) to ensure a smooth, professional finish at the floor level.</li>
            <li>Seamless Transitions: Installation of matching oak flooring on the landing to ensure a continuous flow from the stairs to the upper level.</li>
            <li>Finishing: Application of durable varnish/oil to the oak treads and satin white paint to the woodwork, balustrades, and risers.</li>
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
              src={`/images/portfolio/Oak & White Staircase Renovation/${currentImage}`}
              alt="Oak & White Staircase Renovation"
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
