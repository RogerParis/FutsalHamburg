import React from 'react';
import { connect } from 'react-redux';

import LoggedInLayout from '../layouts/loggedInLayout';
import { 
  loadLocations, 
  loadTeams, 
} from '../../store/referenceData/referenceDataActions';

class MainAppContainer extends React.Component {
  componentDidMount() {
    this.props.loadLocations();
    this.props.loadTeams();
  }

  render() {
    return <LoggedInLayout />;
  }
}

export default connect(null, {
  loadLocations,
  loadTeams,
})(MainAppContainer);
