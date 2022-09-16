import React from 'react';

import Head from 'next/head';

import Navbar from '../Navbar';
import styles from './MainLayout.module.css';

type Props = {
	children: React.ReactNode;
};

function MainLayout({ children }: Props) {
	return (
		<div className={styles.container}>
			<Head>
				<title>About - Sabino</title>
				<meta name='description' content='About Page' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Navbar />

			<main className={styles.main}>{children}</main>
		</div>
	);
}

export default MainLayout;
