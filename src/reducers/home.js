import {UPDATE_REPOSITORY} from '../actions/home';



/**
 *
 */
const initialState = {
	repository: null
};



/**
 *
 */
export default function reduce(state = initialState, {type, payload}) {
	switch (type) {
		case UPDATE_REPOSITORY:
			return {
				repository: payload.repository
			};

		default:
			return state;
	}
}
