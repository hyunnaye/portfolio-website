import React, { Component } from 'react';
import {MenuItems} from './MenuItems';
import './Navbar.css'

class Navbar extends Component {
    state = { isClicked: false }

    handleClick = () => {
        this.setState({ isClicked: !this.state.isClicked })
    }



    render() {
        return(
            <nav className="NavbarItems">
                <a className="navbar-logo" href='/'>Nayeon Hyun</a>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.isClicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.isClicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}> 
                                {item.name}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        ) 
    }
}

export default Navbar