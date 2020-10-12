import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Router } from "@reach/router";
import Main from "./components/Main";
import Detail from "./components/Detail";
import Edit from "./components/Edit";
import NewAlbum from "./components/NewAlbum";
import Comment from "./components/Comment";
import SignInSignUp from "./pages/SignUp/SignUp/SignInSignUp";
import Profile from "./components/Profile";
// import LoginButton from "./components/LoginButton";

function App() {
  const [albums, setAlbums] = useState([]);
  const [album, setAlbum] = useState({});

  return (
    <div className="App">
      <Router>
        <Main path="/albums" albums={albums} setAlbums={setAlbums} />
        <Detail
          path="/albums/:id"
          albums={albums}
          setAlbums={setAlbums}
          album={album}
          setAlbum={setAlbum}
        />
        <Edit
          path="/albums/:id/edit"
          albums={albums}
          setAlbums={setAlbums}
          album={album}
          setAlbum={setAlbum}
        />
        <NewAlbum
          path="/albums/create"
          albums={albums}
          setAlbums={setAlbums}
          album={album}
          setAlbum={setAlbum}
        />
        <Comment
          path="/albums/comment"
          albums={albums}
          setAlbums={setAlbums}
          album={album}
          setAlbum={setAlbum}
        />
        {/* <LoginButton path="/albums/register" /> */}
        <SignInSignUp
          path="/albums/register"
          albums={albums}
          setAlbums={setAlbums}
          album={album}
          setAlbum={setAlbum}
        />
        <Profile
          path="/albums/profile"
          albums={albums}
          setAlbums={setAlbums}
          album={album}
          setAlbum={setAlbum}
        />
      </Router>
    </div>
  );
}

export default App;
