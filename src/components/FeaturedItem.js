import React from 'react';
import SinglePreview from './SinglePreview'
import '../../src/style/featured-item.css';

const FeaturedItem = props => {
  return (
    <div class="featured-item-box">
      <div className="row">
        <div className="col-md-8 featured-item">
          <div className="featured-title">{props.article.title}</div>
          <div className="featured-title">{props.article.subtitle}</div>
          <div className="featured-descrition">{props.article.additionalInformation.singleDescription}</div>
      </div>
        <div className="col-md-4">
          <SinglePreview article={props.article || ''} numCols="12"/>
        </div>
      </div>
    </div>
  );
};

export default FeaturedItem;
