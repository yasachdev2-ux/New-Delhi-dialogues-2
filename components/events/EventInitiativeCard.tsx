import type { EventInitiative } from '@/lib/types';
import InlineRegisterForm from '@/components/forms/InlineRegisterForm';
import styles from './EventInitiativeCard.module.css';

export default function EventInitiativeCard({ item }: { item: EventInitiative }) {
  const featured = item.variant === 'featured';
  return (
    <article className={featured ? styles.cardFeatured : styles.card} id={item.slug}>
      <div className={featured ? styles.numInv : styles.num}>{item.num}</div>
      <h3 className={featured ? styles.titleInv : styles.title}>{item.title}</h3>
      <p className={featured ? styles.textInv : styles.text}>{item.description}</p>
      <InlineRegisterForm
        eventId={`${item.slug}-2025`}
        eventTitle={item.title}
        extraFields={item.formFields}
        variant={featured ? 'inverted' : 'default'}
      />
    </article>
  );
}
