'use client';

import { useEffect, useRef } from 'react';

export function useReveal<T extends HTMLElement>(delay = 0) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced || !('IntersectionObserver' in window)) {
      el.classList.add('visible');
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setTimeout(() => el.classList.add('visible'), delay);
        io.unobserve(el);
      },
      { threshold: 0.1, rootMargin: '0px 0px -28px 0px' }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  return ref;
}
