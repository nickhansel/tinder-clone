import React from 'react';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const Profile = () => {
  return <Avatar size="large"
    icon={<UserOutlined />} />;
};

export default Profile;
