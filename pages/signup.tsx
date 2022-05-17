import SidebarSignUp from 'components/SidebarSignUp';
import type { NextPage } from 'next';
import styles from '../styles/SignUp.module.css';

const SignUp: NextPage = () => {
	return (
		<main className={styles.main}>
			<SidebarSignUp />
			<section className={styles.container}>
				<div className={styles.form}>
					<h1>Cadastre-se</h1>
					<p>Crie sua conta agora para utilizar o Tune</p>

					<form className={styles.formSignUp}>
						<input type="text" placeholder="NOME" />
						<input type="text" placeholder="EMAIL" />
						<input type="password" placeholder="SENHA" />
						<input type="password" placeholder="CONFIRMAR SENHA" />
					</form>
				</div>
			</section>
		</main>
	);
};

export default SignUp;
