import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import SectionHeader from '@/components/ui/SectionHeader';
import Timeline, { type TimelineItem } from '@/components/layout/Timeline';
import styles from './page.module.css';

export const metadata: Metadata = buildMetadata({
  title: "India's Policy Landscape",
  description: "How AI and Digital Governance to Climate, Health, Trade, Education, and Global Affairs affect tommorrow and where NDD fits.",
  path: '/about/india-policy-landscape',
});

export default function PolicyLandscapePage() {
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionHeader
          label="INDIA'S POLICY LANDSCAPE"
          title={
            <>
              Understanding the Issues
              <br />
              <span className="c-orange">Shaping Tomorrow</span>
            </>
          }
          intro="From AI and Digital Governance to Climate, Health, Trade, Education, and Global Affairs."
        />

        <hr className={styles.divider} /><br/>

        <div className={styles.content}>
          <p>
            The challenges defining India's future do not exist in silos.
            Technology influences healthcare. Climate shapes the economy.
            Global geopolitics affects trade. Public policy connects them all.
          </p><br/>

          <p>
            New Delhi Dialogues serves as a platform where these intersections
            are explored through research, dialogue, media, and stakeholder
            engagement—bringing together diverse perspectives to develop
            practical, evidence-informed policy solutions for a rapidly changing
            world.
          </p>
        </div>
      </div>
    </section>
  );
}