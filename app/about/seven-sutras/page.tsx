import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import SectionHeader from '@/components/ui/SectionHeader';
import type { Sutra } from '@/lib/types';
import styles from './page.module.css';

export const metadata: Metadata = buildMetadata({
  title: 'The Seven Sutras for AI Governance',
  description: "An overview of India's Seven Sutras — the guiding principles behind India's national AI Governance Guidelines: Trust, People First, Fairness, Accountability, Understandability, Safety, and Innovation.",
  path: '/about/seven-sutras',
});

const SUTRAS: Sutra[] = [
  { numeral: '1', text: 'Trust as Foundation' },
  { numeral: '2', text: 'People First' },
  { numeral: '3', text: 'Fairness & Equity' },
  { numeral: '4', text: 'Accountability' },
  { numeral: '5', text: 'Understandable by Design' },
  { numeral: '6', text: 'Safety & Resilience' },
  { numeral: '7', text: 'Innovation over Restraint' },
];

export default function SevenSutrasPage() {
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionHeader
          label="India's Seven Sutras for AI Governance"
          title={<>The Seven <span className="c-orange">Sutras</span></>}
        />
        <div className={styles.grid} role="list">
          {SUTRAS.map((s) => (
            <div key={s.numeral} className={styles.sutra} role="listitem">
              <span className={styles.numeral} aria-hidden="true">{s.numeral}</span>
              <span>{s.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
