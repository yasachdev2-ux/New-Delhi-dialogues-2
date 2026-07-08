import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import SectionHeader from '@/components/ui/SectionHeader';
import styles from './page.module.css';

export const metadata: Metadata = buildMetadata({
  title: 'Our Focus Areas',
  description: 'The six domains New Delhi Dialogues works across - AI and emerging technology, climate, public health, economy, governance, and global affairs.',
  path: '/about/focus-areas',
});

const FOCUS_AREAS = [
  {
    title: 'Artificial Intelligence and Emerging Technology',
    desc: 'Responsible AI, digital governance, cybersecurity, and frontier technologies.',
  },
  {
    title: 'Climate and Sustainability',
    desc: 'Climate policy, water security, energy transition, ESG, and resilience.',
  },
  {
    title: 'Public Health and Wellbeing',
    desc: 'Health systems, mental health, digital health, and preventive care.',
  },
  {
    title: 'Economy and Innovation',
    desc: 'MSMEs, startups, future of work, trade, and industrial policy.',
  },
  {
    title: 'Governance and Democracy',
    desc: 'Public institutions, regulation, digital public infrastructure, and citizen participation.',
  },
  {
    title: 'Global Affairs and Diplomacy',
    desc: 'International cooperation, strategic affairs, and global governance.',
  },
];

export default function FocusAreasPage() {
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionHeader
          label="Our Focus Areas"
          title={<>Where NDD <span className="c-orange">Directs Attention</span></>}
        />
        <div className={styles.grid}>
          {FOCUS_AREAS.map((area) => (
            <article key={area.title} className={styles.card}>
              <h3 className={styles.cardTitle}>{area.title}</h3>
              <p className={styles.cardDesc}>{area.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

