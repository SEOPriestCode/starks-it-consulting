export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: 'https://starks.com.ng/sitemap.xml',
    host: 'https://starks.com.ng',
  };
}

