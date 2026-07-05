import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { getAllArticles, getPressMentions } from '@/lib/content';
import SectionHeader from '@/components/ui/SectionHeader';
import ArticleCard from '@/components/media/ArticleCard';
import styles from './page.module.css';

export const metadata: Metadata = buildMetadata({
  title: 'Articles',
  description: "Research, analysis, and commentary from NDD's policy and research desk.",
  path: '/media/articles',
});

export default function ArticlesPage() {
  const articles = getAllArticles();
  const press = getPressMentions();
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionHeader label="Articles" title={<>Research and <span className="c-orange">Analysis</span></>} tone="light" />
        <div className={styles.list}>
          {articles.map((a, i) => <ArticleCard key={a.slug} article={a} index={i} />)}
        </div>
        <div className={styles.pressBlock}>
          <h3 className={styles.pressHeading}>As Seen In</h3>
          <div className={styles.pressList}>
            {press.map((p, i) => (
              <div key={i} className={styles.pressItem}>
                <span className={styles.pressOutlet}>{p.outlet}</span>
                <span className={styles.pressTitle}>{p.headline}</span>
                <span className={styles.pressYear}>{p.year}</span>
              </div>
            ))}
          </div>
          <p className={styles.pressNote}>
            Press links will be updated as coverage is published. For media enquiries: <a href="/contact">contact us</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
