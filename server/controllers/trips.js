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

module.exports.getActiveTripCount = (req, res) => {
  models.Trip.where({ status: "ongoing" }).fetchAll()
    .then((trips) => {
      if (!trips) {
        throw trips;
      }
      res.status(200).json({ active_trips: trips.length});
    })
    .catch((err) => {
      res.sendStatus(404);
    });
};

module.exports.getTripCountByYear = (req, res) => {
  knex.raw(`select * from trips where extract(year from start_time) = ${req.params.year};`)
    .then((results) => {
      if (results.rows[0]) {
        res.status(200).json({ trip_count: results.rows.length});
      } else {
        res.status(200).json('No trips logged in ' + req.params.year);
      } 
    })
    .catch((err) => {
      res.sendStatus(404);
    });
};
