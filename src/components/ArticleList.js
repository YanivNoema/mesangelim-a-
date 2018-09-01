import ArticlePreview from './ArticlePreview';
import React from 'react';
import '../../src/style/bike-route.css';

const ArticleList = props => {
  if (!props.articles) {
    return (
      <div className="article-preview">Loading...</div>
    );
  }

  if (props.articles.length === 0) {
    return (
      <div className="article-preview">
        No articles are here... yet.
      </div>
    );
  }

  return (
    <div class="bike-route-container">
      {
        props.articles.map(article => {
          return (
            <ArticlePreview article={article} numCols="3"/>
          );
        })
      }
    </div>
  );
};

export default ArticleList;
