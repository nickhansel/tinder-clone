/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSubscribe = /* GraphQL */ `
  query GetSubscribe($id: ID!) {
    getSubscribe(id: $id) {
      id
      email
      createdAt
      updatedAt
    }
  }
`;
export const listSubscribes = /* GraphQL */ `
  query ListSubscribes(
    $filter: ModelSubscribeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSubscribes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTeam = /* GraphQL */ `
  query GetTeam($id: ID!) {
    getTeam(id: $id) {
      id
      name
      account {
        items {
          id
          companyName
          renewalDate
          createdAt
          updatedAt
        }
        nextToken
      }
      teamMembers {
        items {
          id
          name
          email
          password
          profileImg
          isAdmin
          createdAt
          updatedAt
        }
        nextToken
      }
      renewalDate
      createdAt
      updatedAt
    }
  }
`;
export const listTeams = /* GraphQL */ `
  query ListTeams(
    $filter: ModelTeamFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTeams(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        account {
          nextToken
        }
        teamMembers {
          nextToken
        }
        renewalDate
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      team {
        id
        name
        account {
          nextToken
        }
        teamMembers {
          nextToken
        }
        renewalDate
        createdAt
        updatedAt
      }
      name
      email
      password
      profileImg
      isAdmin
      clients {
        items {
          id
          avatarId
          salesforceId
          name
          position
          healthScore
          lastContact
          createdAt
          updatedAt
        }
        nextToken
      }
      clientNotes {
        items {
          id
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      clientStrategies {
        items {
          id
          badgeName
          title
          description
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        team {
          id
          name
          renewalDate
          createdAt
          updatedAt
        }
        name
        email
        password
        profileImg
        isAdmin
        clients {
          nextToken
        }
        clientNotes {
          nextToken
        }
        clientStrategies {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAccount = /* GraphQL */ `
  query GetAccount($id: ID!) {
    getAccount(id: $id) {
      id
      team {
        id
        name
        account {
          nextToken
        }
        teamMembers {
          nextToken
        }
        renewalDate
        createdAt
        updatedAt
      }
      companyName
      renewalDate
      accountMembers {
        items {
          id
          avatarId
          salesforceId
          name
          position
          healthScore
          lastContact
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listAccounts = /* GraphQL */ `
  query ListAccounts(
    $filter: ModelAccountFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAccounts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        team {
          id
          name
          renewalDate
          createdAt
          updatedAt
        }
        companyName
        renewalDate
        accountMembers {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getClient = /* GraphQL */ `
  query GetClient($id: ID!) {
    getClient(id: $id) {
      id
      accountId {
        id
        team {
          id
          name
          renewalDate
          createdAt
          updatedAt
        }
        companyName
        renewalDate
        accountMembers {
          nextToken
        }
        createdAt
        updatedAt
      }
      contactId {
        id
        team {
          id
          name
          renewalDate
          createdAt
          updatedAt
        }
        name
        email
        password
        profileImg
        isAdmin
        clients {
          nextToken
        }
        clientNotes {
          nextToken
        }
        clientStrategies {
          nextToken
        }
        createdAt
        updatedAt
      }
      noteId {
        items {
          id
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      avatarId
      salesforceId
      name
      strategy {
        items {
          id
          badgeName
          title
          description
          createdAt
          updatedAt
        }
        nextToken
      }
      position
      healthScore
      lastContact
      createdAt
      updatedAt
    }
  }
`;
export const listClients = /* GraphQL */ `
  query ListClients(
    $filter: ModelClientFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClients(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        accountId {
          id
          companyName
          renewalDate
          createdAt
          updatedAt
        }
        contactId {
          id
          name
          email
          password
          profileImg
          isAdmin
          createdAt
          updatedAt
        }
        noteId {
          nextToken
        }
        avatarId
        salesforceId
        name
        strategy {
          nextToken
        }
        position
        healthScore
        lastContact
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getClientNote = /* GraphQL */ `
  query GetClientNote($id: ID!) {
    getClientNote(id: $id) {
      id
      clientId {
        id
        accountId {
          id
          companyName
          renewalDate
          createdAt
          updatedAt
        }
        contactId {
          id
          name
          email
          password
          profileImg
          isAdmin
          createdAt
          updatedAt
        }
        noteId {
          nextToken
        }
        avatarId
        salesforceId
        name
        strategy {
          nextToken
        }
        position
        healthScore
        lastContact
        createdAt
        updatedAt
      }
      ownerId {
        id
        team {
          id
          name
          renewalDate
          createdAt
          updatedAt
        }
        name
        email
        password
        profileImg
        isAdmin
        clients {
          nextToken
        }
        clientNotes {
          nextToken
        }
        clientStrategies {
          nextToken
        }
        createdAt
        updatedAt
      }
      content
      createdAt
      updatedAt
    }
  }
`;
export const listClientNotes = /* GraphQL */ `
  query ListClientNotes(
    $filter: ModelClientNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClientNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        clientId {
          id
          avatarId
          salesforceId
          name
          position
          healthScore
          lastContact
          createdAt
          updatedAt
        }
        ownerId {
          id
          name
          email
          password
          profileImg
          isAdmin
          createdAt
          updatedAt
        }
        content
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getStrategy = /* GraphQL */ `
  query GetStrategy($id: ID!) {
    getStrategy(id: $id) {
      id
      badgeName
      clientId {
        id
        accountId {
          id
          companyName
          renewalDate
          createdAt
          updatedAt
        }
        contactId {
          id
          name
          email
          password
          profileImg
          isAdmin
          createdAt
          updatedAt
        }
        noteId {
          nextToken
        }
        avatarId
        salesforceId
        name
        strategy {
          nextToken
        }
        position
        healthScore
        lastContact
        createdAt
        updatedAt
      }
      ownerId {
        id
        team {
          id
          name
          renewalDate
          createdAt
          updatedAt
        }
        name
        email
        password
        profileImg
        isAdmin
        clients {
          nextToken
        }
        clientNotes {
          nextToken
        }
        clientStrategies {
          nextToken
        }
        createdAt
        updatedAt
      }
      title
      description
      createdAt
      updatedAt
    }
  }
`;
export const listStrategys = /* GraphQL */ `
  query ListStrategys(
    $filter: ModelStrategyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStrategys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        badgeName
        clientId {
          id
          avatarId
          salesforceId
          name
          position
          healthScore
          lastContact
          createdAt
          updatedAt
        }
        ownerId {
          id
          name
          email
          password
          profileImg
          isAdmin
          createdAt
          updatedAt
        }
        title
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAvatar = /* GraphQL */ `
  query GetAvatar($id: ID!) {
    getAvatar(id: $id) {
      id
      gender
      link
      Animation
      mood
      createdAt
      updatedAt
    }
  }
`;
export const listAvatars = /* GraphQL */ `
  query ListAvatars(
    $filter: ModelAvatarFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAvatars(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        gender
        link
        Animation
        mood
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
