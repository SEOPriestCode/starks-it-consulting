import './globals.css';
import ClientLayout from './ClientLayout';
import { ThemeProvider } from '../context/ThemeContext';

export const metadata = {
  metadataBase: new URL('https://starks.com.ng'),
  title: {
    default: 'IT Consulting Nigeria | Enterprise IT Services & Training | Starks IT Consulting',
    template: '%s | Starks IT Consulting'
  },
  description: 'Leading IT consulting company in Nigeria providing enterprise IT services, cloud solutions, cybersecurity, software development, TransIT fleet telematics, and interactive developer training labs across Africa.',
  keywords: [
    'IT consulting Nigeria',
    'enterprise IT solutions Lagos',
    'cloud consulting Nigeria',
    'cybersecurity services Abuja',
    'software development Nigeria',
    'managed IT services',
    'TransIT fleet management',
    'software engineering training Nigeria',
    'frontend practice lab Lagos',
    'digital transformation Africa'
  ],
  authors: [{ name: 'Starks IT Consulting Ltd.', url: 'https://starks.com.ng' }],
  creator: 'Starks IT Consulting Ltd.',
  publisher: 'Starks IT Consulting Ltd.',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Starks IT Consulting | Enterprise IT Services, Fleet Systems & Training',
    description: 'Enterprise IT solutions, cloud architecture, cybersecurity, fleet telematics, and interactive software development training in Nigeria.',
    url: 'https://starks.com.ng',
    siteName: 'Starks IT Consulting',
    locale: 'en_NG',
    type: 'website',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Starks IT Consulting Logo & Brand',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Starks IT Consulting | Enterprise Technology & Engineering Academy',
    description: 'Leading IT consulting and hands-on developer training lab in Lagos, Nigeria.',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  title: 'IT Consulting Nigeria | Enterprise IT Services | Starks IT Consulting',
  description: 'Leading IT consulting company in Nigeria providing enterprise IT services, cloud solutions, cybersecurity, software development, and managed IT services for businesses in Lagos, Abuja, and across Africa.',
  keywords: 'IT consulting Nigeria, IT services Lagos, enterprise IT solutions, cloud consulting Nigeria, cybersecurity services, software development Nigeria, managed IT services Abuja, IT infrastructure, digital transformation',
  icons: {
    icon: [
      { url: '/logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/logo.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Syne:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('starks_theme');
                  if (saved === 'light') {
                    document.documentElement.classList.add('light');
                  } else {
                    document.documentElement.classList.remove('light');
                  }
                } catch (e) {}
              })();
            `
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'ITConsultant',
                  '@id': 'https://starks.com.ng/#organization',
                  name: 'Starks IT Consulting',
                  alternateName: 'Starks IT',
                  url: 'https://starks.com.ng',
                  logo: 'https://starks.com.ng/logo.png',
                  description: 'Enterprise IT consulting, cloud engineering, cybersecurity, TransIT fleet telematics, and software engineering practice labs based in Lagos, Nigeria.',
                  foundingDate: '2017',
                  address: {
                    '@type': 'PostalAddress',
                    streetAddress: '16 Shagamu Avenue',
                    addressLocality: 'Ikeja',
                    addressRegion: 'Lagos',
                    addressCountry: 'NG'
                  },
                  contactPoint: {
                    '@type': 'ContactPoint',
                    telephone: '+234-816-561-8476',
                    contactType: 'customer service',
                    email: 'info@starks.com.ng',
                    areaServed: ['NG', 'GH', 'KE', 'ZA', 'GB', 'US']
                  },
                  sameAs: [
                    'https://www.linkedin.com/company/starks-it-consulting',
                    'https://x.com/StarksIT'
                  ]
                },
                {
                  '@type': 'WebSite',
                  '@id': 'https://starks.com.ng/#website',
                  url: 'https://starks.com.ng',
                  name: 'Starks IT Consulting',
                  publisher: {
                    '@id': 'https://starks.com.ng/#organization'
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <ThemeProvider>
          <ClientLayout>
            {children}
          </ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
