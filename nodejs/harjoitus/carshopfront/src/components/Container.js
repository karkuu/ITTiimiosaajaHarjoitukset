import React from 'react';
import Header from './Header'
import Main from './main';

export default class Container extends React.Component{
    constructor(props) {
        super(props);
        this.state= {
            carList: [],
            isLogged: false,
            mode:"add"
        }
    }

    onLogin = (user) => {
        this.setState({
            isLogged:true
        });
    }


    onLogout = (user) => {
        this.setState({
            isLogged:false
        });
    }


    onRegister = (user) => {

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