import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getAllPodcasts, getPodcastBySlug } from '@/lib/content';
import { buildMetadata, SITE_URL } from '@/lib/seo';
import styles from './page.module.css';

export function generateStaticParams() {
  return getAllPodcasts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const podcast = getPodcastBySlug(slug);
  if (!podcast) return {};
  return buildMetadata({
    title: podcast.title,
    description: podcast.description,
    path: `/media/podcasts/${podcast.slug}`,
    image: podcast.youtubeId ? `https://img.youtube.com/vi/${podcast.youtubeId}/hqdefault.jpg` : undefined,
  });
}

export default async function PodcastDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const podcast = getPodcastBySlug(slug);
  if (!podcast) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'PodcastEpisode',
    name: podcast.title,
    description: podcast.description,
    datePublished: podcast.publishedAt,
    url: `${SITE_URL}/media/podcasts/${podcast.slug}`,
  };

  return (
    <section className={styles.section}>
      <div className="container">
        <Link href="/media/podcasts" className={styles.back}>&larr; All Podcasts</Link>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <span className={styles.type}>Podcast Episode</span>
        <h1 className={styles.title}>{podcast.title}</h1>
        <span className={styles.date}>
          {new Date(podcast.publishedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
        </span>
        {podcast.youtubeId ? (
          <div className={styles.embedWrap}>
            <iframe
              className={styles.embed}
              src={`https://www.youtube.com/embed/${podcast.youtubeId}`}
              title={podcast.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            />
          </div>
        ) : (
          <div className={styles.audioPlaceholder}>Audio coming soon - subscribe to be notified.</div>
        )}
        <p className={styles.description}>{podcast.description}</p>
        <div className={styles.tags}>
          {podcast.tags.map((t) => <span key={t} className={styles.tag}>{t}</span>)}
        </div>
        <a href="https://www.youtube.com/@NewDelhiDialogues?sub_confirmation=1" target="_blank" rel="noopener noreferrer" className={styles.subscribeBtn}>
          Subscribe to Podcast
        </a>
      </div>
    </section>
  );
}
