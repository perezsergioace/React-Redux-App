import React from 'react';
import styled from 'styled-components';

const Logo = styled.a`
    font-size: 1.5em;
    font-weight: 900;
	color: rebeccapurple;
`;

const ControlButton = styled.div`
color: rebeccapurple;
font-weight: 600;
`;

const AppLayout = styled.div`
    padding: 40px
    display: grid;
    grid-template-columns: 180px auto 100px 100px;
    background-color: darksalmon
`;

const Navbar = () => {
	return (
		<AppLayout>
			<Logo>Random Cats</Logo>
			<div />
			<ControlButton>Dashboard</ControlButton>
			<ControlButton>Settings</ControlButton>
		</AppLayout>
	);
};

export default Navbar;
