export const metadata = {
  title: 'Cookies & Tracking Technologies Policy | Starks IT Consulting',
  description: 'Understand how Starks IT Consulting Ltd uses cookies, local storage, and privacy-preserving tracking technologies on our website and learning workspace.',
  keywords: [
    'cookie policy Nigeria',
    'cookies Starks IT Consulting',
    'website tracking privacy Nigeria',
    'cookie consent Lagos',
    'NDPR cookie compliance',
    'local storage developer tools'
  ],
  alternates: {
    canonical: 'https://starks.com.ng/cookies',
  },
  openGraph: {
    title: 'Cookies & Tracking Technologies Policy | Starks IT Consulting',
    description: 'Learn how we utilize strictly necessary, preference, and analytics cookies to safeguard and optimize your browsing experience.',
    url: 'https://starks.com.ng/cookies',
    siteName: 'Starks IT Consulting',
    locale: 'en_NG',
    type: 'website',
    images: [
      {
        url: '/cookies-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Starks IT Consulting Cookies & Tracking Policy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cookies & Tracking Policy | Starks IT Consulting',
    description: 'Our transparent guide to cookies, local storage, and user privacy controls on starks.com.ng.',
    images: ['/cookies-hero.jpg'],
  },
};

export default function CookiesLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://starks.com.ng/cookies',
        url: 'https://starks.com.ng/cookies',
        name: 'Cookies & Tracking Technologies Policy',
        description: 'Comprehensive policy on cookies, local storage, and user privacy controls for Starks IT Consulting.',
        publisher: {
          '@type': 'Organization',
          name: 'Starks IT Consulting',
          url: 'https://starks.com.ng',
          logo: 'https://starks.com.ng/logo.png',
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://starks.com.ng',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Cookies Policy',
            item: 'https://starks.com.ng/cookies',
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}

