'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Speaker } from '@/lib/types';
import styles from './SpeakerCarousel.module.css';

export default function SpeakerCarousel({ speakers }: { speakers: Speaker[] }) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchStartX = useRef(0);
  const n = speakers.length;

  function next() { setIndex((i) => (i + 1) % n); }
  function prev() { setIndex((i) => (i - 1 + n) % n); }

  function start() {
    stop();
    timerRef.current = setInterval(next, 2000);
  }
  function stop() {
    if (timerRef.current) clearInterval(timerRef.current);
  }

  useEffect(() => {
    start();
    return stop;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [n]);

  if (n === 0) return null;

  return (
    <div
      className={styles.wrap}
      onMouseEnter={stop}
      onMouseLeave={start}
      onTouchStart={(e) => { stop(); touchStartX.current = e.touches[0].clientX; }}
      onTouchEnd={(e) => {
        const delta = e.changedTouches[0].clientX - touchStartX.current;
        if (delta > 40) prev();
        else if (delta < -40) next();
        start();
      }}
    >
      <button className={`${styles.arrow} ${styles.arrowPrev}`} onClick={() => { stop(); prev(); start(); }} aria-label="Previous speaker">
        &larr;
      </button>

      <div className={styles.viewport}>
        <div className={styles.track} style={{ transform: `translateX(-${index * 100}%)` }}>
          {speakers.map((s) => (
            <Link key={s.slug} href={`/events/speakers/${s.slug}`} className={styles.slide}>
              <div className={styles.photoWrap}>

                {s.image ? (

                  <Image src={s.image} alt={s.name} width={280} height={280} className={styles.photo} />

                ) : (

                  <div className={styles.photoFallback} aria-hidden="true">

                    {s.name.split(' ').filter((w) => w.length > 2).slice(-2).map((w) => w[0].toUpperCase()).join('')}

                  </div>

                )}

              </div>
              <div className={styles.slideBody}>
                <h3 className={styles.topic}>{s.topic}</h3>
                <span className={styles.role}>{s.designation}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <button className={`${styles.arrow} ${styles.arrowNext}`} onClick={() => { stop(); next(); start(); }} aria-label="Next speaker">
        &rarr;
      </button>

      <div className={styles.dots}>
        {speakers.map((s, i) => (
          <button
            key={s.slug}
            className={`${styles.dot} ${i === index ? styles.dotActive : ''}`}
            onClick={() => { stop(); setIndex(i); start(); }}
            aria-label={`Go to speaker ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}


