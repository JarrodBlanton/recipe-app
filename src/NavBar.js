import React, {Component} from 'react';
import './NavBar.css'; 

class NavBar extends Component {
    render() {
        return (
            <ul className="navbar" role="navigation">
                <li className="bar-name">
                    Recipe App
                </li>
                <div className="bar-menu">
                    <li>New Recipe</li>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                </div>
            </ul>
        );
    }
}

export default NavBar