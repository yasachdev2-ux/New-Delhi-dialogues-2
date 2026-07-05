import type { Roundtable } from '@/lib/types';
import styles from './RoundtableCard.module.css';

function initials(name: string) {
  return name.split(' ').filter((w) => w.length > 2).slice(-2).map((w) => w[0].toUpperCase()).join('');
}

export default function RoundtableCard({ item }: { item: Roundtable }) {
  const statusLabel = item.status === 'live' ? 'Live' : item.status === 'recorded' ? 'Recorded' : 'Upcoming';
  return (
    <article className={styles.card}>
      <span className={styles.type}>Roundtable</span>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      {item.recordingUrl && (
        <a href={item.recordingUrl} target="_blank" rel="noopener noreferrer" className={styles.watchLink}>Watch Recording</a>
      )}
      <div className={styles.footer}>
        <div className={styles.speakers} aria-label="Speakers">
          {item.speakers.slice(0, 4).map((s) => <span key={s} className={styles.avatar} title={s}>{initials(s)}</span>)}
          {item.speakers.length > 4 && <span className={styles.avatar}>+{item.speakers.length - 4}</span>}
        </div>
        <div className={styles.meta}>
          <span className={styles.date}>{new Date(item.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
          <span className={`${styles.status} ${styles[`status_${item.status}`]}`}>{statusLabel}</span>
        </div>
      </div>
    </article>
  );
}
