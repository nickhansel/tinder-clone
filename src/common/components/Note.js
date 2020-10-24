/*
   Empava Notes
 */

import React, { useState, useEffect } from "react";
import moment from "moment";
import { Spin, Typography, Popconfirm, message } from "antd";
import { SubH2, SpaceBetween, Note1Grey, Badge, Flex } from "common";
import { iconTrash } from "media/svg";

const { Paragraph } = Typography;

const Note = ({ type, authorName, note, deleteNote, height }) => {
  const [noteText, setNoteText] = useState(note.description);
  const [isSpinning, toggleSpinning] = useState(false);

  // rerender text when note updated
  // useEffect(() => {
  //   setNoteText(note.text);
  // }, [note]);

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
      height: height || 95,
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
      <Paragraph {...paragraphProps} editable={{ onChange: setNoteText }}>
        {note.content}
      </Paragraph>
    </div>
  );
  const renderDelete = (
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
  );
  const renderBadge =
    type === "strategy" ? <Badge size="lrg" strategy={note.badgeName} /> : null;

  return (
    <div>
      <Spin spinning={isSpinning}>
        <SpaceBetween>
          <Flex>
            {renderBadge}
            <div>
              <SubH2>{note.title}</SubH2>
              <Note1Grey>
                <span>
                  {moment(note.createdAt).format("MM/D/YYYY hh:mm")} by{" "}
                </span>
                <span style={{ color: "#052F7B" }}>{authorName}</span>
              </Note1Grey>
            </div>
          </Flex>
          {renderDelete}
        </SpaceBetween>
        {Section}
      </Spin>
    </div>
  );
};

export default Note;
