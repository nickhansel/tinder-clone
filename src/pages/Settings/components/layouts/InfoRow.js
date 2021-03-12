import React from "react";
import {
  Note1,
  Note1Grey,
  Flex,
} from "common";

const InfoRow = ({ name, data }) => {
  return (
    <Flex style={{ marginTop: "15px" }}>
      <Note1Grey style={{ marginRight: "15px" }}>{name}</Note1Grey>
      <Note1>{data}</Note1>
    </Flex>
  );
};

export default InfoRow;