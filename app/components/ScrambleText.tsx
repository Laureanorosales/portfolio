import styles from './ScrambleText.module.css';

export default function ScrambleText({ children, trigger = 'hover' }: { children: string; trigger?: 'hover' | 'enter' }) {
 return <span className={styles.root} data-scramble={trigger}><span className={styles.original}>{children}</span><span className={styles.visual} aria-hidden="true" /></span>;
}
