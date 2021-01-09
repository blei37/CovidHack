import React, { Component } from "react";
import "./navbar.css";
//import { Router } from "@reach/router";

/**
 * Define the "App" component as a class.
 */
class NavBar extends Component {
  // makes props available in this component
  constructor(props) {
    super(props);
  }

  // required method: whatever is returned defines what
  // shows up on screen
  render() {
    return (
      // <> is like a <div>, but won't show
      // up in the DOM tree
      <div className = "navbar-Container">
          <div className = "navbar-logo">
              <strong>COVID Hack Thing</strong>
          </div>
          <nav className = "navbar-link-Container">
            <ul className ="navbar-List">
                <li className = "navbar-item">Schedule Testing</li>
                <li className = "navbar-item">COVID Guidelines</li>
                <li className = "navbar-item">Profile</li>
            </ul>
          </nav>
      </div>
    );
  }
}

export default NavBar;
