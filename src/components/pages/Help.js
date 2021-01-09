import React, { Component } from "react";

import "./help.css";
//import { Router } from "@reach/router";

/**
 * Define the "App" component as a class.
 */
class Help extends Component {
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
          <h1>Help</h1>
      </section>
    );
  }
}

export default Help;
