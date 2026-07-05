import type { EventPlatform } from '@/lib/types';
import InlineRegisterForm from '@/components/forms/InlineRegisterForm';
import styles from './PlatformCard.module.css';

export default function PlatformCard({ platform }: { platform: EventPlatform }) {
  const inv = platform.variant === 'inverted';
  return (
    <article className={inv ? styles.cardInv : styles.card} id={platform.slug}>
      <span className={inv ? styles.tagInv : styles.tag}>{platform.tag}</span>
      <h3 className={inv ? styles.titleInv : styles.title}>{platform.title}</h3>
      {platform.description.map((p, i) => (
        <p key={i} className={inv ? styles.textInv : undefined}>{p}</p>
      ))}
      {platform.ctaType === 'form' ? (
        <InlineRegisterForm
          eventId={`${platform.slug}-partnership`}
          eventTitle={platform.title}
          extraFields={platform.formFields}
          variant={platform.variant}
        />
      ) : (
        <a href="/contact" className={inv ? styles.linkInv : styles.link}>{platform.ctaLabel}</a>
      )}
    </article>
  );
}
