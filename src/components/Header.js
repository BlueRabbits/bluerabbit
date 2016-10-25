import React, { Component, PropTypes } from 'react';
import { Nav, Navbar, NavItem, Header, FormControl, Button, NavDropdown, MenuItem } from 'react-bootstrap';
import fetchNavigationMenu from '../actions/HeaderGetActions';
import { connect } from 'react-redux';
// import AuthActions from '../actions/AuthActions';
// import AuthStore from '../stores/AuthStore';
// import linkState from 'react-link-state';

class HeaderComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
    // this.login = this.login.bind(this);
    // this.logout = this.logout.bind(this);
  }
  componentWillMount(){
     this.props.dispatch(fetchNavigationMenu());
  }

  navMenu() {
    // We can call the show method from Auth0Lock,
    // which is passed down as a prop, to allow
    // the user to log in

console.log(this.props.headerGet.posts);
  }

  logout() {
    // AuthActions.logUserOut();
     this.setState({

     });
  }
//    handleSelect(selectedKey) {
//   alert('selected ' + selectedKey);
// }

  render() {
    // var indents = [];
    // for (var i = 0; i < this.props.headerGet.posts; i++) {
    //     indents.push(<span className='indent' key={i}></span>);
    //   }

    return (
<div>
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
      {
           this.props.headerGet.posts.map(function(category) {
               return <li key={category}>{category}</li>
           })
       }

  <Nav bsStyle="pills" stacked activeKey={1} >
  <NavItem eventKey={1} href="/home">Nav1</NavItem>
  <NavItem eventKey={2} title="Item">NavItem 2 content</NavItem>
  <NavItem eventKey={3} disabled>NavItem 3 content</NavItem>
  </Nav>
</div>
    );
  }
}

function mapStateToProps(state) {
    return {
        headerGet: state.headerGet
    }
}

export default connect(mapStateToProps)(HeaderComponent);
 //export default HeaderComponent;
