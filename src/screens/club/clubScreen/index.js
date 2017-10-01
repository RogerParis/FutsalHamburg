import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import I18n from '../../../config/I18n';
import { screenContaining } from '../../../components/containers/screenContainer';
import { loadTeams } from '../../../store/referenceData/referenceDataActions';

class ClubScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: I18n.t('screens.club.title'),
    };
  };

  componentDidMount() {
    this.props.loadTeams();
  }

  render() {
    const { teams } = this.props;
    console.log(teams);
    return (
      <View style={{ flex: 1 }}>
        {teams.map(team => {
        return (
          <Text key={team.handle}>{I18n.t(`data.teams.${team.handle}.label`)}</Text>
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
