
import { Geist, Geist_Mono, Exo } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import StructuredData from "@/components/StructuredData";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import { trackWebVitals, preloadCriticalResources } from "@/utils/performance";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

const exo = Exo({
  variable: "--font-exo",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

import { generateSEOMetadata } from "@/components/SEOHead";

export const metadata = generateSEOMetadata({
  useDynamicDomain: true,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="night">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          rel="preconnect"
          href="https://ixgyxdrwnghlncunnasq.supabase.co"
        />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${exo.variable} antialiased`}
      >
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // Initialize performance tracking
                if (typeof window !== 'undefined') {
                  ${trackWebVitals.toString()}
                  ${preloadCriticalResources.toString()}
                  trackWebVitals();
                  preloadCriticalResources();
                }
              })();
            `,
          }}
        />
        <GoogleAnalytics />
        <StructuredData type="Organization" />
        <StructuredData type="Website" />
        <LocalBusinessSchema />
        {children}
      </body>
    </html>
  );
}
