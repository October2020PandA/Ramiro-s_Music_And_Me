// Write function that finds current user by ID and grab it's data
const Profile = require("./../models/user.model");

module.exports = {
  getOne: (req, res) => {
    Profile.findById(req.session.currentUser.id)
      .then((profile) => res.json({ data: profile }))
      .catch((err) => res.json(err));
  },
};
