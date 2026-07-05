import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { getAllSpeakers } from '@/lib/content';
import SectionHeader from '@/components/ui/SectionHeader';
import SpeakerTimeline from '@/components/timeline/SpeakerTimeline';
import styles from './page.module.css';

export const metadata: Metadata = buildMetadata({
  title: 'Distinguished Speakers',
  description: 'A timeline of the leaders in government, diplomacy, and public policy who have shaped New Delhi Dialogues.',
  path: '/events/speakers',
});

export default function SpeakersPage() {
  const speakers = getAllSpeakers();

  return (
    <section className={styles.section}>
      <div className="container">
        <SectionHeader
          label="Distinguished Speakers"
          title={<>Voices That Have <span className="c-orange">Shaped NDD</span></>}
          intro="A chronological record of the policymakers, diplomats, and thought leaders who have joined New Delhi Dialogues."
        />
        <SpeakerTimeline speakers={speakers} />
      </div>
    </section>
  );
}
