import './global.css'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from '@/components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from '@/components/footer'
import { ThemeProvider } from 'next-themes'
import { siteMetadata } from '@/app/metadata'
import { Metadata } from 'next/types'

export const metadata: Metadata = siteMetadata;

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
        'bg-backgroundLight text-textLight dark:bg-backgroundDark dark:text-textDark',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <head>
        <meta name="apple-mobile-web-app-title" content="denisgremaud" />
      </head>
      <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
	  	<ThemeProvider attribute="class" enableSystem={true} defaultTheme="system" themes={['light', 'dark']} >
			<main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
			<Navbar />
			{children}
			<Footer />
			<Analytics />
			<SpeedInsights />
			</main>
		</ThemeProvider>
      </body>
    </html>
  )
}
