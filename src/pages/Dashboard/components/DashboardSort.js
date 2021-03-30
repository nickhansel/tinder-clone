/*
   Dashboard Sort Component 
 */

import React from 'react';
import { Note2Grey } from 'common';
import { iconFilter, iconSort, iconCalendar } from 'media/svg';

const DashboardSort = () => {
  return (
    <div>
      <div>
        <img src={iconCalendar}
          alt="" />
        <Note2Grey>Renewal Date</Note2Grey>
      </div>
      <div>
        <img src={iconSort}
          alt="" />
        <Note2Grey>Sort By</Note2Grey>
      </div>
      <div>
        <img src={iconFilter}
          alt="" />
        <Note2Grey>Filters</Note2Grey>
      </div>
    </div>
  );
};

export default DashboardSort;
