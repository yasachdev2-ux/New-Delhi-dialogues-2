'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Speaker } from '@/lib/types';
import styles from './SpeakerTimeline.module.css';

export default function SpeakerTimeline({ speakers }: { speakers: Speaker[] }) {
  const viewportRef = useRef<HTMLDivElement>(null);

  function scrollByCard(direction: 1 | -1) {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const card = viewport.querySelector(`.${styles.node}`) as HTMLElement | null;
    const step = card ? card.getBoundingClientRect().width + 56 : 320;
    viewport.scrollBy({ left: step * direction, behavior: 'smooth' });
  }

  return (
    <div className={styles.wrap}>
      <button className={`${styles.arrow} ${styles.arrowPrev}`} onClick={() => scrollByCard(-1)} aria-label="Scroll to earlier speakers">
        &larr;
      </button>

      <div className={styles.viewport} ref={viewportRef}>
        <div className={styles.track}>
          <div className={styles.line} aria-hidden="true" />
          {speakers.map((s) => (
            <div key={s.slug} className={styles.node}>
              <span className={styles.dot} aria-hidden="true" />
              <span className={styles.connector} aria-hidden="true" />
              <Link href={`/events/speakers/${s.slug}`} className={styles.card}>
                <div className={styles.photoWrap}>
                  <Image src={s.image} alt={s.name} width={64} height={64} className={styles.photo} />
                </div>
                <div className={styles.body}>
                  <span className={styles.date}>
                    {new Date(s.date).toLocaleDateString('en-IN', { month: 'short', year: 'numeric' })}
                  </span>
                  <h3 className={styles.topic}>{s.topic}</h3>
                  <p className={styles.name}>{s.name}</p>
                  <p className={styles.role}>{s.designation}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <button className={`${styles.arrow} ${styles.arrowNext}`} onClick={() => scrollByCard(1)} aria-label="Scroll to later speakers">
        &rarr;
      </button>
    </div>
  );
}


