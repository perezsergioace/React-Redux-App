import axios from 'axios';

export const FETCH_PICTURE_START = 'FETCH_PICTURE_START';
export const FETCH_PICTURE_SUCCESS = 'FFETCH_PICTURE_SUCCESS';
export const FETCH_PICTURE_FAILURE = 'FETCH_PICTURE_FAILURE';

// create a function called getPicture // async action creator - returning a function
export const getPicture = () => (dispatch) => {
	dispatch({ type: FETCH_PICTURE_START });
	axios
		.get('https://aws.random.cat/meow')
		// .get('Link')
		.then((response) => {
			dispatch({ type: FETCH_PICTURE_SUCCESS, payload: response.data.file });
		})
		.catch((error) => {
			dispatch({ type: FETCH_PICTURE_FAILURE, payload: error.response });
		});
};
