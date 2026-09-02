import type { Metadata } from 'next';
import './globals.css';
import SidebarNav from '@/components/SidebarNav';
import HeaderBanner from '@/components/HeaderBanner';
import TacticalFooter from '@/components/TacticalFooter';

export const metadata: Metadata = {
  metadataBase: new URL('https://theadventurersguide.wiki'),
  title: {
    default: 'The Adventurers Guide | Tactical RPG Database & Party Planner (Steam 1.0)',
    template: '%s | The Adventurers Strategy Database',
  },
  description:
    'Complete tactical strategy database, interactive 6-stat party planner, 8 class skill verbs, hex combat damage formulas, and 1.0 patch notes for The Adventurers.',
  keywords: [
    'The Adventurers',
    'The Adventurers RPG',
    'The Adventurers Steam',
    'The Adventurers 3062500',
    'Eternal Vigilance Entertainment',
    'The Adventurers class guide',
    'The Adventurers party planner',
    'The Adventurers hex combat',
    'The Adventurers patch notes 1.0',
    'The Adventurers stat calculator',
  ],
  authors: [{ name: 'The Adventurers Tactical Guild' }],
  creator: 'The Adventurers Wiki Team',
  publisher: 'The Adventurers Strategy Hub',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://theadventurersguide.wiki',
    siteName: 'The Adventurers Strategy Database',
    title: 'The Adventurers Tactical Guide & Interactive Party Planner',
    description:
      'Official 1.0 formulas, hex combat rules, 8 class talent trees, and interactive party stat calculator for The Adventurers by Eternal Vigilance Entertainment.',
    images: [
      {
        url: '/images/header.jpg',
        width: 460,
        height: 215,
        alt: 'The Adventurers Tactical RPG Banner',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Adventurers Strategy Database (1.0)',
    description:
      'Interactive party planner, tactical hex guides, and 1.0 balance formulas for The Adventurers.',
    images: ['/images/header.jpg'],
  },
  other: {
    'google-adsense-account': 'ca-pub-8925824244664340',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'VideoGame',
    name: 'The Adventurers',
    url: 'https://theadventurersguide.wiki',
    description:
      'A turn-based tactical RPG set in an open high-fantasy world featuring hex grid combat, party wage management, dynamic random events, and 8 unique character classes.',
    genre: ['Tactical RPG', 'Turn-Based Strategy', 'Simulation', 'Indie'],
    gamePlatform: ['PC (Windows)'],
    applicationCategory: 'Game',
    operatingSystem: 'Windows 10',
    publisher: {
      '@type': 'Organization',
      name: 'Eternal Vigilance Entertainment',
    },
    offers: {
      '@type': 'Offer',
      price: '12.99',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* AdSense Script */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8925824244664340"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#0d1117] text-[#e6edf3]">
        <div className="flex flex-1">
          <SidebarNav />
          <div className="flex-1 flex flex-col min-w-0">
            <HeaderBanner />
            <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">
              {children}
            </main>
            <TacticalFooter />
          </div>
        </div>
      </body>
    </html>
  );
}
