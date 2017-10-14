import * as types from './types';

const initialState = {
  locations: [],
  teams: [],
  coaches: [],
  players: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.LOCATIONS_REFERENCE_DATA_SUCCESS:
      return {
        ...state,
        locations: action.payload,
      };
    case types.TEAMS_REFERENCE_DATA_SUCCESS:
      return {
        ...state,
        teams: action.payload,
      };
    case types.COACHES_REFERENCE_DATA_SUCCESS:
      return {
        ...state,
        coaches: action.payload,
      };
    case types.PLAYERS_REFERENCE_DATA_SUCCESS:
      return {
        ...state,
        players: action.payload,
      };
    case types.TEAM_STAFF_REFERENCE_DATA_SUCCESS:
      return {
        ...state,
        coaches: { ...state.coaches, [action.key]: action.payload },
      };
    case types.TEAM_PLAYERS_REFERENCE_DATA_SUCCESS:
      return {
        ...state,
        players: { ...state.players, [action.key]: action.payload },
      };
    default:
      return state;
  }
};
