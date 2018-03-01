import React from 'react';
import {Label} from 'react-bootstrap';

export default class ContactForm extends React.Component {
	
	constructor(props) {
		super(props);
		this.state= {
			firstName:"",
			company:"",
			city:"",
			phone:""
		}
	
	}
	
	change = (event) => {
		if (event.target.name === "firstName") {
			this.setState({
				firstName:event.target.value
			})
		}
		if (event.target.name === "company") {
			this.setState({
				company:event.target.value
			})
		}
		if (event.target.name === "city") {
			this.setState({
				city:event.target.value
			})
		}
		if (event.target.name === "phone") {
			this.setState({
				phone:event.target.value
			})
		}		
	}
	
	submit = (event) => {
		event.preventDefault();
		let contact= {
			"firstName":this.state.firstName,
			"company":this.state.company,
			"city":this.state.email,
			"phone":this.state.phone		
		}
		this.props.updateContacts(contact);		
	}
	
	render() {
		return(
			<form onSubmit={this.submit}>
				<Label htmlFor="firstName">First Name:</Label>
				<input type="text"
					   name="firstName"
					   onChange={this.change}
					   value={this.state.firstName}/>
				<br/>
				<Label htmlFor="company">Company</Label>
				<input type="text"
					   name="company"
					   onChange={this.change}
					   value={this.state.company}/>
				<br/>
				<Label htmlFor="city">City:</Label>
				<input type="text"
					   name="city"
					   onChange={this.change}
					   value={this.state.city}/>
				<br/>
				<Label htmlFor="phone">Phone:</Label>
				<input type="text"
					   name="phone"
					   onChange={this.change}
					   value={this.state.phone}/>
				<br/>
				<input type="submit" value="Add Contact"/>
			</form>
				)
		
		
	}

}