import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./responsive.css";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapClient from "./bootstrap-client"; // ✅ Correct import
import Script from "next/script";
import GoogleConversion from "@/Components/GoolgeConversion";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


export const metadata = {
  title: 'Globe Integrity',
  description: 'Your trusted life insurance partner',
};

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;


export default function RootLayout({ children }) {

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16453676009"></script>
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`}
          strategy="beforeInteractive"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-16453676009');
            `,
          }}
        />
      </head>
      <body>

        <BootstrapClient />
        <Header />
        <GoogleConversion />
        {children}
      </body>
    </html>
  );
}
