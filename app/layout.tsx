// import './global.css';
// import { GeistSans } from 'geist/font/sans';
// import { GeistMono } from 'geist/font/mono';
// import { Navbar } from '@/components/nav';
// import { Analytics } from '@vercel/analytics/react';
// import { SpeedInsights } from '@vercel/speed-insights/next';
// import Footer from '@/components/footer';
// import { ThemeProvider } from 'next-themes';
// import { siteMetadata } from '@/app/metadata';
// import { Metadata } from 'next/types';

// export const metadata: Metadata = siteMetadata;

// const cx = (...classes) => classes.filter(Boolean).join(' ');

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html
//       lang="en"
//       className={cx(
//         'bg-white dark:bg-neutral-900 text-black dark:text-white transition-colors duration-150',
//         GeistSans.variable,
//         GeistMono.variable
//       )}
//     >
//       <head>
//         <meta name="apple-mobile-web-app-title" content="denisgremaud" />
//       </head>
//       <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
//         <ThemeProvider
//           attribute="class"
//           enableSystem={true}
//           defaultTheme="system"
//         >
//           <main className="flex-auto min-w-0 mt-6 flex flex-col px-4 md:px-0">
//             <Navbar />
//             {children}
//             <Footer />
//             <Analytics />
//             <SpeedInsights />
//           </main>
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }
import './global.css';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Navbar } from '@/components/nav';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Footer from '@/components/footer';
import { siteMetadata } from '@/app/metadata';
import { Metadata } from 'next/types';
import { Providers } from '@/components/providers';

const cx = (...classes: string[]) => classes.filter(Boolean).join(' ');

export const metadata: Metadata = siteMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(
        GeistSans.variable,
        GeistMono.variable,
        'bg-white dark:bg-neutral-900',
        'text-black dark:text-white',
        'transition-colors duration-150'
      )}
      suppressHydrationWarning
    >
      <head>
        <meta name="apple-mobile-web-app-title" content="denisgremaud" />
      </head>
      <body
        className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto"
        suppressHydrationWarning
      >
        <Providers>
          <main className="flex-auto min-w-0 mt-6 flex flex-col px-4 md:px-0">
            <Navbar />
            {children}
            <Footer />
            <Analytics />
            <SpeedInsights />
          </main>
        </Providers>
      </body>
    </html>
  );
}
