import React from 'react';
import FeaturedItem from '../FeaturedItem'
import SingleList from '../SingleList';
import * as data from '../data/data.json';
import { connect } from 'react-redux';
import { EMPTY_RESULTS, ALL_RESULTS } from '../../constants/defines.js';

const flatten = arr => {
  var out = [];
  for (var i = 0; i < arr.length; i++) {
    out.push.apply(out, Array.isArray(arr[i]) ? flatten(arr[i]) : [arr[i]]);
  }
  return out;
};

const mapStateToProps = state => {
  const { search, area, location, difficulty } = state.forms.filter;
  return {
    filteredItems: filteredItems([area.value, location.value, difficulty.value, search.value], JSON.parse(JSON.stringify(data))),
    featuredItem: featuredItem(data),
    showFeaturedItem: showFeaturedItem(area.value, location.value, difficulty.value, search.value),
    currentArea: area.value,
    currentLocation: location.value,
    cuurentDifficulty: difficulty.value
  }
};

const showFeaturedItem = (area, location, difficulty, search) => {
  return area === ALL_RESULTS &&
    location === ALL_RESULTS &&
    difficulty === ALL_RESULTS &&
    search === EMPTY_RESULTS;
}


const featuredItem = data => {
  return data.items[0].items[0].items[0].items[0];
}

const filteredItems = (values, data) => {
  let ret = data;
  values.forEach((value, index) => {
    if (index + 1 === values.length) {
      ret = ret.items.filter(term => term.title.includes(value) || term.subtitle.includes(value));
      return ret;
    } else if (value === EMPTY_RESULTS || value === ALL_RESULTS) {
      ret.items = ret.items.map(item => item.items);
      ret.items = flatten(ret.items)
    } else {
      ret.items = ret.items.filter(item => item.name === value).map(item => item.items);
      ret.items = flatten(ret.items)
    }
  });

  return ret;
}

const MainView = props => {
  return (
    <div className="col-md-12">
      {
        props.showFeaturedItem &&
        <FeaturedItem article={props.featuredItem} />
      }
      <SingleList articles={props.filteredItems} area={props.currentArea} location={props.currentLocation} difficulty={props.cuurentDifficulty} />
    </div>
  );
};

export default connect(mapStateToProps)(MainView);
