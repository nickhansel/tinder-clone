/*
   Client Touch Points
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Typography } from 'antd';
import moment from 'moment';
import ClientDetailsPointsModal from './ClientDetailsPointsModal';
import { SubH2, Note1Grey, Flex, DividerStyled, Note1, TextInfo } from 'common';
import { iconMail } from 'media/svg';
import useCurrentUser from '../../../customHooks/useCurrentUser';
import { Loading } from 'common';
import { URL } from 'utils';

const { Paragraph } = Typography;
const sfSignatureLength = 120;

const ClientDetailsTouchPoints = ({ authorName, client }) => {
  const [isModalOpen, togglePointsModal] = useState(false);
  const [touchPoints, setTouchPoints] = useState([]);
  const [isDataLoading, setIsLoading] = useState(false);
  const userData = useCurrentUser();

  const paragraphProps = {
    ellipsis: { rows: 2, expandable: true, symbol: 'more' },
  };

  // get emails sent to the client
  async function getData(sfUsername, sfKey) {
    const emailQuery = `SELECT Headers, MessageDate, Status, TextBody, Subject FROM EmailMessage WHERE ToAddress='${client.email}'`;
    const authPath = `?sfUsername=${sfUsername}&sfKey=${sfKey}&query=`;

    await fetch(`${URL.QUERY}${authPath}${emailQuery}`).then(response => response.json()).then(data => {
      setTouchPoints(data.records);
      setIsLoading(false);
    });
  }

  useEffect(() => {
    const { team } = userData;

    if (team) {
      setIsLoading(true);
      getData(team?.sfUsername, team?.sfKey);
    }
  }, [userData]);


  const renderTouchPoints = isDataLoading ? (
    <div style={{ marginTop: 80 }}>
      <Loading />
    </div> 
  ) : (
    <>
      {touchPoints.map((point, index) => {
        let message = point.TextBody.trim();
        
        if (message.includes('Powered by Salesforce')) {
          message = message.substring(0, message.length - sfSignatureLength);
        }

        return (
          <span key={index}>
            <Flex>
              <img src={iconMail}
                alt="icon mail last touch points" />
              <Note1 style={{ padding: '0px 8px' }}>Subject: {point.Subject}</Note1>
              <Note1Grey style={{ padding: '0px 8px' }}>
                {moment(new Date(point.MessageDate)).format('MMMM Do YYYY')} by{' '}
              </Note1Grey>
              <TextInfo>{authorName}</TextInfo>
            </Flex>
            <Paragraph {...paragraphProps}>{message}</Paragraph>
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
    color: '#14709F',
    cursor: 'pointer',
    margin: 0,
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
  client: PropTypes.object.isRequired,
};

export default ClientDetailsTouchPoints;
