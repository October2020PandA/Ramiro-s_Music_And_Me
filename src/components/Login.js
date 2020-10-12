import React, { useEffect, useState } from "react";
import axios from "axios";
import { navigate, Link } from "@reach/router";

const Login = (props) => {
  //Create API post call to database to get user
  //Route the user once submitted to their profile page

  const [user, setUser] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errs, setErrs] = useState({});

  //create handle submit function to send backend data and navigate to profile page
  const onLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/api/signIn", {
        email,
        password,
      })
      .then((res) => {
        if (res.data.errors) {
          setErrs(res.data.errors);
        } else {
          navigate("/albums");
        }
      })
      .catch((err) => console.log(err));
  };
  //Up to here chnage this shit

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={onLogin}>
        <div>
          <label>Email: </label>
          <input
            type="text"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-info">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
