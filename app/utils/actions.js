import PushNotification from 'react-native-push-notification';
import moment from 'moment';
import {
  AsyncStorage,
} from 'react-native';

module.exports = {
  startNotifications() {
    AsyncStorage.getItem('AlertTime')
    .then((time) => {
      runNotification(time);
    })
    .catch(err => console.log(err));

  },

  stopNotification() {
    PushNotification.cancelAllLocalNotifications();
  },
}

function todayAlertString() {
  let alerts = [];
  let day;
  for(let i = 0; i <= 364; i++) {
   alerts.push(`You are beautyful ${i}`);
  }
  day = moment().format('MM DD').substring(3);
  return alerts[parseInt(day)];
}

function runNotification(time = new Date(Date.now() + (60 * 1000))) {
  let old = new Date(time);
  let now = new Date();
  let t = now.setTime(old.getTime());
  PushNotification.localNotificationSchedule({
    message: todayAlertString(),
    repeatType: 'day',
    date: new Date(t),
  });
}
