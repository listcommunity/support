import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Topbar from "./Topbar";
import Home from "./Home";
import List from "./List";

const App = () => (
  <Router>
    <div>
      <Topbar />

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/:author/:name" component={List} />
    </div>
  </Router>
);

export default App;
