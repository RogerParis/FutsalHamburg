import React from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import { Provider } from 'react-redux';

import store from './store';
import { MainStack } from './config/routes';
import { startFirebase } from './lib/firebase'

const App = () => {
  startFirebase();
  return (
    <Provider store={store}>
      <MainStack />
    </Provider>
  );
};

AppRegistry.registerComponent('futsal_hamburg', () => App);
