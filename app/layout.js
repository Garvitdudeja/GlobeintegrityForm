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

        {/* ✅ Facebook Pixel Script */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window,document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '24469646452734536');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>

      <body>
        <BootstrapClient />
        <Header />
        <GoogleConversion />

        {/* Main content */}
        {children}

        {/* ✅ Facebook Pixel noscript fallback */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=24469646452734536&ev=PageView&noscript=1"
            alt="facebook pixel"
          />
        </noscript>

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
