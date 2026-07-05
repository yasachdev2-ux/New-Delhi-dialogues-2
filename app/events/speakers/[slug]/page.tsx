import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getAllSpeakers, getSpeakerBySlug } from '@/lib/content';
import { buildMetadata, SITE_URL } from '@/lib/seo';
import SpeakerProfile from '@/components/speakers/SpeakerProfile';
import styles from './page.module.css';

export function generateStaticParams() {
  return getAllSpeakers().map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const speaker = getSpeakerBySlug(params.slug);
  if (!speaker) return {};
  return buildMetadata({
    title: speaker.name,
    description: `${speaker.name} - ${speaker.designation} - spoke at New Delhi Dialogues on "${speaker.topic}".`,
    path: `/events/speakers/${speaker.slug}`,
    image: speaker.image,
  });
}

export default function SpeakerDetailPage({ params }: { params: { slug: string } }) {
  const speaker = getSpeakerBySlug(params.slug);
  if (!speaker) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: speaker.name,
    jobTitle: speaker.designation,
    affiliation: speaker.organisation || undefined,
    url: `${SITE_URL}/events/speakers/${speaker.slug}`,
    image: `${SITE_URL}${speaker.image}`,
  };

  return (
    <section className={styles.section}>
      <div className="container">
        <Link href="/events/speakers" className={styles.back}>&larr; All Speakers</Link>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <SpeakerProfile speaker={speaker} />
      </div>
    </section>
  );
}
