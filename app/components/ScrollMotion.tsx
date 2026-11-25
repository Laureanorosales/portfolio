'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Scroll work is scheduled only in response to scroll or resize, never in a continuous loop.
export default function ScrollMotion() {
 const pathname = usePathname();
 useEffect(() => {
  const motion = matchMedia('(prefers-reduced-motion: no-preference)');
  const touch = matchMedia('(hover: none), (pointer: coarse)');
  const nativeTimeline = CSS.supports('animation-timeline: view()') && CSS.supports('animation-range: entry 0% exit 100%');
  const canClipText = CSS.supports('background-clip: text') || CSS.supports('-webkit-background-clip: text');
  const headings = Array.from(document.querySelectorAll<HTMLElement>('[data-text-fill]'));
  const previews = Array.from(document.querySelectorAll<HTMLElement>('[data-scroll-preview]'));
  let frame = 0;
  const clear = () => {
   for (const element of [...headings, ...previews]) {
    element.removeAttribute('data-scroll-fallback');
    element.removeAttribute('data-scroll-perspective');
    element.style.removeProperty('--scroll-fill');
    element.style.removeProperty('--scroll-drift');
    element.style.removeProperty('--scroll-tilt');
   }
  };
  const update = () => {
   frame = 0;
   if (!motion.matches) { clear(); return; }
   const height = window.innerHeight;
   for (const element of [...headings, ...previews]) {
    const rect = element.getBoundingClientRect();
    const progress = Math.max(0, Math.min(1, (height - rect.top) / (height + rect.height)));
    if (!nativeTimeline && (element.hasAttribute('data-scroll-preview') || canClipText)) {
     element.setAttribute('data-scroll-fallback', '');
     // Fill reaches full ink when the heading has entered the viewport.
     const value = element.hasAttribute('data-text-fill') ? Math.max(0, Math.min(1, (height - rect.top) / Math.max(1, rect.height))) : progress;
     element.style.setProperty('--scroll-fill', `${(1 - value) * 100}%`);
     element.style.setProperty('--scroll-drift', `${(progress - .5) * 3}%`);
    }
    if (touch.matches && element.hasAttribute('data-scroll-preview')) {
     element.setAttribute('data-scroll-perspective', '');
     element.style.setProperty('--scroll-tilt', `${(0.5 - progress) * 4}deg`);
    } else element.removeAttribute('data-scroll-perspective');
   }
  };
  const schedule = () => { if (motion.matches && !frame) frame = requestAnimationFrame(update); };
  const sync = () => { if (!motion.matches) { cancelAnimationFrame(frame); frame = 0; clear(); } else schedule(); };
  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule, { passive: true });
  motion.addEventListener('change', sync);
  touch.addEventListener('change', sync);
  sync();
  return () => {
   cancelAnimationFrame(frame);
   window.removeEventListener('scroll', schedule);
   window.removeEventListener('resize', schedule);
   motion.removeEventListener('change', sync);
   touch.removeEventListener('change', sync);
   clear();
  };
 }, [pathname]);
 return null;
}
