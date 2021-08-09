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
          name
          renewalDate
          contract
          healthScore
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
          profileImg
          isAdmin
          salesforceKey
          salesforceSecret
          salesforcePassword
          createdAt
          updatedAt
        }
        nextToken
      }
      renewalDate
      sfKey
      sfUsername
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
        sfKey
        sfUsername
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
        sfKey
        sfUsername
        createdAt
        updatedAt
      }
      name
      email
      profileImg
      isAdmin
      salesforceKey
      salesforceSecret
      salesforcePassword
      clients {
        items {
          id
          accountId {
            id
            name
            renewalDate
            contract
            healthScore
          }
          contactId {
            id
            name
            email
            profileImg
            isAdmin
            salesforceKey
            salesforceSecret
            salesforcePassword
          }
          ratingId {
            items {
              id
              score
            }
          }
          isDecisionMaker
          avatarId
          salesforceId
          salutation
          email
          name
          position
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
          title
          lastInterationSore
          isInteractionNote
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
          status
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
          sfKey
          sfUsername
          createdAt
          updatedAt
        }
        name
        email
        profileImg
        isAdmin
        salesforceKey
        salesforceSecret
        salesforcePassword
        clients {
          nextToken
        }
        clientNotes {
          nextToken
        }
        clientRatings {
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
        sfKey
        sfUsername
        createdAt
        updatedAt
      }
      name
      renewalDate
      contract
      healthScore
      accountMembers {
        items {
          id
          isDecisionMaker
          avatarId
          salesforceId
          email
          name
          position
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
          sfKey
          sfUsername
          createdAt
          updatedAt
        }
        name
        renewalDate
        contract
        healthScore
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
      salutation
      accountId {
        id
        team {
          id
          name
          renewalDate
          sfKey
          sfUsername
          createdAt
          updatedAt
        }
        name
        renewalDate
        contract
        healthScore
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
          sfKey
          sfUsername
          createdAt
          updatedAt
        }
        name
        email
        profileImg
        isAdmin
        salesforceKey
        salesforceSecret
        salesforcePassword
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
      ratingId {
        items {
          id
          score
        }
        nextToken
      }
      noteId {
        items {
          id
          content
          title
          lastInterationSore
          isInteractionNote
          createdAt
          updatedAt
        }
        nextToken
      }
      isDecisionMaker
      avatarId
      salesforceId
      email
      name
      strategy {
        items {
          id
          badgeName
          title
          description
          status
          createdAt
          updatedAt
        }
        nextToken
      }
      position
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
          name
          renewalDate
          contract
          healthScore
          createdAt
          updatedAt
        }
        contactId {
          id
          name
          email
          profileImg
          isAdmin
          salesforceKey
          salesforceSecret
          salesforcePassword
          createdAt
          updatedAt
        }
        noteId {
          nextToken
        }
        ratingId {
          nextToken
        }
        isDecisionMaker
        avatarId
        salesforceId
        email
        name
        strategy {
          nextToken
        }
        position
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
        nsalutatio
        accountId {
          id
          name
          renewalDate
          contract
          healthScore
          createdAt
          updatedAt
        }
        contactId {
          id
          name
          email
          profileImg
          isAdmin
          salesforceKey
          salesforceSecret
          salesforcePassword
          createdAt
          updatedAt
        }
        noteId {
          nextToken
        }
        ratingId {
          nextToken
        }
        isDecisionMaker
        avatarId
        salesforceId
        email
        name
        strategy {
          nextToken
        }
        position
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
          sfKey
          sfUsername
          createdAt
          updatedAt
        }
        name
        email
        profileImg
        isAdmin
        salesforceKey
        salesforceSecret
        salesforcePassword
        clients {
          nextToken
        }
        clientNotes {
          nextToken
        }
        clientRatings {
          nextToken
        }
        clientStrategies {
          nextToken
        }
        createdAt
        updatedAt
      }
      content
      title
      lastInterationSore
      isInteractionNote
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
          isDecisionMaker
          avatarId
          salesforceId
          email
          name
          position
          lastContact
          createdAt
          updatedAt
        }
        ownerId {
          id
          name
          email
          profileImg
          isAdmin
          salesforceKey
          salesforceSecret
          salesforcePassword
          createdAt
          updatedAt
        }
        content
        title
        lastInterationSore
        isInteractionNote
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getClientRating = /* GraphQL */ `
  query GetClientRating($id: ID!) {
    getClientRating(id: $id) {
      id
      clientId {
        i
        accountId {
          id
          name
          renewalDate
          contract
          healthScore
          createdAt
          updatedAt
        }
        contactId {
          id
          name
          email
          profileImg
          isAdmin
          salesforceKey
          salesforceSecret
          salesforcePassword
          createdAt
          updatedAt
        }
        noteId {
          nextToken
        }
        ratingId {
          nextToken
        }
        isDecisionMaker
        avatarId
        salesforceId
        email
        name
        strategy {
          nextToken
        }
        position
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
          sfKey
          sfUsername
          createdAt
          updatedAt
        }
        name
        email
        profileImg
        isAdmin
        salesforceKey
        salesforceSecret
        salesforcePassword
        clients {
          nextToken
        }
        clientNotes {
          nextToken
        }
        clientRatings {
          nextToken
        }
        clientStrategies {
          nextToken
        }
        createdAt
        updatedAt
      }
      score
      createdAt
      updatedAt
    }
  }
`;
export const listClientRatings = /* GraphQL */ `
  query ListClientRatings(
    $filter: ModelClientRatingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClientRatings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        clientId {
          id
          isDecisionMaker
          avatarId
          salesforceId
          email
          name
          position
          lastContact
          createdAt
          updatedAt
        }
        ownerId {
          id
          name
          email
          profileImg
          isAdmin
          salesforceKey
          salesforceSecret
          salesforcePassword
          createdAt
          updatedAt
        }
        score
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
        i
        accountId {
          id
          name
          renewalDate
          contract
          healthScore
          createdAt
          updatedAt
        }
        contactId {
          id
          name
          email
          profileImg
          isAdmin
          salesforceKey
          salesforceSecret
          salesforcePassword
          createdAt
          updatedAt
        }
        noteId {
          nextToken
        }
        ratingId {
          nextToken
        }
        isDecisionMaker
        avatarId
        salesforceId
        email
        name
        strategy {
          nextToken
        }
        position
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
          sfKey
          sfUsername
          createdAt
          updatedAt
        }
        name
        email
        profileImg
        isAdmin
        salesforceKey
        salesforceSecret
        salesforcePassword
        clients {
          nextToken
        }
        clientNotes {
          nextToken
        }
        clientRatings {
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
      status
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
          isDecisionMaker
          avatarId
          salesforceId
          email
          name
          position
          lastContact
          createdAt
          updatedAt
        }
        ownerId {
          id
          name
          email
          profileImg
          isAdmin
          salesforceKey
          salesforceSecret
          salesforcePassword
          createdAt
          updatedAt
        }
        title
        description
        status
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

// CUSTOM
export const getClientStrategysEq = (status) =>  /* GraphQL */ `
  query GetClient($id: ID!) {
    getClient(id: $id) {
      id
      contactId {
        id
        name
      }
      strategy (filter: {
        status: {
          eq: ${status}
        }
      }) {
        items {
          id
          badgeName
          title
          description
          createdAt
          updatedAt
          status
        }
        nextToken
      }
    }
  }
`;
export const getClientStrategysNot = (status) =>  /* GraphQL */ `
  query GetClient($id: ID!) {
    getClient(id: $id) {
      id
      name
      contactId {
        id
        name
      }
      strategy (filter: {
        status: {
          ne: ${status}
        }
      }) {
        items {
          id
          badgeName
          title
          description
          createdAt
          updatedAt
          status
        }
        nextToken
      }
    }
  }
`;
export const listStrategysNot = () => /* GraphQL */ `
  query ListStrategys(
    $filter: ModelStrategyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStrategys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        badgeName
        status
        clientId {
          id
          isDecisionMaker
          name
          position
          lastContact
          createdAt
          updatedAt
        }
        ownerId {
          id
          isAdmin
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


export const listClientsDash = /* GraphQL */ `
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
          name
          renewalDate
          contract
          healthScore
        }
        isDecisionMaker
        avatarId
        name
        strategy {
          items {
            id
            badgeName
            title
            description
            status
          }
          nextToken
        }
        position
        lastContact
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

/* GraphQL */
export const listClientsByUser = (user) => { `
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
          name
          renewalDate
          contract
          healthScore
        }
        contactId  (filter: {
          id: {
            eq: ${user}
          }
        })   
        isDecisionMaker
        avatarId
        name
        strategy {
          items {
            id
            badgeName
            title
            description
            status
          }
          nextToken
        }
        position
        lastContact
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`}