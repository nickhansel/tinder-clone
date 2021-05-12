import React from 'react';
import { Spin } from 'antd';

const Loading = () => {
  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        minHeight: '900p',
        margintTop: 200,
        justifyContent: 'center',
        width: '100%',
      }}
    >
      <Spin size="large" />
    </div>
  );
};

export default Loading;
