/*
   Component to provide layout for settings tabs
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'antd';
import { CardWrap } from 'common';


const TabLayout = ({
  spanSize,
  content,
}) => {
  return (
    <Col span={spanSize}>
      <CardWrap className="details-card settings-info">
        {content}
      </CardWrap>
    </Col>
  );
};

TabLayout.propTypes = {
  spanSize: PropTypes.number,
  content: PropTypes.any,
};

export default TabLayout;
