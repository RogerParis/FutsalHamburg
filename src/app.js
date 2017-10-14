import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';

import store from './store';
import MainAppContainer from './components/containers/mainAppContainer';
import { startFirebase } from './lib/firebase';

const App = () => {
  startFirebase();
  return (
    <Provider store={store}>
      <MainAppContainer />
    </Provider>
  );
};

AppRegistry.registerComponent('futsal_hamburg', () => App);
