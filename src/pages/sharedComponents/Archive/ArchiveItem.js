/*
* Archive Item component
* contains resolved strategy ( win and loss) layout
*/
import React from 'react';
import moment from 'moment';
import { SubH2, SpaceBetween, Note1Grey, Badge, Flex } from 'common';


const ArchiveItem = ({
  clientName,
  strategy,
}) => {
  const {
    status,
    badgeName,
    title,
    createdAt,
    updatedAt,
    description
  } = strategy;

  const statusText = status === 'win' ? 'Yes' : 'No';

  return (
    <div>
      <SpaceBetween>
        <Flex>
          <Badge size='lrg'
            strategy={badgeName} />
          <div>
            <SubH2>{title}</SubH2>
            <SpaceBetween style={{width: 400}}>
              <div>
                <div>
                  Client: 
                  <span style={{ color: '#052F7B' }}> {clientName}</span>
                </div>
                <div>
                  Win: 
                  <span style={{ color: '#052F7B' }}> {statusText}</span>
                </div>
              </div>
              <div>
                <Note1Grey>
                  Date Created: {moment(createdAt).format('MM/D/YYYY hh:mm')}
                </Note1Grey>
                <Note1Grey>
                  Date Resolved: {moment(updatedAt).format('MM/D/YYYY hh:mm')}
                </Note1Grey>
              </div>
            </SpaceBetween>
          </div>
        </Flex>
      </SpaceBetween>
      <div style={{paddingLeft: 25, paddingTop: 8}}>
        {description}
      </div>
    </div>
  );
};

export default ArchiveItem;