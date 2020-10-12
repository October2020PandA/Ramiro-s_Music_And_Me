import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";
import axios from "axios";

const Main = (props) => {
  const { albums, setAlbums } = props;

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/albums")
      .then((res) => setAlbums(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="search-form">
      <div className="albums">
        <h1>Album Selection</h1>
        <div style={{ paddingBottom: "10px" }}>
          <Link to="/albums/create">
            <button className="btn btn-primary">Add To List</button>
          </Link>
        </div>
        {albums.map((album) => (
          <>
            <img src={album.url} style={{ height: "300px", width: "300px" }} />
            <h3>{album.title}</h3>
            <p>
              Artist: <b>{album.artist}</b>
            </p>
            <p>
              Listing Type: <b>{album.listingType}</b>
            </p>
            <Link to={"/albums/" + album._id}>
              <h5>More Info...</h5>
            </Link>
          </>
        ))}
      </div>
    </div>
  );
};

export default Main;

// <table>
//           <tr>
//               <th>Album Art</th>
//               <th>Title</th>
//               <th>Artist</th>
//               <th>Genre</th>
//               <th>Price</th>
//               <th>Listing Type</th>
//               <tr>
//                   {albums.map(({_id, url, title, }))}
//               </tr>
//           </tr>
//       </table>
