import React, { Component } from 'react';
import Header from './Header';
// import Sidebar from './Sidebar';
// import { Grid, Row, Col } from 'react-bootstrap';

class AppComponent extends Component {

  constructor(props) {
      super(props);
  }

  render() {
    return (
      <div>
        <Header />

      </div>
    );
  }
}

export default AppComponent;
