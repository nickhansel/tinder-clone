import React from "react";
import generateId from "../util.js";
import { employeeDefaultValues } from "../constants.js";
import createSkillUserAction from "./createSkillUserAction";

// Action to create a new employee and connections to skills
const createTeam = (data, sfKey, sfUsername, createTeam, createSkillUser, reset) => {
  const teamId = generateId();
  createTeam({
    variables: {
      input: {
        id: teamId,
        sfKey
        sfUsername
      },
    },
  })
    .then((res) => {
      let promises = createUserTeamLink(
        data.skills,
        employeeId,
        createSkillUser
      );

      Promise.all(promises)
        .then((results) => {
          // reset form to default values
          reset(employeeDefaultValues);
        })
        .catch((e) => {
          console.error(e);
        });
    })
    .catch((error) => console.log("error" + error));
};

export default createEmployeeAction;
