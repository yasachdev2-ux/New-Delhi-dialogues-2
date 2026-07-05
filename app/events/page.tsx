import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { getAllSpeakers, getAllEvents } from '@/lib/content';
import SectionHeader from '@/components/ui/SectionHeader';
import SpeakerTimeline from '@/components/timeline/SpeakerTimeline';
import EventCascade from '@/components/events/EventCascade';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = buildMetadata({
  title: 'Events',
  description: "Distinguished speakers and upcoming events from New Delhi Dialogues.",
  path: '/events',
});

export default function EventsHubPage() {
  const speakers = getAllSpeakers();
  const events = getAllEvents();

  return (
    <>
      <div className={styles.hero}>
        <div className="container">
          <span className={styles.heroLabel}>03 - Events</span>
          <h1 className={styles.heroTitle}>NDD <span className="c-orange">Events</span></h1>
          <p className={styles.heroSub}>
            The voices that have shaped our dialogues, and the conversations still to come.
          </p>
        </div>
      </div>

      <section className={styles.section}>
        <div className="container">
          <SectionHeader
            label="Distinguished Speakers"
            title={<>Voices That Have <span className="c-orange">Shaped NDD</span></>}
          />
          <SpeakerTimeline speakers={speakers} />
          <div className={styles.viewAllWrap}>
            <Link href="/events/speakers" className={styles.viewAllLink}>View Full Speaker Timeline -&gt;</Link>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="container">
          <SectionHeader label="Events Calendar" title={<>Upcoming <span className="c-orange">Events</span></>} />
          <EventCascade events={events} />
        </div>
      </section>
    </>
  );
}
