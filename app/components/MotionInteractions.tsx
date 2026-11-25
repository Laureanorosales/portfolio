'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function MotionInteractions() {
 const pathname = usePathname();
 useEffect(() => {
  const media = window.matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)');
  const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-tilt], [data-magnetic]'));
  const cleanups: (() => void)[] = [];
  for (const element of elements) {
   const move = (event: PointerEvent) => {
    if (!media.matches || event.pointerType === 'touch') return;
    const rect = element.getBoundingClientRect();
    const x = Math.max(-1, Math.min(1, (event.clientX - rect.left) / rect.width * 2 - 1));
    const y = Math.max(-1, Math.min(1, (event.clientY - rect.top) / rect.height * 2 - 1));
    if (element.hasAttribute('data-tilt')) {
     element.style.setProperty('--tilt-x', `${-y * 7}deg`);
     element.style.setProperty('--tilt-y', `${x * 7}deg`);
    } else {
     element.style.setProperty('--mag-x', `${x * 4}px`);
     element.style.setProperty('--mag-y', `${y * 3}px`);
    }
   };
   const reset = () => { for (const key of ['--tilt-x', '--tilt-y', '--mag-x', '--mag-y']) element.style.removeProperty(key); };
   element.addEventListener('pointermove', move, { passive: true });
   element.addEventListener('pointerleave', reset);
   media.addEventListener('change', reset);
   cleanups.push(() => { element.removeEventListener('pointermove', move); element.removeEventListener('pointerleave', reset); media.removeEventListener('change', reset); reset(); });
  }
  const spotlight = document.querySelector<HTMLElement>('.global-spotlight');
  if (spotlight) {
   const reset = () => spotlight.removeAttribute('data-active');
   const move = (event: PointerEvent) => {
    if (!media.matches || event.pointerType === 'touch') { reset(); return; }
    spotlight.style.transform = `translate3d(${event.clientX - 200}px, ${event.clientY - 200}px, 0)`;
    if (!spotlight.hasAttribute('data-active')) {
     // Place the invisible layer first so the first movement never travels from a stale position.
     void spotlight.offsetWidth;
     spotlight.setAttribute('data-active', '');
    }
   };
   const leave = (event: PointerEvent) => { if (!event.relatedTarget) reset(); };
   window.addEventListener('pointermove', move, { passive: true });
   document.addEventListener('pointerout', leave);
   window.addEventListener('blur', reset);
   media.addEventListener('change', reset);
   cleanups.push(() => { window.removeEventListener('pointermove', move); document.removeEventListener('pointerout', leave); window.removeEventListener('blur', reset); media.removeEventListener('change', reset); reset(); });
  }
  return () => cleanups.forEach(cleanup => cleanup());
 }, [pathname]);
 return null;
}
