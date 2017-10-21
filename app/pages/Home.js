import React, {Component} from 'react';
import Spinner from 'react-native-loading-spinner-overlay';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';
import PushNotification from 'react-native-push-notification';

import * as actions from '../action/actions.js';
import {startNotifications, stopNotification}from '../utils/actions.js';

import styles from '../../assets/styles/home.js';

import {
  View,
  Text,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  componentDidMount() {
    this.props.dispatch(actions.showSpinner());
    this.stopSpinner();
    AsyncStorage.getItem('showAlert')
    .then((res) => {
      if (JSON.parse(res)) {
        startNotifications();
      } else {
        stopNotification();
      }
    })
  }

  stopSpinner() {
    setTimeout(() => {
      this.props.dispatch(actions.hideSpinner());
    }, 300)
  }

  setDate(pattern) {
    const {inc , dispatch} = this.props;

    let toMonthDay = moment();
    let alerts = [], todayStr = '';
    let value = inc || 0;

    for(let i = 0; i <= 364; i++) {
     alerts.push(`You are beautyful ${i}`);
    }

    if (pattern === 'inc') {
      value = value + 1;
      toMonthDay = toMonthDay.add(value,'d').format('MMM DD');
    } else {
      value = value -1;
      toMonthDay = toMonthDay.add(value, 'd').format('MMM DD');
    }
    let day = toMonthDay.substring(3);

    todayAlert = alerts[parseInt(day)];

    dispatch(actions.inc(value, toMonthDay));
    dispatch(actions.saveAlert(todayAlert));

  }


  render() {
    const {visible, todayAlert, date} = this.props;

    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.headerContainer}
          onPress={()=> this.props.navigation.navigate('Settings')}
        >
          <Icon
            name="gear"
            size={30}
            color='#ffff'
          />
        </TouchableOpacity>
        <View style={styles.bodyContainer}>
          <TouchableOpacity onPress={()=> this.setDate('dec')} style={styles.btn}>
            <Icon
            name="caret-left"
            size={30}
            color='#ffff'
            />
          </TouchableOpacity>
          <View style={styles.date}>
            <Text style={styles.dateText}>{date}</Text>
          </View>
          <TouchableOpacity onPress={()=> this.setDate('inc')} style={styles.btn}>
            <Icon
            name="caret-right"
            size={30}
            color='#ffff'
            />
          </TouchableOpacity>
        </View>
        <View style={styles.stringContainer}>
          <Text style={styles.dateText}>{todayAlert}</Text>
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
        inc: state.spinnerHandler.inc,
        todayAlert: state.spinnerHandler.todayAlert,
        date: state.spinnerHandler.date,
     }
  }

export default connect(select)(Home)

