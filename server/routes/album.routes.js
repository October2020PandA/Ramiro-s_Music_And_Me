const albums = require("./../controllers/album.controller");

module.exports = (app) => {
  app.get("/api/albums", albums.getAll);
  app.get("/api/albums/:id", albums.getOne);
  app.post("/api/albums", albums.create);
  app.put("/api/albums/:id", albums.update);
  app.delete("/api/albums/:id", albums.delete);
};
