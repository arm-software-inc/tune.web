import styles from '@styles/components/SidebarSignUp.module.css';
import Image from 'next/image';

import Lines from '../../public/lines.png';

const SidebarSignUp = () => {
	return (
		<aside className={styles.aside}>
			<div className={styles.title}>
				<h1>Tune</h1>
				<p>Serviços de streaming</p>
				<a href="#">TUNE.COM.BR</a>
			</div>
			<div>
				<Image src={Lines} alt="Lines" />
			</div>
		</aside>
	);
};

export default SidebarSignUp;
