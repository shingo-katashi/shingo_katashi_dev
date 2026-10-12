import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Shingo Katashi | Full-Stack & AI Developer",
    template: "%s | Shingo Katashi",
  },
  description:
    "Full-stack and AI engineer in Tokyo. Production LLM features, e-commerce (Sophia Fiori), and open-source agents and RAG.",
  openGraph: {
    title: "Shingo Katashi | Full-Stack & AI Developer",
    description:
      "Full-stack engineer in Tokyo building web applications and AI-powered solutions.",
    locale: "en_US",
    type: "website",
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
