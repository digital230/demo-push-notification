import React, {Component} from 'react';
import Spinner from 'react-native-loading-spinner-overlay';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';
import * as actions from '../action/actions.js';
import {startNotifications, stopNotification}from '../utils/actions.js';

import styles from '../../assets/styles/home.js';

import {
  View,
  Text,
  TouchableOpacity,
  Switch,
  AsyncStorage
} from 'react-native';

class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  componentDidMount() {
    AsyncStorage.multiGet(['showAlert','AlertTime'])
    .then((data) => {
      for(let res of data) {
        if(res[0] === 'showAlert') {
          this.props.dispatch(actions.setSwitchState(JSON.parse(res[1] || false) ));
        } else {
          this.props.dispatch(actions.setTime(res[1] || moment().format('h:mm:a')));
        }
      }
    });
  }


  handleSwitch(val) {
    AsyncStorage.setItem('showAlert', JSON.stringify(val), () => {
      this.props.dispatch(actions.setSwitchState(val));
    });

    if (val) {
      startNotifications();
    } else {
      stopNotification();
    }

  }

  openTimePIcker() {
    this.props.dispatch(actions.showTimePicker(true));
  }

  handleTimePicked(date) {
    if (date) {
      AsyncStorage.setItem('AlertTime', date, () => {
        this.props.dispatch(actions.setTime(date));
      });
    }
    this.props.dispatch(actions.showTimePicker(false));

    AsyncStorage.getItem('showAlert')
    .then((res)=> {
      if (JSON.parse(res)) {
        startNotifications();
      } else {
        stopNotification();
      }
    })
  }

  render() {
    const {timePicker, time} = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={()=> this.props.navigation.navigate('Home')}
          style={styles.headerContainer}>
          <Icon
            name="home"
            size={30}
            color='#ffff'
          />
        </TouchableOpacity>
        <View style={styles.settingBodyContainer}>
          <View style={styles.switchContainer}>
            <Text style={styles.switchText}>Daily Notifications</Text>
            <Switch
              onTintColor="#42f44b"
              onValueChange={this.handleSwitch.bind(this)}
              value={this.props.switch}
            />
          </View>
          <TouchableOpacity onPress={() => this.openTimePIcker()} style={styles.timepicker}>
            <Text style={styles.timeText}>Set time for Notifications</Text>
            <Text style={styles.time}>{moment(time).format('h:mm:a')}</Text>
          </TouchableOpacity>
        </View>
        <DateTimePicker
          isVisible={timePicker}
          mode={'time'}
          datePickerModeAndroid='spinner'
          is24Hour={false}
          onConfirm={this.handleTimePicked.bind(this)}
          onCancel={() => this.props.dispatch(actions.showTimePicker(false))}
        />
      </View>
    );
  }
}

function select(state) {
     return {
        switch: state.spinnerHandler.switch,
        timePicker: state.spinnerHandler.timePicker,
        time: state.spinnerHandler.time,
     }
  }

export default connect(select)(Settings)
