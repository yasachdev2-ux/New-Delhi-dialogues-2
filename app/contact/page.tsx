import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import ContactForm from '@/components/forms/ContactForm';
import styles from './page.module.css';

export const metadata: Metadata = buildMetadata({
  title: 'Contact',
  description: 'Connect with New Delhi Dialogues - partnerships, research collaboration, media, and event participation.',
  path: '/contact',
});

const SOCIALS = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/newdelhidialogues' },
  { label: 'Twitter (X)', href: 'https://twitter.com/NDDialogues' },
  { label: 'YouTube', href: 'https://www.youtube.com/@NewDelhiDialogues' },
  { label: 'Instagram', href: 'https://www.instagram.com/newdelhidialogues' },
];

export default function ContactPage() {
  return (
    <section className={styles.section}>
      <div className="container">
        <span className={styles.label}>05 - Get Involved</span>
        <h1 className={styles.title}>Join the <span className="c-orange">Dialogue</span></h1>
        <p className={styles.intro}>
          Connect with NDD across platforms - follow our conversations, attend our events, and be part of
          India&rsquo;s most important policy dialogue.
        </p>
        <div className={styles.grid}>
          <div className={styles.socials}>
            {SOCIALS.map((s) => (
              <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" className={styles.socialCard}>
                {s.label}
              </a>
            ))}
          </div>
          <div>
            <h2 className={styles.formHeading}>Send Us a Message</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
