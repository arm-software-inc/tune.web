import SidebarSignUp from 'components/SidebarSignUp';
import type { NextPage } from 'next';
import Link from 'next/link';
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

						<div className={styles.wrapperCheckbox}>
							<input
								type="checkbox"
								name="#"
								id="#"
								className={styles.checkboxStyle}
							/>
							<p className={styles.terms}>
								Li e concordo com os <span>termos</span> de uso e
								<span> privacidade</span>.
							</p>
						</div>

						<button type="submit" className={styles.buttonSubmit}>
							Continuar
						</button>
						<div className={styles.borderLine}></div>
						<p className={styles.pAccount}>
							Já tem uma conta?{' '}
							<Link href="/login" className={styles.login}>
								Login 🠒
							</Link>
						</p>
					</form>
				</div>
			</section>
		</main>
	);
};

export default SignUp;
