import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import { ApolloProvider } from '@apollo/react-hooks';
import App from './App';
import './index.css';
import { ApolloLink } from 'apollo-link';
import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createAuthLink } from 'aws-appsync-auth-link';
import { createHttpLink } from 'apollo-link-http';
import { AUTH_TYPE } from 'aws-appsync';
import Amplify from 'aws-amplify';
import awsExports from './aws-exports';

Amplify.configure(awsExports);

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
