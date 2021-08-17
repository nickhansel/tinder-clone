/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSubscribe = /* GraphQL */ `
  mutation CreateSubscribe(
    $input: CreateSubscribeInput!
    $condition: ModelSubscribeConditionInput
  ) {
    createSubscribe(input: $input, condition: $condition) {
      id
      email
      createdAt
      updatedAt
    }
  }
`;
export const updateSubscribe = /* GraphQL */ `
  mutation UpdateSubscribe(
    $input: UpdateSubscribeInput!
    $condition: ModelSubscribeConditionInput
  ) {
    updateSubscribe(input: $input, condition: $condition) {
      id
      email
      createdAt
      updatedAt
    }
  }
`;
export const deleteSubscribe = /* GraphQL */ `
  mutation DeleteSubscribe(
    $input: DeleteSubscribeInput!
    $condition: ModelSubscribeConditionInput
  ) {
    deleteSubscribe(input: $input, condition: $condition) {
      id
      email
      createdAt
      updatedAt
    }
  }
`;
export const createTeam = /* GraphQL */ `
  mutation CreateTeam(
    $input: CreateTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    createTeam(input: $input, condition: $condition) {
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
export const updateTeam = /* GraphQL */ `
  mutation UpdateTeam(
    $input: UpdateTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    updateTeam(input: $input, condition: $condition) {
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
export const deleteTeam = /* GraphQL */ `
  mutation DeleteTeam(
    $input: DeleteTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    deleteTeam(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
          salutation
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
      clientRatings {
        items {
          id
          score
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
          salutation
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
      clientRatings {
        items {
          id
          score
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
          salutation
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
      clientRatings {
        items {
          id
          score
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
export const createAccount = /* GraphQL */ `
  mutation CreateAccount(
    $input: CreateAccountInput!
    $condition: ModelAccountConditionInput
  ) {
    createAccount(input: $input, condition: $condition) {
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
          salutation
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
export const updateAccount = /* GraphQL */ `
  mutation UpdateAccount(
    $input: UpdateAccountInput!
    $condition: ModelAccountConditionInput
  ) {
    updateAccount(input: $input, condition: $condition) {
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
          salutation
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
export const deleteAccount = /* GraphQL */ `
  mutation DeleteAccount(
    $input: DeleteAccountInput!
    $condition: ModelAccountConditionInput
  ) {
    deleteAccount(input: $input, condition: $condition) {
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
          salutation
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
export const createClient = /* GraphQL */ `
  mutation CreateClient(
    $input: CreateClientInput!
    $condition: ModelClientConditionInput
  ) {
    createClient(input: $input, condition: $condition) {
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
        clientRatings {
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
          title
          lastInterationSore
          isInteractionNote
          createdAt
          updatedAt
        }
        nextToken
      }
      ratingId {
        items {
          id
          score
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
export const updateClient = /* GraphQL */ `
  mutation UpdateClient(
    $input: UpdateClientInput!
    $condition: ModelClientConditionInput
  ) {
    updateClient(input: $input, condition: $condition) {
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
        clientRatings {
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
          title
          lastInterationSore
          isInteractionNote
          createdAt
          updatedAt
        }
        nextToken
      }
      ratingId {
        items {
          id
          score
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
export const deleteClient = /* GraphQL */ `
  mutation DeleteClient(
    $input: DeleteClientInput!
    $condition: ModelClientConditionInput
  ) {
    deleteClient(input: $input, condition: $condition) {
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
        clientRatings {
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
          title
          lastInterationSore
          isInteractionNote
          createdAt
          updatedAt
        }
        nextToken
      }
      ratingId {
        items {
          id
          score
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
export const createClientNote = /* GraphQL */ `
  mutation CreateClientNote(
    $input: CreateClientNoteInput!
    $condition: ModelClientNoteConditionInput
  ) {
    createClientNote(input: $input, condition: $condition) {
      id
      clientId {
        id
        salutation
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
export const updateClientNote = /* GraphQL */ `
  mutation UpdateClientNote(
    $input: UpdateClientNoteInput!
    $condition: ModelClientNoteConditionInput
  ) {
    updateClientNote(input: $input, condition: $condition) {
      id
      clientId {
        id
        salutation
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
export const deleteClientNote = /* GraphQL */ `
  mutation DeleteClientNote(
    $input: DeleteClientNoteInput!
    $condition: ModelClientNoteConditionInput
  ) {
    deleteClientNote(input: $input, condition: $condition) {
      id
      clientId {
        id
        salutation
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
export const createClientRating = /* GraphQL */ `
  mutation CreateClientRating(
    $input: CreateClientRatingInput!
    $condition: ModelClientRatingConditionInput
  ) {
    createClientRating(input: $input, condition: $condition) {
      id
      clientId {
        id
        salutation
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
export const updateClientRating = /* GraphQL */ `
  mutation UpdateClientRating(
    $input: UpdateClientRatingInput!
    $condition: ModelClientRatingConditionInput
  ) {
    updateClientRating(input: $input, condition: $condition) {
      id
      clientId {
        id
        salutation
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
export const deleteClientRating = /* GraphQL */ `
  mutation DeleteClientRating(
    $input: DeleteClientRatingInput!
    $condition: ModelClientRatingConditionInput
  ) {
    deleteClientRating(input: $input, condition: $condition) {
      id
      clientId {
        id
        salutation
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
export const createStrategy = /* GraphQL */ `
  mutation CreateStrategy(
    $input: CreateStrategyInput!
    $condition: ModelStrategyConditionInput
  ) {
    createStrategy(input: $input, condition: $condition) {
      id
      badgeName
      clientId {
        id
        salutation
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
export const updateStrategy = /* GraphQL */ `
  mutation UpdateStrategy(
    $input: UpdateStrategyInput!
    $condition: ModelStrategyConditionInput
  ) {
    updateStrategy(input: $input, condition: $condition) {
      id
      badgeName
      clientId {
        id
        salutation
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
export const deleteStrategy = /* GraphQL */ `
  mutation DeleteStrategy(
    $input: DeleteStrategyInput!
    $condition: ModelStrategyConditionInput
  ) {
    deleteStrategy(input: $input, condition: $condition) {
      id
      badgeName
      clientId {
        id
        salutation
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
export const createAvatar = /* GraphQL */ `
  mutation CreateAvatar(
    $input: CreateAvatarInput!
    $condition: ModelAvatarConditionInput
  ) {
    createAvatar(input: $input, condition: $condition) {
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
export const updateAvatar = /* GraphQL */ `
  mutation UpdateAvatar(
    $input: UpdateAvatarInput!
    $condition: ModelAvatarConditionInput
  ) {
    updateAvatar(input: $input, condition: $condition) {
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
export const deleteAvatar = /* GraphQL */ `
  mutation DeleteAvatar(
    $input: DeleteAvatarInput!
    $condition: ModelAvatarConditionInput
  ) {
    deleteAvatar(input: $input, condition: $condition) {
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
// CUSTOM

export const linkUserTeam = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      team {
        id
      }
      updatedAt
    }
  }
`;