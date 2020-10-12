import React from "react";
import { Link } from "@reach/router";

const Comment = (props) => {
  const { album, setAlbum, albums, setAlbums } = props;

  return (
    <div style={{ textAlign: "center" }}>
      <div>
        <Link to="/albums">back to album list</Link>
      </div>
      <div>
        <Link to={"/albums/" + album._id}>return to previous page</Link>
      </div>
      <div>
        <textarea
          id="comment"
          name="comment"
          placeholder="Send message to owner"
          rows="5"
          cols="50"
        ></textarea>
        <div>
          <Link to="/albums">
            <button className="btn btn-warning">Send Message</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Comment;
