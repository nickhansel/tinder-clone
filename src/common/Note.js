/*
   Empava Notes
 */

import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import moment from "moment";
import { Spin, Typography, Popconfirm, message } from "antd";
import { SubH2, SpaceBetween, Note1Grey } from "common";
import { iconTrash } from "media/svg";

const { Paragraph } = Typography;

const Note = ({ authorName, note, deleteNote }) => {
  const [noteText, setNoteText] = useState(note.text);
  const [isSpinning, toggleSpinning] = useState(false);
  const dispatch = useDispatch();

  // rerender text when note updated
  useEffect(() => {
    setNoteText(note.text);
  }, [note]);

  function confirm(e) {
    dispatch(deleteNote(note.id));
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
    editable: {
      tooltip: "Edit",
      onChange: setNoteText,
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
      <Paragraph {...paragraphProps}> {noteText}</Paragraph>
    </div>
  );

  return (
    <div>
      <Spin spinning={isSpinning}>
        <SpaceBetween>
          <SubH2>{note.title}</SubH2>
          <Popconfirm
            title="Are you sure?"
            onConfirm={confirm}
            onCancel={cancel}
            okText="Ok"
            cancelText="Cancel"
          >
            <img
              onClick={() => toggleSpinning(true)}
              style={{ cursor: "pointer" }}
              src={iconTrash}
              alt="note trash icon"
            />
          </Popconfirm>
        </SpaceBetween>
        {Section}
      </Spin>
    </div>
  );
};

export default Note;
