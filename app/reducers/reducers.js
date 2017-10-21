import { combineReducers } from 'redux';

const initialState = {
  visible: false
};

function spinnerHandler(state = initialState, action) {
	switch(action.type) {
		case 'SHOW-SPINNER':
			return {
				visible: action.visible,
			};
		case 'HIDE-SPINNER':
			return {
				visible: action.visible,
			};
		default:
		return state;
	}
}

export default spinnerHandler;
