import React, {Component} from 'react';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';

import Settings from './app/pages/Settings.js';
import Home from './app/pages/Home.js';



export const AppNavigator = StackNavigator({
  Home: { screen: Home },
  Settings: { screen: Settings },
},{
  headerMode: 'none',
});

const AppWithNavigation =({dispatch, navigation}) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: navigation })} />
);

const mapStateToProps = state => ({
  navigation: state.navigation,
});

export default connect(mapStateToProps)(AppWithNavigation);
