/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSubscribe = /* GraphQL */ `
  query GetSubscribe($id: ID!) {
    getSubscribe(id: $id) {
      id
      email_name
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
        email_name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
