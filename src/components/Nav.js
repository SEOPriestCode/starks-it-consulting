'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from '../context/ThemeContext';

function WhatsAppIcon({ size = 18, color = 'currentColor' }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill={color} 
      xmlns="http://www.w3.org/2000/svg"
      style={{ flexShrink: 0 }}
      aria-hidden="true"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d="M12 2C6.477 2 2 6.477 2 12C2 13.82 2.49 15.53 3.34 17.01L2.05 21.75C1.98 22.01 2.05 22.28 2.24 22.47C2.39 22.62 2.6 22.7 2.81 22.7C2.9 22.7 2.99 22.68 3.08 22.64L7.54 21.05C8.94 21.84 10.45 22.28 12 22.28C17.52 22.28 22 17.8 22 12.28C22 6.76 17.52 2 12 2ZM17.38 15.65C17.16 16.27 16.3 16.8 15.64 16.94C15.19 17.03 14.61 17.1 12.63 16.28C10.1 15.23 8.46 12.66 8.33 12.49C8.21 12.32 7.33 11.15 7.33 9.94C7.33 8.73 7.95 8.14 8.19 7.89C8.39 7.69 8.68 7.6 8.96 7.6C9.05 7.6 9.14 7.6 9.22 7.61C9.45 7.62 9.57 7.63 9.72 7.99C9.91 8.45 10.37 9.58 10.43 9.7C10.49 9.82 10.53 9.98 10.45 10.14C10.38 10.3 10.32 10.38 10.2 10.52C10.08 10.66 9.97 10.76 9.85 10.91C9.72 11.06 9.59 11.22 9.74 11.48C9.89 11.74 10.41 12.59 11.18 13.27C12.18 14.16 13 14.44 13.28 14.56C13.51 14.66 13.73 14.63 13.89 14.45C14.09 14.22 14.34 13.86 14.59 13.51C14.77 13.26 15 13.29 15.26 13.39C15.52 13.48 16.91 14.17 17.19 14.31C17.47 14.45 17.66 14.52 17.73 14.64C17.8 14.76 17.8 15.35 17.58 15.97L17.38 15.65Z" 
      />
    </svg>
  );
}

export default function Nav() {
  const [isSolid, setIsSolid] = useState(false);
  const [dangleDismissed, setDangleDismissed] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  // Close dropdown on click outside or Escape key
  useEffect(() => {
    if (!servicesDropdownOpen) return;

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServicesDropdownOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setServicesDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [servicesDropdownOpen]);

  // Close dropdown on route change without triggering useEffect cascading render error
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setServicesDropdownOpen(false);
  }

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
    { 
      name: 'Services', 
      path: '/services',
      submenu: [
        { name: 'Managed IT Services', path: '/services/managed-it-services' },
        { name: 'IT Support Services', path: '/services/it-support-services' },
        { name: 'Cloud Solutions', path: '/services/cloud-solutions' },
        { name: 'Cybersecurity Services', path: '/services/cybersecurity-services' },
        { name: 'Website Development', path: '/services/website-development' },
        { name: 'Software Development', path: '/services/software-development' },
        { name: 'Network Infrastructure', path: '/services/network-infrastructure' },
        { name: 'Microsoft 365 Solutions', path: '/services/microsoft-365-solutions' },
        { name: 'Server Deployment', path: '/services/server-deployment' },
        { name: 'CCTV & Access Control', path: '/services/cctv-access-control' },
        { name: 'Data Analytics', path: '/services/data-analytics' },
        { name: 'IT Strategy', path: '/services/it-strategy' },
      ]
    },
    { name: 'TransIT (Fleet)', path: '/transit' },
    { name: 'Training', path: '/training' },
    { name: 'About', path: '/about' },
    { name: 'Case Studies', path: '/cases' },
    { name: 'Team', path: '/team' },
    { name: 'Insights', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <nav id="nav" className={isSolid ? 'solid' : ''}>
        <Link href="/" className="nav-logo" onClick={closeMobileNav} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            background: 'var(--logo-bg)',
            border: '1px solid var(--card-border)',
            display: 'grid',
            placeItems: 'center',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)'
          }}>
            <img 
              src="/logo.png" 
              alt="Starks IT Consulting Logo" 
              style={{ 
                height: '32px', 
                width: 'auto', 
                objectFit: 'contain', 
                filter: theme === 'dark' ? 'brightness(0) invert(1)' : 'none' 
              }} 
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
            <span className="nav-brand" style={{ fontSize: '0.95rem', fontWeight: '600', letterSpacing: '-0.01em' }}>Starks IT</span>
            <span className="nav-brand" style={{ fontSize: '0.75rem', fontWeight: '400', letterSpacing: '0.05em', opacity: 0.9 }}><b>Consulting</b></span>
          </div>
        </Link>
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.path} className="nav-item-dropdown" style={{ position: 'relative' }}>
              {link.submenu ? (
                <div
                  ref={dropdownRef}
                  className="nav-dropdown-wrapper"
                  style={{ display: 'inline-block' }}
                >
                  <button 
                    type="button"
                    id="services-dropdown-btn"
                    aria-expanded={servicesDropdownOpen}
                    aria-haspopup="true"
                    aria-controls="services-dropdown-menu"
                    className={`nav-dropdown-btn ${servicesDropdownOpen ? 'open' : ''} ${pathname?.startsWith('/services') ? 'active' : ''}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setServicesDropdownOpen((prev) => !prev);
                    }}
                  >
                    <span>{link.name}</span>
                    <svg className="nav-dropdown-chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </button>
                  {servicesDropdownOpen && (
                    <div 
                      id="services-dropdown-menu" 
                      className="nav-dropdown-menu"
                      role="menu"
                      aria-labelledby="services-dropdown-btn"
                    >
                      <div className="nav-dropdown-header">
                        <span className="nd-title">Our Capabilities</span>
                        <Link 
                          href="/services" 
                          className="nd-view-all" 
                          onClick={() => setServicesDropdownOpen(false)}
                        >
                          <span>All Services</span>
                          <span>→</span>
                        </Link>
                      </div>
                      <div className="nav-dropdown-grid">
                        {link.submenu.map((sublink) => (
                          <Link
                            key={sublink.path}
                            href={sublink.path}
                            role="menuitem"
                            className={`nav-dropdown-item ${pathname === sublink.path ? 'active' : ''}`}
                            onClick={() => setServicesDropdownOpen(false)}
                          >
                            <div className="nd-item-left">
                              <span className="nd-dot"></span>
                              <span className="nd-name">{sublink.name}</span>
                            </div>
                            <span className="nd-arrow-indicator">›</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link 
                  href={link.path} 
                  className={pathname === link.path ? 'active' : ''}
                >
                  {link.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
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
              {/* FLOATING & DANGLING HOLIDAY SPOT SUSPENDED FROM NAVBAR (REMAINS ON SCROLL, NO MODAL) */}
        {!dangleDismissed && !mobileNavOpen && (
          <div className="nav-dangle-wrapper">
            <div className="ndw-hanger">
              <span className="ndw-ring"></span>
              <span className="ndw-cord"></span>
            </div>
            <a
              href="https://wa.me/2348084026140?text=Hello%20Starks%20IT%2C%20Christmas%20came%20early!%20I%20would%20like%20to%20get%20a%20huge%20discount%20from%20every%20of%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="nav-dangle-tag"
              title="Christmas Came Early! Chat on WhatsApp (+234 808 402 6140)"
            >
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setDangleDismissed(true);
                }}
                className="ndw-close-btn"
                aria-label="Dismiss holiday banner"
              >
                ×
              </button>
              <div className="ndw-tag-body">
                <div className="ndw-top-line">
                  <span className="ndw-tree">🎄</span>
                  <span className="ndw-tag-badge">CHRISTMAS CAME EARLY</span>
                </div>
                <div className="ndw-mid-line">
                  Get <strong className="ndw-gold-text">Huge Discounts</strong> From Every Of Our Services
                </div>
                <div className="ndw-cta-row">
                  <div className="ndw-wa-pill">
                    <WhatsAppIcon size={15} color="#ffffff" />
                    <span className="ndw-phone-text">Send WhatsApp: +234 808 402 6140</span>
                    <span className="ndw-arrow">→</span>
                  </div>
                </div>
              </div>
            </a>
          </div>
        )}
      </nav>

      {/* MOBILE NAV OVERLAY */}
      <div 
        className={`mobile-nav-overlay ${mobileNavOpen ? 'open' : ''}`} 
        onClick={closeMobileNav}
      ></div>

      {/* MOBILE DRAWER */}
      <div className={`mobile-nav ${mobileNavOpen ? 'open' : ''}`}>
        <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--ink3)', marginBottom: '1rem' }}>
          <Link href="/" onClick={closeMobileNav} style={{ display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none' }}>
            <div style={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              background: 'var(--logo-bg)',
              border: '1px solid var(--card-border)',
              display: 'grid',
              placeItems: 'center',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)'
            }}>
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
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
              <span className="nav-brand" style={{ fontSize: '1.1rem', fontWeight: '600', letterSpacing: '-0.01em', color: 'var(--white)' }}>Starks IT</span>
              <span className="nav-brand" style={{ fontSize: '0.85rem', fontWeight: '400', letterSpacing: '0.05em', opacity: 0.9, color: 'var(--gold)' }}><b>Consulting</b></span>
            </div>
          </Link>
        </div>
        <ul>
          {navLinks.map((link) => (
            <li key={link.path}>
              {link.submenu ? (
                <>
                  <button
                    type="button"
                    onClick={() => setServicesDropdownOpen((prev) => !prev)}
                    className={`mobile-dropdown-btn ${servicesDropdownOpen ? 'open' : ''} ${pathname?.startsWith('/services') ? 'active' : ''}`}
                    aria-expanded={servicesDropdownOpen}
                  >
                    <span>{link.name}</span>
                    <span className="mobile-chevron">{servicesDropdownOpen ? '▾' : '▸'}</span>
                  </button>
                  {servicesDropdownOpen && (
                    <ul className="mobile-submenu">
                      {link.submenu.map((sublink) => (
                        <li key={sublink.path}>
                          <Link
                            href={sublink.path}
                            onClick={() => { setServicesDropdownOpen(false); closeMobileNav(); }}
                            className={`mobile-sublink ${pathname === sublink.path ? 'active' : ''}`}
                          >
                            {sublink.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link 
                  href={link.path}
                  className={pathname === link.path ? 'active' : ''}
                  onClick={closeMobileNav}
                >
                  {link.name}
                </Link>
              )}
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
