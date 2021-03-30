import React from 'react';
import iconUp from 'media/svg/icon-up.svg';
import iconDwon from 'media/svg/icon-down.svg';

const Direction = ({ direction }) => {
  const directionsMap = {
    up: iconUp,
    down: iconDwon,
  };

  return (
    <img src={directionsMap[direction]}
      alt={`direction icon ${direction}`} />
  );
};

export default Direction;
