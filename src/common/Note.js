/*
   Empava Notes
 */

import React from "react";
import { Divider } from "antd";
import { Title } from "common";

const Note = ({ name }) => {
  const Section = (
    <div>
      <h4>
        3/19/20 1:34 PM by <span style={{ color: "#052F7B" }}>{name}</span>
      </h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat...
      </p>
      <Divider />
    </div>
  );

  return (
    <div>
      <Title>Empava Notes</Title>
      {Section}
      {Section}
      {Section}
    </div>
  );
};

export default Note;
