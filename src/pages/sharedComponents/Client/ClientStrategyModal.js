/*
  Client Strategy modal component,
  contains a modal with a list of client strategies
 */
import React from 'react';
import PropTypes from 'prop-types';

import { Modal } from 'antd';

import Strategies from '../Strategies';

const ClientStrategyModal = ({
  selectedClientId,
  handleToggle,
  isBadgeModal,
  strategies,
  setClientData,
  clientData,
  loading,
}) => {
  return (
    <Modal
      className='modal__client-startegies'
      visible={isBadgeModal}
      title='Strategies'
      onCancel={() => handleToggle(false, null)}
      footer={[]}>
      <Strategies
        setClientData={setClientData}
        clientData={clientData}
        data={strategies}
        selectedClientId={selectedClientId}
        loading={loading} />
    </Modal>
  );
};

ClientStrategyModal.propTypes = {
  selectedClientId: PropTypes.string.isRequired,
  handleToggle: PropTypes.func.isRequired,
  isBadgeModal: PropTypes.bool.isRequired,
  strategies: PropTypes.array.isRequired,
  loading: PropTypes.bool,
};

export default ClientStrategyModal;
