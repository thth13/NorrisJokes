import { combineReducers } from 'redux';
import jokeReducer from './jokeReducer';
import categoriesReducer from './categoriesReducer';

export default combineReducers({
	joke: jokeReducer,
	categories: categoriesReducer
});