import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import PropTypes from 'prop-types';

import { colors, commonStyles } from '../config/styles';

const Location = ({ region, title, address }) => {
  return (
    <TouchableOpacity onPress={() => { }} style={commonStyles.mapContainer}>
    <Text style={commonStyles.mapTitle}>{title}</Text>
      <MapView
        liteMode
        loadingEnabled
        loadingIndicatorColor={colors.yellow}
        loadingBackgroundColor={colors.black}
        style={commonStyles.mapView}
        initialRegion={region}
      >
        <MapView.Marker
          coordinate={region}
        />
      </MapView>
      <Text style={commonStyles.mapAddress}>{address}</Text>
    </TouchableOpacity>
  );
}

Location.propTypes = {
  region: PropTypes.shape({
    latitude: PropTypes.number,
    longitude: PropTypes.number,
    latitudeDelta: PropTypes.number,
    longitudeDelta: PropTypes.number,
  }).isRequired,
  title: PropTypes.string,
  address: PropTypes.string,
};

export default Location;