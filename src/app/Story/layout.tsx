import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
    title: 'Story',
    description: 'Telling Convofy storiy of why',
    keywords: [
        'Movies',
        'Tv Shows',
        'Trailers',
        'Collaboration',
        'Movie Trailers',
        'Tv Show Trailers',
        'Story',
    ],
    authors: [
        {
            name: 'Convofy',
            url: 'https://reelhype.space/Story',
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

export default function StoryLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <MaxWidthWrapper>{children}</MaxWidthWrapper>;
}
