import React, { Component } from 'react';

import Menu from './Menu';
import Jokes from './Jokes';

class Content extends Component {
	render() {
		return (
			<section className="content">
				<Menu />
				<Jokes />
			</section>
		);
	}
}

export default Content;