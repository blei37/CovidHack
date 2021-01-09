import React, { Component } from "react";
import { Link } from "react-router-dom";
import ScheduleDropdown from "./ScheduleDropdown.js";
import COVIDDropdown from "./COVIDDropdown.js";
import ProfileDropdown from "./ProfileDropdown.js";

import "./navbar.css";
//import { Router } from "@reach/router";

/**
 * Define the "App" component as a class.
 */
class NavBar extends Component {
  // makes props available in this component
  constructor(props) {
    super(props);
    this.state = {
        click: false,
        scheduledropdown: false,
        coviddropdown: false,
        profiledropdown: false,
    }

    this.handleClick = this.handleClick.bind(this);
    this.onMouseenters = this.onMouseenters.bind(this);
    this.onMouseleaves = this.onMouseleaves.bind(this);
    this.onMouseenterp = this.onMouseenterp.bind(this);
    this.onMouseleavep = this.onMouseleavep.bind(this);
    this.onMouseenterc = this.onMouseenterc.bind(this);
    this.onMouseleavec = this.onMouseleavec.bind(this);
  }

  handleClick(){
      this.setState((prevState) => {
          return {
              click: !prevState.click,
              scheduledropdown: prevState.scheduledropdown,
              coviddropdown: prevState.coviddropdown,
              profiledropdown: prevState.profiledropdown,
          }
      })
  }

  onMouseenters(){
      if(window.innerWidth < 960){
          this.setState((prevState) => {
              return {
                click: prevState.click,
                scheduledropdown: false,
                coviddropdown: prevState.coviddropdown,
                profiledropdown: prevState.profiledropdown,
              }
          })
      }
      else{
          this.setState((prevState) => {
              return {
                  click: prevState.click,
                  scheduledropdown: true,
                  coviddropdown: prevState.coviddropdown,
                  profiledropdown: prevState.profiledropdown,
              }
          })
      }
  }

  onMouseleaves(){
    if(window.innerWidth < 960){
        this.setState((prevState) => {
            return {
              click: prevState.click,
              scheduledropdown: false,
              coviddropdown: prevState.coviddropdown,
              profiledropdown: prevState.profiledropdown,
            }
        })
    }
    else{
        this.setState((prevState) => {
            return {
                click: prevState.click,
                scheduledropdown: false,
                coviddropdown: prevState.coviddropdown,
                profiledropdown: prevState.profiledropdown,
            }
        })
    }
  }

  onMouseenterp(){
      if(window.innerWidth < 960){
          this.setState((prevState) => {
              return {
                click: prevState.click,
                scheduledropdown: prevState.scheduledropdown,
                coviddropdown: prevState.coviddropdown,
                profiledropdown: false,
              }
          })
      }
      else{
          this.setState((prevState) => {
              return {
                  click: prevState.click,
                  scheduledropdown: prevState.scheduledropdown,
                  coviddropdown: prevState.coviddropdown,
                  profiledropdown: true,
              }
          })
      }
  }

  onMouseleavep(){
    this.setState((prevState) => {
        return {
            click: prevState.click,
            scheduledropdown: prevState.scheduledropdown,
            coviddropdown: prevState.coviddropdown,
            profiledropdown: false,
        }
    })
  }

  onMouseenterc(){
      if(window.innerWidth < 960){
          this.setState((prevState) => {
              return {
                click: prevState.click,
                scheduledropdown: prevState.scheduledropdown,
                coviddropdown: false,
                profiledropdown: prevState.profiledropdown,
              }
          })
      }
      else{
          this.setState((prevState) => {
              return {
                  click: prevState.click,
                  scheduledropdown: prevState.scheduledropdown,
                  coviddropdown: true,
                  profiledropdown: prevState.profiledropdown,
              }
          })
      }
  }

  onMouseleavec(){
    this.setState((prevState) => {
        return {
            click: prevState.click,
            scheduledropdown: prevState.scheduledropdown,
            coviddropdown: false,
            profiledropdown: prevState.profiledropdown,
        }
    })
  }

  // required method: whatever is returned defines what
  // shows up on screen
  render() {
    return (
      // <> is like a <div>, but won't show
      // up in the DOM tree
      <nav className = "navbar-Container">
        <Link to = "/" className = "navbar-logo">
            <strong>COVID Hack Thing</strong>
        </Link>
        <div onClick = {this.handleClick} className = "menu-icon">
            <i className = {this.state.click ? "fas fa-times" : "fas fa-bars"}/>
        </div>
        <ul className = {this.state.click ? "navbar-List active" : "navbar-List"}>
            <li className = "navbar-item" onMouseEnter = {this.onMouseenters} onMouseLeave = {this.onMouseleaves}><span className = "nav-link">Schedule Testing</span>
            {this.state.scheduledropdown && <ScheduleDropdown />}</li>
            <li className = "navbar-item" onMouseEnter = {this.onMouseenterc} onMouseLeave = {this.onMouseleavec}><span className = "nav-link">COVID Guidelines</span>
            {this.state.coviddropdown && <COVIDDropdown />}</li>
            <li className = "navbar-item" onMouseEnter = {this.onMouseenterp} onMouseLeave = {this.onMouseleavep}><span className = "nav-link">Hi, SWole</span>
            {this.state.profiledropdown && <ProfileDropdown/>}</li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
