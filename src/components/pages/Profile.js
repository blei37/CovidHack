import React, { Component } from "react";

import "./profile.css";
//import { Router } from "@reach/router";

/**
 * Define the "App" component as a class.
 */
class Profile extends Component {
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
      <section>
          <h1>Profile</h1>
      </section>
    );
  }
}

export default Profile;
