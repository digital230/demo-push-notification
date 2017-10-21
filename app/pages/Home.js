import React, {Component} from 'react';
import Spinner from 'react-native-loading-spinner-overlay';
import { connect } from 'react-redux'

import * as spinnerActions from '../action/spinnerVisibilityAction.js';

import styles from '../../asserts/styles/home.js';

import {
  View,
  Text,
} from 'react-native';



class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  componentDidMount() {
    this.props.dispatch(spinnerActions.showSpinner());
    this.stopSpinner();
  }

  stopSpinner() {
    setTimeout(() => {
      this.props.dispatch(spinnerActions.hideSpinner());
    }, 3000)
  }


  render() {
    const {visible} = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.text}>Settings</Text>
        </View>
        <Spinner
          visible={visible}
          overlayColor={'#4a8cf7'}
        />
      </View>
    );
  }

}

  function select(state) {
     return {
        visible: state.spinnerHandler.visible,
     }
  }

export default connect(select)(Home)
