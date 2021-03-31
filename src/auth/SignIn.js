import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { css } from 'glamor';
import { Auth } from 'aws-amplify';
import { BASE_URLS } from 'utils';
import { ButtonConfirm, ButtonCancel, Text, TextInfo, Flex } from 'common';
import { AuthInput } from './styles';

const styles = {
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    height: '300px',
  },
};

const SignIn = () => {
  const history = useHistory();
  const [error, setError] = useState({});
  const [userData, setUserData] = useState({
    username: '',
    password: '',
    authCode: '',
  });

  const onChange = (key, value) => {
    setUserData({
      ...userData,
      [key]: value,
    });
  };

  const signIn = () => {
    Auth.signIn(userData.username, userData.password)
      .then((user) => {
        history.push(BASE_URLS.DASHBOARD);
      })
      .catch((err) => {
        console.log('error signing in...: ', err);
        setError(err);
      });
  };
  const onCancel = () => {
    history.push('/');
  };

  return (
    <div {...css(styles.container)}>
      <div {...css(styles.container)}>
        <AuthInput
          onChange={(evt) => onChange('username', evt.target.value)}
          placeholder="username"
        />
        <AuthInput
          type="password"
          onChange={(evt) => onChange('password', evt.target.value)}
          placeholder="password"
        />
      </div>
      <div>
        <p style={{ color: 'red'}}>{error.message}</p>
      </div>
      <Flex>
        <ButtonCancel onClick={onCancel}>
          <TextInfo>Cancel</TextInfo>
        </ButtonCancel>
        <ButtonConfirm onClick={signIn}>
          <Text>Confirm</Text>
        </ButtonConfirm>
      </Flex>
    </div>
  );
};

export default SignIn;
