import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import { getFullName } from '../model/members';

const MemberCell = ({ member }) => {
  const fullName = getFullName(member);
  return (
    <TouchableOpacity
      style={styles.cellContainer}
    >
      <Text key={fullName}>{fullName}</Text>
    </TouchableOpacity>
  );
};

MemberCell.propTypes = {
  member: PropTypes.shape({
    alias: PropTypes.string,
    firstName: PropTypes.string.isRequired,
    joiningDate: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    portraitPhotoUrl: PropTypes.string,
    position: PropTypes.string,
    number: PropTypes.number,
  }).isRequired
};

const styles = StyleSheet.create({
  cellContainer: {
    padding: 20
  }
});

export default MemberCell;
