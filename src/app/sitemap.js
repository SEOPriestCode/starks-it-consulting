export default function sitemap() {
  const baseUrl = 'https://starks.com.ng';
  const lastModified = new Date();

  // Static top-level pages
  const staticRoutes = [
    { url: `${baseUrl}`, priority: 1.0, changeFrequency: 'weekly' },
    { url: `${baseUrl}/services`, priority: 0.95, changeFrequency: 'weekly' },
    { url: `${baseUrl}/training`, priority: 0.95, changeFrequency: 'weekly' }, // New training & academy addition
    { url: `${baseUrl}/transit`, priority: 0.9, changeFrequency: 'weekly' }, // TransIT SaaS
    { url: `${baseUrl}/cases`, priority: 0.85, changeFrequency: 'monthly' },
    { url: `${baseUrl}/about`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${baseUrl}/team`, priority: 0.75, changeFrequency: 'monthly' },
    { url: `${baseUrl}/blog`, priority: 0.85, changeFrequency: 'daily' },
    { url: `${baseUrl}/contact`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${baseUrl}/privacy`, priority: 0.3, changeFrequency: 'yearly' },
    { url: `${baseUrl}/terms`, priority: 0.3, changeFrequency: 'yearly' },
  ];

  // Core Service pages
  const serviceSlugs = [
    'managed-it-services',
    'it-support-services',
    'cloud-solutions',
    'cybersecurity-services',
    'website-development',
    'software-development',
    'network-infrastructure',
    'microsoft-365-solutions',
    'server-deployment',
    'cctv-access-control',
    'data-analytics',
    'it-strategy',
  ];

  const serviceRoutes = serviceSlugs.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.85,
  }));

  // Case Study pages
  const caseSlugs = [
    'core-banking-api-modernisation',
    'field-operations-erp',
    'lagos-state-revenue-portal',
    'unified-patient-records',
    'network-outage-prediction',
    'omnichannel-commerce-platform',
  ];

  const caseRoutes = caseSlugs.map((slug) => ({
    url: `${baseUrl}/cases/${slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.75,
  }));

  // Insights / Blog pages
  const blogSlugs = [
    'why-nigerian-enterprises-cloud-migration',
    'ai-ready-data-pipelines',
    'cio-digital-transformation',
    'erp-implementation-mistakes',
    'zero-trust-architecture',
    'finops-aws-cost-optimization',
    'multi-cloud-strategy',
    'cloud-migration-checklist',
    'spreadsheets-to-snowflake',
    'digitising-government',
    'building-engineering-team',
  ];

  const blogRoutes = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.75,
  }));

  return [
    ...staticRoutes.map((route) => ({
      ...route,
      lastModified,
    })),
    ...serviceRoutes,
    ...caseRoutes,
    ...blogRoutes,
  ];
}

