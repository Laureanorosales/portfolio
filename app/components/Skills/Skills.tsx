import styles from './Skills.module.css';

const skills = [
	{ name: 'JavaScript', icon: 'ti-brand-javascript' },
	{ name: 'React', icon: 'ti-brand-react' },
	{ name: 'Next.js', icon: 'ti-brand-nextjs' },
	{ name: 'CSS', icon: 'ti-brand-css3' },
];

export default function Skills() {
	return (
		<section id='skills' className={styles.section}>
			<div className={styles.header}>
				<h2>Skills</h2>
				<div className={styles.line} />
			</div>
			<div className={styles.grid}>
				{skills.map((skill) => (
					<div key={skill.name} className={styles.card}>
						<i className={`ti ${skill.icon} ${styles.icon}`} aria-hidden='true' />
						<div className={styles.name}>{skill.name}</div>
					</div>
				))}
			</div>
		</section>
	);
}
