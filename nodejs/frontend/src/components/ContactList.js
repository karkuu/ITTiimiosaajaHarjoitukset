import React from 'react';
import {Table, Button} from 'react-bootstrap';

export default class ContactList extends React.Component {
	
	deleteContact = (event) => {
		this.props.deleteContact(event.target.name);	
	}
	
	render() {
		let listItems = this.props.contactList.map((item) => 
			<tr key={item.id}>
				<td>{item.firstName}</td>
				<td>{item.company}</td>
				<td>{item.city}</td>
				<td>{item.phone}</td>
				<td><Button onClick={this.deleteContact}
							name={item.id.toString()}>Remove
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
						<th>Company</th>
						<th>City</th>
						<th>Phone</th>
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