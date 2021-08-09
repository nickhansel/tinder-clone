/*
   Dashboard Sort Component 
 */

import React from 'react';
import { Note2Grey } from 'common';
import { iconSort } from 'media/svg';

const DashboardSort = () => {
  return (
    <div>
      <div>
        <img src={iconSort}
          alt="" />
        <Note2Grey>Sort By</Note2Grey>
      </div>
    </div>
  );
};

export default DashboardSort;
