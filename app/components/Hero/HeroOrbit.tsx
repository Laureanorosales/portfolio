'use client';

import { useEffect, useRef } from 'react';
import { preload } from 'react-dom';
import styles from './HeroOrbit.module.css';

export default function HeroOrbit() {
	preload('/hero-orbit.webp', { as: 'image', media: '(width > 767px)', fetchPriority: 'high' });
	preload('/hero-orbit-mobile.webp', { as: 'image', media: '(width <= 767px)', fetchPriority: 'high' });

	const artRef = useRef<HTMLDivElement>(null);
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const art = artRef.current;
		const canvas = canvasRef.current;
		const hero = art?.closest('section');
		if (!art || !canvas || !hero || !('IntersectionObserver' in window) || !('ResizeObserver' in window)) return;

		const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
		let visible = false;
		let disposed = false;
		let timeout = 0;
		let pending = false;
		let failed = false;
		let scene: ReturnType<typeof import('./orbitAnimation')['createOrbitAnimation']> = undefined;

		function sync() {
			window.clearTimeout(timeout);
			if (disposed || reducedMotion.matches || !visible || document.hidden) {
				scene?.pause();
				return;
			}
			if (scene) {
				scene.resume();
				return;
			}
			if (pending || failed) return;

			// Leave the first paints and the name's entrance to CSS.
			timeout = window.setTimeout(async () => {
				pending = true;
				try {
					const { createOrbitAnimation } = await import('./orbitAnimation');
					if (disposed || reducedMotion.matches || !visible || document.hidden) return;

					scene = createOrbitAnimation(art!, canvas!, hero!);
					failed = !scene;
					scene?.resume();
				} catch {
					failed = true;
				} finally {
					pending = false;
				}
			}, 350);
		}

		const observer = new IntersectionObserver(([entry]) => {
			visible = entry.isIntersecting && entry.intersectionRatio > 0;
			sync();
		});
		observer.observe(hero);
		document.addEventListener('visibilitychange', sync);
		reducedMotion.addEventListener('change', sync);

		return () => {
			disposed = true;
			window.clearTimeout(timeout);
			observer.disconnect();
			document.removeEventListener('visibilitychange', sync);
			reducedMotion.removeEventListener('change', sync);
			scene?.dispose();
		};
	}, []);

	return (
		<div ref={artRef} className={styles.orbit} aria-hidden="true">
			<canvas ref={canvasRef} className={styles.canvas} width={0} height={0} />
		</div>
	);
}
