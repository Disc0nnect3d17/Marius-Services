"use client";

import Image from "next/image";
import { useState } from "react";

export default function EngineeredOakLandingBedroomStaircasePage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const images = [
    "cover.JPG",
    "engineered-oak-landing-bedroom-staircase-2.JPG",
    "engineered-oak-landing-bedroom-staircase-3.JPG",
    "engineered-oak-landing-bedroom-staircase-4.JPG",
    "engineered-oak-landing-bedroom-staircase-5.JPG",
    "engineered-oak-landing-bedroom-staircase-6.JPG",
    "engineered-oak-landing-bedroom-staircase-7.JPG",
    "engineered-oak-landing-bedroom-staircase-8.JPG",
    "engineered-oak-landing-bedroom-staircase-9.JPG",
    "engineered-oak-landing-bedroom-staircase-10.JPG"
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
              src="/images/portfolio/Engineered Oak Landing, Bedroom & Staircase/cover.JPG"
              alt="Engineered Oak Landing, Bedroom & Staircase"
              fill
              priority
            />
          </div>

          {/* Supporting images */}
          <div className="gallery-secondary">
            {["engineered-oak-landing-bedroom-staircase-2.JPG", "engineered-oak-landing-bedroom-staircase-3.JPG", "engineered-oak-landing-bedroom-staircase-4.JPG", "engineered-oak-landing-bedroom-staircase-5.JPG", "engineered-oak-landing-bedroom-staircase-6.JPG", "engineered-oak-landing-bedroom-staircase-7.JPG", "engineered-oak-landing-bedroom-staircase-8.JPG", "engineered-oak-landing-bedroom-staircase-9.JPG", "engineered-oak-landing-bedroom-staircase-10.JPG"].map(img => (
              <div key={img} className="gallery-thumb" onClick={() => openLightbox(img)}>
                <Image
                  src={`/images/portfolio/Engineered Oak Landing, Bedroom & Staircase/${img}`}
                  alt="Engineered Oak Landing, Bedroom & Staircase detail"
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
              Engineered Oak Landing, Bedroom & Staircase
            </h1>
            <span className="project-number-badge">#41</span>
          </div>
          <p>
            A high-end carpentry and flooring project focused on creating warmth and seamless continuity across the upper floor of the home. I installed premium engineered oak flooring throughout the landing and extending into the bedrooms, carefully planning the layout to ensure a continuous flow of grain. This natural oak theme is carried through to the staircase, where a new oak handrail contrasts beautifully with the freshly painted white balustrades and stringers. To complete the transformation, I hung solid oak cottage-style doors finished with modern chrome handles. As the sole contractor, I managed all aspects of the flooring, precise joinery, and final finishing.
          </p>

          <h3>Key Technical Work</h3>

          <ul>
            <li>Engineered Oak Flooring: Installation of high-quality engineered oak planks across the landing and bedrooms.</li>
            <li>Staircase Renovation: Finishing the staircase with an oak handrail paired with white painted balusters, risers, and stringers.</li>
            <li>Door Hanging: Fitting of solid oak cottage-style internal doors with brushed chrome lever handles.</li>
            <li>Layout Continuity: Ensuring a seamless visual transition from the staircase nosing onto the landing and into the adjoining rooms.</li>
            <li>Finishing Carpentry: Installation of new white skirting boards to frame the oak flooring cleanly.</li>
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
              src={`/images/portfolio/Engineered Oak Landing, Bedroom & Staircase/${currentImage}`}
              alt="Engineered Oak Landing, Bedroom & Staircase"
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
