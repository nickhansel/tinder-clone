/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSubscribe = /* GraphQL */ `
  subscription OnCreateSubscribe {
    onCreateSubscribe {
      id
      email
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateSubscribe = /* GraphQL */ `
  subscription OnUpdateSubscribe {
    onUpdateSubscribe {
      id
      email
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteSubscribe = /* GraphQL */ `
  subscription OnDeleteSubscribe {
    onDeleteSubscribe {
      id
      email
      createdAt
      updatedAt
    }
  }
`;
export const onCreateTeam = /* GraphQL */ `
  subscription OnCreateTeam {
    onCreateTeam {
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
export const onUpdateTeam = /* GraphQL */ `
  subscription OnUpdateTeam {
    onUpdateTeam {
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
export const onDeleteTeam = /* GraphQL */ `
  subscription OnDeleteTeam {
    onDeleteTeam {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateAccount = /* GraphQL */ `
  subscription OnCreateAccount {
    onCreateAccount {
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
export const onUpdateAccount = /* GraphQL */ `
  subscription OnUpdateAccount {
    onUpdateAccount {
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
export const onDeleteAccount = /* GraphQL */ `
  subscription OnDeleteAccount {
    onDeleteAccount {
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
export const onCreateClient = /* GraphQL */ `
  subscription OnCreateClient {
    onCreateClient {
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
export const onUpdateClient = /* GraphQL */ `
  subscription OnUpdateClient {
    onUpdateClient {
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
export const onDeleteClient = /* GraphQL */ `
  subscription OnDeleteClient {
    onDeleteClient {
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
export const onCreateClientNote = /* GraphQL */ `
  subscription OnCreateClientNote {
    onCreateClientNote {
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
export const onUpdateClientNote = /* GraphQL */ `
  subscription OnUpdateClientNote {
    onUpdateClientNote {
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
export const onDeleteClientNote = /* GraphQL */ `
  subscription OnDeleteClientNote {
    onDeleteClientNote {
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
export const onCreateClientRating = /* GraphQL */ `
  subscription OnCreateClientRating {
    onCreateClientRating {
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
export const onUpdateClientRating = /* GraphQL */ `
  subscription OnUpdateClientRating {
    onUpdateClientRating {
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
export const onDeleteClientRating = /* GraphQL */ `
  subscription OnDeleteClientRating {
    onDeleteClientRating {
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
export const onCreateStrategy = /* GraphQL */ `
  subscription OnCreateStrategy {
    onCreateStrategy {
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
export const onUpdateStrategy = /* GraphQL */ `
  subscription OnUpdateStrategy {
    onUpdateStrategy {
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
export const onDeleteStrategy = /* GraphQL */ `
  subscription OnDeleteStrategy {
    onDeleteStrategy {
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
export const onCreateAvatar = /* GraphQL */ `
  subscription OnCreateAvatar {
    onCreateAvatar {
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
export const onUpdateAvatar = /* GraphQL */ `
  subscription OnUpdateAvatar {
    onUpdateAvatar {
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
export const onDeleteAvatar = /* GraphQL */ `
  subscription OnDeleteAvatar {
    onDeleteAvatar {
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
