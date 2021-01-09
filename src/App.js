import React, { Component} from "react";
import logo from './logo.svg';
import NavBar from "./components/modules/navbar.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home.js";
import Profile from "./components/pages/Profile.js";
import Help from "./components/pages/Help.js";
import Schedule from "./components/pages/Schedule.js";
import Next from "./components/pages/Next.js";
import NotFound from "./components/pages/NotFound.js";

import './App.css';
import "./utilities.css";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path = "/" exact component = {Home}/>
          <Route path = "/profile" exact component = {Profile}/>
          <Route path = "/next" exact component = {Next}/>
          <Route path = "/help" exact component = {Help}/>
          <Route path = "/schedule" exact component = {Schedule}/>
          <Route default component  ={NotFound}/>
        </Switch>
      </Router>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
