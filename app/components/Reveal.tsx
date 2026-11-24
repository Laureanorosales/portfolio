'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Reveal() {
	const pathname = usePathname();

	useEffect(() => {
		if (!('IntersectionObserver' in window)) return;

		const observer = new IntersectionObserver(entries => {
			for (const entry of entries) {
				if (!entry.isIntersecting) continue;
				entry.target.classList.add('revealed');
				observer.unobserve(entry.target);
			}
		}, { threshold: 0.08 });

		document.querySelectorAll('[data-reveal]').forEach(element => observer.observe(element));
		return () => observer.disconnect();
	}, [pathname]);

	return null;
}
