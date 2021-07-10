import React, { Fragment, useContext, useEffect } from "react";
import styles from "./Navbar.module.css";

import AuthContext from "../../context/auth/authContext";

const Navbar = () => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, logout, user, loadUser } = authContext;

  const onLogout = () => {
    logout();
  };
  return (
    <div className={styles.background}>
      <div>
        <h1 className={styles.title}>Todo List</h1>
      </div>
      <Fragment>
        <ul>
          {isAuthenticated ? (
            <li>
              <a onClick={onLogout} href="#!">
                <i className="fas fa-sign-out-alt" />{" "}
                <span className="hide-sm">Logout</span>
              </a>
            </li>
          ) : (
            {}
          )}
        </ul>
      </Fragment>
    </div>
  );
};

export default Navbar;
