"use client";

import Image from "next/image";
import { useState } from "react";

export default function MarbleChevronKitchenPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const images = [
    "cover.JPG",
    "marble-chevron-kitchen-1.JPG",
    "marble-chevron-kitchen-2.JPG",
    "marble-chevron-kitchen-3.JPG",
    "marble-chevron-kitchen-4.JPG",
    "marble-chevron-kitchen-5.JPG"
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
              src="/images/portfolio/Marble & Chevron Kitchen/cover.JPG"
              alt="Marble & Chevron Kitchen"
              fill
              priority
            />
          </div>

          {/* Supporting images */}
          <div className="gallery-secondary">
            {["marble-chevron-kitchen-1.JPG", "marble-chevron-kitchen-2.JPG", "marble-chevron-kitchen-3.JPG", "marble-chevron-kitchen-4.JPG", "marble-chevron-kitchen-5.JPG"].map(img => (
              <div key={img} className="gallery-thumb" onClick={() => openLightbox(img)}>
                <Image
                  src={`/images/portfolio/Marble & Chevron Kitchen/${img}`}
                  alt="Marble & Chevron Kitchen detail"
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
              Marble & Chevron Kitchen
            </h1>
            <span className="project-number-badge">#11</span>
          </div>
          <p>
            A high-impact kitchen renovation defined by its bold use of pattern and modern finishes. 
            The design features floor-to-ceiling large-format wall tiles with a distinct gold-vein marble effect, creating a seamless, wipe-clean backdrop. 
            This is paired with high-gloss light grey handleless cabinetry and a statement wood-effect floor laid in a chevron pattern. 
            Matte black appliances and fixtures provide a sharp contrast to the bright surfaces. 
            As the sole contractor, I managed the entire installation, from the cabinet fitting and worktop installation to the precision tiling and plumbing connection.
          </p>

          <ul>
            <li>Full Multi Trade Execution: Complete management of kitchen fitting, plumbing, electrical, and tiling.</li>
            <li>Tiling Specification: Extensive floor-to-ceiling installation of large-format marble-effect wall tiles, including wrapping around structural columns and window reveals.</li>
            <li>Cabinetry Installation: Fitting of high-gloss light grey handleless units, including tower housing for integrated ovens and bridging units.</li>
            <li>Flooring: Installation of high-contrast wood-effect flooring featuring a bold chevron pattern.</li>
            <li>Appliance Integration: Installation of a large black range cooker, angled extraction hood, and integrated microwave/oven stack.</li>
            <li>Plumbing & Fixtures: Fitting of a matte black composite sink with a modern mixer tap, set into white marble-effect worktops.</li>
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
              src={`/images/portfolio/Marble & Chevron Kitchen/${currentImage}`}
              alt="Marble & Chevron Kitchen"
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
