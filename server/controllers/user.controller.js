const User = require("./../models/user.model");

module.exports = {
  getAll: (req, res) => {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.json(err));
  },

  getOne: (req, res) => {
    User.findOne({ email: req.body.email })
      .then((foundUser) =>
        compare(req.body.password, foundUser.password)
          .then(
            (singleUser) => (req.currentUser = { id: singleUser._id }),
            res.json({ data: singleUser, message: "Welcome" })
          )
          .catch((err) => res.json(err))
      )
      .catch((err) => res.json(err));
  },

  update: (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })
      .then((updateUser) => res.json(updateUser))
      .catch((err) => res.json(err));
  },

  create: (req, res) => {
    console.log(req.body);
    User.create(req.body)
      .then((newUser) => res.json(newUser))
      .catch((err) => res.json(err));
  },

  delete: (req, res) => {
    User.findByIdAndRemove(req.params.id)
      .then((success) => res.json(success))
      .catch((err) => res.json(err));
  },
};
