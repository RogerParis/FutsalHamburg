import React from 'react';
import { Icon } from 'react-native-elements';
import PropTypes from 'prop-types';

const TabBarButton = ({ image, color }) => {
  return (
    <Icon name={image} color={color} type='ionicon' />
  );
};

TabBarButton.propTypes = {
  image: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
};

export default TabBarButton;
