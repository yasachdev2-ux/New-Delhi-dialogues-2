import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { getAllPodcasts } from '@/lib/content';
import SectionHeader from '@/components/ui/SectionHeader';
import PodcastCard from '@/components/media/PodcastCard';
import styles from './page.module.css';

export const metadata: Metadata = buildMetadata({
  title: 'Podcasts',
  description: 'The New Delhi Dialogues Podcast - conversations on AI, policy, governance, ethics, and society.',
  path: '/media/podcasts',
});

const TOPICS = ['Artificial Intelligence', 'Public Policy', 'Governance', 'Ethics and Society', 'Public Health', 'Environment'];

export default function PodcastsPage() {
  const podcasts = getAllPodcasts();
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionHeader label="Podcasts" title={<>Flagship <span className="c-orange">Podcast</span></>} tone="light" />
        <div className={styles.intro}>
          <div>
            <h2 className={styles.showTitle}>New Delhi Dialogues Podcast</h2>
            <p className={styles.tagline}><em>Engaging conversations on AI, policy, governance, ethics, and society.</em></p>
            <p>This flagship podcast series explores the critical intersections of Artificial Intelligence, environment, public health, and human well-being.</p>
            <div className={styles.topics}>
              {TOPICS.map((t) => (
                <a key={t} href="https://www.youtube.com/@NewDelhiDialogues" target="_blank" rel="noopener noreferrer" className={styles.topicTag}>{t}</a>
              ))}
            </div>
            <a href="https://www.youtube.com/@NewDelhiDialogues?sub_confirmation=1" target="_blank" rel="noopener noreferrer" className={styles.subscribeBtn}>
              Subscribe to Podcast
            </a>
          </div>
        </div>
        <h2 className={styles.episodesHeading}>Latest Episodes</h2>
        <div className={styles.grid}>
          {podcasts.map((p) => <PodcastCard key={p.slug} podcast={p} />)}
        </div>
      </div>
    </section>
  );
}
