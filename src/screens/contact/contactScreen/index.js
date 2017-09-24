import React from 'react';
import { ScrollView, Text, Dimensions } from 'react-native';
import MapView from 'react-native-maps';

import I18n from '../../../config/I18n';
import { screenContaining } from '../../../components/containers/screenContainer';
import Location from '../../../components/location';
import { regions } from '../../../data/regions';

class ContactScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: I18n.t('screens.contact.title'),
    };
  };

  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <Location
          region={regions.training}
          title={I18n.t('locations.training.title')}
          address={I18n.t('locations.training.address')}
        />
      </ScrollView>
    );
  }
}

export default screenContaining(ContactScreen);
