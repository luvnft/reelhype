import "@/styles/globals.css";

import { pacifico, lato, poppins } from "@/styles/fonts/font";
import { cn } from "@/lib/utils";
import { QueryProvider } from "@/config/query-provider";
import { MainNav } from "@/components/main-nav";
import { ClerkProvider } from "@clerk/nextjs";
import { CSPostHogProvider } from "@/config/posthog-provider";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

export const runtime = "edge";

export const metadata = {
  title: {
    template: "%s | Convofy",
    default: "Convofy",
  },
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
                "dark min-h-screen bg-black font-primary text-foreground antialiased",
                lato.variable,
                poppins.variable,
                pacifico.variable
              )}
            ><MainNav />
              <div className="w-full bg-black/60 ">
                
                <SpeedInsights />
                <Analytics/>
              </div>
 
              {children}
            </body>
          </QueryProvider>
        </html>
      </CSPostHogProvider>
    </ClerkProvider>
  );
}
