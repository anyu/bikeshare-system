const models = require('../../db/models');
const knex = require('../../db/config').knex;

module.exports.getAllBikes = (req, res) => {
  models.Bike.fetchAll()
    .then((bikes) => {
      res.status(200).json({bikes});
    })
    .catch((err) => {
      res.sendStatus(404);
    });
};

module.exports.addBike = (req, res) => {
  models.Bike.forge({
    is_available: req.body.is_available,
    docked_station_id: req.body.docked_station_id,
    active_rider: req.body.active_rider,
    last_rider: req.body.last_rider
  }).save()
    .then((saved) => {
      res.status(201).json({saved});
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
      res.status(200).json({bike});
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
    .then(() => {
      res.sendStatus(201);
    })
    .catch((err) => {
      res.sendStatus(404);
    });
};

module.exports.deleteBike = (req, res) => {
  models.Bike.where({ id: req.params.id }).destroy()
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      res.sendStatus(404);
    });
};


// TODO
module.exports.rentBike = (req, res) => {
  models.Bike.where({ id: req.params.id }).fetch()
    .then((bike) => {
      if (!bike) {
        throw bike;
      }
      res.status(200).json({bike});
    })
    .catch((err) => {
      res.sendStatus(404);
    });
};

// TODO
module.exports.returnBike = (req, res) => {
  models.Bike.where({ id: req.params.id }).fetch()
    .then((bike) => {
      if (!bike) {
        throw bike;
      }
      res.status(200).json({bike});
    })
    .catch((err) => {
      res.sendStatus(404);
    });
};

// TODO
module.exports.checkAvailability = (req, res) => {
  models.Bike.where({ id: req.params.id }).fetch()
    .then((bike) => {
      if (!bike) {
        throw bike;
      }
      res.status(200).json({bike});
    })
    .catch((err) => {
      res.sendStatus(404);
    });
};

// TODO
module.exports.checkDockingStation = (req, res) => {
  models.Bike.where({ id: req.params.id }).fetch()
    .then((bike) => {
      if (!bike) {
        throw bike;
      }
      res.status(200).json({bike});
    })
    .catch((err) => {
      res.sendStatus(404);
    });
};

// TODO
module.exports.checkLastRider = (req, res) => {
  models.Bike.where({ id: req.params.id }).fetch()
    .then((bike) => {
      if (!bike) {
        throw bike;
      }
      res.status(200).json({bike});
    })
    .catch((err) => {
      res.sendStatus(404);
    });
};