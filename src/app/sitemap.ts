import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://reelhype.space',
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: 'https://reelhype.space/Discover',
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: 'https://reelhype.space/Search',
            lastModified: new Date(),
            changeFrequency: 'always',
            priority: 1,
        },
        {
            url: 'https://reelhype.space/Story',
            lastModified: new Date(),
            changeFrequency: 'never',
            priority: 0.5,
        },
        {
            url: 'https://reelhype.space/legal/Terms',
            lastModified: new Date(),
            changeFrequency: 'never',
            priority: 0.5,
        },
        {
            url: 'https://reelhype.space/legal/Privacy',
            lastModified: new Date(),
            changeFrequency: 'never',
            priority: 0.5,
        },
    ];
}
