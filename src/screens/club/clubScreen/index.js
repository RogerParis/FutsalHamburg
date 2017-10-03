import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import I18n from '../../../config/I18n';
import { screenContaining } from '../../../components/containers/screenContainer';
import { loadTeams } from '../../../store/referenceData/referenceDataActions';

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
              style={{ padding: 20 }}
              onPress={() => this.props.navigation.navigate('team', { key, handle })}
            >
              <Text>{I18n.t(`data.teams.${handle}.label`)}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { teams } = state.referenceData;
  return { teams };
};

export default connect(mapStateToProps, { loadTeams })(screenContaining(ClubScreen));
