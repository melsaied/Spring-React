import React, { Component } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Category from "../controller/Category";
import Expense from "../controller/Expense";
import User from "../controller/User";
import Home from "../controller/Home";

class AppRouter extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact={true} component={Home} />

          <Route path="/category" exact={true} component={Category} />

          <Route path="/expense" exact={true} component={Expense} />

          <Route path="/user" exact={true} component={User} />

          <Route component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default AppRouter;
