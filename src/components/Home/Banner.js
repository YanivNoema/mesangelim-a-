import React from 'react';
import Filter from './Filter'

const Banner = () => {
  return (
    <div className="banner">
      <div className="container" style={{ height: 100 + '%' }} >
        <div class="filter">
        <Filter filterTitle="מסנגלים - מצא את הסינגל שלך!"/>
        </div>
      </div>
    </div>
  );
};

export default Banner;
