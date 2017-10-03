import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native';
import { connect } from 'react-redux';

import I18n from '../../../config/I18n';
import { screenContaining } from '../../../components/containers/screenContainer';
import { loadTeams } from '../../../store/referenceData/referenceDataActions';
import images from '../../../assets/images';
import { colors } from '../../../config/styles';

const cellHeight = (Dimensions.get('window').height - 250) / 3;

class ClubScreen extends React.Component {
  static navigationOptions = () => {
    return {
      headerTitle: I18n.t('screens.club.title'),
    };
  };

  componentDidMount() {
    this.props.loadTeams();
  }

  render() {
    const { teams } = this.props;
    return (
      <View style={{ flex: 1 }}>
        {teams.map(team => {
          const { key, handle } = team;
          return (
            <TouchableOpacity
              key={key}
              style={styles.cellContainer}
              onPress={() => this.props.navigation.navigate('team', { key, handle })}
            >
              <Image
                source={{ uri: images.futsalHamburg.badge }}
                style={styles.image}
                resizeMode={'cover'}
              />
              <Text
               style={styles.teamName}
              >
                {I18n.t(`data.teams.${handle}.label`)}
                </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cellContainer: {
    height: cellHeight,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.black,
    margin: 20,
    padding: 10,
    borderRadius: 10,
  },
  image: {
    width: 100,
    height: 100,
  }, 
  teamName: {
    flex: 1,
    marginHorizontal: 10,
    color: colors.yellow,
    fontSize: 32,
    fontWeight: 'bold',
    alignSelf: 'center'
  }
});

const mapStateToProps = state => {
  const { teams } = state.referenceData;
  return { teams };
};

export default connect(mapStateToProps, { loadTeams })(screenContaining(ClubScreen));
