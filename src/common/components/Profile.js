import React from 'react';
import { Avatar } from 'antd';
import avatar from 'media/images/profile.png';

const Profile = () => {
  return (
    <Avatar
      size="large"
      src={avatar} />
  );
};

export default Profile;
