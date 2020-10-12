import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "@reach/router";

const Detail = (props) => {
  const { albums, setAlbums, album, setAlbum } = props;

  //   const [album, setAlbum] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/albums/" + props.id)
      .then((res) => {
        console.log(res.data);
        setAlbum(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="card mb-3" style={{ textAlign: "center" }}>
      <>
        <Link to="/albums">Back To Album list</Link>
      </>
      <div>
        <Link to={"/albums/" + props.id + "/edit"}>Edit Album</Link>
      </div>
      <h1>Album of Choice</h1>
      <img
        src={album.url}
        className="card-img-top"
        style={{
          width: "500px",
          height: "500px",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          width: "40%",
        }}
      />
      <div className="card-body">
        <p className="card-title">
          Artist: <b>{album.artist}</b>
        </p>
        <p>
          Genre: <b>{album.genre}</b>
        </p>
        <p>
          {" "}
          Listing Type: <b>{album.listingType}</b>
        </p>
        <p>
          Price: <b>{album.price}</b>
        </p>
        <Link to={"/albums/comment"}>
          <button className="btn btn-info">Request Album</button>
        </Link>
      </div>
    </div>
  );
};

export default Detail;
