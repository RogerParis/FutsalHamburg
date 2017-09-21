import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';

import store from './src/store';
import { MainStack } from './src/config/routes';

const App = () => {
  return (
    <Provider store={store}>
      <MainStack />
    </Provider>
  );
};

AppRegistry.registerComponent('futsal_hamburg', () => App);
