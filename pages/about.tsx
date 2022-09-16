import React from 'react';

import Link from 'next/link';

import DarkLayout from '../components/layouts/DarkLayout';
import MainLayout from '../components/layouts/MainLayout';
import type { NextPageWithLayout } from './_app';

const About: NextPageWithLayout = () => {
	return (
		<>
			<h1>About Page</h1>
			<h2 className={'title'}>
				Ir a <Link href='/'>Home</Link>
			</h2>
		</>
	);
};

About.getLayout = function getLayout(page: React.ReactElement) {
	return (
		<MainLayout>
			<DarkLayout>{page}</DarkLayout>
		</MainLayout>
	);
};

export default About;
