import React, { Fragment, useContext, useEffect } from "react";
import AuthContext from "../../context/auth/authContext";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Navbar = () => {
  const authContext = useContext(AuthContext);

  const { isAuthenticated, loadUser } = authContext;

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  const authLinks = (
    <Fragment>
      <Header />
      <Sidebar />
    </Fragment>
  );

  const guestLinks = <Fragment></Fragment>;

  return <div>{isAuthenticated ? authLinks : guestLinks}</div>;
};

export default Navbar;
