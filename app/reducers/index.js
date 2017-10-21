import { combineReducers } from 'redux';
import spinnerHandler from './reducers.js';
import navigation from './navigationReducer';

export default testApp = combineReducers({
   spinnerHandler, navigation
});
