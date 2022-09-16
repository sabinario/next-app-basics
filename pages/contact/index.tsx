import React from 'react';

import { NextPage } from 'next';
import Link from 'next/link';

import MainLayout from '../../components/layouts/MainLayout';

const Contact: NextPage = () => {
	return (
		<MainLayout>
			<h1>Contact Page</h1>
			<h2 className={'title'}>
				Ir a <Link href='/'>Home</Link>
			</h2>
		</MainLayout>
	);
};

export default Contact;
