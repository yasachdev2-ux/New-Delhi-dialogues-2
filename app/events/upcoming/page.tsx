import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { getAllEvents } from '@/lib/content';
import SectionHeader from '@/components/ui/SectionHeader';
import EventCascade from '@/components/events/EventCascade';
import styles from './page.module.css';

export const metadata: Metadata = buildMetadata({
  title: 'Upcoming Events',
  description: "NDD's full events calendar.",
  path: '/events/upcoming',
});

export default function UpcomingEventsPage() {
  const events = getAllEvents();

  return (
    <section className={styles.section}>
      <div className="container">
        <SectionHeader label="Events Calendar" title={<>All <span className="c-orange">Events</span></>} />
        <EventCascade events={events} />
      </div>
    </section>
  );
}
