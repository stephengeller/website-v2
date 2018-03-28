import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavItem, Icon } from 'react-materialize';

class Header extends Component {
  renderContent() {
    return (
      <Navbar brand="logo" right>
        <NavItem href="/test">
          <Icon>search</Icon>
        </NavItem>
        <NavItem href="get-started.html">
          <Icon>view_module</Icon>
        </NavItem>
        <NavItem href="get-started.html">
          <Icon>refresh</Icon>
        </NavItem>
        <NavItem href="get-started.html">
          <Icon>more_vert</Icon>
        </NavItem>
      </Navbar>
    );
  }

  render() {
    return <div className="">{this.renderContent()}</div>;
  }
}

export default Header;
