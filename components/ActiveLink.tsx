import React from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

type Props = {
	href: string;
	text: string;
};

const style = {
	color: '#0070F3',
	textDecoration: 'underline',
};

function ActiveLink({ href, text }: Props) {
	const { asPath } = useRouter();
	return (
		<Link href={href}>
			<a style={asPath === href ? style : undefined}>{text}</a>
		</Link>
	);
}

export default ActiveLink;
