import React from 'react';
import { Rate } from 'antd';

const desc = ['very bad', 'bad', 'normal', 'good', 'very good'];

const Rater = ({
  setValue,
  value
}) =>{
  return (
    <span>
      <Rate
        style={{ color: '#82ADD7', fontSize: 60 }}
        tooltips={desc}
        onChange={(value)=> setValue(value)}
        value={value}
      />
    </span>
  );
};

export default Rater;
