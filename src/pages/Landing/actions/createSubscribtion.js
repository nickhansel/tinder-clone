// import React from "react";
import { generateId } from 'utils';

// Action to create a new employee and connections to skills
const createSubscribtionAction = (createSubscribtion, data) => {
  const employeeId = generateId();
  createSubscribtion({
    variables: {
      input: {
        id: employeeId,
        email: data.email,
      },
    },
  })
    .then((res) => {
      console.log(res);
    })
    .catch((error) => console.log('error' + error));
};

export default createSubscribtionAction;
