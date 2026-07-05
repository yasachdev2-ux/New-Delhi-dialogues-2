import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getAllVlogs, getVlogBySlug } from '@/lib/content';
import { buildMetadata, SITE_URL } from '@/lib/seo';
import styles from './page.module.css';

export function generateStaticParams() {
  return getAllVlogs().map((v) => ({ slug: v.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const vlog = getVlogBySlug(params.slug);
  if (!vlog) return {};
  return buildMetadata({
    title: vlog.title,
    description: vlog.description,
    path: `/media/vlogs/${vlog.slug}`,
    image: vlog.youtubeId ? `https://img.youtube.com/vi/${vlog.youtubeId}/hqdefault.jpg` : undefined,
  });
}

export default function VlogDetailPage({ params }: { params: { slug: string } }) {
  const vlog = getVlogBySlug(params.slug);
  if (!vlog) notFound();

  return (
    <section className={styles.section}>
      <div className="container">
        <Link href="/media/vlogs" className={styles.back}>&larr; All Vlogs</Link>
        <span className={styles.tag}>{vlog.tag}</span>
        <h1 className={styles.title}>{vlog.title}</h1>
        {vlog.youtubeId ? (
          <div className={styles.embedWrap}>
            <iframe
              className={styles.embed}
              src={`https://www.youtube.com/embed/${vlog.youtubeId}`}
              title={vlog.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            />
          </div>
        ) : (
          <div className={styles.videoPlaceholder}>
            <div>Play</div>
            <span>Video Coming Soon</span>
          </div>
        )}
        <p className={styles.description}>{vlog.description}</p>
        {vlog.youtubeId ? (
          <a href={`https://youtu.be/${vlog.youtubeId}`} target="_blank" rel="noopener noreferrer" className={styles.extLink}>Watch on YouTube</a>
        ) : (
          <Link href="/contact" className={styles.extLink}>Get Notified</Link>
        )}
      </div>
    </section>
  );
}
