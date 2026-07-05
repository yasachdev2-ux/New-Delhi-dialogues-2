'use client';

import { useState } from 'react';
import styles from './ContactForm.module.css';

const ENQUIRY_TYPES = ['General', 'Partnership', 'Media', 'Speaking Opportunity', 'Research Collaboration'];

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, source: 'Contact Form', submittedAt: new Date().toISOString() }),
      });
      const result = await res.json();
      setStatus(result.success ? 'success' : 'error');
      if (result.success) form.reset();
    } catch {
      setStatus('error');
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.grid}>
        <label>Full Name *<input type="text" name="name" required /></label>
        <label>Age *<input type="number" name="age" required min={16} max={100} /></label>
        <label>Nationality<input type="text" name="nationality" /></label>
        <label>Email *<input type="email" name="email" required /></label>
        <label>Phone *<input type="tel" name="phone" required /></label>
        <label>Enquiry Type
          <select name="enquiry" defaultValue="General">
            {ENQUIRY_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </label>
      </div>
      <label className={styles.messageLabel}>Message *<textarea name="message" rows={5} required /></label>
      <button type="submit" className={styles.submit} disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending...' : 'Send Message'}
      </button>
      {status === 'success' && <p className={styles.success}>Thank you - we will be in touch shortly.</p>}
      {status === 'error' && <p className={styles.error}>Something went wrong. Please try again.</p>}
    </form>
  );
}
