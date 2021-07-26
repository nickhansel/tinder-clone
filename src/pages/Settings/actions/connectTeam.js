// import { generateId } from 'utils';

// const connectTeamAction = (newData, createTeam, userId, linkUserTeam) => {
//   const { teamName, username, password, token } = newData;

//   const teamId = generateId();

//   createTeam({
//     variables: {
//       input: {
//         id: teamId,
//         name: teamName,
//         sfKey: `${password}${token}`,
//         sfUsername: username
//       },
//     },
//   }).then(res => {
//     console.log(res);
//     linkUserTeam({
//       variables: {
//         input: {
//           id: userId,
//           userTeamId: teamId
//         }
//       }
//     });
//   });
// };

// export default createTeamAction;
