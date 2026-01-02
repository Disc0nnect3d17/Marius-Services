'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingContact from '@/components/FloatingContact';

export default function WarmOakLaminateBedroomPage() {
  const images = [
    '/images/portfolio/Warm Oak Laminate Bedroom/cover.JPG',
    '/images/portfolio/Warm Oak Laminate Bedroom/warm-oak-laminate-bedroom-1.JPG',
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
              Warm Oak Laminate Bedroom
            </h1>
            <span className="project-number-badge">#43</span>
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-gray-700 leading-relaxed">
              A bedroom update designed to bring warmth and durability to the space. I installed a medium-toned oak-effect laminate floor, chosen to add natural texture while remaining easy to clean and maintain. The warm wood grain contrasts effectively with the neutral beige walls and white ceiling. To ensure a high-standard finish, I fitted fresh white skirting boards around the entire perimeter, creating a crisp junction between the floor and walls. The installation was executed with precision, ensuring a neat fit around the radiator and a smooth transition at the doorway.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Key Technical Work</h2>
            <ul className="space-y-2 text-gray-700">
              <li>
                <strong>Laminate Installation:</strong> Fitting of warm oak-effect laminate flooring laid in a staggered pattern for stability.
              </li>
              <li>
                <strong>Finishing Carpentry:</strong> Installation of new white skirting boards to frame the new flooring cleanly.
              </li>
              <li>
                <strong>Radiator Integration:</strong> Precise cutting of the flooring around radiator pipework for a tidy finish.
              </li>
              <li>
                <strong>Doorway Transition:</strong> Ensuring the flooring meets the oak door frame neatly for a seamless entrance.
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
                  alt={`Warm Oak Laminate Bedroom - Image ${index + 1}`}
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

          <div className="relative flex items-center justify-center">
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="lightbox-nav-btn prev"
              aria-label="Previous image"
            >
              <svg viewBox="0 0 24 24">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>

            <img
              src={images[currentImageIndex]}
              alt={`Warm Oak Laminate Bedroom - Image ${currentImageIndex + 1}`}
              className="max-w-[90vw] max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="lightbox-nav-btn next"
              aria-label="Next image"
            >
              <svg viewBox="0 0 24 24">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-lg">
            {currentImageIndex + 1} / {images.length}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
