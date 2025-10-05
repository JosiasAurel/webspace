"use client";

import { useEffect, useState } from 'react';

export default function ScrollCircle() {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [bump, setBump] = useState(false);
  const started = progress > 0.001;

  useEffect(() => {
    const onScroll = () => {
      const se = document.scrollingElement as HTMLElement | null;
      const doc = document.documentElement;
      const body = document.body;
      const scrollTop = (se?.scrollTop ?? doc.scrollTop ?? body.scrollTop ?? window.pageYOffset ?? 0) as number;
      const scrollHeight = (se?.scrollHeight ?? doc.scrollHeight ?? body.scrollHeight ?? 1) as number;
      const clientHeight = (se?.clientHeight ?? doc.clientHeight ?? body.clientHeight ?? window.innerHeight) as number;
      const max = Math.max(1, scrollHeight - clientHeight);
      const p = Math.min(1, Math.max(0, scrollTop / max));
      setProgress(p);
      const atBottom = p >= 0.999;
      if (atBottom && !isComplete) {
        setIsComplete(true);
        setBump(true);
        window.setTimeout(() => setBump(false), 280);
      } else if (!atBottom && isComplete) {
        setIsComplete(false);
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <div
      className={`scroll-circle${started ? ' started' : ''}${isComplete ? ' complete' : ''}${bump ? ' bump' : ''}`}
      aria-hidden
      title="Reading progress"
    >
      {(() => {
        const size = 44;
        const stroke = 6;
        const r = (size - stroke) / 2;
        const c = 2 * Math.PI * r;
        const offset = c * (1 - progress);
        return (
          <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
            <circle cx={size/2} cy={size/2} r={r} stroke="#2563eb" strokeWidth={stroke} fill="none" strokeLinecap="round" strokeDasharray={c} strokeDashoffset={offset} />
          </svg>
        );
      })()}
    </div>
  );
}


