import type { Metadata } from "next";
import Script from "next/script";
import { Libre_Caslon_Display, Radley, Montserrat } from "next/font/google";
import "./globals.css";

const libreCaslon = Libre_Caslon_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-libre-caslon",
  display: "swap",
});

const radley = Radley({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-radley",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Trusted Home Care in Fresno | Jane's Home Care",
  description:
    "Compassionate in-home senior care in Fresno, CA. Overseen by a licensed Nurse Practitioner. No contracts. Care can begin within 24 hours. Call (559) 296-2189.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${libreCaslon.variable} ${radley.variable} ${montserrat.variable}`}
      style={{ scrollBehavior: "smooth" }}
    >
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GT-NMC8JMDS"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GT-NMC8JMDS');
            gtag('config', 'G-RDX0PS5P8G');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
