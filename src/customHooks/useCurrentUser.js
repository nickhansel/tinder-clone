/*
   Custom hook for getting currect user data from db based on authenticated user
 */
import { useState, useEffect } from 'react';
import { getUser } from 'graphql/queries';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { Auth } from 'aws-amplify';

export default function useCurrentUser() {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    Auth.currentUserInfo()
      .then((data) => {
        setUserData(data);
      })
      .catch((err) => console.log('error: ', err)); // TODO: add error handling
  }, []);

  // get user from out db
  const { data: currentUser = {} } = useQuery(gql(getUser), {
    variables: { id: userData ? userData.id : '' },
  });

  return currentUser.getUser || currentUser;
}
