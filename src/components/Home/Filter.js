import React from 'react';
import * as data from '../data/data.json';
import { Control, Form, Field } from 'react-redux-form';
import { NAME, DISPLAY_NAME } from '../../constants/defines'
import '../../../src/style/filter.css';

class Filter extends React.Component {

  constructor(props) {
    super(props);
    this.data = JSON.parse(JSON.stringify(data));
    this.areaData = [];
    this.locationData = [];
    this.difficultyLevelData = [];
    this.initData = this.initData.bind(this);
    this.initAres = this.initAres.bind(this);
    this.initLocations = this.initLocations.bind(this);
    this.handleChangeArea = this.handleChangeArea.bind(this);
    this.initData();
  }

  initData() {
    this.initAres();
    this.initLocations();
    this.initDifficultyLevel();
  }

  initAres() {
    this.areaData = this.mapData(this.data.items, DISPLAY_NAME, NAME);
    this.areaData.unshift({ value: 'all', name: 'כל האיזורים' })
  }

  initLocations(filterParam) {
    this.locationData = [];
    data.items.forEach(area => {
      if (!filterParam || filterParam === area.name) {
        this.locationData = this.locationData.concat(this.mapData(area.items, DISPLAY_NAME, NAME));
      }
    });

    this.locationData.unshift({ value: 'all', name: 'כל האתרים' })
  }

  initDifficultyLevel() {
    this.difficultyLevelData = [];
    data.items.forEach(area => {
      area.items.forEach(location => {
        this.difficultyLevelData = this.difficultyLevelData.concat(this.mapData(location.items, DISPLAY_NAME, NAME));
      })
    });
    this.difficultyLevelData.unshift({ value: 'all', name: 'כל הרמות' })
  }

  mapData(data, keyName, valueName) {
    let ret = [];
    ret = data.map(item => ({ name: item[keyName], value: item[valueName] }));
    return ret;
  }

  handleChangeArea(e) {
    const value = e.target.value;
    this.initLocations(value);
  }

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
              <select class="filter-box" onChange={this.handleChangeArea}>
                {this.areaData.map((e, key) => {
                  return <option key={key} value={e.value}>{e.name}</option>;
                })}
              </select>
            </Field>
            <Field model=".location" className="go-inline-block">
              <select class="filter-box">
                {this.locationData.map((e, key) => {
                  return <option key={key} value={e.value}>{e.name}</option>;
                })}
              </select>
            </Field>
            <Field model=".difficulty" className="go-inline-block">
              <select class="filter-box">
                {this.difficultyLevelData.map((e, key) => {
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

export default Filter;