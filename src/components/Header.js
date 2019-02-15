import React from 'react';
import logo from '../img/logo.png';

const Header = () => (
	<header>
		<a href="/"><img className="hvr-buzz-out" alt="NorrisHeader" src={logo} /></a>
	</header>
);

export default Header;