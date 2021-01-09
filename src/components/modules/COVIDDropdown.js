import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./dropdown.css";

class COVIDDropdown extends Component {
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
                    <a className = "navbar-item" onClick = {()=>this.setState({click: false})} href = "https://google.com">
                        COVID Testing Information
                    </a>
                </li>
                <li>
                    <a className = "navbar-item" onClick = {()=>this.setState({click: false})} href = "https://google.com">
                        Massachusetts Guidelines
                    </a>
                </li>
                <li>
                    <a className = "navbar-item" onClick = {()=>this.setState({click: false})} href = "https://google.com">
                        MIT Guidelines
                    </a>
                </li>
                <li>
                    <a className = "navbar-item" onClick = {()=>this.setState({click: false})} href = "https://google.com">
                        Additional Resources
                    </a>
                </li>
            </ul>
        )
    }
}

export default COVIDDropdown;