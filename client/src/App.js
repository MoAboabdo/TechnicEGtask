import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/auth/Login";
import Home from "./components/Home/Home";
import Alerts from "./components/layout/Alerts";
import PrivateRoute from "./components/routing/PrivateRoute";

import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";

import "./App.css";

function App() {
  return (
    <AuthState>
      <AlertState>
        <Router>
          <Fragment>
            <div className="container">
              <Alerts />
              <Switch>
                <PrivateRoute exact path="/client" component={Home} />
                <Route exact path="/" component={Login} />
              </Switch>
            </div>
          </Fragment>
        </Router>
      </AlertState>
    </AuthState>
  );
}

export default App;
