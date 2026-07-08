import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getAllArticles, getArticleBySlug } from '@/lib/content';
import { buildMetadata, SITE_URL } from '@/lib/seo';
import styles from './page.module.css';

export function generateStaticParams() {
  return getAllArticles().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return buildMetadata({
    title: article.title,
    description: article.excerpt,
    path: `/media/articles/${article.slug}`,
  });
}

export default async function ArticleDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    datePublished: article.publishedAt,
    author: { '@type': 'Person', name: article.author },
    url: `${SITE_URL}/media/articles/${article.slug}`,
  };

  return (
    <article className={styles.section}>
      <div className="container">
        <Link href="/media/articles" className={styles.back}>&larr; All Articles</Link>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <span className={styles.category}>{article.category}</span>
        <h1 className={styles.title}>{article.title}</h1>
        <div className={styles.byline}>
          {article.author} - {new Date(article.publishedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
        </div>
        <p className={styles.excerpt}>{article.excerpt}</p>
        <div className={styles.comingSoon}>
          Full article text will be published here shortly. For enquiries, <Link href="/contact">contact us</Link>.
        </div>
      </div>
    </article>
  );
}
