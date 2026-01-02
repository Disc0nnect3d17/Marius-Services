'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingContact from '@/components/FloatingContact';

export default function PolishedStoneFamilyBathroomPage() {
  const images = [
    '/images/portfolio/Polished Stone Family Bathroom/cover.JPG',
    '/images/portfolio/Polished Stone Family Bathroom/polished-stone-family-bathroom-1.JPG',
    '/images/portfolio/Polished Stone Family Bathroom/polished-stone-family-bathroom-2.JPG',
  ];

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-neutral-50">
      <Header />
      <FloatingContact />

      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex items-center gap-4 mb-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Polished Stone Family Bathroom
            </h1>
            <span className="project-number-badge">#44</span>
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-gray-700 leading-relaxed">
              A complete bathroom renovation designed for durability and a clean, timeless aesthetic. The room is fully tiled from floor to ceiling in high-gloss stone-effect porcelain, creating a bright and watertight environment that is easy to maintain. A key feature of this layout is the custom boxing-in along the lower wall, which neatly conceals pipework behind the WC and basin while providing a useful tiled ledge for storage. I installed a multi-function shower bath setup, combining a rainfall showerhead with a glass screen to offer the versatility of both a bath and a shower. As the sole contractor, I managed the entire fit-out, including the plumbing, tiling, and installation of fixtures.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Key Technical Work</h2>
            <ul className="space-y-2 text-gray-700">
              <li>
                <strong>Full Multi Trade Execution:</strong> Complete management of plumbing, tiling, and sanitaryware installation.
              </li>
              <li>
                <strong>Tiling Specification:</strong> Floor-to-ceiling installation of polished beige stone-effect wall tiles, paired with matching large-format floor tiles.
              </li>
              <li>
                <strong>Custom Joinery & Boxing:</strong> Construction of a tiled boxing section to conceal cistern plumbing and waste pipes, creating a functional shelf behind the sanitaryware.
              </li>
              <li>
                <strong>Shower Configuration:</strong> Installation of a chrome thermostatic mixer shower featuring an overhead rainfall head and a handheld attachment.
              </li>
              <li>
                <strong>Bathing Area:</strong> Fitting of a standard bath with a white panel and a frameless glass pivot screen.
              </li>
              <li>
                <strong>Sanitaryware:</strong> Installation of a classic white pedestal basin and a close-coupled WC.
              </li>
              <li>
                <strong>Heating & Storage:</strong> Mounting of a white ladder-style heated towel rail and a mirrored wall cabinet.
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {images.map((src, index) => (
              <div
                key={index}
                className="relative aspect-[4/3] cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={src}
                  alt={`Polished Stone Family Bathroom - Image ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </main>

      {lightboxOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white text-4xl font-bold hover:text-gray-300 z-50"
          >
            &times;
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-4 text-white text-4xl font-bold hover:text-gray-300 z-50"
          >
            &#8249;
          </button>

          <img
            src={images[currentImageIndex]}
            alt={`Polished Stone Family Bathroom - Image ${currentImageIndex + 1}`}
            className="max-w-[90%] max-h-[90%] object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-4 text-white text-4xl font-bold hover:text-gray-300 z-50"
          >
            &#8250;
          </button>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-lg">
            {currentImageIndex + 1} / {images.length}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
