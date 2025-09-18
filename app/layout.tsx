import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { InvoiceProvider } from "@/context/invoice-context";

import { StickyBanner } from "@/components/ui/sticky-banner";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Invoice Creator v0.1",
  description: "Create professional invoices",
  openGraph: {
    images: "/og-image.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <InvoiceProvider>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {/* <StickyBanner
            className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"
            hideOnScroll={true}
          >
            <p className="text-white text-center">
              Limited time offer: 50% off all plans!
              <a href="/pricing" className="ml-2 font-semibold underline">
                Get started
              </a>
            </p>
          </StickyBanner> */}
          {children}
          <Footer />
        </body>
      </InvoiceProvider>
      
    </html>
  );
}
