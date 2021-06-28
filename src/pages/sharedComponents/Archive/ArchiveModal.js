/*
* This component fetches and displays the archived strategies data 
* for one client if client id passed
* or for all cliens if no client id is present
* archived strategies have a status 'win' or 'loss'
* non archived have a status 'assigned'
*/
import React from 'react';
import PropTypes from 'prop-types';

import { Modal, Divider, Spin } from 'antd';

import ArchiveItem from './ArchiveItem';

const ArchiveModal = ({
  handleToggle,
  isArchiveModal,
  data = {},
  loading,
  clientName = null,
}) => {
  return (
    <Modal
      className='modal__client-startegies'
      visible={isArchiveModal}
      title='Strategy Archive'
      onCancel={() => handleToggle(false, null)}
      footer={[]}>
      <div>
        <Spin spinning={loading}>
          {
            data?.items?.map((item, key) => {
              return (
                <div key={key}
                  style={{ marginTop: 10 }}>
                  <ArchiveItem
                    clientName={clientName || item.clientId?.name}
                    strategy={item}
                  />
                  <Divider />
                </div>
              );
            })
          }
        </Spin>
      </div>
    </Modal>
  );
};

ArchiveModal.propTypes = {
  handleToggle: PropTypes.func.isRequired,
  isArchiveModal: PropTypes.bool.isRequired,
  clientName: PropTypes.string,
  loading: PropTypes.bool,
};

export default ArchiveModal;
