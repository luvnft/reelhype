import '@/styles/globals.css';

import { MainNav } from '@/components/main-nav';
import { CSPostHogProvider } from '@/config/posthog-provider';
import { QueryProvider } from '@/config/query-provider';
import { cn } from '@/lib/utils';
import { muli, pacifico, questrial } from '@/styles/fonts/font';
import { ClerkProvider, GoogleOneTap } from '@clerk/nextjs';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const revalidate = 3600; // revalidate at most every hour

import { siteConfig } from '@/config/site';
import type { Metadata } from 'next';

import type { LayoutProps } from '@/types/layout-types';

export const metadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `%s | ReelHype`,
    },
    metadataBase: new URL(siteConfig.url),
    description: siteConfig.description,
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: siteConfig.url,
        title: 'ReelHype | Watch. Discuss. Enjoy.',
        description: 'Experience the latest movie and TV trailers with ease',
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
        title: siteConfig.name,
        description: 'Discover trailers. Connect with fans. Dive deeper.',
        images: [siteConfig.ogImage],
    },
    icons: {
        icon: '/favicon.ico',
        apple: '/apple-icon.png',
    },
    manifest: `${siteConfig.url}/manifest.webmanifest`,
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
        },
    },
};

export default function RootLayout({ children }: LayoutProps) {
    return (
        <ClerkProvider>
            <CSPostHogProvider>
                <html lang="en" suppressHydrationWarning>
                    <QueryProvider>
                        <body
                            className={cn(
                                'dark min-h-screen bg-black font-primary text-foreground antialiased',
                                muli.variable,
                                questrial.variable,
                                pacifico.variable
                            )}
                        >
                            <MainNav />

                            <div>
                                <SpeedInsights />
                                <Analytics />
                                <GoogleOneTap />
                            </div>

                            {children}
                        </body>
                    </QueryProvider>
                </html>
            </CSPostHogProvider>
        </ClerkProvider>
    );
}
