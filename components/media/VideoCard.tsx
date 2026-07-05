import Link from 'next/link';
import type { Vlog } from '@/lib/types';
import styles from './VideoCard.module.css';

export default function VideoCard({ vlog }: { vlog: Vlog }) {
  return (
    <article className={styles.card}>
      <div className={styles.embedWrap}>
        {vlog.youtubeId ? (
          <iframe
            className={styles.embed}
            src={`https://www.youtube.com/embed/${vlog.youtubeId}`}
            title={vlog.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          />
        ) : (
          <div className={styles.placeholder}>
            <div aria-hidden="true">Play</div>
            <span>Video Coming Soon</span>
          </div>
        )}
      </div>
      <div className={styles.meta}>
        <span className={styles.tag}>{vlog.tag}</span>
        <h3>{vlog.title}</h3>
        <p>{vlog.description}</p>
        {vlog.youtubeId ? (
          <a href={`https://youtu.be/${vlog.youtubeId}`} target="_blank" rel="noopener noreferrer" className={styles.link}>
            Watch on YouTube
          </a>
        ) : (
          <Link href="/contact" className={styles.link}>Get Notified</Link>
        )}
      </div>
    </article>
  );
}
