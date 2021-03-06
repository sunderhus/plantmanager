/**
 * @format
 */

import { AppRegistry, Platform } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import PushNotification , {Importance}from 'react-native-push-notification';
PushNotification.configure({
  onRegister(token) {
    console.log('TOKEN:', token);
  },

  onNotification(notification) {
    console.log('NOTIFICATION:', notification);
  },

  // IOS ONLY (optional): default: all - Permissions to register.
  permissions: {
    alert: true,
    badge: true,
    sound: true,
  },
  popInitialNotification: true,
  requestPermissions: Platform.OS==='ios',
});



AppRegistry.registerComponent(appName, () => App);
