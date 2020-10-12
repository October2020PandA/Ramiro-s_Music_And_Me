import React, { useState, useEffect } from "react";
import { Link, navigate } from "@reach/router";
import axios from "axios";

const Edit = (props) => {
  const { album, setAlbum, albums, setAlbums } = props;

  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [genre, setGenre] = useState("");
  const [description, setDescription] = useState("");
  const [listingType, setListingType] = useState("");
  const [price, setPrice] = useState("");
  const [errs, setErrs] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/albums/" + props.id)
      .then((res) => {
        setUrl(res.data.url);
        setTitle(res.data.title);
        setArtist(res.data.artist);
        setGenre(res.data.genre);
        setDescription(res.data.description);
        setListingType(res.data.listingType);
        setPrice(res.data.price);
        setAlbum(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const editAlbum = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:4000/api/albums/" + props.id, {
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
          setErrs(res.data.errs);
        } else {
          navigate("/albums/" + props.id);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Link to="/albums">Back to Home</Link>
      <h1>Make Corrections to Album Information</h1>
      <h3>Edit {album.title}</h3>
      <form onSubmit={editAlbum}>
        <label>
          <h4>Image URL:</h4>
        </label>
        <input
          type="text"
          name="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        {errs.url ? <p>{errs.url.message}</p> : null}
        <label>
          <h5>Title:</h5>
        </label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {errs.title ? <p>{errs.title.message}</p> : null}
        <label>
          <h5>Artist:</h5>
        </label>
        <input
          type="text"
          name="artist"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
        />
        {errs.artist ? <p>{errs.artist.message}</p> : null}
        <label>
          <h5>Genre:</h5>
        </label>
        <input
          type="text"
          name="genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
        {errs.genre ? <p>{errs.genre.message}</p> : null}
        <label>
          <h5>Description:</h5>
        </label>
        <input
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        {errs.description ? <p>{errs.description.message}</p> : null}
        <label>
          <h5>Listing Type:</h5>
        </label>
        <input
          type="text"
          name="listingType"
          value={listingType}
          onChange={(e) => setListingType(e.target.value)}
        />
        {errs.listingType ? <p>{errs.listingType.message}</p> : null}
        <label>
          <h5>Price:</h5>
        </label>
        <input
          type="text"
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        {errs.price ? <p>{errs.price.message}</p> : null}
        <div>
          <button className="btn btn-info">Edit Album!</button>
        </div>
      </form>
    </div>
  );
};

export default Edit;
