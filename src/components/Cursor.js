'use client';

import { useEffect, useState, useRef } from 'react';

export default function Cursor() {
  const [isTouch, setIsTouch] = useState(true);
  const cursorRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    // Better touch detection that doesn't trigger on touch-capable laptops
    const isStrictTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isStrictTouch) return;
    setIsTouch(false);
  }, []);

  useEffect(() => {
    if (isTouch) return;
    
    document.body.style.cursor = 'none';
    const cursor = cursorRef.current;
    const ring = ringRef.current;
    
    if (!cursor || !ring) return;

    let mx = -100, my = -100, rx = -100, ry = -100;
    
    const handleMouseMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      cursor.style.left = mx + 'px';
      cursor.style.top = my + 'px';
    };
    
    const handleMouseOver = (e) => {
      if (e.target.closest('a, button, .hsvc, .case-card2, .article-card, .team-member, .hcase, .filter-btn, .blog-cat-pill')) {
        document.body.classList.add('cursor-hover');
      }
    };
    
    const handleMouseOut = (e) => {
      if (e.target.closest('a, button, .hsvc, .case-card2, .article-card, .team-member, .hcase, .filter-btn, .blog-cat-pill')) {
        document.body.classList.remove('cursor-hover');
      }
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    
    let animationFrameId;
    const animateRing = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.left = Math.round(rx) + 'px';
      ring.style.top = Math.round(ry) + 'px';
      animationFrameId = requestAnimationFrame(animateRing);
    };
    animateRing();
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      cancelAnimationFrame(animationFrameId);
      document.body.style.cursor = '';
    };
  }, [isTouch]);

  if (isTouch) return null;

  return (
    <>
      <div id="cursor" ref={cursorRef}></div>
      <div id="cursor-ring" ref={ringRef}></div>
    </>
  );
}
