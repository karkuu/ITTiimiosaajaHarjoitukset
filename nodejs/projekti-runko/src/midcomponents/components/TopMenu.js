import React, { Component } from 'react';
import {Nav, NavItem} from 'react-bootstrap';

export default class TopMenu extends React.Component {
  render() {
    return (
	<Nav>
      <NavItem eventKey={1} href="#">
      Etusivu
    </NavItem>
    <NavItem eventKey={2} href="#">
      Tee ilmoitus
    </NavItem>
	</Nav>
    );
  }
}
