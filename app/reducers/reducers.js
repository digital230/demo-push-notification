import moment from 'moment';

const initialState = {
  visible: false,
  inc: 0,
  date: moment().format('MMM DD'),
  todayAlert: `You are Beautyful${moment().format('MMM DD').substring(3)}`,
  switch: false,
};

function spinnerHandler(state = {}, action) {
	switch(action.type) {
		case 'SHOW-SPINNER':
			return {
				...state,
				visible: action.visible,
			};
			break;
		case 'HIDE-SPINNER':
			return {
				...state,
				visible: action.visible,
			};
			break;
		case 'INC':
			return {
				...state,
				inc: action.inc || 0,
				date: action.date,
			};
			break;
		case 'ALERT_STR':
			return {
				...state,
				todayAlert: action.todayAlert,
			};
			break;
		case 'Switch':
			return {
				...state,
				switch: action.switch,
			}
			break;
		case 'SHOW-TIME-PICKER':
			return {
				...state,
				timePicker: action.timePicker
			}
			break;
		case 'SET-TIME':
			return {
				...state,
				time: action.time
			}
			break;
		default:
		return state;
	}
}

export default spinnerHandler;
