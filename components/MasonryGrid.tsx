'use client';

import { useEffect, useRef } from 'react';

type Props = {
  children: React.ReactNode;
};

export default function MasonryGrid({ children }: Props) {
  const gridRef = useRef<HTMLDivElement>(null);

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
    resizeAll();
    window.addEventListener('resize', resizeAll);
    return () => window.removeEventListener('resize', resizeAll);
  }, []);

  return (
    <div ref={gridRef} className="masonry-grid">
      {children}
    </div>
  );
}
