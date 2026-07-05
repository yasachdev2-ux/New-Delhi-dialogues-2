'use client';

import { useReveal } from '@/hooks/useReveal';
import styles from './Timeline.module.css';

export interface TimelineItem {
  id: string;
  label: string;
  title: string;
  description: string;
  featured?: boolean;
}

function TimelineRow({ item, index }: { item: TimelineItem; index: number }) {
  const ref = useReveal<HTMLDivElement>(index * 90);
  return (
    <div ref={ref} className={`${styles.row} reveal`}>
      <div className={styles.marker} aria-hidden="true">
        <span className={`${styles.dot} ${item.featured ? styles.dotFeatured : ''}`} />
      </div>
      <div className={`${styles.content} ${item.featured ? styles.contentFeatured : ''}`}>
        <span className={styles.year}>{item.label}</span>
        <h4 className={styles.itemTitle}>{item.title}</h4>
        <p>{item.description}</p>
      </div>
    </div>
  );
}

export default function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className={styles.axis}>
      <div className={styles.line} aria-hidden="true" />
      <div className={styles.rows}>
        {items.map((item, i) => <TimelineRow key={item.id} item={item} index={i} />)}
      </div>
    </div>
  );
}
