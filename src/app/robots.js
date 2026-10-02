export default function robots() {
  const baseUrl = 'https://md-porfolio.vercel.app';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/private/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
