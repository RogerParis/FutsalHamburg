import React from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';

import I18n from '../../../config/I18n';
import { screenContaining } from '../../../components/containers/screenContainer';
import { loadTeamStaff, loadTeamPlayers } from '../../../store/referenceData/referenceDataActions';
import { getFullName } from '../../../model/members';
import MemberCell from '../../../components/memberCell';
import BackButton from '../../../components/backButton';

class TeamScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: I18n.t(`data.teams.${navigation.state.params.handle}.label`),
      headerLeft: (<BackButton onBackPress={() => navigation.goBack()} />),
    };
  };

  constructor() {
    super();
    this.bindedRenderItem = this.renderItem.bind(this);
  }

  componentDidMount() {
    this.loadTeamMembers();
  }

  loadTeamMembers() {
    const { key } = this.props.navigation.state.params;
    const { coaches, players } = this.props;
    if (coaches.length !== 0) {
      this.props.loadTeamStaff(key);
    }
    if (players.length !== 0) {
      this.props.loadTeamPlayers(key);
    }
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
    const { members } = this.props;
    return (
      <FlatList
        style={{ flex: 1 }}
        data={members.map(item => ({ key: getFullName(item), member: item }))}
        renderItem={this.bindedRenderItem}
      />
    );
  }
}

const mapStateToProps = (state, props) => {
  const { key } = props.navigation.state.params;
  const { coaches } = state.referenceData.coaches[key] || { coaches: [] };
  const { players } = state.referenceData.players[key] || { players: [] };
  return { members: [...coaches, ...players], coaches, players };
};

export default connect(
  mapStateToProps,
  { loadTeamStaff, loadTeamPlayers }
)(screenContaining(TeamScreen));
