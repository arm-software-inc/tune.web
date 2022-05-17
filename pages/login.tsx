import type { NextPage } from 'next';
import Link from 'next/link';

const Login: NextPage = () => {
	return (
		<div>
			<h1>Login</h1>
			<Link href="/signup">Cadastrar</Link>
		</div>
	);
};

export default Login;
