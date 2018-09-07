import common from './reducers/common';
import home from './reducers/home';
import mainView from './reducers/mainView';
import filter from './reducers/filter'
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { EMPTY_RESULTS, ALL_RESULTS } from './constants/defines.js';

export const INITIAL_STATE = {
  search: EMPTY_RESULTS,
  location: ALL_RESULTS,
  area: ALL_RESULTS,
  difficulty: ALL_RESULTS
};

export default combineReducers({
  common,
  home,
  router: routerReducer,
  mainView,
  filter
});
