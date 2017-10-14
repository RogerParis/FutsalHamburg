import React from 'react';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';

import I18n from '../../../config/I18n';
import { screenContaining } from '../../../components/containers/screenContainer';
import Location from '../../../components/location';
import { loadLocations } from '../../../store/referenceData/referenceDataActions';

class ContactScreen extends React.Component {
  static navigationOptions = () => {
    return {
      headerTitle: I18n.t('screens.contact.title'),
    };
  }

  componentDidMount() {
    if (this.props.locations.length === 0) {
      this.props.loadLocations();
    }
  }

  render() {
    const trainingLocation =
      this.props.locations.find((location) => location.handle === 'training');
    return (
      <ScrollView style={{ flex: 1 }}>
        {trainingLocation &&
          <Location
            region={trainingLocation}
            title={I18n.t('data.locations.training.title')}
            address={I18n.t('data.locations.training.address')}
          />
        }
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  const { locations } = state.referenceData;
  return { locations };
};

export default connect(mapStateToProps, { loadLocations })(screenContaining(ContactScreen));
