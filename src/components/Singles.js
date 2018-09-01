import React from 'react';
import '..\\style\\global.css';
import '..\\style\\singles.css';
import { informationItemsMap } from '../constants/defines';

const Lines = props => {
  if (props.items) {
    return (
      props.items.map((item) => {
        if (item.value === '') {
          return '';
        }
        return (
          <div className="single-line-box rtl">
            <div className="single-line-title">
              {informationItemsMap[item.key]} :
            </div>
            <div className="single-line-text">
              {item.value}
            </div>
          </div>
        );
      })
    );
  }
  return null;
};

class Singles extends React.Component {

  constructor(props) {
    super(props);
    const { single, area, location } = this.props.location.state;
    this.singleTitle = single.subtitle;
    this.area = area;
    this.location = location;
    this.items = [];
    for (var key in single.additionalInformation) {
      this.items.push({ key: key, value: single.additionalInformation[key] })
    }

    // this.items.unshift({key: 'area', value: area});
    // this.items.unshift({key: 'location', value: location});
  }

  render() {
    return (
      <div className="container rtl signels">
        <div className="col-md-6">
          <div className="single-title">
            {this.singleTitle}
          </div>
          <Lines items={this.items}/>
        </div>
        <div className="col-md-6"></div>
      </div>
    );
  }
}

export default Singles;
