import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Denis Gremaud | Portfolio',
    template: '%s | Denis Gremaud',
  },
  description: 'This is Denis Gremaud\'s portfolio.',
  icons: {
	icon: [
	  {
		url: '/icon.png',
		sizes: '192x192',
		type: 'image/png',
	  },
	  {
		url: '/favicon.ico',
		sizes: 'any',
		type: 'image/x-icon',
	  }
	],
	apple: [
	  {
		url: '/apple-icon.png',
		sizes: '180x180',
		type: 'image/png',
	  }
	],
	shortcut: [
	  {
		url: '/favicon.ico',
		sizes: 'any',
		type: 'image/x-icon',
	  }
	],
  },
  manifest: '/manifest.json',
  applicationName: 'denisgremaud',
  appleWebApp: {
	title: 'Denis Gremaud',
	statusBarStyle: 'black-translucent',
  },
  openGraph: {
    title: 'Denis Gremaud | Portfolio',
    description: 'This is Denis Gremaud\'s portfolio.',
    url: baseUrl,
    siteName: 'Denis Gremaud | Portfolio',
    locale: 'fr_CH',
    type: 'website',
	images: [
		{
		  url: '/web-app-manifest-512x512.png',
		  width: 512,
		  height: 512,
		  alt: 'Denis Gremaud Logo',
		}
	],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Denis Gremaud | Portfolio',
    description: 'This is Denis Gremaud\'s portfolio.',
    images: ['/web-app-manifest-512x512.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-black bg-white dark:text-white dark:bg-black',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <head>
        <meta name="apple-mobile-web-app-title" content="denisgremaud" />
      </head>
      <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  )
}
