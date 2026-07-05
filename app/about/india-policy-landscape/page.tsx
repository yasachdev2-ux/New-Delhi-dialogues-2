import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import SectionHeader from '@/components/ui/SectionHeader';
import Timeline, { type TimelineItem } from '@/components/layout/Timeline';
import styles from './page.module.css';

export const metadata: Metadata = buildMetadata({
  title: "India's Policy Landscape",
  description: "How the IndiaAI Mission, India's AI Governance Guidelines, and the Digital India framework are shaping India's approach to responsible AI — and where NDD fits.",
  path: '/about/india-policy-landscape',
});

const MILESTONES: TimelineItem[] = [
  {
    id: 'national-ai-strategy',
    label: '2018',
    title: 'National AI Strategy',
    description: "India's first National Strategy for Artificial Intelligence launched by NITI Aayog, establishing sector-specific AI applications across healthcare, agriculture, education, and urban infrastructure.",
  },
  {
    id: 'indiaai-mission',
    label: '2024',
    title: 'IndiaAI Mission — Rs 10,371 Crore',
    description: 'Cabinet-approved in March 2024 with a five-year budget to build compute infrastructure, indigenous foundation models, and a national dataset platform.',
  },
  {
    id: 'seven-sutras-guidelines',
    label: '2025',
    title: 'India AI Governance Guidelines — Seven Sutras',
    description: "India's first systematic national blueprint for Safe & Trusted AI, structured around seven guiding principles.",
    featured: true,
  },
];

export default function PolicyLandscapePage() {
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionHeader
          label="India's Policy Landscape"
          title={<>Operating at the Heart of <span className="c-orange">India&rsquo;s AI Moment</span></>}
          intro="India is at an inflection point. The IndiaAI Mission (March 2024), India's AI Governance Guidelines (2025), and the Digital India framework position the country as a global leader in ethical AI. NDD sits at the centre of this transformation."
        />
        <Timeline items={MILESTONES} />
      </div>
    </section>
  );
}
