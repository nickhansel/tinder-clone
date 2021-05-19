import React from 'react';
import { Modal, Divider } from 'antd';
import ArchiveNote from './ArchiveNote';

const InsightArchiveModal = ({
  archiveData,
  handleToggle,
  isArchiveModal,
  clientName,
}) => {
  // console.log(archiveData);

  const renderNotes = (
    archiveData.map((item, key) => {
      return (
        <div key={key}
          style={{ marginTop: 15 }}>
          <ArchiveNote
            height={95}
            type='archive'
            clientName={clientName || item.clientId.name}
            note={item}
          />
          <Divider />
        </div>
      );
    }));

  return (
    <Modal
      className='modal__client-startegys'
      visible={isArchiveModal}
      title='Strategy Archive'
      onCancel={() => handleToggle(false, null)}
      footer={[]}>
      {renderNotes}
    </Modal>
  );
};

export default InsightArchiveModal;
