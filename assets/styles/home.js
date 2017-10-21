import {  StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#4a8cf7',
    padding: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
    height: '10%',
  },
  text: {
    color: '#ffff',
    fontSize: 15,
  },
  bodyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: '50%',
    marginTop: '10%',
    paddingTop: 30,
  },
  btn: {
    width: '20%',
    height: '10%',
    alignItems: 'center',
  },
  date: {
    width: '50%',
    height: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dateText: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    color: '#fff'
  },
  stringContainer: {
    width: '100%',
    height: '20%',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  //  Setting page

  settingBodyContainer: {
    width: '100%',
    height: '60%',
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: '10%',
    padding: 10,
  },
  switchText: {
    color: '#fff',
    fontSize: 14,
    width: '50%',
    height: '100%'
  },
  timepicker: {
    width: '100%',
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  time: {
    fontSize: 35,
    color: '#fff',
  },
  timeText: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 10,
  }
});
