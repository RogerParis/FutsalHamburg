import * as types from './types';
import * as locationsDataSource from '../../model/locations/locationsDataSource';
import { createAction } from '../../lib/actionsHelper';

export const loadLocations = () => {
  return (dispatch) => {
    return locationsDataSource.loadLocations()
      .then(locations => {
        dispatch(createAction(types.LOCATIONS_REFERENCE_DATA_SUCCESS, locations));
      })
      .catch(e => console.log(e));
  };
};
