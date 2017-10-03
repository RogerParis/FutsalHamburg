import React from 'react';
import { TouchableOpacity, Image, View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import { getFullName } from '../model/members';
import { colors } from '../config/styles';
import I18n from '../config/I18n';


const MemberCell = ({ member }) => {
  const fullName = getFullName(member);
  return (
    <TouchableOpacity
      style={styles.cellContainer}
    >
      <Image
        source={{ uri: member.portraitPhotoUrl }}
        style={styles.image}
        resizeMode={'cover'}
      />
      <View style={styles.detailsContainer}>
        <Text
          style={styles.fullName}
        >
          {fullName}
        </Text>
        <Text
          style={styles.type}
        >
          {I18n.t(`data.members.types.${member.type}`)}
        </Text>
        <Text
          style={styles.joiningDate}
        >
          {I18n.t('data.members.joiningDate', { joiningDate: member.joiningDate })}
        </Text>
      </View>
      <Text
        style={styles.number}
      >
        {member.number}
      </Text>
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
    type: PropTypes.string.isRequired,
    number: PropTypes.number,
  }).isRequired
};

const styles = StyleSheet.create({
  cellContainer: {
    marginHorizontal: 10,
    marginVertical: 5,
    padding: 10,
    backgroundColor: colors.yellow,
    flexDirection: 'row',
    borderRadius: 10,
  },
  image: {
    width: 80,
    height: 100,
  },
  fullName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.black,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'space-between'
  },
  number: {
    fontSize: 48,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginLeft: 10,
    color: colors.black,
  }, 
  type: {
    fontSize: 16
  },
  joiningDate: {
    fontSize: 12
  }
});

export default MemberCell;
