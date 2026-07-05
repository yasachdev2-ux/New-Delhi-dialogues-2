import Link from 'next/link';
import type { Article } from '@/lib/types';
import styles from './ArticleCard.module.css';

export default function ArticleCard({ article, index }: { article: Article; index: number }) {
  return (
    <Link href={`/media/articles/${article.slug}`} className={styles.item}>
      <span className={styles.num} aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
      <div>
        <div className={styles.cat}>{article.category}</div>
        <div className={styles.title}>{article.title}</div>
        <div className={styles.meta}>
          {new Date(article.publishedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })} - {article.author}
        </div>
      </div>
    </Link>
  );
}
