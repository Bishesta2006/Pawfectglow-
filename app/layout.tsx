import type { Metadata, Viewport } from "next";
import { Nunito } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito" });

export const metadata: Metadata = {
  title: {
    default: "PawfectGlow Grooming | Where Purrfect Meets Pawfect",
    template: "%s | PawfectGlow Grooming",
  },
  description:
    "Professional pet grooming services in Butwal, Nepal. Bath, haircut, nail trimming & more. Where Purrfect Meets Pawfect!",
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
  keywords: [
    "pet grooming",
    "dog grooming",
    "cat grooming",
    "Butwal",
    "Nepal",
    "PawfectGlow",
  ],
};

export const viewport: Viewport = {
  themeColor: "#FF6634",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-Y4FGSEN3R0"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-XXXXXXXXXX');`,
          }}
        />
      </head>
      <body className={`${nunito.variable} font-sans antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
