import type { NextPage } from 'next';
import Link from 'next/link';

import MainLayout from '../../components/layouts/MainLayout';

const Pricing: NextPage = () => {
	return (
		<MainLayout>
			<h1>Pricing Page</h1>
			<h2 className={'title'}>
				Ir a <Link href='/'>Home</Link>
			</h2>
		</MainLayout>
	);
};

export default Pricing;
