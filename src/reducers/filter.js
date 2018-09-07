import { RESET_FORM, FILTER_RESULT, SUBMIT_FORM } from '../constants/actionTypes';
import { INITIAL_STATE } from '../reducer'

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FILTER_RESULT:
      return Object.assign({}, state, {
        area: action.area,
        location: action.location,
        difficulty: action.difficulty
      })
    case SUBMIT_FORM:
      return INITIAL_STATE;
    case RESET_FORM:
      return INITIAL_STATE
    default:
      return state;
  }
};
