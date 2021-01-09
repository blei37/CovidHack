import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./dropdown.css";

class ScheduleDropdown extends Component {
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
                    <Link className = "navbar-item" onClick = {()=>this.setState({click: false})} to = "/next">
                        Schedule Next Test
                    </Link>
                </li>
                <li>
                    <Link className = "navbar-item" onClick = {()=>this.setState({click: false})} to = "/schedule">
                        Testing Schedule
                    </Link>
                </li>
            </ul>
        )
    }
}

export default ScheduleDropdown;