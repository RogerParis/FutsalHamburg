import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { colors } from '../config/styles';

const BackButton = ({ onBackPress, color }) => {
  return (
    <TouchableOpacity onPress={() => onBackPress()} style={styles.container}>
      <Icon name={'md-arrow-round-back'} size={30} color={color} />
    </TouchableOpacity>
  );
};

BackButton.propTypes = {
  onBackPress: PropTypes.func.isRequired,
  color: PropTypes.string,
};

BackButton.defaultProps = {
  color: colors.yellow,
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  }
});

export default BackButton;
