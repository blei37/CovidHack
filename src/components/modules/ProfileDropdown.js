import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./dropdown.css";

class ProfileDropdown extends Component {
    constructor(props){
        super(props);
        this.state = {
            click: false,
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState((prevState) => {
            return {
                click: !prevState.click,
            }
        })
    }

    render(){
        return (
            <ul onClick = {this.handleClick} className = {this.state.click ? "dropdown-menu clicked" : "dropdown-menu"}>
                <li>
                    <Link className = "navbar-item" onClick = {()=>this.setState({click: false})} to = "/profile">
                        Profile
                    </Link>
                </li>
                <li>
                    <Link className = "navbar-item" onClick = {()=>this.setState({click: false})} to = "/help">
                        Help
                    </Link>
                </li>
            </ul>
        )
    }
}

export default ProfileDropdown;