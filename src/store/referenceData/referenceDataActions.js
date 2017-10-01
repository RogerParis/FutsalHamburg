import * as types from './types';
import * as locationsDataSource from '../../model/locations/locationsDataSource';
import * as teamsDataSource from '../../model/teams/teamsDataSource';
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

export const loadTeams = () => {
  return (dispatch) => {
    return teamsDataSource.loadTeams()
      .then(teams => {
        dispatch(createAction(types.TEAMS_REFERENCE_DATA_SUCCESS, teams));
      })
      .catch(e => console.log(e));
  };
};
