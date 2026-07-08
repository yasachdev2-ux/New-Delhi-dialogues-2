'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import styles from './Navbar.module.css';

const NAV_ITEMS = [
  {
    label: 'About',
    href: '/about',
    dropdown: [
      { label: 'Why NDD Matters', href: '/about#why-ndd-matters' },
      { label: 'What We Do', href: '/about#what-we-do' },
      { label: 'How We Work', href: '/about#how-we-work' },
      { label: 'People Behind NDD', href: '/about#people-behind-ndd' },
      { label: "India's Policy Landscape", href: '/about/india-policy-landscape' },
      { label: 'Our Focus Areas', href: '/about/focus-areas' },
    ],
  },
  {
    label: 'Media',
    href: '/media',
    dropdown: [
      { label: 'Podcasts', href: '/media/podcasts' },
      { label: 'Vlogs', href: '/media/vlogs' },
      { label: 'Articles', href: '/media/articles' },
    ],
  },
  {
    label: 'Events',
    href: '/events',
    dropdown: [
      { label: 'Upcoming Events', href: '/events/upcoming' },
      { label: 'Distinguished Speakers', href: '/events/speakers' },
    ],
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  return (
    <nav className={styles.nav} aria-label="Main navigation">
      <div className={styles.inner}>
        <Link href="/" className={styles.brand} aria-label="New Delhi Dialogues home">
          <Image src="/images/logo.png" alt="New Delhi Dialogues" width={220} height={220} priority className={styles.brandLogo} />
        </Link>

        <button
          className={styles.toggle}
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span className={styles.toggleBar} />
          <span className={styles.toggleBar} />
          <span className={styles.toggleBar} />
        </button>

        <ul className={`${styles.links} ${mobileOpen ? styles.linksOpen : ''}`}>
          {NAV_ITEMS.map((item) => {
            const isActive = pathname.startsWith(item.href);
            const isMobDropOpen = mobileDropdown === item.label;
            return (
              <li key={item.label} className={styles.dropdownItem}>
                <Link
                  href={item.href}
                  className={`${styles.link} ${styles.linkParent} ${isActive ? styles.active : ''}`}
                  onClick={(e) => {
                    if (window.innerWidth <= 768) {
                      e.preventDefault();
                      setMobileDropdown(isMobDropOpen ? null : item.label);
                    }
                  }}
                >
                  {item.label}
                  <svg className={styles.chevron} viewBox="0 0 12 8" fill="none" aria-hidden="true">
                    <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </Link>
                <ul className={`${styles.dropdown} ${isMobDropOpen ? styles.dropdownMobOpen : ''}`}>
                  {item.dropdown.map((sub) => (
                    <li key={sub.href}>
                      <Link href={sub.href} onClick={() => setMobileOpen(false)}>{sub.label}</Link>
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
          <li>
            <Link href="/contact" className={styles.cta} onClick={() => setMobileOpen(false)}>
              Get Involved
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}


