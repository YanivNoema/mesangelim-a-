import React from 'react';
import { Link } from 'react-router-dom';
import agent from '../agent';
import { connect } from 'react-redux';
import '../../src/style/bike-route.css';
import '../../src/style/global.css';
import '../../src/style/animate.css';

let moderatePin = "http://www.mesangelim.co.il/wp-content/themes/direct-child/img/pin_normal.png";
let hardPin = "http://www.mesangelim.co.il/wp-content/themes/direct-child/img/pin_hard.png";
let easyPin = "http://www.mesangelim.co.il/wp-content/themes/direct-child/img/pin_easy.png";


const mapDispatchToProps = dispatch => ({
});

class ArticlePreview extends React.Component {

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
    return 'http://www.mesangelim.co.il/wp-content/uploads/2016/05/mesangelim-icon1-263x180.png';
  }

  render() {
    return (
      <div className={this.state.appClass}>
        <Link to={{ pathname: `/singles/${this.props.article.title}`, state: { single: this.props.article, area: "שפלת יהודה", location: "יער בן שמן" } }}>
          <div>
            <img class="img-preivew" src={this.props.article.image || this.getDefaultImage()} alt={this.props.article.imageAlt} />
          </div>
          <div class="wrapper-bounce">
            <span class="pin">
              <img src={this.props.article.difficulty === "moderate" ? moderatePin
                : this.props.article.difficulty === "hard" ? hardPin
                  : easyPin} />
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

export default connect(() => ({}), mapDispatchToProps)(ArticlePreview);
