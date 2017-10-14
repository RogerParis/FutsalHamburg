import React from 'react';
import { connect } from 'react-redux';
import LoggedInLayout from '../layouts/loggedInLayout';
import { loadReferenceData } from '../../store/referenceData/referenceDataActions';

class MainAppContainer extends React.Component {
  componentWillMount() {
    this.props.loadReferenceData();
  }

  render() {
    return <LoggedInLayout />;
  }
}

export default connect(null, { loadReferenceData })(MainAppContainer);
