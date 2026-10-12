import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { site, siteUrl } from "@/content/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const description =
  "Full-stack and AI engineer in Tokyo. Production LLM features, e-commerce (Sophia Fiori), and open-source agents and RAG.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Shingo Katashi | Full-Stack & AI Developer",
    template: "%s | Shingo Katashi",
  },
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Shingo Katashi | Full-Stack & AI Developer",
    description,
    url: siteUrl,
    siteName: site.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${site.name} — ${site.title}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shingo Katashi | Full-Stack & AI Developer",
    description,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full overflow-x-hidden bg-slate-950 font-sans text-slate-300 antialiased selection:bg-teal-500/30 selection:text-teal-100">
        {children}
      </body>
    </html>
  );
}
