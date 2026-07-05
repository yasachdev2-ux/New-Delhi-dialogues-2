import Link from 'next/link';
import styles from './Footer.module.css';

const PLATFORM_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About NDD', href: '/about' },
  { label: 'Media', href: '/media' },
  { label: 'Events', href: '/events' },
  { label: 'Contact', href: '/contact' },
];

const LEGAL_LINKS = [
  { label: 'Terms of Use', href: '/terms' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Cookie Policy', href: '/cookies' },
];

const SOCIAL_LINKS = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/newdelhidialogues' },
  { label: 'Twitter (X)', href: 'https://twitter.com/NDDialogues' },
  { label: 'YouTube', href: 'https://www.youtube.com/@NewDelhiDialogues' },
  { label: 'Instagram', href: 'https://www.instagram.com/newdelhidialogues' },
];

export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.top}>
        <div className={styles.brand}>
          <span className={styles.logo}>NDD</span>
          <p className={styles.tagline}><em>Because No Policy Should Be Made in Isolation.</em></p>
          <p className={styles.sub}>Policy &middot; Ethics &middot; Impact</p>
          <p className={styles.location}>New Delhi, India</p>
        </div>
        <nav className={styles.nav} aria-label="Footer navigation">
          <div className={styles.col}>
            <h5>Platform</h5>
            <ul>{PLATFORM_LINKS.map((l) => <li key={l.href}><Link href={l.href}>{l.label}</Link></li>)}</ul>
          </div>
          <div className={styles.col}>
            <h5>Legal</h5>
            <ul>{LEGAL_LINKS.map((l) => <li key={l.href}><Link href={l.href}>{l.label}</Link></li>)}</ul>
          </div>
          <div className={styles.col}>
            <h5>Follow Us</h5>
            <ul>{SOCIAL_LINKS.map((l) => (
              <li key={l.href}><a href={l.href} target="_blank" rel="noopener noreferrer">{l.label}</a></li>
            ))}</ul>
          </div>
        </nav>
      </div>
      <div className={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} New Delhi Dialogues. All rights reserved.</p>
        <p className={styles.compliance}>WCAG 2.1 AA &middot; GIGW 3.0 Aligned</p>
      </div>
    </footer>
  );
}
