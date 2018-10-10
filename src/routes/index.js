import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import { getUser } from 'reducers/core';
import { connect } from 'react-redux';
import Home from './Home';
import Login from './Login';
import Events from './Events';


const _RedirectRoute = ({ currentUser }) => (
  <React.Fragment>
    {!currentUser && <Redirect to="/login" />}
    <Route exact path="/" component={Home} />
    <Route exact path="/events" component={Events} />
  </React.Fragment>
);

const RedirectRoute = connect(state => ({
  currentUser: getUser(state),
}))(_RedirectRoute);

const Routes = (
  <Switch>
    <Route exact path="/login" component={Login} />
    <Route path="/" component={RedirectRoute} />
  </Switch>
);

export default Routes;
