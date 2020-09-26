/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSubscription = /* GraphQL */ `
  mutation CreateSubscription(
    $input: CreateSubscriptionInput!
    $condition: ModelSubscriptionConditionInput
  ) {
    createSubscription(input: $input, condition: $condition) {
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
export const updateSubscription = /* GraphQL */ `
  mutation UpdateSubscription(
    $input: UpdateSubscriptionInput!
    $condition: ModelSubscriptionConditionInput
  ) {
    updateSubscription(input: $input, condition: $condition) {
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
export const deleteSubscription = /* GraphQL */ `
  mutation DeleteSubscription(
    $input: DeleteSubscriptionInput!
    $condition: ModelSubscriptionConditionInput
  ) {
    deleteSubscription(input: $input, condition: $condition) {
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
