import "@/styles/globals.css";

import { urbanist, inter } from "@/styles/fonts/font";
import { cn } from "@/lib/utils";
import { QueryProvider } from "@/config/query-provider";
import { MainNav } from "@/components/main-nav";
import { ClerkProvider } from "@clerk/nextjs";
import { CSPostHogProvider } from "@/config/posthog-provider";
import PostHogPageView from "./(posthog)/PostHogPageView";

export const metadata = {
  title: "ReelHype",
  description: "Ultimate Destination for Movie & TV Trailers",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
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
                "dark min-h-screen bg-black font-sans text-foreground antialiased",
                inter.variable,
                urbanist.variable,
              )}
            >
              <div className="w-full bg-black/60 px-3 py-3">
                <MainNav />
              </div>
              <PostHogPageView />
              {children}
            </body>
          </QueryProvider>
        </html>
      </CSPostHogProvider>
    </ClerkProvider>
  );
}
