/*
   Empava Notes
 */

import React from "react";
import { SubH2, Text, SpaceBetween } from "common";
import { iconTrash } from "media/svg";

const Note = ({ name, note }) => {
  const NoteAction = (
    <SpaceBetween style={{ marginTop: 20 }}>
      <span style={{ color: "#115CE5" }}>Read more</span>
      <img src={iconTrash} alt="note trash icon" />
    </SpaceBetween>
  );
  const Section = (
    <div>
      <h4>
        <span style={{ color: "#838C95" }}>{note.createdAt} by </span>
        <span style={{ color: "#115CE5" }}>{name}</span>
      </h4>
      <Text>{note.text}</Text>
    </div>
  );

  return (
    <div>
      <SubH2>{note.title}</SubH2>
      {Section}
      {NoteAction}
    </div>
  );
};

export default Note;
