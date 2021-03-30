/*
   Container for drag and drop
 */

import React from 'react';
import { useDrag } from 'react-dnd';

const DragDropContainer = ({ name, children, actionOnFinish, style }) => {
  const item = { name, type: 'icon' };
  const [{ opacity }, drag] = useDrag({
    item,
    end(item, monitor) {
      const dropResult = monitor.getDropResult();

      if (item && dropResult) {
        actionOnFinish(item.name);
      }
    },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.4 : 1,
    }),
  });

  return (
    <div ref={drag}
      style={style}>
      {children}
    </div>
  );
};

export default DragDropContainer;
