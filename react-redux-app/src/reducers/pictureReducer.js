import { FETCH_PICTURE_START, FETCH_PICTURE_SUCCESS, FETCH_PICTURE_FAILURE } from '../actions';

const initialState = {
	picture: null,
	isFetching: false,
	error: ''
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_PICTURE_START:
			return {
				...state,
				isFetching: true
			};
		case FETCH_PICTURE_SUCCESS:
			return {
				...state,
				picture: action.payload,
				isFetching: false,
				error: ''
			};
		case FETCH_PICTURE_FAILURE:
			return {
				...state,
				isFetching: false,
				error: action.payload
			};
		default:
			return state;
	}
};

export default reducer;
