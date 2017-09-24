import * as LocationsApi from '../../services/api/locationsApi';

export const loadLocations = () => {
  return LocationsApi.loadLocations()
    .then(locations => {
      return locations;
    });
};
