// Create route to get data from database in order to display info. Make sure your get route is unique

const profiles = require("../controllers/profile.controller");

module.exports = (app) => {
  app.get("/api/profiles/:id", profiles.getOne);
};
