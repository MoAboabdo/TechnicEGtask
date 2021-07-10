import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../../context/auth/authContext";
import AlertContext from "../../context/alert/alertContext";
// import axios from "axios";

const Login = (props) => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const {
    login,
    error,
    clearErrors,
    isAuthenticated,

    userInfo,
  } = authContext;

  // const refresh = (refreshToken) => {
  //   console.log("Refreshing token!");

  //   return new Promise(async (resolve, reject) => {
  //     const res = await axios.post("http://localhost:5000/api/refreshToken", {
  //       token: refreshToken,
  //     });

  //     if (res.data.success === false) {
  //       setAlert("Login again", "danger");
  //       // set message and return.
  //       resolve(false);
  //     } else {
  //       const { accessToken } = res.data;
  //       localStorage.setItem("accessToken", accessToken);
  //       resolve(accessToken);
  //     }
  //   });
  // };

  // const hasAccess = async (accessToken, refreshToken) => {
  //   if (!refreshToken) return null;

  //   if (accessToken === undefined) {
  //     // generate new accessToken
  //     accessToken = await refresh(refreshToken);
  //     return accessToken;
  //   }

  //   return accessToken;
  // };

  useEffect(async () => {
    if (isAuthenticated) {
      props.history.push("/Home");
    }

    if (error === "Invalid Credentials") {
      setAlert(error, "danger");
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history, userInfo]);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setAlert("Please fill in all fields", "danger");
    } else {
      login({
        email,
        password,
      });
    }
  };

  return (
    <div className="form-container">
      <h1>
        Account <span className="text-primary">Login</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            required
          />
        </div>
        <input
          type="submit"
          value="Login"
          className="btn btn-primary btn-block"
        />
      </form>
    </div>
  );
};

export default Login;
