import './globals.css';
import ClientLayout from './ClientLayout';
import { ThemeProvider } from '../context/ThemeContext';

export const metadata = {
  metadataBase: new URL('https://starks.com.ng'),
  title: {
    default: 'IT Consulting in Lagos | Starks IT – Enterprise Technology Solutions',
    template: '%s | Starks IT – IT Consulting in Lagos'
  },
  description: 'Starks IT is a premier IT consulting firm in Lagos, Nigeria. We provide enterprise IT consulting, cloud engineering, cybersecurity, managed IT services, TransIT fleet telematics, and software engineering practice labs across Africa.',
  keywords: [
    'IT Consulting',
    'Starks IT',
    'IT Consulting in Lagos',
    'IT consulting Nigeria',
    'IT consulting firm in Lagos',
    'Starks IT Consulting',
    'enterprise IT consulting Lagos',
    'IT services Lagos',
    'managed IT services Lagos',
    'cloud consulting Nigeria',
    'cybersecurity firm Lagos',
    'software development Lagos Nigeria',
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
    title: 'IT Consulting in Lagos | Starks IT – Enterprise Technology Solutions',
    description: 'Premier enterprise IT consulting firm in Lagos, Nigeria providing cloud engineering, cybersecurity, managed IT, and custom software across Africa.',
    url: 'https://starks.com.ng',
    siteName: 'Starks IT Consulting',
    locale: 'en_NG',
    type: 'website',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Starks IT Consulting – IT Consulting in Lagos, Nigeria',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IT Consulting in Lagos | Starks IT',
    description: 'Premier enterprise IT consulting, cloud architecture, and cybersecurity in Lagos, Nigeria.',
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
                  '@type': ['ITConsultant', 'ProfessionalService', 'Organization', 'LocalBusiness'],
                  '@id': 'https://starks.com.ng/#organization',
                  name: 'Starks IT Consulting',
                  alternateName: ['Starks IT', 'Starks IT Lagos', 'Starks Technology Consulting'],
                  url: 'https://starks.com.ng',
                  logo: 'https://starks.com.ng/logo.png',
                  image: 'https://starks.com.ng/logo.png',
                  description: 'Premier enterprise IT consulting firm in Lagos, Nigeria. Specializing in IT consulting, cloud engineering, cybersecurity, managed IT services, and software development.',
                  foundingDate: '2017',
                  priceRange: '₦₦₦₦',
                  telephone: '+234-816-561-8476',
                  email: 'info@starks.com.ng',
                  address: {
                    '@type': 'PostalAddress',
                    streetAddress: '16 Shagamu Avenue',
                    addressLocality: 'Ikeja',
                    addressRegion: 'Lagos',
                    postalCode: '100271',
                    addressCountry: 'NG'
                  },
                  geo: {
                    '@type': 'GeoCoordinates',
                    latitude: 6.5965,
                    longitude: 3.3515
                  },
                  areaServed: [
                    { '@type': 'City', name: 'Lagos' },
                    { '@type': 'Country', name: 'Nigeria' },
                    { '@type': 'City', name: 'Abuja' },
                    { '@type': 'Continent', name: 'Africa' }
                  ],
                  openingHoursSpecification: [
                    {
                      '@type': 'OpeningHoursSpecification',
                      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                      opens: '08:00',
                      closes: '18:00'
                    }
                  ],
                  knowsAbout: [
                    'IT Consulting',
                    'IT Consulting in Lagos',
                    'Enterprise Cloud Architecture',
                    'Cybersecurity Operations',
                    'Managed IT Services',
                    'Custom Software Development',
                    'TransIT Fleet Systems',
                    'ISO 27001 Information Security',
                    'NDPR & NDPA Compliance'
                  ],
                  hasOfferCatalog: {
                    '@type': 'OfferCatalog',
                    name: 'IT Consulting Services in Lagos',
                    itemListElement: [
                      {
                        '@type': 'Offer',
                        itemOffered: {
                          '@type': 'Service',
                          name: 'IT Consulting & Technology Strategy',
                          description: 'Strategic IT consulting, digital transformation roadmaps, and enterprise architecture in Lagos.'
                        }
                      },
                      {
                        '@type': 'Offer',
                        itemOffered: {
                          '@type': 'Service',
                          name: 'Managed IT Services',
                          description: '24/7 proactive IT support, monitoring, and helpdesk operations for Lagos businesses.'
                        }
                      },
                      {
                        '@type': 'Offer',
                        itemOffered: {
                          '@type': 'Service',
                          name: 'Cloud & DevOps Architecture',
                          description: 'AWS, Azure, and Google Cloud infrastructure design, migration, and FinOps optimization.'
                        }
                      },
                      {
                        '@type': 'Offer',
                        itemOffered: {
                          '@type': 'Service',
                          name: 'Cybersecurity & SOC Services',
                          description: 'Vulnerability assessments, penetration testing, NDPR compliance, and 24/7 SOC monitoring.'
                        }
                      },
                      {
                        '@type': 'Offer',
                        itemOffered: {
                          '@type': 'Service',
                          name: 'Custom Software Development',
                          description: 'Bespoke enterprise web platforms, mobile applications, and mission-critical APIs.'
                        }
                      }
                    ]
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
                  name: 'Starks IT – IT Consulting in Lagos',
                  alternateName: 'Starks IT Consulting',
                  description: 'Premier enterprise IT consulting company in Lagos, Nigeria.',
                  publisher: {
                    '@id': 'https://starks.com.ng/#organization'
                  },
                  potentialAction: {
                    '@type': 'SearchAction',
                    target: 'https://starks.com.ng/blog?q={search_term_string}',
                    'query-input': 'required name=search_term_string'
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
