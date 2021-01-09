import React, { Component } from "react";
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
      <div>
          <div>
              COVID Hack Thing
          </div>
          <nav>
            <ul>
                <li>Schedule Testing</li>
                <li>COVID Guidelines</li>
                <li>Profile</li>
            </ul>
          </nav>
      </div>
    );
  }
}

export default NavBar;
