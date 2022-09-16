import type { NextPage } from 'next';
import Link from 'next/link';

import MainLayout from '../components/layouts/MainLayout';

const Home: NextPage = () => {
	return (
		<MainLayout>
			<h1>Home Page</h1>
			<h2 className={'title'}>
				Ir a <Link href='/about'>About</Link>
			</h2>
		</MainLayout>
	);
};

export default Home;
