import React from 'react';
import { View, Text } from 'react-native';

import I18n from '../../../config/I18n';
import { screenContaining } from '../../../components/containers/screenContainer';

class TableScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: I18n.t('screens.table.title'),
    };
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text>{'TableScreen'}</Text>
      </View>
    );
  }
}

export default screenContaining(TableScreen);
