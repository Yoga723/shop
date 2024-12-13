/* eslint-disable @next/next/no-page-custom-font */
import { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Head from "next/head";
import { basePath } from "@/next.config";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

// Global metadata
export const metadata: Metadata = {
  title: "Shop | Dialogika",
  description: "Beli E-book, Shop E-book",
  keywords: "Beli E-book, Shop E-book",
};

// Helper function for metadata
const GlobalMetadata = () => (
  <>
    <meta charSet="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0"
    />
    <meta
      name="description"
      content="Beli E-book, Shop E-book"
    />
    <meta
      name="keywords"
      content="Beli E-book, Shop E-book"
    />

    {/* Open Graph Tags */}
    <meta
      property="og:site_name"
      content="Dialogika | Kelas Public Speaking"
    />
    <meta
      property="og:site"
      content="dialogika.co"
    />
    <meta
      property="og:title"
      content="Shop E-book, Beli E-book"
    />
    <meta
      property="og:description"
      content="Beli E-book, Shop E-book"
    />
    <meta
      property="og:image"
      content="assets/img/hero-bg.webp"
    />
    <meta
      property="og:url"
      content="https://www.dialogika.co/shop/"
    />
    <meta
      property="og:type"
      content="website"
    />
  </>
);

const GlobalFonts = () => (
  <>
    <link
      rel="preconnect"
      href="https://fonts.googleapis.com"
    />
    <link
      rel="preconnect"
      href="https://fonts.gstatic.com"
      crossOrigin="anonymous"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Libre+Caslon+Display&display=swap"
      rel="stylesheet"
    />

    {/* Icons */}
    <Script
      src="https://unpkg.com/ionicons@5.0.0/dist/ionicons.js"
      strategy="lazyOnload"
    />
  </>
);

const GlobalScripts = () => (
  <>
    {/* Part JS */}
    <Script
      src={`${basePath}/assets/part/shop/shop.js`}
      defer
    />

    {/* Main Custom JS */}
    <Script
      src={`${basePath}/assets/js/script.js`}
      defer
    />
    <Script
      src={`${basePath}/assets/js/headerfooter.js`}
      strategy="beforeInteractive"
    />
    <Script
      src={`${basePath}/assets/js/main.js`}
      defer
    />
    <Script
      src={`${basePath}/assets/js/index.min.js`}
      defer
    />
    <Script
      src={`${basePath}/assets/js/cart.js`}
      defer
    />

    {/* Vendor JS */}
    <Script
      src={`${basePath}/assets/vendor/bootstrap/js/bootstrap.bundle.min.js`}
      defer
    />
    <Script
      src={`${basePath}/assets/vendor/glightbox/js/glightbox.min.js`}
      defer
    />
    <Script
      src={`${basePath}/assets/vendor/swiper/swiper-bundle.min.js`}
      defer
    />

    {/* External Icons */}
    <Script
      src="https://unpkg.com/ionicons@5.0.0/dist/ionicons.js"
      defer
    />
  </>
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <GlobalMetadata />
        <GlobalFonts />
      </Head>
      <body className="antialiased">
        <main style={{ marginTop: "100px" }}>
          <Header />
          {children}
          <Footer />
        </main>

        {/* Global Scripts */}
        <GlobalScripts />
      </body>
    </html>
  );
}
