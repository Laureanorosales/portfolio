'use client';

import { useSyncExternalStore } from 'react';
import { themeStorageKey } from '../../theme';
import styles from './Navbar.module.css';

const themeEvent = 'portfolio-theme-change';
type Theme = 'light' | 'dark';
let transitionTimer: number | undefined;

function subscribe(notify: () => void) {
	window.addEventListener(themeEvent, notify);
	const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
	systemTheme.addEventListener('change', notify);
	return () => {
		window.removeEventListener(themeEvent, notify);
		systemTheme.removeEventListener('change', notify);
	};
}

function currentTheme() {
	const theme = document.documentElement.dataset.theme;
	if (theme === 'light' || theme === 'dark') return theme;
	return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function setTheme(theme: Theme) {
	const root = document.documentElement;
	root.dataset.themeTransition = '';
	window.clearTimeout(transitionTimer);
	transitionTimer = window.setTimeout(() => { delete root.dataset.themeTransition; }, 200);
	root.dataset.theme = theme;

	try {
		localStorage.setItem(themeStorageKey, theme);
	} catch {
		// The document still retains the choice for this visit.
	}
	window.dispatchEvent(new Event(themeEvent));
}

export default function ThemeSelect() {
	const theme = useSyncExternalStore(subscribe, currentTheme, () => null);
	const nextTheme = theme === 'dark' ? 'light' : 'dark';
	const actionLabel = `Cambiar a tema ${nextTheme === 'dark' ? 'oscuro' : 'claro'}`;

	return (
		<div className={styles.theme}>
			<button
				className={styles.themeButton}
				type="button"
				data-theme={theme ?? 'light'}
				aria-label={theme === null ? 'Cargando tema' : actionLabel}
				aria-pressed={theme === 'dark'}
				title={theme === null ? undefined : actionLabel}
				hidden={theme === null}
				onClick={() => setTheme(nextTheme)}
			>
				<svg className={styles.sunIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
					<circle cx="12" cy="12" r="3.5" />
					<path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
				</svg>
				<svg className={styles.moonIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
					<path d="M20.2 15.3A8.5 8.5 0 0 1 8.7 3.8 8.5 8.5 0 1 0 20.2 15.3Z" />
				</svg>
			</button>
		</div>
	);
}
