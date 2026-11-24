'use client';

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
    { name: 'TransIT (Fleet System)', path: '/transit' },
    { name: 'Training & Practice Lab', path: '/training' },
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
    { name: 'NDPR Statement', path: '/ndpr' },
    { name: 'Cookies', path: '/cookies' },
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
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms & Conditions', path: '/terms' },
    { name: 'NDPR Statement', path: '/ndpr' },
    { name: 'Cookies', path: '/cookies' },
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
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms & Conditions', path: '/terms' },
    { name: 'NDPR Statement', path: '/ndpr' },
    { name: 'Cookies', path: '/cookies' },
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
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms & Conditions', path: '/terms' },
    { name: 'NDPR Statement', path: '/ndpr' },
    { name: 'Cookies', path: '/cookies' },
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
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms & Conditions', path: '/terms' },
    { name: 'NDPR Statement', path: '/ndpr' },
    { name: 'Cookies', path: '/cookies' },
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
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms & Conditions', path: '/terms' },
    { name: 'NDPR Statement', path: '/ndpr' },
    { name: 'Cookies', path: '/cookies' },
  ];
  }

  return (
    <footer style={{ marginTop: pathname === '/blog' ? '80px' : undefined }}>
                  {/* CHRISTMAS CAME EARLY GLOBAL FOOTER SPOT */}
      <div className="footer-xmas-spot">
        <div className="fxs-glow"></div>
        <div className="fxs-content">
          <div className="fxs-tag">
            <span className="fxs-tree">🎁</span>
            <span>CHRISTMAS CAME EARLY · EXCLUSIVE HOLIDAY DISCOUNT</span>
          </div>
          <h3 className="fxs-title">
            Get <span className="fxs-title-gold">Huge Discounts</span> From Every Of Our Services
          </h3>
          <p className="fxs-desc">
            Celebrate the season with exclusive enterprise savings across all Starks IT capabilities — Cloud Infrastructure, Cybersecurity &amp; Compliance, 24/7 Managed IT, Bespoke Software Development, and Strategic Advisory.
          </p>
          <div className="fxs-services-row">
            <span className="fxs-chip">☁️ Cloud &amp; DevOps</span>
            <span className="fxs-chip">🛡️ Cybersecurity</span>
            <span className="fxs-chip">💻 Software Engineering</span>
            <span className="fxs-chip">🖥️ Managed IT</span>
            <span className="fxs-chip">🎯 IT Strategy</span>
          </div>
        </div>
        <div className="fxs-action">
          <a
            href="https://wa.me/2348084026140?text=Hello%20Starks%20IT%2C%20Christmas%20came%20early!%20I%20would%20like%20to%20get%20a%20huge%20discount%20from%20every%20of%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="fxs-whatsapp-btn"
          >
            <WhatsAppIcon size={22} color="#ffffff" />
            <div className="fxs-btn-col">
              <span className="fxs-btn-label">Send WhatsApp Message</span>
              <span className="fxs-btn-num">+234 808 402 6140</span>
            </div>
            <span className="fxs-arrow">→</span>
          </a>
          <div className="fxs-reply-status">
            <span className="fxs-pulse-dot"></span>
            <span>Direct WhatsApp Line · Instant Holiday Quote</span>
          </div>
        </div>
      </div>

      <div className="foot-grid">
        <div>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem', textDecoration: 'none' }}>
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
