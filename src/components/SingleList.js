import SinglePreview from './SinglePreview';
import React from 'react';
import '../../src/style/bike-route.css';

const SignleList = props => {
  if (!props.articles) {
    return (
      <div className="article-preview">בטעינה...</div>
    );
  }

  if (props.articles.length === 0) {
    return (
      <div className="article-preview">
      איו כרגע פוסטים
      </div>
    );
  }

  return (
    <div class="bike-route-container">
      {
        props.articles.map(article => {
          return (
            <SinglePreview article={article} area={props.area} location={props.location} numCols="3"/>
          );
        })
      }
    </div>
  );
};

export default SignleList;
