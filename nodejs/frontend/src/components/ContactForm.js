import React from 'react';
import {Label} from 'react-bootstrap';

export default class ContactForm extends React.Component {
	
	constructor(props) {
		super(props);
		this.state= {
			employeeid:"",
			firstname:"",
			lastname:"",
			city:"",
			homephone:""
		}
	
	}
	

	
	change = (event) => {
		
			
		if (event.target.name === "firstname") {
			this.setState({
				firstname:event.target.value
			})
		}
		if (event.target.name === "lastname") {
			this.setState({
				lastname:event.target.value
			})
		}
		if (event.target.name === "city") {
			this.setState({
				city:event.target.value
			})
		}
		if (event.target.name === "homephone") {
			this.setState({
				homephone:event.target.value
			})
		}	
		this.update();		
	}
	
	/*updateContactForm = (event) => {
		let tempPerson
		for(let i=0; i < this.props.contactList.length;i++)
		{
			if (this.props.contactList[i].employeeid === event.target.name)
			{
				tempPerson = {
					employeeid:"",
					firstname:this.props.contactList[i].firstname,
					lastname:this.props.contactList[i].lastname,
					city:this.props.contactList[i].city,
					homephone:this.props.contactList[i].homephone
				}
			}
				
		}
		this.props.updateTempContact(tempPerson);
	}*/
	
	update = () => {
		
		
	let tempPerson  = 
	{
		employeeid:this.state.employeeid,
		firstname:this.state.firstname,
		lastname:this.state.lastname,
		city:this.state.city,
		homephone:this.state.homephone
	}

		this.props.updateTempContact(tempPerson);
	}
	
	submit = (event) => {
		event.preventDefault();
		let contact= {
			"employeeid":this.state.employeeid,
			"firstname":this.state.firstname,
			"lastname":this.state.lastname,
			"city":this.state.city,
			"homephone":this.state.homephone		
		}
		this.props.updateContacts(contact);		
	}
	
	render() {
		return(
			<form onSubmit={this.submit}>
				<Label htmlFor="firstname">First Name:</Label>
				<input type="text"
					   name="firstname"
					   onChange={this.change}
					   value={this.state.firstname}/>
				<br/>
				<Label htmlFor="lastname">Last Name:</Label>
				<input type="text"
					   name="lastname"
					   onChange={this.change}
					   value={this.state.lastname}/>
				<br/>
				<Label htmlFor="city">City:</Label>
				<input type="text"
					   name="city"
					   onChange={this.change}
					   value={this.state.city}/>
				<br/>
				<Label htmlFor="homephone">homephone:</Label>
				<input type="text"
					   name="homephone"
					   onChange={this.change}
					   value={this.state.homephone}/>
				<br/>
				<input id="Save" type="submit" value="Save"/>
			</form>
				)
		
		
	}

}