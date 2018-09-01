import {
  SUBMIT_FILTER
} from '../constants/actionTypes';

export default (state = {}, action) => {

  switch (action.type) {
    case SUBMIT_FILTER:
    // debugger;
    return Object.assign({}, state, {
      search: action.text,
      location: action.location,
      diffculty: action.diffculty,
      area: action.area
    });
    default:
      return state;
  }
};
