import axios from 'axios';
import { GET_CATEGORIES, LOAD_JOKE } from './types';

export const getRandJoke = () => dispatch => {
	axios.get('https://api.chucknorris.io/jokes/random')
		.then(res =>
			dispatch({
				type: LOAD_JOKE,
				payload: res.data
			})
		)
		.catch(err => console.log(err)
	);
};

export const getJoke = (category) => dispatch => {
	axios.get(`https://api.chucknorris.io/jokes/random?category=${category}`)
		.then(res =>
			dispatch({
				type: LOAD_JOKE,
				payload: res.data
			})
		)
		.catch(err => console.log(err)
	);
}

export const getCategories = () => dispatch => {
	axios.get('https://api.chucknorris.io/jokes/categories')
		.then(res =>
			dispatch({
				type: GET_CATEGORIES,
				payload: res.data
			})
		)
		.catch(err => console.log(err)
	);
}