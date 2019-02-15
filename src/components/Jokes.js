import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRandJoke, getJoke } from '../actions/actions';

import NorrisDancer from './NorrisDancer';

class Jokes extends Component {
	componentDidMount() {
		this.props.getRandJoke();
	}

	getNewJoke = (category) => {
		if (category == null) {
			this.props.getRandJoke();
		} else {
			this.props.getJoke(category);
		}
	}

	render() {
		const { joke, category } = this.props;
		
		return (
			<section className="jokes">
				<div className="jokes-section">
					<NorrisDancer />
					<p className="jokes-joke">{joke}</p>
					<NorrisDancer />
				</div>
				<button onClick={() => this.getNewJoke(category)}>Random joke</button>
			</section>
		);
	}
}

const mapStateToProps = state => ({
	joke: state.joke.value,
	category: state.joke.category
});

export default connect(mapStateToProps, { getRandJoke, getJoke })(Jokes);