import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "@reach/router";

const Profile = (props) => {
  const [user, setUser] = useState({});

  //   useEffect(() => {
  //     axios
  //       .get("http://localhost:4000/api/profiles/" + props.id)
  //       .then((res) => {
  //         console.log(res.data);
  //         setUser(res.data);
  //       })
  //       .catch((err) => console.log(err));
  //   }, []);

  //Eventually is will become this.props.user.state, which ever info needed
  return (
    <div>
      <Link to="/albums">Go To Albums</Link>
      <h1>{user.name}'s Account</h1>
      <p>
        State: <b>{user.state}</b>
      </p>
      <p>
        Phone Number: <b>{user.phoneNumber}</b>
      </p>
    </div>
  );
};

export default Profile;
