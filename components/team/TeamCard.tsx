'use client';

import Image from 'next/image';
import { useReveal } from '@/hooks/useReveal';
import type { TeamMember } from '@/lib/types';
import styles from './TeamCard.module.css';

export default function TeamCard({ member, index }: { member: TeamMember; index: number }) {
  const ref = useReveal<HTMLDivElement>(index * 80);
  const toneColor = member.avatarTone === 'sand' ? '#c4a882' : '#9a9a92';
  const toneBg = member.avatarTone === 'sand' ? '#f5ede0' : '#f0f0ee';

  return (
    <div ref={ref} className={`${styles.card} reveal`}>
      <div className={styles.avatar}>
        {member.photo ? (
          <Image src={member.photo} alt={member.name} width={80} height={80} />
        ) : (
          <svg viewBox="0 0 80 80" fill="none" aria-hidden="true">
            <rect width="80" height="80" fill={toneBg} />
            <circle cx="40" cy="30" r="16" fill={toneColor} />
            <ellipse cx="40" cy="72" rx="24" ry="16" fill={toneColor} />
          </svg>
        )}
      </div>
      <div className={styles.body}>
        <h4 className={styles.name}>{member.name}</h4>
        <span className={styles.role}>{member.role}</span>
        <p>{member.bio}</p>
      </div>
    </div>
  );
}
