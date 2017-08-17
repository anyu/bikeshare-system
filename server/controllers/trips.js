const models = require('../../db/models');
const knex = require('../../db/config').knex;

module.exports.getAllTrips = (req, res) => {
  models.Trip.fetchAll()
    .then((trips) => {
      res.status(200).json(trips);
    })
    .catch((err) => {
      res.sendStatus(404);
    });
};

module.exports.getTrip = (req, res) => {
  models.Trip.where({ id: req.params.id }).fetch()
    .then((trip) => {
      if (!trip) {
        throw trip;
      }
      res.status(200).json(trip);
    })
    .catch((err) => {
      res.sendStatus(404);
    });
};
