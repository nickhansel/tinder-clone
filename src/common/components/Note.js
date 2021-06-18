/*
  Empava Notes
*/
import React, { useState, useEffect } from 'react';

import moment from 'moment';
import { Spin, Typography } from 'antd';
import { Note1Grey, Badge, Flex, ActionHeader } from 'common';
import { alertWithOffset as alertWithOffset } from 'utils';

const { Paragraph } = Typography;

const Note = ({ 
  // deleting,
  authorName,
  note,
  // deleteNote,
  updating,
  // updateNote,
  height,
  noteUpdateAction,
  headerActions = false,
  additionalContent = null
}) => {
  const [noteText, setNoteText] = useState(note.content || note.description);
  const [isSpinning, toggleSpinning] = useState(false);

  useEffect(() => {
    setNoteText(note.content || note.description);
  }, [note]);

  // updates note in backend and sets note text for state
  function confirmNoteUpdate(updatedText) {
    setNoteText(updatedText);
    noteUpdateAction(note.id, updatedText);

    alertWithOffset(
      updating,
      'Note Updated',
    );
  }

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
      <Paragraph
        {...paragraphProps}
        editable={{ onChange: confirmNoteUpdate }}>
        {noteText}
      </Paragraph>
    </div>
  );

  const headerIcon = note.badgeName ? 
    <Badge size="lrg"
      strategy={note.badgeName} /> : null;

  const renderWin = note.status === 'win' ? (
    <div>
      <span>
        Win: {moment(note.updatedAt).format('MM/D/YYYY hh:mm')} by
      </span>
      <span style={{ color: '#052F7B' }}> {authorName}</span>
    </div>
  ) : null;
  
  const renderAdditionalActions = headerActions ? (
    <ActionHeader
      title={note.title}
      actions={headerActions} 
      id={note.id}
      toggleSpinning={toggleSpinning}
      headerIcon={headerIcon}
    />
  ) : null;

  return (
    <div>
      <Spin spinning={isSpinning}>
        {renderAdditionalActions}
        <Flex>
          <Note1Grey>
            <span>
              Created: {moment(note.createdAt).format('MM/D/YYYY hh:mm')} by
            </span>
            <span style={{ color: '#052F7B' }}> {authorName}</span>
            {renderWin}
          </Note1Grey>
          {additionalContent}
        </Flex>
        {Section}
      </Spin>
    </div>
  );
};

export default Note;