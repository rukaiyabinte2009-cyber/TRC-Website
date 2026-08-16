import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, Lora } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { site } from "@/lib/constants";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const lora = Lora({ subsets: ["latin"], variable: "--font-serif", display: "swap" });

const fontVars = inter.variable + " " + jakarta.variable + " " + lora.variable;

const pageTitle = "The Real Consultation (TRC) - VAT Consultancy in Bangladesh";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: pageTitle,
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  openGraph: {
    title: pageTitle,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/trc-logo.png",
        width: 275,
        height: 255,
        alt: site.name,
      },
    ],
  },
  twitter: {
    // "summary" (not summary_large_image) because the current logo is a small
    // square mark, not a 1200x630 banner. Switch to summary_large_image once
    // a proper banner image exists — see note below.
    card: "summary",
    title: pageTitle,
    description: site.description,
    images: ["/trc-logo.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={fontVars}>
      <body className="min-h-screen antialiased">
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
