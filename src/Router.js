import React from 'react';
import {
  Switch,
  Route,
  BrowserRouter as Router
} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Authenticator from './Authenticator';
import {
  SettingsPage,
  InsightsPage,
  ClientDetailsPage,
  DashboardPage,
  LandingPage,
} from "pages";

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path='/auth' component={Authenticator} />
      <PrivateRoute exact path="/dashboard" component={DashboardPage} />
      <PrivateRoute exact path="/clients/:clientId" component={ClientDetailsPage} />
      <PrivateRoute exact path="/settings" component={SettingsPage} />
      <PrivateRoute exact path="/insights" component={InsightsPage} />
    </Switch>
  </Router>
)

export default Routes