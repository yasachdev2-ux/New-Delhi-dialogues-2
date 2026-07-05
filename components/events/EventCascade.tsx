'use client';

import { useMemo, useState } from 'react';
import type { EventItem } from '@/lib/types';
import styles from './EventCascade.module.css';

const FILTERS: { label: string; value: EventItem['eventType'] | 'all' }[] = [
  { label: 'All', value: 'all' },
  { label: 'Summit', value: 'summit' },
  { label: 'Roundtable', value: 'roundtable' },
  { label: 'Workshop', value: 'workshop' },
  { label: 'Awards', value: 'awards' },
  { label: 'Pitch', value: 'pitch' },
];

const TYPE_LABELS: Record<EventItem['eventType'], string> = {
  summit: 'Summit', roundtable: 'Roundtable', workshop: 'Workshop', awards: 'Awards', pitch: 'Startup Pitch',
};

export default function EventCascade({ events }: { events: EventItem[] }) {
  const [filter, setFilter] = useState<EventItem['eventType'] | 'all'>('all');

  const filtered = useMemo(
    () => (filter === 'all' ? events : events.filter((e) => e.eventType === filter)),
    [events, filter]
  );

  return (
    <div>
      <div className={styles.filterBar} role="group" aria-label="Filter events by type">
        {FILTERS.map((f) => (
          <button
            key={f.value}
            className={`${styles.filterTab} ${filter === f.value ? styles.filterTabActive : ''}`}
            onClick={() => setFilter(f.value)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className={styles.cascade} aria-live="polite">
        {filtered.length === 0 && <div className={styles.empty}>No {filter} events found.</div>}
        {filtered.map((item) => {
          const isPast = item.status === 'past';
          const d = new Date(item.date);
          return (
            <div key={item.id} className={styles.item} style={isPast ? { opacity: 0.55 } : undefined}>
              <div className={styles.date}>
                <span className={styles.day}>{String(d.getDate()).padStart(2, '0')}</span>
                <span className={styles.month}>{d.toLocaleDateString('en-IN', { month: 'short' }).toUpperCase()}</span>
              </div>
              <div className={styles.body}>
                <div className={styles.type}>{TYPE_LABELS[item.eventType]}</div>
                <div className={styles.title}>{item.title}</div>
                <p className={styles.desc}>{item.description} - {item.venue}</p>
              </div>
              <span className={`${styles.tag} ${!isPast ? styles.tagLive : ''}`}>{isPast ? 'Past' : 'Upcoming'}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
