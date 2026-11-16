export const metadata = {
  alternates: {
    canonical: 'https://starks.com.ng/blog',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Technology Insights & Engineering Blog | Starks IT Consulting',
    description: 'Expert perspectives on enterprise technology, cloud strategy, cybersecurity, AI, and digital transformation.',
    images: ['/blog-hero.jpg'],
  },
  title: 'Technology Insights & Engineering Blog | Starks IT Consulting Nigeria',
  description: 'Expert perspectives on enterprise technology, cloud strategy, cybersecurity, AI data pipelines, and digital transformation written by practitioners in Nigeria.',
  keywords: 'IT blog Nigeria, cloud strategy Africa, cybersecurity Lagos, enterprise software insights, AI data pipelines Nigeria, NDPR compliance',
  openGraph: {
    title: 'Technology Insights & Engineering Blog | Starks IT Consulting',
    description: 'Expert perspectives on enterprise technology, cloud strategy, and digital transformation in Nigeria.',
    url: 'https://starks.com.ng/blog',
    siteName: 'Starks IT Consulting',
    type: 'website',
  },
};

export default function BlogLayout({ children }) {
  return children;
}
