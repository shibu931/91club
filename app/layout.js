import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import MobileNav from "@/components/shared/MobileNav";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: '91 Club - Exciting Games & Real Prizes | Join Now!',
  description: 'Experience thrilling games like Aviator and Win Go on 91 Club. Compete for real money prizes and enjoy the ultimate gaming experience! Sign up now!',
  generator: '91 Clubs',
  applicationName: '91 Clubs',
  referrer: 'origin-when-cross-origin',
  keywords: ['91 club, real money games, online gaming, 91 club app'],
  authors: [{ name: 'Rahul Kumar' }],
  creator: 'Rahul Kumar',
  publisher: '91 Club APP',
  formatDetection: {
    email: 'support@91clubs.info',
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.91clubs.info/'),
  alternates: {
    canonical: 'https://www.91clubs.info/',
  },
  openGraph: {
    title: '91 Club - Exciting Games & Real Prizes | Join Now!',
    description: 'Experience thrilling games like Aviator and Win Go on 91 Club. Compete for real money prizes and enjoy the ultimate gaming experience! Sign up now!',
    url: 'https://www.91clubs.info/',
    siteName: '91 Club',
    images: [
      {
        url: 'https://www.91clubs.info/og-img.jpg',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: '91 Club - Exciting Games & Real Prizes | Join Now!',
    description: 'Experience thrilling games like Aviator and Win Go on 91 Club. Compete for real money prizes and enjoy the ultimate gaming experience! Sign up now!',
    siteId: '1467726470533754880',
    creator: '@91club',
    creatorId: '1467726470533754880',
    images: ['https://www.91clubs.info/og-img.jpg'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>

        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-ZK7TTZ5G1T"></Script>
        <Script id="googleanalyticstag">
          {` 
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZK7TTZ5G1T');
          `}
        </Script>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-16514110701"></Script>
        <Script>
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'AW-16514110701');
          `}
        </Script>
        <Script>
          {`
            gtag('event', 'conversion', {'send_to': 'AW-16514110701/jTLLCMrv8aAZEO2pxcI9'});
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <Navbar />
        <MobileNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
