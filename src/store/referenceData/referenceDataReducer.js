import * as types from './types';

const initialState = {
  locations: [],
  teams: [],
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
    default:
      return state;
  }
};
