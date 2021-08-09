/*
  Client Profile
*/
import React, { useState } from 'react';

import { useMutation, useLazyQuery, useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { updateClient as updateClientMutation } from 'graphql/mutations';
import { getClientStrategysNot, getClientStrategysEq } from 'graphql/queries';

import { Row, Divider } from 'antd';

import {
  AvatarContainer,
  SubH1,
  Note1,
  Note2,
  Note1Grey,
  Badge,
  DividerStyled,
  SpaceBetween,
} from 'common';
import HealthMeter from './HealthMeter';
import ProfileSection from './ProfileSection';
import ClientStrategyModal from 'pages/sharedComponents/Client/ClientStrategyModal';
import { ArchiveActionIcon } from 'common';
import { ArchiveModal } from 'pages/sharedComponents';
import { iconMenu } from 'media/svg';
import { getHealthScore, getSum } from 'utils';
import { MOOD_CONFIG } from 'utils/mock';

const SALUTATION_CONF = {
  'Ms.': 'Girl',
  'Mr.': 'Boy'
};
const ClientProfile = ({
  id,
  selectedClient,
  name,
  ratingId,
  position,
  salutation,
  accountId,
  isDecisionMaker,
}) => {
  // TODO: change to real data
  const isImpatient = clientMood === 'impatientGirl';
  const rating = getSum(ratingId);
  const suffix = SALUTATION_CONF[salutation] ? SALUTATION_CONF[salutation] : 'Boy';
  const clientMood = MOOD_CONFIG[`${getHealthScore(rating)}${suffix}`];
  const healthScore = rating && rating != 'NaN' ? rating : 3.8;

  // react hooks
  const [isBadgeModal, toggleBadgeModal] = useState(false);
  const [isArchiveModal, toggleArchiveModal] = useState(false);

  // gQL queries
  const { data: dataAssigned = {} } = useQuery(
    gql(getClientStrategysEq(`"assigned"`)), {
      variables: { id },
    }
  );
  const [ loadArchive, { data: dataArchive = {}, loading }] = useLazyQuery(
    gql(getClientStrategysNot(`"assigned"`)), {
      variables: { id },
    }
  );
  const [updateClient] = useMutation(gql(updateClientMutation));

  const { items = [] } =  dataAssigned.getClient 
    ? dataAssigned.getClient.strategy 
    : {};

  // gQL Mutations
  const handleUpdateClient = (id, newData) => {
    updateClient({
      variables: {
        input: { id, ...newData },
      },
    });
  };
  const handleArchiveClick = () => {
    toggleArchiveModal(true);
    loadArchive({ variables: {
      filter: {
        status: {
          ne: 'assigned'
        },
      }}}
    );
  };

  // // Components render
  const renderBadges = items.map((item, index) => (
    <Badge key={index}
      strategy={item.badgeName} />
  ));

  const sectionHeader = (
    <>
      <ProfileSection
        header={<Note1Grey>Renewal Date</Note1Grey>}
        content={[
          <Note1 key='renewal'>
            {accountId?.renewalDate}
          </Note1>
        ]}
      />
      <Divider type="vertical"
        style={{ height: 56 }} />
      <ProfileSection
        header={
          <Note1Grey style={{ marginLeft: 20 }}>
            Contract
          </Note1Grey>}
        content={[
          <Note1 key='contract'
            style={{ marginLeft: 14 }}>
              ${accountId?.contract}/month
          </Note1>
        ]}
      />
    </>
  );

  const iconProps = {
    height: 24,
    width: 24,
  };

  return (
    <Row justify='center'>
      <div>
        <AvatarContainer
          clientName={name}
          fromClientDetails={true}
          handleUpdateClient={handleUpdateClient}
          id={id}
          isChamp={healthScore > 4.6}
          isDecisionMaker={isDecisionMaker}
          mood={clientMood}
          mode='full'
        />
      </div>
      <div className='details-profile-info'>
        <ProfileSection
          header={<SubH1>{name}</SubH1>}
          content={[
            <Note1Grey key={'position'}>
              {position}
            </Note1Grey>,
            <Note2 key={'company'}>
              <b>{accountId?.name}</b>
            </Note2>,
          ]}
          extra={<img style={iconProps}
            src={iconMenu}
            alt='' />}
        />
        <DividerStyled />
        <HealthMeter healthScore={healthScore} />
        <Row>
          <ProfileSection header={sectionHeader}
            content={[]} />
        </Row>
        <DividerStyled />
        <SpaceBetween>
          <div
            style={{ cursor: 'pointer' }}
            onClick={() => toggleBadgeModal(true)}>
            {renderBadges}
          </div>
          <div style={{ float: 'right' }}>
            <ArchiveActionIcon onClick={handleArchiveClick} />
          </div>
        </SpaceBetween>
      </div>
      <ClientStrategyModal
        handleToggle={toggleBadgeModal}
        isBadgeModal={isBadgeModal}
        selectedClientId={selectedClient}
        strategies={items}
      />
      <ArchiveModal
        handleToggle={toggleArchiveModal}
        isArchiveModal={isArchiveModal}
        selectedClientId={selectedClient}
        clientName={name}
        data={dataArchive.getClient?.strategy}
        loading={loading}
      />
    </Row>
  );
};

export default ClientProfile;
