import type { MetadataRoute } from 'next';

export async function generateSitemaps({
    params: { media_type, id },
}: {
    params: { media_type: string; id: string };
}) {
    // Fetch the total number of products and calculate the number of sitemaps needed
    return [
        {
            media_type: media_type,
            id: id,
        },
    ];
}

export default async function sitemap({
    media_type,
    id,
}: {
    media_type: string;
    id: string;
}): Promise<MetadataRoute.Sitemap> {
    return [
        {
            url: `https://reelhype.space/Search/${media_type}/${id}`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
    ];
}
