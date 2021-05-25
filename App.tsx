import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import PushNotification, { Importance } from 'react-native-push-notification';
import AppProvider from './src/contexts';
import Routes from './src/routes';

const App: React.FC = () => {
  useEffect(() => {
    PushNotification.createChannel(
      {
        channelId: 'wateringChannel', // (required)
        channelName: 'PlantmanagerChannel', // (required)
        importance: Importance.HIGH,
        vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
      },
      created => {
        // eslint-disable-next-line no-console
        console.log(`createChannel returned '${created}'`);
      }, // (optional) callback returns whether the channel was created, false means it already existed.
    );

    return () => {
      PushNotification.deleteChannel('wateringChannel');
    };
  }, []);

  return (
    <AppProvider>
      <Routes />
    </AppProvider>
  );
};

export default App;
