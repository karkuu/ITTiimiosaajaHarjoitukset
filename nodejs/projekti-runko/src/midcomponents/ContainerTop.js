import React, { Component } from 'react';
import TopMenu from './components/TopMenu';
import {Navbar} from 'react-bootstrap';


export default class ContainerTop extends React.Component {
  render() {
    return (   
	 <Navbar bgDark>
		<Navbar.Header>
			<Navbar.Brand>
				<a href="#">TIJ</a>
			</Navbar.Brand>
		</Navbar.Header>
			<TopMenu/>
		</Navbar>
    );
  }
}
