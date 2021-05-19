/*
  Empava Archive Notes
*/
import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { Typography } from 'antd';
import { SubH2, SpaceBetween, Note1Grey, Badge, Flex } from 'common';
const { Paragraph } = Typography;

const ArchiveNote = ({
  type,
  clientName,
  note,
  height,
}) => {
  const paragraphProps = {
    style: {
      height: height || 95,
      marginTop: 15,
      marginBottom: 0,
      overflow: 'auto',
    },
    ellipsis: {
      rows: 4,
      expandable: true,
      symbol: 'Read more',
    },
  };

  const Section = (
    <div>
      <Paragraph {...paragraphProps}>
        {note.description}
      </Paragraph>
    </div>
  );

  const renderBadge = (
    <Badge size='lrg'
      strategy={note.badgeName} />
  );

  const statusText = note.status === 'win' ? 'Yes' : 'No';

  return (
    <div>
      <SpaceBetween>
        <Flex>
          {renderBadge}
          <div>
            <SubH2>{note.title}</SubH2>
            <Note1Grey>
              <div>
								Date Created: {moment(note.createdAt).format('MM/D/YYYY hh:mm')}
              </div>
              <div>
								Date Resolved: {moment(note.updatedAt).format('MM/D/YYYY hh:mm')}
              </div>
              <div>
                <span>Client: </span>
                <span style={{ color: '#052F7B' }}>{clientName}</span>
              </div>
              <div>
                <span>Win: </span>
                <span style={{ color: '#052F7B' }}>{statusText}</span>
              </div>
            </Note1Grey>
          </div>
        </Flex>
      </SpaceBetween>
      {Section}
    </div>
  );
};

export default ArchiveNote;