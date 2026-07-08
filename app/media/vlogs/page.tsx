import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { getAllVlogs } from '@/lib/content';
import SectionHeader from '@/components/ui/SectionHeader';
import VideoCard from '@/components/media/VideoCard';
import styles from './page.module.css';

export const metadata: Metadata = buildMetadata({
  title: 'Vlogs',
  description: 'Recorded sessions, panel discussions, and keynote addresses from NDD events and dialogues.',
  path: '/media/vlogs',
});

export default function VlogsPage() {
  const vlogs = getAllVlogs();
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionHeader
          label="Vlogs"
          title={<>Watch NDD <span className="c-orange">Conversations</span></>}
          intro="Recorded sessions, panel discussions, and keynote addresses from NDD events and dialogues."
         
        />
        <div className={styles.grid}>
          {vlogs.map((v) => <VideoCard key={v.slug} vlog={v} />)}
        </div>
      </div>
    </section>
  );
}
