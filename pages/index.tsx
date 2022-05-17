import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<Link href="/login"> pagina login </Link>
		</div>
	);
};

export default Home;
