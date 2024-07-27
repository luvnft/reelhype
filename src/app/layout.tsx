import '@/styles/globals.css';

import { MainNav } from '@/components/main-nav';
import { CSPostHogProvider } from '@/config/posthog-provider';
import { QueryProvider } from '@/config/query-provider';
import { cn } from '@/lib/utils';
import { lato, pacifico, poppins } from '@/styles/fonts/font';
import { ClerkProvider, GoogleOneTap } from '@clerk/nextjs';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const runtime = 'edge';

export const metadata = {
    title: {
        template: '%s | Convofy',
        default: 'Convofy',
    },
    description: 'Ultimate Destination for Movie & TV Trailers',
    icons: [{ rel: 'icon', url: '/favicon.ico' }],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ClerkProvider>
            <CSPostHogProvider>
                <html lang="en" suppressHydrationWarning>
                    <QueryProvider>
                        <body
                            className={cn(
                                'dark min-h-screen bg-black font-primary text-foreground antialiased',
                                lato.variable,
                                poppins.variable,
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
