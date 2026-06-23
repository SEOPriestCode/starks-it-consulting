'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from '../context/ThemeContext';

export default function Footer() {
  const pathname = usePathname();
  const { theme } = useTheme();

  if (pathname === '/contact') {
    return null; // The original Contact page did not have a footer
  }

  // Define default/home values
  let certs = ['ISO 27001', 'NITDA Reg.'];
  let col3Title = 'Contact';
  let tagline = 'Enterprise technology consulting built for the African market and trusted globally. About a decade of delivery, integrity, and innovation.';

  let col1Links = [
    { name: 'Custom Software', path: '/services' },
    { name: 'Cloud & DevOps', path: '/services' },
    { name: 'Cybersecurity', path: '/services' },
    { name: 'Data & Analytics', path: '/services' },
    { name: 'IT Strategy', path: '/services' },
    { name: 'Managed IT', path: '/services' },
  ];

  let col2Links = [
    { name: 'About Us', path: '/about' },
    { name: 'Leadership', path: '/team' },
    { name: 'Case Studies', path: '/cases' },
    { name: 'Careers', path: '/contact' },
    { name: 'Insights', path: '/blog' },
  ];

  let col3Links = [
    { name: '+234 (0)816 561 8476', href: 'tel:+2348165618476' },
    { name: 'info@starks.com.ng', href: 'mailto:info@starks.com.ng' },
    { name: '16 Shagamu Avenue, Ikeja', href: 'https://maps.google.com/?q=Ikeja,Lagos,Nigeria' },
    { name: 'Lagos, Nigeria', href: 'https://maps.google.com/?q=Lagos,Nigeria' },
  ];

  let copyText = '© 2017–2025 Starks IT Consulting Ltd. RC 8349226.';
  let legalLinks = [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms & Conditions', path: '/terms' },
    { name: 'NDPR Statement', path: '#ndpr' },
    { name: 'Cookies', path: '#cookies' },
  ];

  // Adjust values based on the page
  if (pathname === '/services') {
    certs = ['ISO 27001', 'NITDA Reg.'];
    tagline = 'Enterprise technology consulting built for the African market and trusted globally.';
    col1Links = [
      { name: 'Custom Software', path: '/services' },
      { name: 'Cloud & DevOps', path: '/services' },
      { name: 'Cybersecurity', path: '/services' },
      { name: 'Data & Analytics', path: '/services' }
    ];
    col2Links = [
      { name: 'About Us', path: '/about' },
      { name: 'Team', path: '/team' },
      { name: 'Case Studies', path: '/cases' },
      { name: 'Contact', path: '/contact' }
    ];
    col3Title = 'Get Started';
    col3Links = [
      { name: 'Book a Consultation', path: '/contact' },
      { name: '+234 (0)816 561 8476', href: 'tel:+2348165618476' },
      { name: 'info@starks.com.ng', href: 'mailto:info@starks.com.ng' }
    ];
    copyText = '© 2017–2026 Starks IT Consulting Ltd.';
    legalLinks = [
      { name: 'Privacy', path: '/privacy' },
      { name: 'Terms', path: '/terms' },
      { name: 'NDPR', path: '#ndpr' }
    ];
  } else if (pathname === '/about') {
    certs = ['ISO 27001', 'NITDA Reg.'];
    tagline = 'Enterprise technology consulting built for the African market and trusted globally.';
    col1Links = [
      { name: 'All Services', path: '/services' },
      { name: 'Custom Software', path: '/services' },
      { name: 'Cloud & DevOps', path: '/services' }
    ];
    col2Links = [
      { name: 'Our Team', path: '/team' },
      { name: 'Case Studies', path: '/cases' },
      { name: 'Careers', path: '/contact' }
    ];
    col3Links = [
      { name: 'Get in Touch', path: '/contact' },
      { name: 'info@starks.com.ng', href: 'mailto:info@starks.com.ng' },
      { name: '+234 (0)816 561 8476', href: 'tel:+2348165618476' }
    ];
    copyText = '© 2017–2026 Starks IT Consulting Ltd.';
    legalLinks = [
      { name: 'Privacy', path: '/privacy' },
      { name: 'Terms', path: '/terms' },
      { name: 'NDPR', path: '#ndpr' }
    ];
  } else if (pathname === '/cases') {
    certs = ['ISO 27001', 'AWS Partner'];
    tagline = 'Enterprise technology consulting built for the African market.';
    col1Links = [
      { name: 'All Services', path: '/services' }
    ];
    col2Links = [
      { name: 'About Us', path: '/about' },
      { name: 'Team', path: '/team' }
    ];
    col3Links = [
      { name: 'Get in Touch', path: '/contact' }
    ];
    copyText = '© 2017–2026 Starks IT Consulting Ltd.';
    legalLinks = [
      { name: 'Privacy', path: '/privacy' },
      { name: 'Terms', path: '#terms' }
    ];
  } else if (pathname === '/team') {
    certs = [];
    tagline = 'Enterprise technology consulting built for the African market.';
    col1Links = [
      { name: 'All Services', path: '/services' }
    ];
    col2Links = [
      { name: 'About Us', path: '/about' },
      { name: 'Case Studies', path: '/cases' }
    ];
    col3Links = [
      { name: 'Get in Touch', path: '/contact' }
    ];
    copyText = '© 2017–2026 Starks IT Consulting Ltd.';
    legalLinks = [
      { name: 'Privacy', path: '/privacy' },
      { name: 'Terms', path: '#terms' }
    ];
  } else if (pathname === '/blog') {
    certs = ['ISO 27001', 'NITDA Reg.'];
    tagline = 'Enterprise technology consulting built for the African market and trusted globally.';
    col1Links = [
      { name: 'All Services', path: '/services' },
      { name: 'Custom Software', path: '/services' },
      { name: 'Cloud & DevOps', path: '/services' }
    ];
    col2Links = [
      { name: 'About Us', path: '/about' },
      { name: 'Team', path: '/team' },
      { name: 'Case Studies', path: '/cases' }
    ];
    col3Links = [
      { name: 'Get in Touch', path: '/contact' },
      { name: 'info@starks.com.ng', href: 'mailto:info@starks.com.ng' },
      { name: '+234 (0)816 561 8476', href: 'tel:+2348165618476' }
    ];
    copyText = '© 2017–2026 Starks IT Consulting Ltd.';
    legalLinks = [
      { name: 'Privacy', path: '/privacy' },
      { name: 'Terms', path: '/terms' },
      { name: 'NDPR', path: '#ndpr' }
    ];
  }

  return (
    <footer style={{ marginTop: pathname === '/blog' ? '80px' : undefined }}>
      <div className="foot-grid">
        <div>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem', textDecoration: 'none' }}>
            <div style={{
              width: '56px',
              height: '56px',
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
                  height: '38px', 
                  width: 'auto', 
                  objectFit: 'contain', 
                  filter: theme === 'dark' ? 'brightness(0) invert(1)' : 'none' 
                }} 
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
              <div className="foot-brand-name" style={{ margin: 0, fontSize: '1rem', fontWeight: '600', letterSpacing: '-0.01em' }}>Starks IT</div>
              <div className="foot-brand-name" style={{ margin: 0, fontSize: '0.8rem', fontWeight: '400', letterSpacing: '0.05em', opacity: 0.9 }}><b style={{ color: 'var(--gold)' }}>Consulting</b></div>
            </div>
          </Link>
          <p className="foot-tagline">{tagline}</p>
          {certs.length > 0 && (
            <div className="foot-certs">
              {certs.map(cert => (
                <span key={cert} className="fc">{cert}</span>
              ))}
            </div>
          )}
        </div>
        <div>
          <div className="foot-col-h">Services</div>
          <ul className="foot-links">
            {col1Links.map((link, i) => (
              <li key={i}>
                {link.path ? <Link href={link.path}>{link.name}</Link> : <a href={link.href}>{link.name}</a>}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="foot-col-h">Company</div>
          <ul className="foot-links">
            {col2Links.map((link, i) => (
              <li key={i}>
                {link.path ? <Link href={link.path}>{link.name}</Link> : <a href={link.href}>{link.name}</a>}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="foot-col-h">{col3Title}</div>
          <ul className="foot-links">
            {col3Links.map((link, i) => (
              <li key={i}>
                {link.path ? <Link href={link.path}>{link.name}</Link> : <a href={link.href} target={link.href.includes('maps.google') ? '_blank' : undefined} rel={link.href.includes('maps.google') ? 'noopener noreferrer' : undefined}>{link.name}</a>}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="foot-bottom">
        <span className="foot-copy">{copyText}</span>
        <div className="foot-legal">
          {legalLinks.map((link, i) => (
            <Link key={i} href={link.path}>{link.name}</Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
