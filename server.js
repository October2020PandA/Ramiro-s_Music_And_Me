const express = require("express");
// const session = require("express-session ");
const cors = require("cors");
const bodyParser = require("body-parser"); //Added this
const jwt = require("jsonwebtoken"); //Added this

const app = express();
const port = process.env.PORT || 4000; //Added this

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json()); //Added this
app.use(bodyParser.urlencoded({ extended: true })); //Added this

// app.use(session({ secret: "Shh, its a secret!" })); //Added, if does not work, delete line

app.get("/", (req, res) => {
  res.send("Welcome to the Node.js Turotial! -" + req.user.name);
});

require("dotenv").config(); //Added this
require("./server/config/mongoose.config");
require("./server/routes/album.routes")(app);
require("./server/routes/user.routes")(app);
require("./server/routes/profile.routes")(app);

app.listen(port, () => console.log("Server is listening on Port 4000"));
