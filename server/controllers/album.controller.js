const Album = require("./../models/album.model");

module.exports = {
  getAll: (req, res) => {
    Album.find()
      .then((albums) => res.json(albums))
      .catch((err) => res.json(err));
  },

  getOne: (req, res) => {
    Album.findById(req.params.id)
      .then((album) => res.json(album))
      .catch((err) => res.json(err));
  },

  update: (req, res) => {
    Album.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })
      .then((updateAlbum) => res.json(updateAlbum))
      .catch((err) => res.json(err));
  },

  create: (req, res) => {
    console.log(req.body);
    Album.create(req.body)
      .then((newAlbum) => res.json(newAlbum))
      .catch((err) => res.json(err));
  },

  delete: (req, res) => {
    Album.findByIdAndRemove(req.params.id)
      .then((success) => res.json(success))
      .catch((err) => res.json(err));
  },
};
