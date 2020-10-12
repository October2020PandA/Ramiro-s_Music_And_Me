import React, { useState } from "react";
import axios from "axios";
import { navigate, Link } from "@reach/router";

const Register = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [state, setState] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errs, setErrs] = useState({});

  const createUser = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/api/users", {
        name,
        email,
        password,
        state,
        phoneNumber,
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

  return (
    <div>
      <h1>Create New User</h1>
      <form onSubmit={createUser}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
          {errs.name ? <p>{errs.name.message}</p> : null}
        </div>
        <div>
          <label>Email: </label>
          <input
            type="text"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          {errs.email ? <p>{errs.email.message}</p> : null}
        </div>
        <div>
          <label>Password: </label>
          <input
            type="text"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {errs.password ? <p>{errs.password.message}</p> : null}
        </div>
        <div>
          <label>State: </label>
          <input
            type="text"
            name="state"
            onChange={(e) => setState(e.target.value)}
          />
          {errs.state ? <p>{errs.state.message}</p> : null}
        </div>
        <div>
          <label>Phone Number: </label>
          <input
            type="text"
            name="phoneNumber"
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          {errs.phoneNumber ? <p>{errs.phoneNumber.message}</p> : null}
        </div>
        <button type="submit" className="btn btn-info">
          Create
        </button>
      </form>
    </div>
  );
};

export default Register;
