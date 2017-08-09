const models = require('../../db/models');
const knex = require('../../db/config').knex;

module.exports.getAllStations = (req, res) => {
  models.Station.fetchAll()
    .then(stations => {
      res.status(200).json({stations});
    })
    .catch((err) => {
      res.sendStatus(404);
    });
};

module.exports.addStation = (req, res) => {
  models.Station.forge({
    bike_count: req.body.bike_count,
    max_capacity: req.body.max_capacity,
    percent_full: req.body.percent_full
  }).save()
    .then((saved) => {
      res.status(201).json({saved});
    })
    .catch((err) => {
      res.sendStatus(404);
    });
};

module.exports.getStation = (req, res) => {
  models.Station.where({ id: req.params.id }).fetch()
    .then(station => {
      if (!station) {
        throw station;
      }
      res.status(200).json({station});
    })
    .catch((err) => {
      res.sendStatus(404);
    });
};

/***************************************** TO CHECK *************************************************/
module.exports.updateStation = (req, res) => {
  models.Station.where({ id: req.params.id }).fetch()
    .then(station => {
      if (!station) {
        throw station;
      }
      return station.save(req.body, { method: 'update' });
    })
    .then(() => {
      res.sendStatus(201);
    })
    .catch((err) => {
      res.sendStatus(404);
    });
};

module.exports.deleteStation = (req, res) => {
  models.Station.where({ id: req.params.id }).destroy()
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      res.sendStatus(404);
    });
};
/***************************************** TO CHECK ends *************************************************/

module.exports.checkBikeCount = (req, res) => {
  models.Station.where({ id: req.params.id }).fetch({ columns: ['bike_count'] })
    .then((stationBikeCount) => {
      res.status(200).json({stationBikeCount});
    })
    .catch((err) => {
      res.sendStatus(404);
    });
};

/***************************************** TODO *************************************************/
module.exports.checkBikes = (req, res) => {
  models.Station.where({ id: req.params.id }).fetch()
    .then((station) => {
      res.status(200).json({station});
    })
    .catch((err) => {
      res.sendStatus(404);
    });
};
/***************************************** TODO ends *************************************************/

module.exports.checkVolume = (req, res) => {
  models.Station.where({ id: req.params.id }).fetch({ columns: ['percent_full'] })
    .then(station => {
      res.status(200).json({station});
    })
    .catch((err) => {
      res.sendStatus(404);
    });
};