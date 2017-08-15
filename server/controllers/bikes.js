const models = require('../../db/models');
const knex = require('../../db/config').knex;

module.exports.getAllBikes = (req, res) => {
  models.Bike.fetchAll()
    .then((bikes) => {
      res.status(200).json(bikes);
    })
    .catch((err) => {
      res.sendStatus(404);
    });
};

module.exports.addBike = (req, res) => {
  models.Bike.fetchAll()
  .then((bikes) => {
    var newBikeID = bikes.length+1;    
    return knex("bikes").insert({
      id: newBikeID,
      status: req.body.status,
      docked_station_id: req.body.docked_station_id
    })
    .then(() => {
      models.Bike.where({ id: newBikeID }).fetch()
      .then((bike) => {
        res.status(201).send(bike);
      })
    })
    .catch((err) => {
      res.sendStatus(404);
    });
  })
  .catch((err) => {
    res.sendStatus(404);
  });
};

module.exports.getBike = (req, res) => {
  models.Bike.where({ id: req.params.id }).fetch()
    .then((bike) => {
      if (!bike) {
        throw bike;
      }
      res.status(200).json(bike);
    })
    .catch((err) => {
      res.sendStatus(404);
    });
};

module.exports.updateBike = (req, res) => {
  models.Bike.where({ id: req.params.id }).fetch()
    .then((bike) => {
      if (!bike) {
        throw bike;
      }
      return bike.save(req.body, { method: 'update' });
    })
    .then((bike) => {
      res.status(200).json(bike);
    })
    .catch((err) => {
      res.sendStatus(404);
    });
};

// TODO: ADDRESS CASE OF BIKE CURRENTLY BEING RIDDEN
module.exports.deleteBike = (req, res) => {
  models.Bike.where({ id: req.params.id }).fetch()
  .then((bike) => {
    return bike.destroy()     
  })     
  .then(() => {
    res.status(200).json('Bike deleted');
  })
  .catch((err) => {
    res.sendStatus(404);
  });
};

module.exports.checkAvailability = (req, res) => {
  models.Bike.where({ id: req.params.id }).fetch({ columns: ['status'] })
    .then((bikeAvailability) => {
      if (!bikeAvailability) {
        throw bikeAvailability;
      }
      res.status(200).json(bikeAvailability);
    })
    .catch((err) => {
      res.sendStatus(404);
    });
};

module.exports.checkDockedStation = (req, res) => {
  models.Bike.where({ id: req.params.id }).fetch({ columns: ['docked_station_id'] })
    .then((bikeDockedStation) => {
      if (!bikeDockedStation) {
        throw bikeDockedStation;
      }
      res.status(200).json(bikeDockedStation);
    })
    .catch((err) => {
      res.sendStatus(404);
    });
};

// TO UPDATE
module.exports.checkLastRider = (req, res) => {
  models.Bike.where({ id: req.params.id }).fetch({ columns: ['last_rider_id'] })
    .then((bikeLastRider) => {
      if (!bikeLastRider) {
        throw bikeLastRider;
      }
      res.status(200).json(bikeLastRider);
    })
    .catch((err) => {
      res.sendStatus(404);
    });
};