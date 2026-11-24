'use client';

import { useSyncExternalStore } from 'react';
import { themeStorageKey } from '../../theme';
import styles from './Navbar.module.css';

const themeEvent = 'portfolio-theme-change';
type Theme = 'system' | 'light' | 'dark';
let transitionTimer: number | undefined;

function subscribe(notify: () => void) {
	window.addEventListener(themeEvent, notify);
	return () => window.removeEventListener(themeEvent, notify);
}

function currentTheme() {
	const theme = document.documentElement.dataset.theme;
	return theme === 'light' || theme === 'dark' ? theme : 'system';
}

function setTheme(theme: Theme) {
	const root = document.documentElement;
	root.dataset.themeTransition = '';
	window.clearTimeout(transitionTimer);
	transitionTimer = window.setTimeout(() => { delete root.dataset.themeTransition; }, 200);
	if (theme === 'system') delete root.dataset.theme;
	else root.dataset.theme = theme;

	try {
		if (theme === 'system') localStorage.removeItem(themeStorageKey);
		else localStorage.setItem(themeStorageKey, theme);
	} catch {
		// The document still retains the choice for this visit.
	}
	window.dispatchEvent(new Event(themeEvent));
}

export default function ThemeSelect() {
	const theme = useSyncExternalStore(subscribe, currentTheme, () => null);

	return (
		<label className={styles.theme} hidden={theme === null}>
			<span className="sr-only">Tema de color</span>
			<select value={theme ?? 'system'} onChange={event => setTheme(event.target.value as Theme)}>
				<option value="system">Sistema</option>
				<option value="light">Claro</option>
				<option value="dark">Oscuro</option>
			</select>
		</label>
	);
}
