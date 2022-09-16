import React from 'react';

type Props = {
	children: React.ReactNode;
};

function DarkLayout({ children }: Props) {
	return (
		<div
			style={{
				backgroundColor: 'rgba(255,255,255,0.3)',
				borderRadius: '5px',
				padding: '10px',
			}}
		>
			<h3>DarkLayout</h3>
			{children}
		</div>
	);
}

export default DarkLayout;
