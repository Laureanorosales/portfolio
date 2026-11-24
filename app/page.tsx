import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { cvFileName } from './cv';
import Contact from './components/Contact/Contact';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';

export default function HomePage() {
	const hasCv = existsSync(join(process.cwd(), 'public', cvFileName));

	return (
		<div className="container">
			<Hero hasCv={hasCv} />
			<Projects />
			<Skills />
			<Contact />
		</div>
	);
}
