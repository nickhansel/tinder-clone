/*
   Empava Notes
 */

import React, { useState, useEffect } from "react";
import moment from "moment";
import { Checkbox, Spin, Typography, Popconfirm, message } from "antd";
import { SubH2, SpaceBetween, Note1Grey } from "common";
import { iconTrash } from "media/svg";

const { Paragraph } = Typography;

const Note = ({ authorName, note, deleteNote, extra }) => {
  const [noteText, setNoteText] = useState(note.text);
  const [isSpinning, toggleSpinning] = useState(false);

  // rerender text when note updated
  useEffect(() => {
    setNoteText(note.text);
  }, [note]);

  function confirm(e) {
    // TODO delete note
    message.success("Deleted");
    toggleSpinning(false);
  }

  function cancel(e) {
    console.log(e);
    toggleSpinning(false);
  }

  const paragraphProps = {
    style: {
      height: 95,
      marginTop: 15,
      marginBottom: 0,
      overflow: "auto",
    },
    ellipsis: {
      rows: 4,
      expandable: true,
      symbol: "Read more",
    },
  };

  const Section = (
    <div>
      <Note1Grey>
        <span>{moment(note.createdAt).format("MM/D/YYYY hh:mm")} by </span>
        <span style={{ color: "#115CE5" }}>{authorName}</span>
      </Note1Grey>
      <Paragraph {...paragraphProps} editable={{ onChange: setNoteText }}>
        {" "}
        {noteText}
      </Paragraph>
    </div>
  );
  const renderDelete = deleteNote ? (
    <Popconfirm
      title="Are you sure?"
      onConfirm={confirm}
      onCancel={cancel}
      okText="Ok"
      cancelText="Cancel"
    >
      <img
        onClick={() => toggleSpinning(true)}
        style={{ cursor: "pointer", marginLeft: 5 }}
        src={iconTrash}
        alt="note trash icon"
      />
    </Popconfirm>
  ) : null;

  return (
    <div>
      <Spin spinning={isSpinning}>
        <SpaceBetween>
          <SubH2>{note.title}</SubH2>
          <div>
            <Checkbox />
            {renderDelete}
          </div>
        </SpaceBetween>
        {Section}
      </Spin>
    </div>
  );
};

export default Note;
