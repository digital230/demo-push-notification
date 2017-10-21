import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../../Navigation.js';

const initialNavState = {
    index: 0,
    routes: [
        { key: 'Home', routeName: 'Home' },
    ],
};


function navigation(state = initialNavState, action) {
  let nextState;
  switch (action.type) {
    case 'Settings':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Settings' }),
        state
      );
      break;
    case 'Home':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Home' }),
        state
      );
      break;
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}


export default navigation;
