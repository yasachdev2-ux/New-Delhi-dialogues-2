import styles from './SectionHeader.module.css';

interface SectionHeaderProps {
  label: string;
  title: React.ReactNode;
  intro?: string;
  id?: string;
  tone?: 'dark' | 'light'; // 'dark' = white text (for black/default sections), 'light' = black text (for sandstone/gray sections)
}

export default function SectionHeader({ label, title, intro, id, tone = 'dark' }: SectionHeaderProps) {
  return (
    <header className={styles.hdr}>
      <span className={styles.label}>{label}</span>
      <h2 className={`${styles.title} ${tone === 'light' ? styles.titleLight : ''}`} id={id}>{title}</h2>
      {intro && <p className={`${styles.intro} ${tone === 'light' ? styles.introLight : ''}`}>{intro}</p>}
    </header>
  );
}