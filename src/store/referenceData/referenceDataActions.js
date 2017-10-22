import * as types from './types';
import * as locationsDataSource from '../../model/locations/locationsDataSource';
import * as teamsDataSource from '../../model/teams/teamsDataSource';
import * as tournamentsDataSource from '../../model/tournaments/tournamentsDataSource';
import * as coachesDataSource from '../../model/coaches/coachesDataSource';
import * as playersDataSource from '../../model/players/playersDataSource';
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

export const loadTournaments = () => {
  return (dispatch) => {
    return tournamentsDataSource.loadTournaments()
      .then(teams => {
        dispatch(createAction(types.TOURNAMENTS_REFERENCE_DATA_SUCCESS, teams));
      })
      .catch(e => console.log(e));
  };
};

export const loadCoaches = () => {
  return (dispatch) => {
    return coachesDataSource.loadCoaches()
      .then(coaches => {
        dispatch(createAction(types.COACHES_REFERENCE_DATA_SUCCESS, coaches));
      })
      .catch(e => console.log(e));
  };
};

export const loadPlayers = () => {
  return (dispatch) => {
    return playersDataSource.loadPlayers()
      .then(players => {
        dispatch(createAction(types.PLAYERS_REFERENCE_DATA_SUCCESS, players));
      })
      .catch(e => console.log(e));
  };
};

export const loadTeamStaff = (key) => {
  return (dispatch) => {
    return teamsDataSource.loadTeamStaff(key)
      .then(coaches => {
        dispatch(createAction(types.TEAM_STAFF_REFERENCE_DATA_SUCCESS, { key, coaches }));
      })
      .catch(e => console.log(e));
  };
};

export const loadTeamPlayers = (key) => {
  return (dispatch) => {
    return teamsDataSource.loadTeamPlayers(key)
      .then(players => {
        dispatch(createAction(types.TEAM_PLAYERS_REFERENCE_DATA_SUCCESS, { key, players }));
      })
      .catch(e => console.log(e));
  };
};
