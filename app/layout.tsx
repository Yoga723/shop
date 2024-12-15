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
  title: "Shop | Dialogika - E-books, Merchandise, and More",
  description:
    "Temukan berbagai macam e-books, merchandise, motivational speeches, dan videos untuk menginspirasi pertumbuhan pribadimu. Belanja sekarang di Dialogika!",
  keywords:
    "beli  E-books, belanja E-books, motivational Merchandise, Dialogika Shop, Public Speaking Videos, Baju, Sepatu, pin",
};

// Helper function for metadata
const GlobalMetadata = () => (
  <>
    {/* General Metadata Tag */}
    <meta charSet="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0"
    />
    <meta
      name="description"
      content="Temukan berbagai macam e-books, merchandise, motivational speeches, dan videos untuk menginspirasi pertumbuhan pribadimu. Belanja sekarang di Dialogika!"
    />
    <meta
      name="keywords"
      content="beli E-books, belanja E-books, motivational Merchandise, Dialogika Shop, Public Speaking Videos, Baju, Sepatu, pin"
    />

    <meta
      name="author"
      content="Dialogika Team"
    />
    <meta
      name="robots"
      content="index, follow"
    />
    <meta
      name="language"
      content="id"
    />
    <meta
      name="geo.region"
      content="ID-YO"
    />
    <meta
      name="geo.placename"
      content="Yogyakarta, Indonesia"
    />
    <meta
      name="geo.position"
      content="-7.7956;110.3785"
    />
    <meta
      name="ICBM"
      content="-7.7552, 110.3785"
    />

    {/* Twitter Tag */}
    <meta
      name="twitter:card"
      content={`${basePath}/assets/img/promo.webp`}
    />
    <meta
      name="twitter:site"
      content="@dialogika_co"
    />
    <meta
      name="twitter:title"
      content="Shop at Dialogika - E-books, Merchandise, and More"
    />
    <meta
      name="twitter:description"
      content="Temukan berbagai macam e-books, merchandise, motivational speeches, dan videos untuk menginspirasi pertumbuhan pribadimu. Belanja sekarang di Dialogika!"
    />
    <meta
      name="twitter:image"
      content="https://www.dialogika.co/shop/assets/img/promo.webp"
    />

    {/* Favicon */}
    <link
      rel="icon"
      href={`${basePath}/assets/img/favicon.ico`}
    />
    <link
      rel="apple-touch-icon"
      href={`${basePath}/assets/img/apple-touch-icon.png`}
    />

    {/* Canonical URL */}
    <link
      rel="canonical"
      href="https://www.dialogika.co/shop/"
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
      content="Shop | Dialogika - E-books, Merchandise, and More"
    />
    <meta
      property="og:description"
      content="Temukan berbagai macam e-books, merchandise, motivational speeches, dan videos untuk menginspirasi pertumbuhan pribadimu. Belanja sekarang di Dialogika!"
    />
    <meta
      property="og:image"
      content={`${basePath}/assets/img/promo.webp`}
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
        <main>
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
