import React from 'react';
import * as data from '../data/data.json';
import { ALL_RESULTS, ALL_RESULTS_DISPLAY_TEXT, AREA_INDEX, LOCATION_INDEX, DIFFICULTY_INDEX, ALL_RESULTS_DIFFICULTY_DISPLAY_TEXT } from '../../constants/defines'
import { connect } from 'react-redux';
import { flatten } from '../../common'
import { RESET_FORM, FILTER_RESULT, SUBMIT_FORM } from '../../constants/actionTypes'
import '../../../src/style/filter.css';

const mapStateToProps = state => {
  const { area, location, difficulty } = state.filter;
  const ret = filterElment([area || ALL_RESULTS, location || ALL_RESULTS, difficulty || ALL_RESULTS], getData());
  return {
    areaData: flatten(ret[AREA_INDEX]),
    locationData: flatten(ret[LOCATION_INDEX]),
    difficultyLevelData: flatten(ret[DIFFICULTY_INDEX])
  }
};

const mapDispatchToProps = dispatch => ({
  onResetForm: () => dispatch({ type: RESET_FORM }),
  onSubmitForm: (search, area, location, difficulty) => dispatch({ type: SUBMIT_FORM, search, area, location, difficulty }),
  onFilterResults: (area, location, difficulty) => dispatch({ type: FILTER_RESULT, area, location, difficulty }),
});

const getData = () => {
  return JSON.parse(JSON.stringify(data));
}

const filterElment = (values, items) => {
  let ret = [];
  let runnerItems = items.items;
  const firstIndex = 0;
  const filterAllResultStep = (index) => {
    ret.push(flatten(runnerItems.map(item => ({ name: item.displayName, value: item.name }))));
    ret[ret.length - 1].unshift({ value: ALL_RESULTS, name: getAllResultDisplayText(index) })
  };
  filterAllResultStep(firstIndex);
  values.forEach((value, index) => {
    if (value === ALL_RESULTS) {
      filterAllResultStep(index);
      debugger;
      runnerItems = flatten(runnerItems.map(item => item.items));
    } else {
      ret.push(runnerItems.filter(item => item.name === value).map(item => ({ name: item.displayName, value: item.name })));
      ret[ret.length - 1].unshift({ value: ALL_RESULTS, name: getAllResultDisplayText(index) })
      runnerItems = flatten(runnerItems.filter(item => item.name === value).map(item => item.items));
    }
  });
  return ret;
}

const getAllResultDisplayText = index => {
  return index + 1 !== DIFFICULTY_INDEX ? ALL_RESULTS_DISPLAY_TEXT : ALL_RESULTS_DIFFICULTY_DISPLAY_TEXT;
}

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      area: '',
      location: '',
      difficulty: ''
    };
    this.reset = this.reset.bind(this);
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  reset = () => {
    this.props.onResetForm();
  }

  submit = () => {
    const { search, area, location, difficulty } = this.state;
    this.props.onSubmitForm(search, area, location, difficulty);
  }

  handleChange = (type, e) => {
    this.setState(
      { [type]: e.target.value },
      () => {
        const { area, location, difficulty } = this.state;
        this.props.onFilterResults(area, location, difficulty);
      }
    )
  }

  render() {
    return (
      <div>
        <div className="filter-title">
          {this.props.filterTitle}
        </div>
        <div>
          <form>
            <input value={this.state.search} className="filter-box" onChange={(e) => this.handleChange('search', e)} placeholder="חיפוש" />
            <select value={this.state.area} class="filter-box" onChange={(e) => this.handleChange('area', e)}>
              {this.props.areaData.map((e, key) => {
                return <option key={key} value={e.value}>{e.name}</option>;
              })}
            </select>
            <select class="filter-box" value={this.state.location} onChange={(e) => this.handleChange('location', e)}>
              {this.props.locationData.map((e, key) => {
                return <option key={key} value={e.value}>{e.name}</option>;
              })}
            </select>
            <select class="filter-box" value={this.state.difficulty} onChange={(e) => this.handleChange('difficulty', e)}>
              {this.props.difficultyLevelData.map((e, key) => {
                return <option key={key} value={e.value}>{e.name}</option>;
              })}
            </select>
            <button class="submit" type="button" onClick={this.submit}>סנן</button>
            <button class="submit" type="button" onClick={this.reset}>נקה</button>
          </form >
        </div>
      </div>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);