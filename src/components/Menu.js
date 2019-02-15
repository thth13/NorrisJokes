import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCategories, getJoke } from '../actions/actions';

class Menu extends Component {
	state = {
		items: 10
	};

	componentDidMount() {
		this.props.getCategories();
	};

	getJoke = (category) => {
       	this.props.getJoke(category);
    };

    loadMore = () => {
    	if (this.state.items <= 10) {
	    	this.setState({items: 20});
    	} else {
    		this.setState({items: 10});
    	}
    };

	render() {
		const { categories } = this.props; 
		const { items } = this.state;

		return (
			<section className="categories">
				<ul className="menu">
					{categories.slice(0, items).map(category => (
						<li 
							className="menu-item" 
							onClick={() => this.getJoke(category)} 
							key={category}
						>
							{category}
						</li>
					))}
					<li onClick={this.loadMore} className="menu-more">{items === 10 ? 'more' : 'hide'}</li>
				</ul>
			</section>
		);
	}
}

const mapStateToProps = state => ({
	categories: state.categories
})

export default connect(mapStateToProps, { getCategories, getJoke })(Menu);