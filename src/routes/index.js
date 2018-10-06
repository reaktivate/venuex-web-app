import React from 'react';
import { Route, Switch } from 'react-router';

import Home from './Home';
import Events from './Events';


export default (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/events" component={Events} />
    </Switch>
);
