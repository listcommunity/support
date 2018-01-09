import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";

import Home from "./Home";
import List from "./List";
import NotFound from "./NotFound";
import lists from "./lists.json";

const App = () => (
  <Router>
    <Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:author/:name" component={List} />

        {Object.entries(lists).map(([fullName, list]) => (
          <Route
            exact
            key={list.slug}
            path={`/${list.slug}`}
            component={() => <Redirect to={`/${fullName}`} />}
          />
        ))}

        <Route component={NotFound} />
      </Switch>

      <Helmet titleTemplate="%s / List.community" defaultTitle="List.community" />
    </Fragment>
  </Router>
);

export default App;
