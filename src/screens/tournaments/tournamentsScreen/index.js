import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import I18n from '../../../config/I18n';
import { screenContaining } from '../../../components/containers/screenContainer';
import { loadTournaments } from '../../../store/referenceData/referenceDataActions';
import { colors } from '../../../config/styles';

class TournamentsScreen extends React.Component {
  static navigationOptions = () => {
    return {
      headerTitle: I18n.t('screens.tournaments.title'),
    };
  };

  componentDidMount() {
    if (this.props.tournaments.length === 0) {
      this.props.loadTournaments();
    }
  }

  render() {
    const { tournaments } = this.props;
    return (
      <View style={{ flex: 1 }}>
        {tournaments.map(tournament => {
          const { key, title } = tournament;
          return (
            <TouchableOpacity
              key={key}
              style={styles.cellContainer}
              onPress={() => {}}
            >
              <Text
                style={styles.teamName}
              >
                {title}
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
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.black,
    margin: 20,
    padding: 10,
    borderRadius: 10,
  },
  teamName: {
    color: colors.yellow,
    fontSize: 24,
    fontWeight: 'bold',
  }
});

const mapStateToProps = state => {
  const { tournaments } = state.referenceData;
  return { tournaments };
};

export default connect(mapStateToProps, { loadTournaments })(screenContaining(TournamentsScreen));
