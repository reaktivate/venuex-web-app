import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import { getUser } from 'reducers/core';
import { connect } from 'react-redux';

// import Home from './Home';
import Login from './Login';
import Events from './Events';
import ManageStaff from './ManageStaff';
import Billing from './Billing';

const _RedirectRoute = ({ currentUser }) => (
  <React.Fragment>
    {!currentUser && <Redirect to="/login" />}
    <Route exact path="/" component={Events} />
    <Route exact path="/events/:id" component={Events} />
    <Route exact path="/events" component={Events} />
    <Route exact path="/managestaff" component={ManageStaff} />
    <Route exact path="/billing" component={Billing} />
  </React.Fragment>
);

const RedirectRoute = connect(state => ({
  currentUser: getUser(state)
}))(_RedirectRoute);

const Routes = (
  <Switch>
    <Route exact path="/login" component={Login} />
    <Route path="/" component={RedirectRoute} />
  </Switch>
);

export default Routes;
