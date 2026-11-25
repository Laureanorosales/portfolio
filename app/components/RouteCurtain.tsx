'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import styles from './RouteCurtain.module.css';

export default function RouteCurtain() {
 const pathname = usePathname();
 const previous = useRef(pathname);
 const curtain = useRef<HTMLDivElement>(null);

 useEffect(() => {
  const from = previous.current;
  previous.current = pathname;
  const entering = from === '/' && pathname === '/proyectos/dtf-sheet';
  const returning = from === '/proyectos/dtf-sheet' && pathname === '/';
  const element = curtain.current;
  if (!element || (!entering && !returning) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const label = element.querySelector('span');
  if (label) label.textContent = entering ? '01 / DTF SHEET' : 'LR.';
  element.classList.remove(styles.active);
  // Restart the animation for quick successive navigations.
  void element.offsetWidth;
  element.classList.add(styles.active);
  const clear = () => element.classList.remove(styles.active);
  element.addEventListener('animationend', clear, { once: true });
  const timer = window.setTimeout(clear, 900);
  return () => { window.clearTimeout(timer); element.removeEventListener('animationend', clear); clear(); };
 }, [pathname]);

 return <div ref={curtain} className={styles.curtain} aria-hidden="true"><span /></div>;
}
