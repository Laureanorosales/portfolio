'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const alphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZ0123456789/+-';

export default function ScrambleMotion() {
 const pathname = usePathname();
 useEffect(() => {
  const motion = window.matchMedia('(prefers-reduced-motion: no-preference)');
  const hover = window.matchMedia('(hover: hover) and (pointer: fine)');
  const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-scramble]'));
  let frame = 0;
  let current: HTMLElement | undefined;
  let startTime = 0;
  let lastUpdate = -1;
  const stop = () => { cancelAnimationFrame(frame); current?.removeAttribute('data-scrambling'); current = undefined; };
  const start = (element: HTMLElement) => {
   if (!motion.matches || current === element) return;
   stop();
   const original = element.firstElementChild?.textContent ?? '';
   const visual = element.lastElementChild;
   if (!visual || !original) return;
   current = element;
   startTime = performance.now();
   lastUpdate = -1;
   element.setAttribute('data-scrambling', '');
   const draw = (now: number) => {
    if (!current || !motion.matches) { stop(); return; }
    const progress = Math.min(1, (now - startTime) / 560);
    const tick = Math.floor((now - startTime) / 45);
    if (tick !== lastUpdate) {
     lastUpdate = tick;
     const revealed = Math.floor(progress * original.length);
     visual.textContent = Array.from(original, (char, index) => index < revealed || /\s/.test(char) ? char : alphabet[Math.floor(Math.random() * alphabet.length)]).join('');
    }
    if (progress < 1) frame = requestAnimationFrame(draw); else stop();
   };
   frame = requestAnimationFrame(draw);
  };
  const timers: number[] = [];
  let nextEntry = 0;
  const observer = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
   for (const entry of entries) if (entry.isIntersecting) {
    observer?.unobserve(entry.target);
    const delay = Math.max(0, nextEntry - performance.now());
    nextEntry = performance.now() + delay + 600;
    timers.push(window.setTimeout(() => start(entry.target as HTMLElement), delay));
   }
  }, { threshold: .5 }) : null;
  const cleanups: (() => void)[] = [];
  for (const element of elements) {
   if (element.dataset.scramble === 'enter' || !hover.matches) observer?.observe(element);
   if (element.dataset.scramble === 'enter') continue;
   const target = element.closest('a') ?? element;
   const onEnter = (event: Event) => { if (hover.matches && (event as PointerEvent).pointerType !== 'touch') start(element); };
   target.addEventListener('pointerenter', onEnter);
   cleanups.push(() => target.removeEventListener('pointerenter', onEnter));
  }
  motion.addEventListener('change', stop);
  return () => { observer?.disconnect(); timers.forEach(window.clearTimeout); cleanups.forEach(cleanup => cleanup()); motion.removeEventListener('change', stop); stop(); };
 }, [pathname]);
 return null;
}
