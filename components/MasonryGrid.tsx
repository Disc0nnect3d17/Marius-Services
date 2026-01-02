'use client';

import { useEffect, useRef, useState } from 'react';

type Props = {
  children: React.ReactNode;
};

export default function MasonryGrid({ children }: Props) {
  const gridRef = useRef<HTMLDivElement>(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const resizeItem = (item: HTMLElement) => {
    const grid = gridRef.current;
    if (!grid) return;

    const rowHeight = parseInt(
      getComputedStyle(grid).getPropertyValue('grid-auto-rows')
    );
    const rowGap = parseInt(
      getComputedStyle(grid).getPropertyValue('gap')
    );

    const content = item.querySelector('img') as HTMLImageElement;
    if (!content) return;

    // Wait for image to have dimensions
    if (content.naturalHeight === 0) {
      content.onload = () => resizeItem(item);
      return;
    }

    const height = content.getBoundingClientRect().height;
    const rowSpan = Math.ceil((height + rowGap) / (rowHeight + rowGap));

    item.style.gridRowEnd = `span ${rowSpan}`;
  };

  const resizeAll = () => {
    const items = gridRef.current?.children;
    if (!items) return;

    Array.from(items).forEach(item => {
      resizeItem(item as HTMLElement);
    });
  };

  useEffect(() => {
    // Initial resize
    const timer = setTimeout(resizeAll, 100);
    
    // Setup resize listener
    window.addEventListener('resize', resizeAll);
    
    // Check all images and setup load listeners
    const images = gridRef.current?.querySelectorAll('img');
    if (images) {
      let loadedCount = 0;
      const totalImages = images.length;

      images.forEach(img => {
        if (img.complete) {
          loadedCount++;
        } else {
          img.addEventListener('load', () => {
            loadedCount++;
            resizeAll();
            if (loadedCount === totalImages) {
              setImagesLoaded(true);
            }
          });
          img.addEventListener('error', () => {
            loadedCount++;
            if (loadedCount === totalImages) {
              setImagesLoaded(true);
            }
          });
        }
      });

      if (loadedCount === totalImages) {
        setImagesLoaded(true);
        resizeAll();
      }
    }
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', resizeAll);
    };
  }, [children]);

  // Re-run layout when images finish loading
  useEffect(() => {
    if (imagesLoaded) {
      resizeAll();
    }
  }, [imagesLoaded]);

  return (
    <div ref={gridRef} className="masonry-grid">
      {children}
    </div>
  );
}
