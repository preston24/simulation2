import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Auth from '../components/Auth';
import Dashboard from '../components/Dashboard/Dashboard';


export default (
  <Switch>
    <Route component={ Auth } path="/" exact />
    <Route component={ Dashboard } path="/dashboard" />
  </Switch>
)