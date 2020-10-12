import React, { useState } from "react";
import { Link, navigate } from "@reach/router";
import axios from "axios";

const NewAlbum = (props) => {
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [genre, setGenre] = useState("");
  const [description, setDescription] = useState("");
  const [listingType, setListingType] = useState("");
  const [price, setPrice] = useState("");
  const [errs, setErrs] = useState({});

  const createAlbum = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/api/albums", {
        url,
        title,
        artist,
        genre,
        description,
        listingType,
        price,
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
    <div className="form-group">
      <Link to="/albums">Back to Home</Link>
      <h1>New Album To List</h1>
      <h3>Help Add To Our Collection</h3>
      <form onSubmit={createAlbum}>
        <label>
          <h5>Image URL:</h5>
        </label>
        <input
          className="form-control"
          type="text"
          name="url"
          onChange={(e) => setUrl(e.target.value)}
        />
        {errs.url ? <p>{errs.url.message}</p> : null}
        <label>
          <h5>Title:</h5>
        </label>
        <input
          className="form-control"
          type="text"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        {errs.title ? <p>{errs.title.message}</p> : null}
        <label>
          <h5>Artist:</h5>
        </label>
        <input
          className="form-control"
          type="text"
          name="artist"
          onChange={(e) => setArtist(e.target.value)}
        />
        {errs.artist ? <p>{errs.artist.message}</p> : null}
        <label>
          <h5>Genre:</h5>
        </label>
        <input
          className="form-control"
          type="text"
          name="genre"
          onChange={(e) => setGenre(e.target.value)}
        />
        {errs.genre ? <p>{errs.genre.message}</p> : null}
        <label>
          <h5>Description:</h5>
        </label>
        <input
          className="form-control"
          type="text"
          name="description"
          onChange={(e) => setDescription(e.target.value)}
        />
        {errs.description ? <p>{errs.description.message}</p> : null}
        <label>
          <h5>Listing Type:</h5>
        </label>
        <input
          className="form-control"
          type="text"
          name="listingType"
          onChange={(e) => setListingType(e.target.value)}
        />
        {errs.listingType ? <p>{errs.listingType.message}</p> : null}
        <label>
          <h5>Price:</h5>
        </label>
        <input
          className="form-control"
          type="text"
          name="price"
          onChange={(e) => setPrice(e.target.value)}
        />
        {errs.price ? <p>{errs.price.message}</p> : null}
        <div
          style={{
            marginTop: "10px",
          }}
        >
          <button className="btn btn-success">Add Album!</button>
        </div>
      </form>
    </div>
  );
};

export default NewAlbum;
