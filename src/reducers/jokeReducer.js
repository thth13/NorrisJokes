import { LOAD_JOKE } from '../actions/types';

const initialState = {};

export default function (state = initialState, action) {
	switch (action.type) {
		case LOAD_JOKE:
			return action.payload
		default:
			return state;
	}
}