export const metadata = {
  title: 'TransIT · Intelligent Fleet Management & Telemetry System | Starks IT Consulting',
  description: 'TransIT by Starks IT Consulting: Intelligent Fleet Management & Telemetry System. Real-time GPS tracking, alert triggers, geofencing, distance-based billing, and maintenance tracking across Nigeria.',
  keywords: [
    'fleet tracking Nigeria',
    'vehicle telematics Lagos',
    'logistics management software Nigeria',
    'GPS fleet tracker Nigeria',
    'transport telemetry Africa',
    'fleet fuel monitoring Nigeria',
    'driver behavior telematics',
    'TransIT fleet app'
  ],
  alternates: {
    canonical: 'https://starks.com.ng/transit',
  },
  openGraph: {
    title: 'TransIT Fleet Management & Telemetry System | Starks IT Consulting',
    description: 'Every vehicle, tracked live. Unified fleet intelligence for personal car owners, logistics firms, and transit operations built for African roads.',
    url: 'https://starks.com.ng/transit',
    siteName: 'Starks IT Consulting',
    locale: 'en_NG',
    type: 'website',
    images: [
      {
        url: '/transit_hero_dashboard.png',
        width: 1200,
        height: 630,
        alt: 'TransIT Fleet Management Telemetry Dashboard Console',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TransIT · Intelligent Fleet Management & Telemetry System',
    description: 'Live GPS pings, geofencing, fuel monitoring, and distance-based billing for fleets in Nigeria.',
    images: ['/transit_hero_dashboard.png'],
  },
};

export default function TransitLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        name: 'TransIT Fleet Management System',
        operatingSystem: 'Web, iOS, Android',
        applicationCategory: 'BusinessApplication',
        offers: {
          '@type': 'Offer',
          price: 'Contact for Enterprise Quote',
          priceCurrency: 'NGN',
        },
        description: 'Intelligent fleet management and telemetry platform providing live GPS vehicle tracking, geofence compliance, fuel sensor diagnostics, and distance billing.',
        provider: {
          '@type': 'Organization',
          name: 'Starks IT Consulting',
          url: 'https://starks.com.ng'
        },
        url: 'https://starks.com.ng/transit'
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://starks.com.ng'
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'TransIT Fleet System',
            item: 'https://starks.com.ng/transit'
          }
        ]
      }
    ]
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
