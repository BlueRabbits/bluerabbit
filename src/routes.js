// Add app routes here
import React from 'react';
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router';

// window.jQuery = window.$ = require('jquery');
import { Navbar, Nav, NavItem } from 'react-bootstrap';
// var BootstrapJS = require('./components/External/bootstrap.min');

// import NotFound from './components/common/NotFound';
// import ThankYou from './components/common/ThankYou';
import AppContainer from './container/AppContainer';
import LoginContainer from './container/LoginContainer';
import RegisterContainer from './container/RegisterContainer';

 class Routes extends React.Component {
  render () {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={AppContainer}>
          <Redirect from="/login" to="/" />
          <IndexRoute component={LoginContainer} />
          <Route path="register" component={RegisterContainer} />
        </Route>
      </Router>

    );
  }
}
