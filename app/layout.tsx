import type { Metadata } from 'next';
import { Inter, Playfair_Display, Cormorant_Garamond } from 'next/font/google';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BackToTop from '@/components/layout/BackToTop';
import { SITE_NAME, SITE_URL } from '@/lib/seo';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans-loaded', weight: ['300','400','500','600','700'] });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif-loaded', weight: ['400','600','700','800','900'], style: ['normal','italic'] });
const cormorant = Cormorant_Garamond({ subsets: ['latin'], variable: '--font-accent-loaded', weight: ['400','600'], style: ['normal','italic'] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_NAME, template: `%s | ${SITE_NAME}` },
  description: "India's premier policy think-tank advancing AI governance, ethical technology, and evidence-based public policy.",
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  url: SITE_URL,
  sameAs: [
    'https://www.linkedin.com/company/newdelhidialogues',
    'https://twitter.com/NDDialogues',
    'https://www.youtube.com/@NewDelhiDialogues',
    'https://www.instagram.com/newdelhidialogues',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" className={`${inter.variable} ${playfair.variable} ${cormorant.variable}`}>
      <body>
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
