import React from 'react';
import Header from './Header';
import Main from './Main';

export default class Container extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			carList:[],
			isLogged:false,
			mode:"add",
			token:""
		}
	}
	
	componentDidMount() {
		if(!sessionStorage.getItem("loginStatus")){
			sessionStorage.setItem("loginStatus","not logged");
			sessionStorage.setItem("token","");
			return;
		}
		let loginStatus = sessionStorage.getItem("loginStatus");	
		let token = sessionStorage.getItem("token");
		if(loginStatus == "logged") {
			console.log("loginstatus true");
			this.setState({
				isLogged:true,
				token:token
			})
			//this.getCarList();
		}
	}
	
	onLogin = (user) => {
		let onLogin = {
			method:"POST",
			mode:"cors",
			headers:{"Content-Type":"application/json"},
			body:JSON.stringify({
				"uname":user.uname,
				"passphrase":user.passphrase
			})
		}	
		fetch("/login",onLogin).then((response) => {
			if(response.ok) {
				response.json().then((data) => {
					this.setState({
						token:data.token,
						isLogged:true
					})
					sessionStorage.setItem("loginStatus","logged");
					sessionStorage.setItem("token",data.token);
				})
			} else {
				console.log(response.statusText);
			}	
		}).catch((error) => {
			console.log(error);
		})
		
	}
	
	onLogout = () => {
		
		let onLogout = {
			method:"POST",
			mode:"cors",
			headers:{"Content-Type":"application/json",
					 "token":this.state.token}
		}
		fetch("/logout",onLogout).then((response) => {
			if(response.ok) {
				this.setState({
					token:"",
					isLogged:false
				})
				sessionStorage.setItem("loginStatus","not logged");
				sessionStorage.setItem("token","");
			} else {
				console.log(response.statusText);
			}
		}).catch((error) => {
			console.log(error);
		})
	}

	onRegister = (user) => {
		let onRegister = {
			method:"POST",
			mode:"cors",
			headers:{"Content-Type":"application/json"},
			body:JSON.stringify({
				"uname":user.uname,
				"passphrase":user.passphrase
			})
		}
		console.log("register fetch");
		fetch("/register", onRegister).then((response) => {
			response.json().then((data) => {
				console.log("register success!")
				console.log(data);
				alert("Register success!");
			})
		}).catch((error) => {
			console.log(error);
		});
	}

	render() {
		return(
			<div>
				<Header isLogged={this.state.isLogged}
						onLogout={this.onLogout}/>
				<Main isLogged={this.state.isLogged}
					  onLogin={this.onLogin}
					  onRegister={this.onRegister}/>
			</div>
		)
	
	}

}