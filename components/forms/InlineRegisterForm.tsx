'use client';

import { useState } from 'react';
import styles from './InlineRegisterForm.module.css';

interface Props {
  eventId: string;
  eventTitle: string;
  extraFields?: ('profession' | 'organisation' | 'nationality')[];
  variant?: 'default' | 'inverted';
}

export default function InlineRegisterForm({ eventId, eventTitle, extraFields = [], variant = 'default' }: Props) {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch('/api/event-register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, eventId, eventTitle, type: 'delegate', submittedAt: new Date().toISOString() }),
      });
      const result = await res.json();
      setStatus(result.success ? 'success' : 'error');
      if (result.success) form.reset();
    } catch {
      setStatus('error');
    }
  }

  return (
    <div className={variant === 'inverted' ? styles.wrapInv : styles.wrap}>
      <button type="button" className={styles.toggle} onClick={() => setOpen((v) => !v)}>
        {open ? 'Close' : 'Register Interest'}
      </button>
      {open && (
        <form className={styles.form} onSubmit={handleSubmit}>
          <label>Full Name *<input type="text" name="name" required placeholder="Your full name" /></label>
          <label>Age *<input type="number" name="age" required min={16} max={100} placeholder="Your age" /></label>
          <label>Email *<input type="email" name="email" required placeholder="your@email.com" /></label>
          <label>Phone *<input type="tel" name="phone" required placeholder="+91 98765 43210" /></label>
          {extraFields.includes('profession') && (
            <label>Profession *<input type="text" name="profession" required placeholder="e.g. Ambassador, CEO, Policy Analyst" /></label>
          )}
          {extraFields.includes('organisation') && (
            <label>Organisation{extraFields.includes('profession') ? ' *' : ''}<input type="text" name="organisation" required={extraFields.includes('profession')} placeholder="Your organisation" /></label>
          )}
          {extraFields.includes('nationality') && (
            <label>Nationality<input type="text" name="nationality" placeholder="e.g. Indian" /></label>
          )}
          <button type="submit" className={styles.submit} disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : 'Submit'}
          </button>
          {status === 'success' && <p className={styles.success}>Received - we will be in touch shortly.</p>}
          {status === 'error' && <p className={styles.error}>Something went wrong. Please try again.</p>}
        </form>
      )}
    </div>
  );
}
