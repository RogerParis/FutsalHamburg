import React from 'react';
import { View, Text } from 'react-native';

import I18n from '../../../config/I18n';
import { screenContaining } from '../../../components/containers/screenContainer';
import { loadCoachingStaff, loadPlayers } from '../../../model/teams/teamsDataSource';
import { getFullName } from '../../../model/members';

class TeamScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: I18n.t(`data.teams.${navigation.state.params.handle}.label`),
    };
  };

  constructor() {
    super();
    this.state = {
      coaches: [],
      players: [],
    }
  }

  componentDidMount() {
    const { key } = this.props.navigation.state.params;
    loadCoachingStaff(key)
      .then((coaches) => this.setState({ coaches }));
    loadPlayers(key)
      .then((players) => this.setState({ players }));
  }

  render() {
    const { coaches, players } = this.state;
    return (
      <View style={{ flex: 1 }}>
        {coaches.map(coach => {
          const fullName = getFullName(coach);
          return (
            <Text key={fullName}>{fullName}</Text>
          );
        })}
        {players.map(player => {
          const fullName = getFullName(player);
          return (
            <Text key={fullName}>{fullName}</Text>
          );
        })}
      </View>
    );
  }
}

export default screenContaining(TeamScreen);
