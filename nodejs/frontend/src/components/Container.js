import React from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';

export default class Container extends React.Component {
	constructor(props) {
		super(props);
		this.state={
			contactList:[],
			tempContact:{
				employeeid:"",
				firstname:"Maija",
				lastname:"Meikäläinen",
				city:"fadfads",
				homephone:"534534"
			}
		}
	}
	
	componentDidMount() {
		this.getContacts();
	}
	
	getContacts = () => {
		let fetchObject = {
			method: "GET",
			mode: "cors",
			headers:{"Content-Type":"application/json"}
		}
		fetch("/api/contacts", fetchObject).then((response) =>
		{
			if(response.ok) {
				response.json().then((data) => {
					this.setState({
						contactList:data
					});
				});
			}
		}).catch((error) => {
			console.log("Error:"+error);
		})
	}
	
	updateContacts = (contact) => {
		
		
		let fetchObject = {
			method: "POST",
			mode: "cors",
			headers:{"Content-Type":"application/json"},
			body:JSON.stringify({
				"employeeid":contact.employeeid,
				"firstname":contact.firstname,
				"lastname":contact.lastname,
				"city":contact.city,
				"homephone":contact.homephone
			})
		}
		console.log(fetchObject.body);
		
		fetch("/api/contacts",fetchObject).then((response) => {
				if(response.ok) {
					response.json().then((data) => {
						
						this.getContacts();
					})
				}
		}).catch((error) => {
			console.log("Error:"+error);
		});
	}
	
	deleteContact = (id) => {
		let fetchObject = {
			method:"DELETE",
			mode:"cors",
			headers:{"Content-type":"application/json"}
		}
		fetch("/api/contact/"+id,fetchObject).then((response) => {
			if(response.ok){
					console.log("Success!!");
				this.getContacts();
			} else {
					console.log("Not Found!!");
			}			
		}).catch((error) => {
			console.log(error);
		});
	}
	
	updateTempContact = (contact) => {
		//console.log(contact);
	 this.setState ({
		 tempContact:contact
	 })
		
		
	}
	
	updateContactDetails = (id) => {
		let fetchObject = {
			method:"PUT",
			mode:"cors",
			headers:{"Content-Type":"application/json"},
			body:JSON.stringify({
				"employeeid":this.state.tempContact.employeeid,
				"firstname":this.state.tempContact.firstname,
				"lastname":this.state.tempContact.lastname,
				"city":this.state.tempContact.city,
				"homephone":this.state.tempContact.homephone
			})
			
		}
		fetch("/api/contact/"+id,fetchObject).then((response) => {
			if(response.ok){
					console.log("Success!!");
				this.getContacts();
			} else {
					console.log("Not Found!!");
			}			
		}).catch((error) => {
			console.log(error);
		});
	}

	render() {
		return (
			<div>
				<ContactForm updateContacts={this.updateContacts}
							tempContact={this.state.tempContact}
							updateTempContact={this.updateTempContact}/>
				<hr></hr>
				<ContactList contactList={this.state.contactList}
							tempContact={this.state.tempContact}
							deleteContact={this.deleteContact}
							updateContactDetails={this.updateContactDetails}
							/>
			</div>
		)
	
	}
}