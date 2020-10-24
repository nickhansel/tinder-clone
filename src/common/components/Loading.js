import React from "react";
import { Spin } from "antd";

const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        margintTop: 200,
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Spin size="large" />
    </div>
  );
};

export default Loading;
