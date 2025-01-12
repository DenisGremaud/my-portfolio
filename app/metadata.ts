import type { Metadata } from 'next';
import { baseUrl } from './sitemap';

export const siteMetadata: Metadata = {
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
		  url: 'icon.png',
		  width: 192,
		  height: 192,
		  alt: 'Denis Gremaud | Portfolio',
		}
	  ]
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