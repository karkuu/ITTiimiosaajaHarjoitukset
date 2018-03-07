import React, { Component } from 'react';
import TopMenu from './TopMenu';
import {Navbar, Nav, NavItem, MenuItem} from 'react-bootstrap';


export default class ContainerTop extends React.Component {
  render() {
    return (
      
	 <Navbar>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#">TIJ</a>
    </Navbar.Brand>
  </Navbar.Header>
  <Nav>
    <NavItem eventKey={1} href="#">
      Etusivu
    </NavItem>
    <NavItem eventKey={2} href="#">
      Tee ilmoitus
    </NavItem>
  
  </Nav>
  </Navbar>
     
	  
    );
  }
}
