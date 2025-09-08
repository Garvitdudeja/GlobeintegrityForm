import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./responsive.css";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapClient from "./bootstrap-client";
import Script from "next/script";
import GoogleConversion from "@/Components/GoolgeConversion";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Globe Integrity',
  description: 'Your trusted life insurance partner',
};

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

        {/* ✅ ClickCease Tracking Script */}
        <Script id="clickcease-tracking" strategy="afterInteractive">
          {`
            var script = document.createElement('script');
            script.async = true;
            script.type = 'text/javascript';
            var target = 'https://www.clickcease.com/monitor/stat.js';
            script.src = target;
            var elem = document.head;
            elem.appendChild(script);
          `}
        </Script>
      </head>

      <body>
        <BootstrapClient />
        <Header />
        <GoogleConversion />

        {/* Main content */}
        {children}

        {/* ✅ ClickCease noscript fallback */}
        <noscript>
          <a href="https://www.clickcease.com" rel="nofollow">
            <img
              src="https://monitor.clickcease.com"
              alt="ClickCease"
            />
          </a>
        </noscript>
      </body>
    </html>
  );
}
