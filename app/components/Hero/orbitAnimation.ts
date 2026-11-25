import { createOrbitPainter } from './orbitGeometry';

const desktopQuality = [[3400, 1.5], [2500, 1.25], [1650, 1]] as const;
const mobileQuality = [[1350, 1], [1000, 1], [800, .85]] as const;
const pointerLimit = Math.PI / 36;

export function createOrbitAnimation(art: HTMLElement, canvas: HTMLCanvasElement, hero: HTMLElement) {
	const canvasContext = canvas.getContext('2d');
	if (!canvasContext) return;
	const orbitPainter = createOrbitPainter(canvasContext);
	if (!orbitPainter) return;
	const context = canvasContext;
	const paint = orbitPainter;

	const mobileQuery = window.matchMedia('(max-width: 767px), (hover: none) and (pointer: coarse)');
	const finePointer = window.matchMedia('(any-pointer: fine)');
	let mobile = mobileQuery.matches;
	let quality = 0;
	let size = 0;
	let resize = true;
	let measureHero = true;
	let heroRect: DOMRect | undefined;
	let scroll = 0;
	let targetScroll = 0;
	let pointerX = 0;
	let pointerY = 0;
	let tiltX = 0;
	let tiltY = 0;
	let time = 0;
	let frame = 0;
	let active = false;
	let disposed = false;
	let ready = false;
	let lastDraw = 0;
	let nextDraw = 0;
	let sampleTime = 0;
	let sampleWork = 0;
	let sampleCount = 0;
	let slowWindows = 0;

	const observer = new ResizeObserver(() => {
		resize = true;
		measureHero = true;
	});
	observer.observe(art);
	observer.observe(hero);

	function onScroll() {
		measureHero = true;
	}

	function onResize() {
		resize = true;
		measureHero = true;
	}

	function onPointerMove(event: PointerEvent) {
		if (!finePointer.matches || event.pointerType === 'touch' || !heroRect) return;
		const x = (event.clientX - heroRect.left) / heroRect.width * 2 - 1;
		const y = (event.clientY - heroRect.top) / heroRect.height * 2 - 1;
		pointerX = Math.max(-1, Math.min(1, x)) * pointerLimit;
		pointerY = Math.max(-1, Math.min(1, y)) * pointerLimit;
	}

	function resetPointer() {
		pointerX = 0;
		pointerY = 0;
	}

	function pause() {
		if (!active) return;
		active = false;
		cancelAnimationFrame(frame);
		window.removeEventListener('scroll', onScroll);
		window.removeEventListener('resize', onResize);
		hero.removeEventListener('pointermove', onPointerMove);
		hero.removeEventListener('pointerleave', resetPointer);
		hero.removeEventListener('pointercancel', resetPointer);
		resetPointer();
	}

	function dispose() {
		disposed = true;
		pause();
		observer.disconnect();
		canvas.removeEventListener('contextlost', dispose);
		art.removeAttribute('data-orbit-ready');
	}

	function draw(now: number) {
		if (!active) return;

		if (mobile !== mobileQuery.matches) {
			mobile = mobileQuery.matches;
			quality = 0;
			slowWindows = 0;
			resize = true;
		}

		const interval = 1000 / (mobile ? 30 : 60);
		if (now + 2 < nextDraw) {
			frame = requestAnimationFrame(draw);
			return;
		}
		nextDraw = Math.max((nextDraw || now) + interval, now + interval / 2);
		const elapsed = lastDraw ? now - lastDraw : interval;
		lastDraw = now;
		const tick = Math.min(elapsed, 50) / 1000;
		const started = performance.now();
		const levels = mobile ? mobileQuality : desktopQuality;
		const [count, maxDpr] = levels[quality];

		if (resize) {
			size = art.clientWidth;
			if (size > 0) {
				const pixels = Math.max(1, Math.round(size * Math.min(devicePixelRatio, maxDpr)));
				if (canvas.width !== pixels) canvas.width = canvas.height = pixels;
				context.setTransform(pixels / size, 0, 0, pixels / size, 0, 0);
			}
			resize = false;
		}
		if (measureHero) {
			heroRect = hero.getBoundingClientRect();
			targetScroll = Math.max(0, Math.min(1, -heroRect.top / heroRect.height));
			measureHero = false;
		}

		const smoothing = 1 - Math.exp(-tick * 5);
		tiltX += (pointerX - tiltX) * smoothing;
		tiltY += (pointerY - tiltY) * smoothing;
		scroll += (targetScroll - scroll) * smoothing;
		if (size > 0) {
			try {
				paint(size, time, tiltX, tiltY, scroll, count);
				if (!ready) {
					ready = true;
					art.setAttribute('data-orbit-ready', '');
				}
			} catch {
				dispose();
				return;
			}
		}
		time += tick * (mobile ? .75 : 1);

		sampleCount++;
		sampleTime += elapsed;
		sampleWork += performance.now() - started;
		if (sampleTime >= 1800) {
			const averageInterval = sampleTime / sampleCount;
			const averageWork = sampleWork / sampleCount;
			const overBudget = averageInterval > (mobile ? 36 : 23) || averageWork > (mobile ? 11 : 8);
			slowWindows = overBudget ? slowWindows + 1 : 0;
			if (slowWindows >= 2 && quality < levels.length - 1) {
				quality++;
				resize = true;
				slowWindows = 0;
			} else if (slowWindows >= 3 && averageInterval > 40) {
				dispose();
				return;
			}
			sampleTime = sampleWork = sampleCount = 0;
		}
		frame = requestAnimationFrame(draw);
	}

	function resume() {
		if (disposed || active) return;
		active = true;
		lastDraw = nextDraw = 0;
		sampleTime = sampleWork = sampleCount = slowWindows = 0;
		onResize();
		window.addEventListener('scroll', onScroll, { passive: true });
		window.addEventListener('resize', onResize);
		hero.addEventListener('pointermove', onPointerMove, { passive: true });
		hero.addEventListener('pointerleave', resetPointer);
		hero.addEventListener('pointercancel', resetPointer);
		frame = requestAnimationFrame(draw);
	}

	canvas.addEventListener('contextlost', dispose);
	return { resume, pause, dispose };
}
