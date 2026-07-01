'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from '../context/ThemeContext';

export default function Nav() {
  const [isSolid, setIsSolid] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
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
            background: theme === 'dark' ? 'var(--ink2)' : 'var(--white)',
            display: 'grid',
            placeItems: 'center',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
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
            <li key={link.path} style={{ position: 'relative' }}>
              {link.submenu ? (
                <div
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                  style={{ display: 'inline-block' }}
                >
                  <button>
                    {link.name}
                  </button>
                  {servicesDropdownOpen && (
                    <ul style={{
                      position: 'absolute',
                      top: '100%',
                      left: 0,
                      background: 'var(--ink)',
                      border: '1px solid var(--gold)',
                      borderRadius: '8px',
                      padding: '1rem',
                      minWidth: '250px',
                      zIndex: 1000,
                      listStyle: 'none',
                      margin: 0
                    }}>
                      {link.submenu.map((sublink) => (
                        <li key={sublink.path} style={{ marginBottom: '0.5rem' }}>
                          <Link
                            href={sublink.path}
                            style={{
                              color: 'var(--text)',
                              textDecoration: 'none',
                              display: 'block',
                              padding: '0.5rem',
                              borderRadius: '4px',
                              transition: 'all 0.3s'
                            }}
                            onMouseEnter={(e) => e.target.style.background = 'var(--ink2)'}
                            onMouseLeave={(e) => e.target.style.background = 'transparent'}
                          >
                            {sublink.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
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
        <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--ink3)', marginBottom: '1rem' }}>
          <Link href="/" onClick={closeMobileNav} style={{ display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none' }}>
            <div style={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              background: 'var(--ink2)',
              display: 'grid',
              placeItems: 'center',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
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
                    onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      color: 'var(--white)',
                      cursor: 'pointer',
                      fontSize: '1.1rem',
                      fontFamily: 'inherit',
                      padding: '0.5rem 0',
                      width: '100%',
                      textAlign: 'left'
                    }}
                  >
                    {link.name} {servicesDropdownOpen ? '▼' : '▶'}
                  </button>
                  {servicesDropdownOpen && (
                    <ul style={{
                      listStyle: 'none',
                      padding: '0 0 0 1rem',
                      margin: '0.5rem 0'
                    }}>
                      {link.submenu.map((sublink) => (
                        <li key={sublink.path} style={{ marginBottom: '0.5rem' }}>
                          <Link
                            href={sublink.path}
                            onClick={() => { setServicesDropdownOpen(false); closeMobileNav(); }}
                            style={{
                              color: 'var(--text)',
                              textDecoration: 'none',
                              display: 'block',
                              padding: '0.5rem',
                              fontSize: '1rem'
                            }}
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
