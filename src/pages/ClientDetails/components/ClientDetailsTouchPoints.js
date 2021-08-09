/*
   Client Touch Points
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Typography } from 'antd';
import { SubH2, Note1Grey, Flex, DividerStyled } from 'common';
import ClientDetailsPointsModal from './ClientDetailsPointsModal';
import { iconMail } from 'media/svg';
import gmailApi from 'react-gmail';

// const CLIENT_ID = '767353220010-h8nui7vm4oenkds05v7vov7g6cffgh0d.apps.googleusercontent.com';
// const API_KEY = 'VvfuSxwGGg3wSUG2STm0ZU4x';
// const SCOPES = 'https://www.googleapis.com/auth/gmail.readonly';
// const DISCOVERY_DOCS =  ['https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest'];

const { Paragraph } = Typography;

const ClientDetailsTouchPoints = ({ authorName, touchPoints }) => {
  const [isModalOpen, togglePointsModal] = useState(false);

  const styleAuthor = {
    color: '#115CE5',
  };
  const paragraphProps = {
    ellipsis: { rows: 2, expandable: true, symbol: 'more' },
  };

  const getMessages = () => {
    // gmailApi.getMessages(true, 5).then(res => {
    //   console.log(gmailApi.normalizeData(res));
    // });
  };

  useEffect(() => {
    getMessages();
  }, []);

  const renderTouchPoints = (
    <>
      {touchPoints.map((point, index) => {
        return (
          <span key={index}>
            <Flex>
              <img src={iconMail}
                alt="icon mail last touch points" />
              <Note1Grey style={{ padding: '0px 8px' }}>
                {point.createdAt} by{' '}
              </Note1Grey>
              <span style={{ ...styleAuthor }}>{authorName}</span>
            </Flex>
            <Paragraph {...paragraphProps}>{point.text}</Paragraph>
          </span>
        );
      })}
    </>
  );

  const actionWrapperStyle = {
    bottom: 0,
    position: 'absolute',
    width: '100%',
  };
  const actionTextStyle = {
    margin: 0,
    color: '#14709F',
    cursor: 'pointer',
  };
  const renderAction = (
    <div style={{ ...actionWrapperStyle }}>
      <DividerStyled />
      <Flex style={{ justifyContent: 'center' }}>
        <SubH2
          onClick={() => togglePointsModal(true)}
          style={{ ...actionTextStyle }}
        >
          View All
        </SubH2>
      </Flex>
    </div>
  );

  const wrapperStyle = {
    position: 'relative',
    height: '100%',
  };
  const contentStyle = {
    overflow: 'auto',
    height: 220,
  };

  return (
    <div style={{ ...wrapperStyle }}>
      <SubH2>Latest Touch Points</SubH2>
      <div style={{ ...contentStyle }}>{renderTouchPoints}</div>
      {renderAction}
      <ClientDetailsPointsModal
        isOpen={isModalOpen}
        handleToggle={() => togglePointsModal(false)}
        content={renderTouchPoints}
      />
    </div>
  );
};

ClientDetailsTouchPoints.propTypes = {
  authorName: PropTypes.string.isRequired,
  touchPoints: PropTypes.array.isRequired,
};

export default ClientDetailsTouchPoints;
