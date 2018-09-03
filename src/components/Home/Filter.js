import React from 'react';
import * as data from '../data/data.json';
import { Control, Form, Field } from 'react-redux-form';
import { NAME, DISPLAY_NAME, ALL_RESULTS } from '../../constants/defines'
import { connect } from 'react-redux';
import '../../../src/style/filter.css';


const mapStateToProps = state => {
  return {
    data: getData(),
    areaData: initAres(),
    locationData: initLocations(state.forms.filter.area.value),
    difficultyLevelData: initDifficultyLevel()
  }
};

const getData = () => {
  return JSON.parse(JSON.stringify(data));
}

const initAres = () => {
  let ret = mapData(data.items, DISPLAY_NAME, NAME);
  ret.unshift({ value: 'all', name: 'כל האיזורים' })
  return ret;
}

const initLocations = (filterParam) => {
  let ret = [];
  data.items.forEach(area => {
    if (filterParam ==  ALL_RESULTS || filterParam === area.name) {
      ret = ret.concat(mapData(area.items, DISPLAY_NAME, NAME));
    }
  });
  ret.unshift({ value: 'all', name: 'כל האתרים' })
  return ret;
}

const initDifficultyLevel = () => {
  let ret = [];
  ret.push({ value: 'all', name: 'כל הרמות' })
  ret.push({ value: 'difficulty_2', name: 'קשה' })
  ret.push({ value: 'difficulty_1', name: 'בינוני' })
  ret.push({ value: 'difficulty_0', name: 'קל' })
  return ret;
}

const mapData = (data, keyName, valueName) => {
  let ret = [];
  ret = data.map(item => ({ name: item[keyName], value: item[valueName] }));
  return ret;
}


class Filter extends React.Component {
  render() {
    return (
      <div>
        <div className="filter-title">
          {this.props.filterTitle}
        </div>
        <div>
          <Form model="filter" onSubmit={this.props.handleSubmit}>
            <Control.text model=".search" className="filter-box" placeholder="חיפוש" />
            <Field model=".area" className="go-inline-block">
              <select class="filter-box">
                {this.props.areaData.map((e, key) => {
                  return <option key={key} value={e.value}>{e.name}</option>;
                })}
              </select>
            </Field>
            <Field model=".location" className="go-inline-block">
              <select class="filter-box">
                {this.props.locationData.map((e, key) => {
                  return <option key={key} value={e.value}>{e.name}</option>;
                })}
              </select>
            </Field>
            <Field model=".difficulty" className="go-inline-block">
              <select class="filter-box">
                {this.props.difficultyLevelData.map((e, key) => {
                  return <option key={key} value={e.value}>{e.name}</option>;
                })}
              </select>
            </Field>
            <button class="submit" type="button">סנן</button>
          </Form >
        </div>
      </div>
    );
  }
};

export default connect(mapStateToProps)(Filter);