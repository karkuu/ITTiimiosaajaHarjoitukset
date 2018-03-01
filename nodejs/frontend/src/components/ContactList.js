import React from 'react';
import {Table, Button} from 'react-bootstrap';

export default class ContactList extends React.Component {
	
	deleteContact = (event) => {
		this.props.deleteContact(event.target.name);	
	}
	
	render() {
		let listItems = this.props.contactList.map((item) => 
			<tr key={item.employeeid}>
				<td>{item.firstname}</td>
				<td>{item.lastname}</td>
				<td>{item.city}</td>
				<td>{item.homephone}</td>
				<td><Button onClick={this.deleteContact}
							name={item.employeeid.toString()}>Remove
				    </Button></td>
			</tr>
		)
		return(
			<div>
			<center>
			<Table striped bordered>
				<thead>
					<tr>
						<th>First Name</th>
						<th>Last Name</th>
						<th>City</th>
						<th>homephone</th>
						<th>Remove</th>
					</tr>
				</thead>
				<tbody>
					{listItems}
				</tbody>
			</Table>
			</center>
			</div>
		)
	
	}

}