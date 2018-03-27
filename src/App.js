import React, { Component } from 'react';
import './App.css';
import Routes from './routes/routes';
import WizardRoutes from './routes/wizardRoutes';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div>
        { Routes }
        { WizardRoutes }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state
}

export default withRouter(connect(mapStateToProps) (App));
