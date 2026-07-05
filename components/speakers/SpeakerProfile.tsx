import Image from 'next/image';
import type { Speaker } from '@/lib/types';
import styles from './SpeakerProfile.module.css';

export default function SpeakerProfile({ speaker }: { speaker: Speaker }) {
  return (
    <div className={styles.wrap}>
      <div className={styles.photoWrap}>
        <Image src={speaker.image} alt={speaker.name} width={180} height={180} className={styles.photo} priority />
      </div>
      <div className={styles.body}>
        <span className={styles.date}>
          {new Date(speaker.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
        </span>
        <h1 className={styles.name}>{speaker.name}</h1>
        <p className={styles.role}>{speaker.designation}{speaker.organisation ? `, ${speaker.organisation}` : ''}</p>
        {speaker.location && <p className={styles.location}>{speaker.location}</p>}
        <div className={styles.topicBlock}>
          <span className={styles.topicLabel}>Session Topic</span>
          <h2 className={styles.topic}>{speaker.topic}</h2>
        </div>
      </div>
    </div>
  );
}
