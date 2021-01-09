import React, { Component } from "react";

import "./home.css";
//import { Router } from "@reach/router";

/**
 * Define the "App" component as a class.
 */
class Home extends Component {
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
          <h1>Home</h1>
      </section>
    );
  }
}

export default Home;
