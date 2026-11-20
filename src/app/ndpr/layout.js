export const metadata = {
  title: 'NDPR Statement & Data Governance | Starks IT Consulting',
  description: 'Official NDPR & NDPA 2023 compliance statement for Starks IT Consulting Ltd. Learn about our data protection principles, lawful basis, data subject rights, and ISO 27001 data governance.',
  keywords: [
    'NDPR compliance Nigeria',
    'Nigeria Data Protection Act 2023',
    'NDPA Starks IT Consulting',
    'NDPC data controller Lagos',
    'data subject rights Nigeria',
    'ISO 27001 data protection Lagos',
    'DPO contact Nigeria IT consulting'
  ],
  alternates: {
    canonical: 'https://starks.com.ng/ndpr',
  },
  openGraph: {
    title: 'NDPR Statement & Data Governance | Starks IT Consulting',
    description: 'Our commitment to data sovereignty, Nigerian Data Protection Act (NDPA 2023) standards, and enterprise ISO 27001 compliance.',
    url: 'https://starks.com.ng/ndpr',
    siteName: 'Starks IT Consulting',
    locale: 'en_NG',
    type: 'website',
    images: [
      {
        url: '/ndpr-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Starks IT Consulting NDPR Compliance & Data Governance',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NDPR Compliance & Data Governance | Starks IT Consulting',
    description: 'Learn how Starks IT Consulting adheres to NDPA 2023, NDPC regulations, and enterprise data privacy standards.',
    images: ['/ndpr-hero.jpg'],
  },
};

export default function NdprLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://starks.com.ng/ndpr',
        url: 'https://starks.com.ng/ndpr',
        name: 'NDPR Statement & Data Protection Compliance',
        description: 'Official NDPR and NDPA 2023 data compliance statement for Starks IT Consulting Ltd.',
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
            name: 'NDPR Statement',
            item: 'https://starks.com.ng/ndpr',
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

