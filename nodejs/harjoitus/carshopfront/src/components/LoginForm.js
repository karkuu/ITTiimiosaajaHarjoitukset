import React from 'react';

export default class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            uname:"",
            passphrase:""
        }
    }

    onChange = (event) => {
        if (event.target.name === "uname") {
            this.setState({
                uname:event.target.value
            });
        }
        if (event.target.name === "passphare") {
            this.setState({
                passphrase:event.target.value
            });
        }
    }

    onLogin = (event) => {
        let user = {
            "uname": this.state.uname,
            "passphrase":this.state.passphrase
        }
        
        this.props.onLogin(user);
    }

    onRegister = (event) => {
        let user = {
            "uname": this.state.uname,
            "passphrase":this.state.passphrase
        }
        
        this.props.onRegister(user);
    }


    render() {
        return(
            <form>
                <label htmlFor="uname">Username:</label>
                <input type="text"
                        name="uname"
                        value={this.state.uname}
                        onChange={this.onChange}/>
                <br/>
                <label htmlFor="passphrase">Passphrase:</label>
                <input type="password"
                        name="passphrase"
                        value={this.state.passphrase}
                        onChange={this.onChange}/>
                <br/>
                <button onClick={this.onRegister}>Register</button>
                <button onClick={this.onLogin}>Login</button>
            </form>
        )
    }
}