import React from 'react';
import { connect } from 'react-redux';
import * as data from '../../../src/data.json';
import FeaturedItem from '../FeaturedItem'
import ArticleList from '../ArticleList';


const ALL_RESULTS = 'all';
const EMPTY_RESULTS = '';

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
    featuredItem: featuredItem(data)
  }
};

const featuredItem = data => {
  return data.items[0].items[0].items[0].items[0];
}

const mapDispatchToProps = dispatch => ({
});

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
      <FeaturedItem article={props.featuredItem}/>
      <ArticleList articles={props.filteredItems}/>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MainView);
