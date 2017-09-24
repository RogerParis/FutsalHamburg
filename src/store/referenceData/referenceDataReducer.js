import * as types from './types';

const initialState = {
  locations: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.LOCATIONS_REFERENCE_DATA_SUCCESS:
    return {
      ...state,
      locations: action.payload,
    };
    default:
      return state;
  }
};
