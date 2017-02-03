'use strict';

const sockets = require('../sockets');

let controller = {};

controller.params = (req, res, next, id) => {
  Album.findById(id)
    .then((album) => {
      if (!album) {
        next(new Error('Album not found.'));
      } else {
        req.album = album;
        next();
      }
    })
    .catch((err) => {
      next(err);
    });
};

controller.index = (req, res, next) => {
  Album.find()
    .then((albums) => {
      res.json(albums);
    })
    .catch((err) => {
      next(err);
    });
};

controller.new = (req, res) => {

};

controller.create = (req, res, next) => {
  let newAlbum = req.body;

  Album.create(newAlbum)
    .then((album) => {
      res.json(album);
    })
    .catch((err) => {
      log(err);
      next(err);
    })
};

controller.show = (req, res) => {
  let album = req.album;
  res.json(album);
};

controller.edit = (req, res) => {

};

controller.update = (req, res, next) => {
  let album = req.album;
  let updatedAlbum = req.body;

  _.merge(album, updatedAlbum);

  album.save((err, saved) => {
    if (err) {
      next(err);
    } else {
      res.json(saved);
    }
  });
};

controller.destroy = (req, res, next) => {
  let deadAlbum = req.album;

  deadAlbum.remove((err, destroyed) => {
    if (err) {
      next(err);
    } else {
      res.json(destroyed);
    }
  });
};

module.exports = controller;