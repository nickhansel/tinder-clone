/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSubscription = /* GraphQL */ `
  query GetSubscription($id: ID!) {
    getSubscription(id: $id) {
      id
      email_name
      onCreateSubscription {
        id
        email_name
        onCreateSubscription {
          id
          email_name
        }
        onUpdateSubscription {
          id
          email_name
        }
        onDeleteSubscription {
          id
          email_name
        }
      }
      onUpdateSubscription {
        id
        email_name
        onCreateSubscription {
          id
          email_name
        }
        onUpdateSubscription {
          id
          email_name
        }
        onDeleteSubscription {
          id
          email_name
        }
      }
      onDeleteSubscription {
        id
        email_name
        onCreateSubscription {
          id
          email_name
        }
        onUpdateSubscription {
          id
          email_name
        }
        onDeleteSubscription {
          id
          email_name
        }
      }
    }
  }
`;
export const listSubscriptions = /* GraphQL */ `
  query ListSubscriptions(
    $filter: ModelSubscriptionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSubscriptions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email_name
        onCreateSubscription {
          id
          email_name
        }
        onUpdateSubscription {
          id
          email_name
        }
        onDeleteSubscription {
          id
          email_name
        }
      }
      nextToken
    }
  }
`;
