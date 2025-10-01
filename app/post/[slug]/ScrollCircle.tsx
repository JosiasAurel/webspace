"use client";

import { useEffect, useState } from 'react';

export default function ScrollCircle() {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [bump, setBump] = useState(false);
  const started = progress > 0.001;

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop || window.pageYOffset || 0;
      const max = Math.max(1, doc.scrollHeight - doc.clientHeight);
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
      style={{ ['--p' as any]: String(progress) }}
    />
  );
}


