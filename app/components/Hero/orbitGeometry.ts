type Particle = { x: number; y: number; z: number; fold: number; ripple: number; tx: number; ty: number; tz: number; hx: number; hy: number; hz: number };

const depthSteps = 8;
const spriteCell = 12;

function ease(value: number) {
	const t = Math.max(0, Math.min(1, value));
	return t * t * (3 - 2 * t);
}

function createParticles() {
	const particles: Particle[] = [];
	let seed = 1729;
	function random() {
		seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
		return seed / 4294967296;
	}

	const bands = 52;
	for (let band = 0; band < bands; band++) {
		const latitude = Math.PI * (band + .5) / bands;
		const points = Math.round(102 * Math.sin(latitude));
		for (let index = 0; index < points; index++) {
			const longitude = 2 * Math.PI * (index + (band % 2) * .5 + (random() - .5) * .22) / points;
			const bend = .24 * Math.sin(2 * longitude + latitude * 2.8) * Math.sin(latitude);
			const polar = latitude + bend + (random() - .5) * .016;
			const azimuth = longitude + .25 * Math.cos(latitude * 2.3);
			const x = Math.sin(polar) * Math.cos(azimuth);
			const y = Math.cos(polar);
			const z = Math.sin(polar) * Math.sin(azimuth);
			// Fixed correspondence keeps morphing inexpensive and preserves the band structure.
			const tube = .27;
			const ring = .68 + tube * Math.cos(latitude * 2);
			const helixAngle = latitude * 5 + longitude * .16;
			const helixRadius = .54 + .18 * Math.cos(longitude);
			particles.push({ x, y, z, fold: 3.9 * x + 2.8 * y - 3.1 * z, ripple: 6 * y - 3 * x + 1.3 * z,
				tx: ring * Math.cos(azimuth), ty: tube * Math.sin(latitude * 2), tz: ring * Math.sin(azimuth),
				hx: helixRadius * Math.cos(helixAngle), hy: .8 - 1.6 * latitude / Math.PI + .18 * Math.sin(longitude), hz: helixRadius * Math.sin(helixAngle) });
		}
	}

	// Every quality tier takes a prefix with coverage across all the bands.
	for (let index = particles.length - 1; index > 0; index--) {
		const other = Math.floor(random() * (index + 1));
		[particles[index], particles[other]] = [particles[other], particles[index]];
	}
	return particles;
}

export function createOrbitPainter(context: CanvasRenderingContext2D) {
	const particles = createParticles();
	const sprites = document.createElement('canvas');
	sprites.width = spriteCell * depthSteps;
	sprites.height = spriteCell;
	const atlas = sprites.getContext('2d');
	if (!atlas) return;

	// Bake size and opacity together so each dot is a single canvas draw call.
	for (let step = 0; step < depthSteps; step++) {
		const depth = step / (depthSteps - 1);
		atlas.beginPath();
		atlas.arc(step * spriteCell + spriteCell / 2, spriteCell / 2, 1.8 + depth * 2.55, 0, Math.PI * 2);
		atlas.fillStyle = '#fff';
		atlas.globalAlpha = .16 + .84 * depth ** 1.25;
		atlas.fill();
	}

	return function paint(size: number, time: number, tiltX: number, tiltY: number, scroll: number, count: number) {
		const yaw = .42 + time * (2 * Math.PI / 54) + tiltX;
		const pitch = -.31 + tiltY + .06 * Math.sin(time * .13);
		const roll = -.27;
		const cosYaw = Math.cos(yaw);
		const sinYaw = Math.sin(yaw);
		const cosPitch = Math.cos(pitch);
		const sinPitch = Math.sin(pitch);
		const cosRoll = Math.cos(roll);
		const sinRoll = Math.sin(roll);
		const radius = size * .398;
		const center = size * .5;
		const spriteSize = 2.2 + size * .0045;
		const halfSprite = spriteSize / 2;
		const visibleCount = Math.min(count, particles.length);
		// The first seconds match the static sphere; smooth transitions have settled poses.
		const phase = time % 36;
		const torus = ease((phase - 5) / 4) * (1 - ease((phase - 14) / 4));
		const helix = ease((phase - 14) / 4) * (1 - ease((phase - 25) / 5));

		context.clearRect(0, 0, size, size);
		context.globalAlpha = 1 - scroll * .13;

		for (let index = 0; index < visibleCount; index++) {
			const { x, y, z, tx, ty, tz, hx, hy, hz, fold, ripple } = particles[index];
			const mx = x + (tx - x) * torus + (hx - x) * helix;
			const my = y + (ty - y) * torus + (hy - y) * helix;
			const mz = z + (tz - z) * torus + (hz - z) * helix;
			const surface = 1 + .11 * Math.sin(fold + time * .18) + .05 * Math.cos(ripple - time * .23);
			const rotatedX = (mx * cosYaw + mz * sinYaw) * surface;
			const rotatedZ = (mz * cosYaw - mx * sinYaw) * surface;
			const vertical = my * surface * .98;
			const rotatedY = vertical * cosPitch - rotatedZ * sinPitch;
			const depth = vertical * sinPitch + rotatedZ * cosPitch;
			const perspective = 3.8 / (3.8 - depth);
			const step = Math.min(depthSteps - 1, Math.max(0, Math.floor((depth + 1.16) * (depthSteps / 2.32))));
			const px = center + radius * perspective * (rotatedX * cosRoll - rotatedY * sinRoll);
			const py = center - radius * perspective * (rotatedY * cosRoll + rotatedX * sinRoll) + size * .07 * scroll;
			context.drawImage(sprites, step * spriteCell, 0, spriteCell, spriteCell,
				px - halfSprite, py - halfSprite, spriteSize, spriteSize);
		}
	};
}
