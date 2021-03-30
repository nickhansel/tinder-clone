// React imports
import React, { useState } from 'react';
import PropTypes from 'prop-types';
// Outside imports
import { Card } from 'antd';
import { ResizableBox } from 'react-resizable';
// Helpers
import { CARD_SIZES } from 'utils';
import './styles.css';

const ResizableCard = ({ item, index, cardSize, children }) => {
  const [width, setWidth] = useState(
    cardSize === 'sm' ? CARD_SIZES.CARD_SM_WIDTH : CARD_SIZES.CARD_WIDTH
  );
  const [height, setHeight] = useState(
    cardSize === 'sm' ? CARD_SIZES.CARD_SM_HEIGHT : CARD_SIZES.CARD_HEIGHT
  );

  const onResize = (event, { element, size }) => {
    setWidth(size.width);
    setHeight(size.height);
  };
  let cardWidth = 'auto';

  return (
    <>
      <Card
        // title={"title"}
        key={1}
        // extra={}
        style={{
          width: cardWidth,
          height: 'auto',
          marginRight: 10,
          padding: 0,
        }}>
        <ResizableBox
          onResize={onResize}
          width={width}
          height={height}
          minConstraints={[
            CARD_SIZES.CARD_MIN_CONSTRAINT,
            CARD_SIZES.CARD_MIN_CONSTRAINT,
          ]}
          maxConstraints={[
            CARD_SIZES.CARD_MAX_CONSTRAINT,
            CARD_SIZES.CARD_MAX_CONSTRAINT,
          ]}
        >
            Hello
          {/* {children} */}
        </ResizableBox>
      </Card>
    </>
  );
};

ResizableCard.propTypes = {
  type: PropTypes.string,
  index: PropTypes.number,
};

export default ResizableCard;
