import React from 'react';
import { FlatList } from 'react-native';

import I18n from '../../../config/I18n';
import { screenContaining } from '../../../components/containers/screenContainer';
import { loadCoachingStaff, loadPlayers } from '../../../model/teams/teamsDataSource';
import { getFullName } from '../../../model/members';
import MemberCell from '../../../components/memberCell';

class TeamScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: I18n.t(`data.teams.${navigation.state.params.handle}.label`),
    };
  };

  constructor() {
    super();
    this.state = {
      members: [],
    }
    this.bindedRenderItem = this.renderItem.bind(this);
  }

  componentDidMount() {
    const { key } = this.props.navigation.state.params;
    loadCoachingStaff(key)
      .then((coaches) => {
        console.log('coaches: ',coaches);
        this.setState({ members: [ ...this.state.members, ...coaches ] });
        loadPlayers(key)
          .then((players) => {
            console.log('players: ',players);
            this.setState({ members: [ ...this.state.members, ...players ] })
          });
      });

  }

  renderItem({ item }) {
    const { member } = item;
    return (
      <MemberCell 
        member={member}
      />
    );
  }

  render() {
    const { members } = this.state;
    console.log('members: ',members);
    return (
      <FlatList
        style={{ flex: 1 }}
        data={members.map(item => ({ key: getFullName(item), member: item }))}
        renderItem={this.bindedRenderItem}
      />
    );
  }
}

export default screenContaining(TeamScreen);
