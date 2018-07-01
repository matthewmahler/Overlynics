const Games = require("../models/Games");

// Defining methods for the booksController
module.exports = {
  findAll: function (req, res) {
    Games
      .findById(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    Games
      .find({
        accountID: req.params.currentAccount,
        seasonID: req.params.currentSeason
      })
      .then(dbModel => {

        res.json(dbModel
        )})
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    Games
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    Games
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    Games
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
