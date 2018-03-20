import React from 'react';
import {Link} from 'react-router-dom';

export default class Header extends React.Component {

    render() {
        if(this.props.isLogged) {
           temp = 
           <ul style={{listStyleType:none}}>
                <li><Link to="/"
                        onClick={this.props.onLogout}>Logout</Link></li>
                <li><Link to="/list">Car List</Link></li>
                <li><Link to="/form">Car Form</Link></li>
            </ul>
        }
        else
        {
            temp = 
            <ul style={{listStyleType:none}}>
                <li><Link to="/login">Login</Link></li>
            </ul>
        }
        return (
            <div>
                {temp}
            </div>
        )
    }


}