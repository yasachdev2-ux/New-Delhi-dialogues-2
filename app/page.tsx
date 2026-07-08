import Link from 'next/link';
import Hero from '@/components/ui/Hero';
import SectionHeader from '@/components/ui/SectionHeader';
import SpeakerCarousel from '@/components/carousel/SpeakerCarousel';
import { getRecentSpeakers } from '@/lib/content';
import styles from './page.module.css';

const HIGHLIGHTS = [
  { num: '01', href: '/about', title: 'About NDD', desc: "India's premier policy think-tank advancing evidence-based governance at the intersection of AI, technology, health, and society." },
  { num: '02', href: '/media', title: 'Media and Podcast', desc: 'Conversations with policymakers, technologists, and thought leaders on the most pressing governance questions of our time.' },
  { num: '03', href: '/events', title: 'Events', desc: 'From annual summits and international roundtables to startup pitch sessions - NDD convenes the conversations that matter.' },
  { num: '04', href: '/events/speakers', title: 'Distinguished Speakers', desc: 'A timeline of the leaders in government, diplomacy, and public policy who have shaped NDD dialogues.' },
];

export default function HomePage() {
  const recentSpeakers = getRecentSpeakers(8);

  return (
    <>
      <Hero
        eyebrows={['New Delhi, India', 'Policy Think-Tank', 'Est. 2024']}
        headingLines={['Because No Policy', 'Should Be Made']}
        headingEm="in Isolation."
        sub="NDD unites policymakers, researchers, industry leaders, and civil society to build evidence-based governance frameworks - advancing India's vision of ethical, human-centric AI for the world."
        goal={<><strong>Our goal</strong> is to ensure that innovation advances <strong>public interest, equity, safety, and trust.</strong></>}
        ctas={[
          { label: 'Explore Our Work', href: '/about', variant: 'primary' },
          { label: 'Partner With Us', href: '/contact', variant: 'ghost' },
        ]}
        stats={[
          { value: '8+', label: 'Focus Areas' },
          { value: 'Multi', label: 'Stakeholder Dialogues' },
          { value: 'National', label: 'Policy Impact' },
          { value: 'Global', label: 'Engagement' },
        ]}
      />

      <div className={styles.strip}>
        <div className="container">
          <p className={styles.stripCopy}>
            India&rsquo;s policy ecosystem on AI, technology and governance is <strong>fragmented, siloed, and disconnected</strong> from
            the communities it serves. NDD was founded to end that isolation.
          </p>
        </div>
      </div>

      <section className={styles.section}>
        <div className="container">
          <SectionHeader
            label="What We Do"
            title={<>Where Policy Meets <span className="c-orange">Purpose</span></>}
            intro="NDD operates across four interconnected domains to drive policy change at the intersection of technology, governance, and society."
          />
          <div className={styles.highlightsGrid}>
            {HIGHLIGHTS.map((h) => (
              <Link key={h.href} href={h.href} className={styles.hlCard}>
                <div className={styles.hlNum}>{h.num}</div>
                <h3>{h.title}</h3>
                <p>{h.desc}</p>
                <span className={styles.hlLink}>Learn More -&gt;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <SectionHeader
            label="Distinguished Speakers"
            title={<>Recent <span className="c-orange">Speakers</span></>}
          />
          <SpeakerCarousel speakers={recentSpeakers} />
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionContext}`}>
        <div className="container">
          <SectionHeader
            label="India's Policy Landscape"
            title={<>Understanding the Issues Shaping <span className="c-orange">Tomorrow</span></>}
            intro="From AI and Digital Governance to Climate, Health, Trade, Education, and Global Affairs."
          />
          <Link href="/about/india-policy-landscape" className={styles.snapshotCta}>
            Explore India&rsquo;s Policy Context -&gt;
          </Link>
        </div>
      </section>
    </>
  );
}
