'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Nav() {
  const [isSolid, setIsSolid] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsSolid(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileNav = () => {
    setMobileNavOpen(false);
    document.body.style.overflow = '';
  };

  const toggleMobileNav = () => {
    const nextOpen = !mobileNavOpen;
    setMobileNavOpen(nextOpen);
    document.body.style.overflow = nextOpen ? 'hidden' : '';
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Case Studies', path: '/cases' },
    { name: 'Team', path: '/team' },
    { name: 'Insights', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <nav id="nav" className={isSolid ? 'solid' : ''}>
        <Link href="/" className="nav-logo" onClick={closeMobileNav}>
          <img src="/logo.png" alt="Starks IT Consulting Logo" style={{ height: '38px', width: 'auto', objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
          <span className="nav-brand">Starks <b>IT</b></span>
        </Link>
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link 
                href={link.path} 
                className={pathname === link.path ? 'active' : ''}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/contact" className="nav-cta-btn" style={{ textDecoration: 'none' }}>
          <span>Start a Project</span>
        </Link>
        <button 
          className={`hamburger ${mobileNavOpen ? 'open' : ''}`} 
          id="hamburger" 
          aria-label="Open menu"
          onClick={toggleMobileNav}
        >
          <span></span><span></span><span></span>
        </button>
      </nav>

      {/* MOBILE NAV OVERLAY */}
      <div 
        className={`mobile-nav-overlay ${mobileNavOpen ? 'open' : ''}`} 
        onClick={closeMobileNav}
      ></div>

      {/* MOBILE DRAWER */}
      <div className={`mobile-nav ${mobileNavOpen ? 'open' : ''}`}>
        <ul>
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link 
                href={link.path}
                className={pathname === link.path ? 'active' : ''}
                onClick={closeMobileNav}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/contact" className="mobile-nav-cta" onClick={closeMobileNav} style={{ textDecoration: 'none', textAlign: 'center' }}>
          Start a Project
        </Link>
      </div>
    </>
  );
}
