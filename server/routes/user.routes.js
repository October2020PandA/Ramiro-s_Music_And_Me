const users = require("./../controllers/user.controller");

module.exports = (app) => {
  //   app.get("/api/users", users.getAll);
  app.post("/api/users", users.create);
  app.post("/api/signIn", users.getOne);
  app.put("/api/users/:id", users.update);
  app.delete("/api/users/:id", users.delete);
};
