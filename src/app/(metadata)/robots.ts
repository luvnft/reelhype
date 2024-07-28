import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/info/',
      },
    ],
    sitemap: 'https://reelhype.space/sitemap.xml',
  };
}
