import React, { Component } from 'react';
import { Nav, Navbar, NavItem, Header, Brand, FormGroup, FormControl, Button } from 'react-bootstrap';
// import AuthActions from '../actions/AuthActions';
// import AuthStore from '../stores/AuthStore';

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
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Brand</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <Navbar.Form pullLeft>
              <FormGroup>
                <FormControl type="text" placeholder="Search" />
              </FormGroup>

              <Button type="submit">Submit</Button>
            </Navbar.Form>
        </Navbar.Collapse>
  </Navbar>
    );
  }
}

export default HeaderComponent;
