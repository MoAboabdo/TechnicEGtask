import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from "./components/task/Sidebar";
import Navbar from "./components/task/Navbar";
import DoneTask from "./components/task/DoneTask";
import TodoForm from "./components/task/TodoForm";
import Todo from "./components/task/Todo";
import Testing from "./components/task/Testing";
import Inprogress from "./components/task/Inprogress";
import Paid from "./components/task/PaidTask";

import Login from "./components/auth/Login";
import Main from "./views/Main";
import Details from "./views/Details";
import Update from "./views/Update";

import Alerts from "./components/layout/Alerts";
import PrivateRoute from "./components/routing/PrivateRoute";

import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";

import "./App.css";

function App() {
  return (
    <AuthState>
      <AlertState>
        <div className="App">
          <Navbar />
          <Sidebar />
          <Router>
            <Fragment>
              <div className="container page">
                <Alerts />
                <Switch>
                  <PrivateRoute exact path="/Home" component={Main} />

                  <PrivateRoute exact path="/task/todo" component={Todo} />
                  <PrivateRoute
                    exact
                    path="/task/inProgress"
                    component={Inprogress}
                  />
                  <PrivateRoute
                    exact
                    path="/task/testing"
                    component={Testing}
                  />
                  <PrivateRoute exact path="/task/done" component={DoneTask} />

                  <PrivateRoute exact path="/task/paid" component={Paid} />

                  <PrivateRoute exact path="/tasks/new" component={TodoForm} />
                  <PrivateRoute exact path="/tasks/:id" component={Details} />

                  <PrivateRoute
                    exact
                    path="/tasks/:id/edit"
                    component={Update}
                  />

                  <Route exact path="/" component={Login} />
                </Switch>
              </div>
            </Fragment>
          </Router>
        </div>
      </AlertState>
    </AuthState>
  );
}

export default App;
