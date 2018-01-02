import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";

import Home from "./Home";
import List from "./List";
import lists from "./lists";

const App = () => (
  <Router>
    <Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/:author/:name" component={List} />

        {Object.values(lists).map(list => (
          <Route
            exact
            key={list.slug}
            path={`/${list.slug}`}
            component={() => <Redirect to={`/${list.fullName}`} />}
          />
        ))}
      </Switch>

      <Helmet titleTemplate="%s / List.community" defaultTitle="List.community" />
    </Fragment>
  </Router>
);

export default App;
