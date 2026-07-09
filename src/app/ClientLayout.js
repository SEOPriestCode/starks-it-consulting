'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Cursor from '../components/Cursor';
import ScrollProgress from '../components/ScrollProgress';
import BackToTop from '../components/BackToTop';

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Handle page transitions & scroll resets
  useEffect(() => {
    // We can simulate the curtain transition here if we want,
    // but Next.js soft navigation already feels fast. 
    // Just resetting scroll and triggering reveals is often enough.
    window.scrollTo({ top: 0, behavior: 'instant' });
    
    // Re-run scroll reveal observation
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('revealed');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.07, rootMargin: '0px 0px -30px 0px' });
    
    // Small delay to allow DOM to render
    const timer = setTimeout(() => {
      document.querySelectorAll('[data-reveal]').forEach(el => {
        el.classList.remove('revealed');
        obs.observe(el);
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      obs.disconnect();
    };
  }, [pathname]);

  // Handle Swipe Navigation (Touch & Mouse Drag)
  const router = useRouter();
  useEffect(() => {
    // Disable swipe navigation on cases and blog pages to prevent filter interference
    if (pathname === '/cases' || pathname === '/blog') return;
    
    let startX = 0;
    let startY = 0;
    let isDown = false;

    const handlePointerDown = (e) => {
      // Only listen to single touches or primary mouse clicks
      if (e.pointerType === 'mouse' && e.button !== 0) return;
      
      // Ignore pointer down on filter buttons and their container
      if (e.target && e.target.closest && e.target.closest('.cases-filter, .filter-btn')) {
        return;
      }
      
      isDown = true;
      startX = e.clientX;
      startY = e.clientY;
    };

    const handlePointerUp = (e) => {
      if (!isDown) return;
      isDown = false;
      
      // Ignore pointer up on filter buttons and their container
      if (e.target && e.target.closest && e.target.closest('.cases-filter, .filter-btn')) {
        return;
      }
      
      const endX = e.clientX;
      const endY = e.clientY;
      const deltaX = endX - startX;
      const deltaY = endY - startY;

      // Ignore swipes on horizontally scrollable elements
      if (e.target && e.target.closest && e.target.closest('.cases-filter, .blog-hero-cats, .photo-strip-3col, .cases-masonry, .values-grid')) {
        return;
      }

      // Check if the swipe is mostly horizontal and meets distance threshold
      if (Math.abs(deltaX) > 70 && Math.abs(deltaX) > Math.abs(deltaY) * 1.5) {
        const pages = ['/', '/services', '/about', '/cases', '/team', '/blog', '/contact'];
        const currentIndex = pages.indexOf(pathname);
        
        if (currentIndex === -1) return;

        if (deltaX < 0 && currentIndex < pages.length - 1) {
          // Swiped left -> Go to next page
          router.push(pages[currentIndex + 1]);
        } else if (deltaX > 0 && currentIndex > 0) {
          // Swiped right -> Go to previous page
          router.push(pages[currentIndex - 1]);
        }
      }
    };

    const handlePointerCancel = () => {
      isDown = false;
    };

    window.addEventListener('pointerdown', handlePointerDown, { passive: true });
    window.addEventListener('pointerup', handlePointerUp, { passive: true });
    window.addEventListener('pointercancel', handlePointerCancel, { passive: true });

    return () => {
      window.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('pointercancel', handlePointerCancel);
    };
  }, [pathname, router]);

  return (
    <>
      <ScrollProgress />
      <BackToTop />
      
      {/* Optional: Page Curtain (We can just hide it or keep it simple) */}
      <div id="page-curtain" className={isTransitioning ? 'animating' : ''}>
        <span id="page-curtain-logo">Starks IT</span>
      </div>

      <Cursor />
      
      <Nav />
      
      {/* 
        We wrap children in a standard page class to ensure 
        they get the default .page styles minus the display:none
      */}
      <main style={{ minHeight: '100vh' }}>
        {children}
      </main>
      
      <Footer />
    </>
  );
}
