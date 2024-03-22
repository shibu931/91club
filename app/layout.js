import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import MobileNav from "@/components/shared/MobileNav";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: '91 Club Official - 91 Clubs 100% trusted website play and win money',
  description: 'Join 91 Club Official to play thrilling games like Aviator, Win Go, sports, and more. Compete and win real money prizes! Join now for the ultimate gaming experience!',
  generator: '91 Clubs',
  applicationName: '91 Clubs',
  referrer: 'origin-when-cross-origin',
  keywords: ['91club, 91 club, 91 club vip, 91 club register, 91 club app, 91 club online game'],
  authors: [{ name: 'Rahul Kumar' }, { name: 'Rahul Kumar', url: 'https://www.91clubs.info/' }],
  creator: 'Rahul Kumar',
  publisher: '91 Club APP',
  formatDetection: {
    email: 'asterioamara@gmail.com',
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.91clubs.info/'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: '91 Club Official - 91 Clubs 100% trusted website play and win money',
    description: 'Join 91 Club Official to play thrilling games like Aviator, Win Go, sports, and more. Compete and win real money prizes! Join now for the ultimate gaming experience!',
    url: 'https://www.91clubs.info/',
    siteName: '91 club',
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
    title: '91 Club Official - 91 Clubs 100% trusted website play and win money',
    description: 'Join 91 Club Official to play thrilling games like Aviator, Win Go, sports, and more. Compete and win real money prizes! Join now for the ultimate gaming experience!',
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
