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
import { Provider } from 'react-redux'

import Home from './app/pages/Home';
import testApp from './app/reducers/index';

export default class TestProject extends Component {

  render() {
    let store = createStore(testApp);
    return (
      <Provider store= {store} >
       <Home />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('TestProject', () => TestProject);
