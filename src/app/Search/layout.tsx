import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
    title: 'Search',
    description: 'Search for movies and tv trailers',
    keywords: [
        'Movies',
        'Tv Shows',
        'Trailers',
        'Collaboration',
        'Movie Trailers',
        'Tv Show Trailers',
        "Search"
    ],
    authors: [
        {
            name: 'Convofy',
            url: 'https://reelhype.space/Search',
        },
    ],
    creator: 'Convofy',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: siteConfig.url,
        title: siteConfig.name,
        description: siteConfig.description,
        siteName: siteConfig.name,
        images: [
            {
                url: siteConfig.ogImage,
                width: 1200,
                height: 630,
                alt: siteConfig.name,
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: siteConfig.name,
        description: siteConfig.description,
        images: [siteConfig.ogImage],
        creator: '@Convofy',
    },
    icons: {
        icon: '/favicon.ico',
        apple: '/apple-icon.png',
    },
    manifest: `${siteConfig.url}/sitemap.xml`,
};

export default function SearchLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <div>{children}</div>;
}
