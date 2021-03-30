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

const SignUp = () => {
  const history = useHistory();
  const [userData, setUserData] = useState({
    username: '',
    password: '',
    email: '',
    phone_number: '',
    authCode: '',
  });
  const [showConfirmation, setShowConfirmation] = useState(false);

  const onChange = (key, value) => {
    setUserData({
      ...userData,
      [key]: value,
    });
  };

  const signUp = () => {
    const { username, password, email, phone_number } = userData;

    Auth.signUp({
      username,
      password,
      attributes: {
        email,
        phone_number,
      },
    })
      .then(() => setShowConfirmation(true))
      .catch((err) => console.log('error signing up: ', err));
  };

  const confirmSignUp = () => {
    const { username, authCode } = userData;

    Auth.confirmSignUp(username, authCode)
      .then(() => history.push(BASE_URLS.DASHBOARD))
      .catch((err) => console.log('error confirming signing up: ', err));
  };

  const onCancel = () => {
    history.push('/');
  };

  return (
    <div {...css(styles.container)}>
      {!showConfirmation && (
        <>
          <div {...css(styles.container)}>
            <AuthInput
              placeholder="Username"
              onChange={(evt) => onChange('username', evt.target.value)}
            />
            <AuthInput
              placeholder="Password"
              type="password"
              onChange={(evt) => onChange('password', evt.target.value)}
            />
            <AuthInput
              placeholder="Email"
              onChange={(evt) => onChange('email', evt.target.value)}
            />
            <AuthInput
              placeholder="Phone Number"
              onChange={(evt) => onChange('phone_number', evt.target.value)}
            />
          </div>
          <Flex>
            <ButtonCancel onClick={onCancel}>
              <TextInfo>Cancel</TextInfo>
            </ButtonCancel>
            <ButtonConfirm onClick={signUp}>
              <Text>Confirm</Text>
            </ButtonConfirm>
          </Flex>
        </>
      )}
      {showConfirmation && (
        <div>
          <AuthInput
            onChange={(evt) => onChange('authCode', evt.target.value)}
            placeholder="Confirmation Code"
          />
          <ButtonConfirm onClick={confirmSignUp}>
            <Text>Sign Up</Text>
          </ButtonConfirm>
        </div>
      )}
    </div>
  );
};

export default SignUp;
