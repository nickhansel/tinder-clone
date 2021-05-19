/*
  Client Profile
*/

import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import { Row, Divider } from 'antd';
import {
  AvatarContainer,
  SubH1,
  Note1,
  Note2,
  Note1Grey,
  Badge,
  DividerStyled,
} from 'common';
import HealthMeter from './HealthMeter';
import ProfileSection from './ProfileSection';
import ClientStrategyModal from 'pages/Dashboard/components/ClientStrategyModal';
import { mockMoods } from 'utils/mock';
import { iconMenu } from 'media/svg';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { updateClient } from 'graphql/mutations';

const ClientProfile = ({
  id,
  name,
  position,
  accountId: { name: company, healthScore, contract, renewalDate },
  contactId,
  isDecisionMaker,
  avatarId,
  strategy: { items: strategyItems },
  mood,
}) => {
  console.log(contactId)
  const [isBadgeModal, toggleBadgeModal] = useState(false);
  const clientMood = mockMoods[avatarId]; // TODO change to real data
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: 'icon',
    drop: () => ({
      name: `Dustbin`,
      allowedDropEffect: 'any',
    }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });
  const isActive = canDrop && isOver;

  const score = parseFloat(healthScore);
  const isChamp = score > 4.5;

  const [updateClientIsDecisionMaker] = useMutation(gql(updateClient));

	const handleUpdateClientIsDecisionMaker = (clientID, isDecisionMakerBool) => {
		updateClientIsDecisionMaker({
			variables: {
				input: {
					id: clientID,
					isDecisionMaker: isDecisionMakerBool,
				},
			},
		});
	};

  // Components render
  const renderBadges = strategyItems.map((item, index) => (
    <Badge key={index}
      strategy={item.badgeName} />
  ));

  const sectionHeader = (
    <>
      <ProfileSection
        header={<Note1Grey>Renewal Date</Note1Grey>}
        content={[<Note1 key='renewal'>{renewalDate}</Note1>]}
      />
      <Divider type="vertical"
        style={{ height: 56 }} />
      <ProfileSection
        header={<Note1Grey style={{ marginLeft: 20 }}>Contract</Note1Grey>}
        content={[
          <Note1 key='contract'
            style={{ marginLeft: 14 }}>${contract}/month</Note1>
        ]}
      />
    </>
  );

  const iconProps = {
    height: 24,
    width: 24,
  };

  return (
    <Row justify="center">
      <div ref={drop}
        style={{ opacity: isActive ? 0.5 : 1 }}>
        <AvatarContainer
          isChamp={isChamp}
          isDecisionMaker={isDecisionMaker}
          mood={clientMood}
          mode="full"
          id={id}
          updateClientIsDecisionMaker={handleUpdateClientIsDecisionMaker}
          clientName={name}
          fromClientDetails={true}
        />
      </div>
      <div className="details-profile-info">
        <ProfileSection
          header={<SubH1>{name}</SubH1>}
          content={
            [
              <Note1Grey key={'position'}>{position}</Note1Grey>,
              <Note2 key={'company'}>
                <b>{company}</b>
              </Note2>
            ]
          }
          extra={
            <img style={iconProps}
              src={iconMenu}
              alt="" />
          }
        />
        <DividerStyled />
        <HealthMeter healthScore={healthScore} />
        <Row>
          <ProfileSection header={sectionHeader}
            content={[]} />
        </Row>
        <DividerStyled />
        <Row onClick={() => toggleBadgeModal(true)}>{renderBadges}</Row>
      </div>
      <ClientStrategyModal
        handleToggle={toggleBadgeModal}
        isBadgeModal={isBadgeModal}
        selectedClientId={id}
      />
    </Row>
  );
};

export default ClientProfile;
