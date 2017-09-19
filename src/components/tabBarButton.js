import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';

import { colors } from '../config/styles';

const TabBarButton = ({ image, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.buttonContainer}
      onPress={onPress}
    >
      <Icon name={image} size={30} color={colors.yellow} />
    </TouchableOpacity>
  );
};

TabBarButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TabBarButton;
