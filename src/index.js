import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloLink } from 'apollo-link';
import { ApolloClient, gql } from '@apollo/client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';

import { createAuthLink } from 'aws-appsync-auth-link';
import { AUTH_TYPE } from 'aws-appsync';
import Amplify from 'aws-amplify';
import awsExports from './aws-exports';

import App from './App';
import './index.css';

Amplify.configure(awsExports);

// TODO: add often used queries to cache
const typeDefs = gql`
  extend type Query {
    loggedInUserId: String
    currentUser: Array
  }
`;

const url = awsExports.aws_appsync_graphqlEndpoint;
const region = awsExports.aws_appsync_region;
const auth = {
  type: AUTH_TYPE.API_KEY,
  apiKey: awsExports.aws_appsync_apiKey,
};
const link = ApolloLink.from([
  createAuthLink({ url, region, auth }),
  createHttpLink({ uri: url }),
]);

export const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
  typeDefs,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Switch>
        <Route path="/"
          component={App} />
      </Switch>
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
