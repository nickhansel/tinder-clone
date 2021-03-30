/*
  Sign Out Button component
 */

import React from 'react';
import { Auth } from 'aws-amplify';

const SignOutButton = ({ history }) => {
  return (
    <span
      style={{ lineHeight: '40px' }}
      onClick={() => {
        Auth.signOut()
          .then(() => {
            history.push(`/`);
          })
          .catch(() => console.log('error signing out...'));
      }}
    >
      Sign Out
    </span>
  );
};

export default SignOutButton;
