import {
  SUBMIT_FILTER
} from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case SUBMIT_FILTER:
      var filterBy = action.payload;
      return state.concat(filterBy);
    default:
      return state;
  }
};
