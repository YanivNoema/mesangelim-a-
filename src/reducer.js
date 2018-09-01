import article from './reducers/article';
import articleList from './reducers/articleList';
import { combineReducers } from 'redux';
import { createForms } from 'react-redux-form';
import { routerReducer } from 'react-router-redux';
import common from './reducers/common';
import home from './reducers/home';
import mainView from './reducers/mainView';
import filter from './reducers/filter'

const initialFilterState = {
  search: "",
  location: 'all',
  area: 'all',
  difficulty: 'all'
};

export default combineReducers({
  article,
  articleList,
  common,
  home,
  router: routerReducer,
  mainView,
  ...createForms({
    filter: initialFilterState,
  }),
  filter
});
