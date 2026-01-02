'use client';

import { useEffect, useRef } from 'react';

type Props = {
  children: React.ReactNode;
};

export default function MasonryItem({ children }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const img = ref.current?.querySelector('img');
    if (!img) return;

    if (img.complete) {
      const event = new Event('resize');
      window.dispatchEvent(event);
      return;
    }

    const handleLoad = () => {
      const event = new Event('resize');
      window.dispatchEvent(event);
    };

    img.addEventListener('load', handleLoad);
    return () => img.removeEventListener('load', handleLoad);
  }, []);

  return (
    <div ref={ref} className="masonry-item">
      {children}
    </div>
  );
}
