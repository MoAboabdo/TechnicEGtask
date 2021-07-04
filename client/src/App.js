import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/auth/Login";
import Home from "./components/Home/Home";
import PrivateRoute from "./components/routing/PrivateRoute";

import AuthState from "./context/auth/AuthState";

import "./App.css";

function App() {
  return (
    <AuthState>
      <Router>
        <Fragment>
          <div className="container">
            <Switch>
              <PrivateRoute exact path="/home" component={Home} />
              <Route exact path="/" component={Login} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </AuthState>
  );
}

export default App;
