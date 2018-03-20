import React from 'react';
import Header from './Header'
import Main from './main';

export default class Container extends React.Component{
    constructor(props) {
        super(props);
        this.state= {
            carList: [],
            isLogged: false,
            mode:"add",
            token:""
        }
    }

    componentDidMount() {
        if(!sessionStorage.getItem("loginStatus")){
            sessionStorage.setItem("loginStatus",false);
            sessionStorage.setItem("token","");
            return;
        }
        let loginStatus = sessionStorage.getItem("loginStatus");
        let token = sessionStorage.getItem("token");
        if(loginStatus) {
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
            headers:{"content-type":"application/json"},
            body:JSON.stringify({
                "uname":user.uname,
                "passphrase":user.passphrase
            })
        }
        fetch("/login",onLogin).then((response) => {
            if (response.ok) {
                response.json().then ((token) => {
                    this.setState = ({
                        token:token,
                        isLogged:true
                    });
                sessionStorage.setItem("loginStatus",true);
                sessionStorage.setItem("token",token);
                });
            }
            else {
                console.log(response.statusText);
            }
        }).catch((error) => {
            console.log(error);
        });  
    }


    onLogout = (user) => {
        let onLogout = {
            method:"POST",
            mode:"cors",
            headers:{"content-type":"application/json",
                    "token":this.state.token}
            
        }
        fetch("/logout",onLogout).then((response) => {
            if (response.ok) {
                this.setState({
                    token:"",
                    isLogged:false
                })
                sessionStorage.setItem("loginStatus",false);
                sessionStorage.setItem("token","");
            }
            else {
                console.log(response.statusText);
            }
        })
    }


    onRegister = (user) => {
        let onRegister = {
            method:"POST",
            mode:"cors",
            headers:{"content-type":"application/json"},
            body:JSON.stringify({
                "uname":user.uname,
                "passphrase":user.passphrase
            })
        }

        fetch("/register", onRegister).then((response) => {
            response.json().then((data) => {
                console.log(data);
                alert("Register success!");
            })
        }).catch((error) => {
            console.log(error);
        });

        console.log("User registered");
        console.log(user);
    }

    render() {
        return (
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