import Link from 'next/link';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import SectionHeader from '@/components/ui/SectionHeader';
import styles from './page.module.css';

export const metadata: Metadata = buildMetadata({
  title: 'Media',
  description: 'Podcasts, vlogs, and articles from New Delhi Dialogues on AI governance, public policy, and society.',
  path: '/media',
});

const SECTIONS = [
  { num: '01', href: '/media/podcasts', title: 'Podcasts', desc: 'Engaging conversations on AI, policy, governance, ethics, and society.' },
  { num: '02', href: '/media/vlogs', title: 'Vlogs', desc: 'Recorded sessions, panel discussions, and keynote addresses from NDD events.' },
  { num: '03', href: '/media/articles', title: 'Articles', desc: "Research, analysis, and commentary from NDD's policy and research desk." },
];

export default function MediaHubPage() {
  return (
    <>
      <div className={styles.hero}>
        <div className="container">
          <span className={styles.heroLabel}>02 - Media</span>
          <h1 className={styles.heroTitle}>NDD <span className="c-orange">Media and Podcast</span></h1>
          <p className={styles.heroSub}>Conversations, interviews, and insights on AI governance, public policy, ethics, and the future of society.</p>
        </div>
      </div>
      <section className={styles.section}>
        <div className="container">
          <SectionHeader label="Explore" title={<>Where to <span className="c-orange">Start</span></>} tone="light" />
          <div className={styles.grid}>
            {SECTIONS.map((s) => (
              <Link key={s.href} href={s.href} className={styles.card}>
                <span className={styles.num}>{s.num}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <span className={styles.arrow}>Explore -&gt;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
