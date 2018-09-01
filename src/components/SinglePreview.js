import React from 'react';
import { Link } from 'react-router-dom';
import { DEFAULT_SINGLE_IMG, MODERATE_PIN_IMG, HARD_PIN_IMG, EASY_PIN_IMG  } from '../constants/defines'
import '../../src/style/bike-route.css';
import '../../src/style/global.css';
import '../../src/style/animate.css';

class SinglePreview extends React.Component {

  constructor(props) {
    super(props);
    this.numCols = props.numCols;
    this.state = {
      appClass: `bike-route col-md-${this.numCols}`
    };
  }

  componentDidMount() {
    this.setState({ appClass: `bike-route col-md-${this.numCols} show` });
  }

  componentWillUnmount() {
    this.setState({ appClass: 'hide' });
  }

  getDefaultImage() {
    return DEFAULT_SINGLE_IMG;
  }

  render() {
    return (
      <div className={this.state.appClass}>
        <Link to={{ pathname: `/singles/${this.props.article.title}`, state: { single: this.props.article, area: this.props.area, location: this.props.location } }}>
          <div>
            <img class="img-preivew" src={this.props.article.image || this.getDefaultImage()} alt={this.props.article.imageAlt} />
          </div>
          <div class="wrapper-bounce">
            <span class="pin">
              <img src={this.props.article.difficulty === "moderate" ? MODERATE_PIN_IMG
                : this.props.article.difficulty === "hard" ? HARD_PIN_IMG
                  : EASY_PIN_IMG} />
            </span>
          </div>
          <div>
            {this.props.article.title}
          </div>
          <div>
            {this.props.article.subtitle}
          </div>
          <div class="difficulty-text">
            {this.props.article.difficultyText}
          </div>
          <span className={this.props.article.difficultyClass}></span>
        </Link>
      </div>
    );
  }
}

export default SinglePreview;
