import Link from 'next/link';
import styles from './Hero.module.css';

interface HeroCta {
  label: string;
  href: string;
  variant: 'primary' | 'ghost';
}
interface HeroStat {
  value: string;
  label: string;
}

interface HeroProps {
  eyebrows: string[];
  headingLines: string[];
  headingEm: string;
  sub: string;
  goal: React.ReactNode;
  ctas: HeroCta[];
  stats: HeroStat[];
}

export default function Hero({ eyebrows, headingLines, headingEm, sub, goal, ctas, stats }: HeroProps) {
  return (
    <header className={styles.hero} role="banner">
      <div className={styles.bg} aria-hidden="true">
        <div className={styles.glowBlue}></div>
        <div className={styles.glowOrange}></div>
      </div>
      <div className={`container ${styles.inner}`}>
        <div className={styles.eyebrow}>
          {eyebrows.map((tag, i) => (
            <span key={tag}>
              <span className={styles.eyebrowTag}>{tag}</span>
              {i < eyebrows.length - 1 && <span className={styles.eyebrowSep} aria-hidden="true">&middot;</span>}
            </span>
          ))}
        </div>
        <h1 className={styles.heading}>
          {headingLines.map((line) => <span key={line} className={styles.headingLine}>{line}</span>)}
          <em className={styles.headingEm}>{headingEm}</em>
        </h1>
        <p className={styles.sub}>{sub}</p>
        <p className={styles.goal}>{goal}</p>
        <div className={styles.ctas} role="group" aria-label="Primary actions">
          {ctas.map((cta) => (
            <Link key={cta.href} href={cta.href} className={cta.variant === 'primary' ? styles.btnPrimary : styles.btnGhost}>
              {cta.label}
            </Link>
          ))}
        </div>
        <div className={styles.colonnade} role="list" aria-label="Key metrics">
          {stats.map((s, i) => (
            <div key={s.label} className={styles.colonnadeGroup}>
              <div className={styles.pillar} role="listitem">
                <span className={styles.colNum}>{s.value}</span>
                <span className={styles.colLabel}>{s.label}</span>
              </div>
              {i < stats.length - 1 && <div className={styles.rule} aria-hidden="true" />}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
