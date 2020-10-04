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
export const onUpdateTeam = /* GraphQL */ `
  subscription OnUpdateTeam {
    onUpdateTeam {
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
export const onDeleteTeam = /* GraphQL */ `
  subscription OnDeleteTeam {
    onDeleteTeam {
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
export const onCreateClient = /* GraphQL */ `
  subscription OnCreateClient {
    onCreateClient {
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
export const onUpdateClient = /* GraphQL */ `
  subscription OnUpdateClient {
    onUpdateClient {
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
export const onDeleteClient = /* GraphQL */ `
  subscription OnDeleteClient {
    onDeleteClient {
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
export const onCreateClientNote = /* GraphQL */ `
  subscription OnCreateClientNote {
    onCreateClientNote {
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
export const onUpdateClientNote = /* GraphQL */ `
  subscription OnUpdateClientNote {
    onUpdateClientNote {
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
export const onDeleteClientNote = /* GraphQL */ `
  subscription OnDeleteClientNote {
    onDeleteClientNote {
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
export const onCreateStrategy = /* GraphQL */ `
  subscription OnCreateStrategy {
    onCreateStrategy {
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
export const onUpdateStrategy = /* GraphQL */ `
  subscription OnUpdateStrategy {
    onUpdateStrategy {
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
export const onDeleteStrategy = /* GraphQL */ `
  subscription OnDeleteStrategy {
    onDeleteStrategy {
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
