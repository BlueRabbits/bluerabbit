import React, { Component } from 'react';
import Header from './Header';
// import Sidebar from './Sidebar';
import { Grid, Row, Col } from 'react-bootstrap';

class AppComponent extends Component {

  // componentWillMount() {
  //   this.lock = new Auth0Lock('YOUR_AUTH0_CLIENT_ID', 'YOUR_AUTH0_DOMAIN');
  // }

  render() {
    return (
      <div>
        <Header></Header>

      </div>
    );
  }
}

export default AppComponent;
