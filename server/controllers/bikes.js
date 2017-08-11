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
    active_rider_id: req.body.active_rider_id,
    last_rider_id: req.body.last_rider_id
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

/***************************************** TO CHECK *********************************************/

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
/***************************************** TO CHECK ends *****************************************/

module.exports.rentBike = (req, res) => {
  models.Bike.where({ id: req.params.id }).fetch()
    .then((bike) => {
      if (!bike) {
        throw bike;
      }
      if (bike.attributes.is_available) {
        // Q: Should route be bikes/id/stations/station_id/rent instead?
        // Q: Should there be a check to see if this bike is at this station, or unnecessary. 
        //TODO: mark not at station instead of station 1
        var params = {'docked_station_id': 1, 'active_rider_id': req.params.member_id, 'is_available': false};
        return bike.save(params, {method: 'update',patch: true})
        .then(() => {
          models.Station.where({id: req.body.station_id}).fetch()
          .tap((station) => {
            var newPercentFull = Math.floor(((station.attributes.bike_count-1)/station.attributes.max_capacity)*100);
            var params = {'bike_count': station.attributes.bike_count-1, 'percent_full': newPercentFull};
            return station.save(params, {method: 'update',patch: true})
            .then(() => {
              models.Member.where({id: req.params.member_id}).fetch()
              .then((member) => {
                var params = {'status': 'active'};
                return member.save(params, {method: 'update',patch: true})
                .then(() => {
                  res.status(200).json({bike, station, member});
                })
              })
              .catch((err) => {
                res.sendStatus(404);
              });
            });
          })
          .catch((err) => {
            res.sendStatus(404);
          });
        });
      } else {
        res.send("This bike isn't available for rent.");
      }
    })
    .catch((err) => {
      res.sendStatus(404);
    });
};

module.exports.returnBike = (req, res) => {
  models.Bike.where({ id: req.params.id }).fetch()
    .then((bike) => {
      if (!bike) {
        throw bike;
      }
      models.Station.where({id: req.body.station_id}).fetch()
      .tap((station) => {
        if (station.attributes.percent_full < 100) {
          var params = {'docked_station_id': station.attributes.id, 'active_rider_id': 1, 'last_rider_id': req.params.member_id, 'is_available': true};
          return bike.save(params, {method: 'update',patch: true})
          .then(() => {
            var newPercentFull = Math.floor(((station.attributes.bike_count+1)/station.attributes.max_capacity)*100);
            var params = {'bike_count': station.attributes.bike_count+1, 'percent_full': newPercentFull};
            return station.save(params, {method: 'update',patch: true})
            .then(() => {
              models.Member.where({id: req.params.member_id}).fetch()
              .then((member) => {
                var params = {'ride_count': member.attributes.ride_count+1, 'status': 'inactive'};
                return member.save(params, {method: 'update',patch: true})
                .then(() => {
                  res.status(200).json({bike, station, member});
                })
              })
              .catch((err) => {
                res.sendStatus(404);
              });
            });
          })
          .catch((err) => {
            res.sendStatus(404);
          });
        } else {
          res.send("This station is full. Please return your bike at another station.");
        }
      })
      .catch((err) => {
        res.sendStatus(404);
      });        
    });
};

module.exports.checkAvailability = (req, res) => {
  models.Bike.where({ id: req.params.id }).fetch({ columns: ['is_available'] })
    .then((bikeAvailability) => {
      res.status(200).json({bikeAvailability});
    })
    .catch((err) => {
      res.sendStatus(404);
    });
};

module.exports.checkDockedStation = (req, res) => {
  models.Bike.where({ id: req.params.id }).fetch({ columns: ['docked_station_id'] })
    .then((bikeDockedStation) => {
      res.status(200).json({bikeDockedStation});
    })
    .catch((err) => {
      res.sendStatus(404);
    });
};

module.exports.checkLastRider = (req, res) => {
  models.Bike.where({ id: req.params.id }).fetch({ columns: ['last_rider'] })
    .then((bikeLastRider) => {
      res.status(200).json({bikeLastRider});
    })
    .catch((err) => {
      res.sendStatus(404);
    });
};