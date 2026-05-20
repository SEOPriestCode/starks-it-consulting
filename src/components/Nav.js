'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from '../context/ThemeContext';

export default function Nav() {
  const [isSolid, setIsSolid] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

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
          <img 
            src="/logo.png" 
            alt="Starks IT Consulting Logo" 
            style={{ 
              height: '38px', 
              width: 'auto', 
              objectFit: 'contain', 
              filter: theme === 'dark' ? 'brightness(0) invert(1)' : 'none' 
            }} 
          />
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
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button 
            onClick={toggleTheme}
            style={{
              background: 'transparent',
              border: '1px solid var(--gold)',
              color: 'var(--gold)',
              width: '40px',
              height: '40px',
              borderRadius: '8px',
              cursor: 'pointer',
              display: 'grid',
              placeItems: 'center',
              transition: 'all 0.3s'
            }}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: '18px', height: '18px' }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: '18px', height: '18px' }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
              </svg>
            )}
          </button>
          <Link href="/contact" className="nav-cta-btn" style={{ textDecoration: 'none' }}>
            <span>Start a Project</span>
          </Link>
        </div>
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
        <div style={{ marginTop: '2rem' }}>
          <button 
            onClick={() => { toggleTheme(); closeMobileNav(); }}
            style={{
              background: 'var(--ink3)',
              border: '1px solid var(--gold)',
              color: 'var(--gold)',
              padding: '12px',
              borderRadius: '8px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              fontSize: '0.9rem',
              fontWeight: '600',
              textTransform: 'uppercase',
              width: '100%',
              marginBottom: '1rem'
            }}
          >
            {theme === 'dark' ? 'Day Mode ☀️' : 'Night Mode 🌙'}
          </button>
          <Link href="/contact" className="mobile-nav-cta" onClick={closeMobileNav} style={{ textDecoration: 'none', textAlign: 'center' }}>
            Start a Project
          </Link>
        </div>
      </div>
    </>
  );
}
