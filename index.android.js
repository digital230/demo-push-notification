/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import moment from 'moment';

import Home from './app/pages/Home';
import testApp from './app/reducers/index';
import AppWithNavigation from './Navigation.js';

export default class TestProject extends Component {

  render() {
    const initialState = {
      spinnerHandler: {
        visible: false,
        inc: 0,
        date: moment().format('MMM DD'),
        todayAlert: `You are Beautyful${moment().format('MMM DD').substring(3)}`,
        switch: false,
        timePicker: false,
      }
    };

    let store = createStore(testApp, initialState);

    return (
      <Provider store = {store}>
       <AppWithNavigation/>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('TestProject', () => TestProject);
