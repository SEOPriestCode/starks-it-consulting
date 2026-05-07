'use client';

import { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      // we can calculate based on document height
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setWidth(h > 0 ? (window.scrollY / h) * 100 : 0);
    };

    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();
    
    // Also update on resize or DOM changes
    const observer = new ResizeObserver(updateProgress);
    observer.observe(document.body);

    return () => {
      window.removeEventListener('scroll', updateProgress);
      observer.disconnect();
    };
  }, []);

  return <div id="progress-bar" style={{ width: `${width}%` }}></div>;
}
