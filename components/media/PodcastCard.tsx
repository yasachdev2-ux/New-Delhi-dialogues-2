import Link from 'next/link';
import type { Podcast } from '@/lib/types';
import styles from './PodcastCard.module.css';

export default function PodcastCard({ podcast }: { podcast: Podcast }) {
  const thumb = podcast.youtubeId ? `https://img.youtube.com/vi/${podcast.youtubeId}/hqdefault.jpg` : null;

  return (
    <Link href={`/media/podcasts/${podcast.slug}`} className={styles.card}>
      <div className={styles.thumb}>
        {thumb ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={thumb} alt="" loading="lazy" />
        ) : (
          <div className={styles.thumbPlaceholder} aria-hidden="true">Play</div>
        )}
      </div>
      <div className={styles.body}>
        <span className={styles.type}>Podcast</span>
        <h3>{podcast.title}</h3>
        <span className={styles.meta}>
          {new Date(podcast.publishedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
          {podcast.tags[0] && <> - {podcast.tags[0]}</>}
        </span>
      </div>
    </Link>
  );
}
