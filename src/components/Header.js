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
    fullName: `${props.firstName} ${props.lastName}`
  };
  }

  componentWillMount(){
     this.props.dispatch(fetchNavigationMenu());
  }

  navMenu() {
    // We can call the show method from Auth0Lock,
    // which is passed down as a prop, to allow
    // the user to log in

console.log(this.props.headerGet.posts);
{this.props.headerGet.posts.map(this.render)}
  }

  logout() {
    // AuthActions.logUserOut();
    this.props.headerGet.posts.map(this.render);
  }
//    handleSelect(selectedKey) {
//   alert('selected ' + selectedKey);
// }




  render() {

    var stationsArr = []
    for (var i = 0; i < this.props.headerGet.posts.length; i++) {
      var fullName = this.props.headerGet.posts[i];
      var categoryName = fullName.category;
      var subCategory = fullName.subCategory;
      console.log(fullName);
      console.log(fullName.category);
    }



return(

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
  <Nav bsStyle="pills" stacked activeKey={1} >
  <NavItem eventKey={1} href="/home">{categoryName}</NavItem>
  <Nav bsStyle="pills" stacked>{categoryName}
           <NavItem title="Sub Item 1">{subCategory}</NavItem>
           <NavItem title="Sub Item 2">Sub Item 2</NavItem>
           <NavItem title="Sub Item 3">Sub Item 3</NavItem>
       </Nav>
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
