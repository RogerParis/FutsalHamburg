import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import MapView from 'react-native-maps';

import I18n from '../../../config/I18n';
import { screenContaining } from '../../../components/containers/screenContainer';

const { width } = Dimensions.get('window');

class ContactScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: I18n.t('screens.contact.title'),
    };
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text>{'ContactScreen'}</Text>
        <MapView
          style={{ flex: 1, width }}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View>
    );
  }
}

export default screenContaining(ContactScreen);
