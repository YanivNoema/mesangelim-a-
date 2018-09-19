import { INITIAL_STATE } from '../reducer'
import { SUBMIT_FORM } from '../constants/actionTypes';

export default (state = INITIAL_STATE, action) => {
  debugger;
  switch (action.type) {
    case SUBMIT_FORM:
      return Object.assign({}, state, {
        area: action.area,
        location: action.location,
        difficulty: action.difficulty,
        search: action.search
      })
      default:
      return state;
  }
};
