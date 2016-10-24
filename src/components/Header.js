import React, { Component, PropTypes } from 'react';
import { Nav, Navbar, NavItem, Header, FormControl, Button, NavDropdown, MenuItem } from 'react-bootstrap';

// import AuthActions from '../actions/AuthActions';
// import AuthStore from '../stores/AuthStore';
import linkState from 'react-link-state';

class HeaderComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      authenticated: false
    }
    // this.login = this.login.bind(this);
    // this.logout = this.logout.bind(this);
  }

  login() {
    // We can call the show method from Auth0Lock,
    // which is passed down as a prop, to allow
    // the user to log in
    

  }

  logout() {
    // AuthActions.logUserOut();
     this.setState({

     });
  }

  render() {
    return (
<div>
  <h1>hello</h1>
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">React-Bootstrap</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem eventKey={1} href="#">Link</NavItem>
      <NavItem eventKey={2} href="#">Link</NavItem>
      <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}>Action</MenuItem>
        <MenuItem eventKey={3.2}>Another action</MenuItem>
        <MenuItem eventKey={3.3}>Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.3}>Separated link</MenuItem>
      </NavDropdown>
    </Nav>
  </Navbar>
</div>
    );
  }
}

export default HeaderComponent;
