import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/info/', '/legal/Terms', '/legal/Privacy'],
            },
        ],
        sitemap: 'https://reelhype.space/sitemap.xml',
    };
}
