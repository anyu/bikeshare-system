const models = require('../../db/models');
const knex = require('../../db/config').knex;

module.exports.getAllStations = (req, res) => {
  models.Station.fetchAll()
    .then((stations) => {
      res.status(200).json(stations);
    })
    .catch((err) => {
      res.sendStatus(404);
    });
};

module.exports.addStation = (req, res) => {
  models.Station.forge({
    bike_count: req.body.bike_count,
    max_capacity: req.body.max_capacity
  }).save()
    .then((station) => {
      res.status(201).json(station);
    })
    .catch((err) => {
      res.sendStatus(404);
    });
};

module.exports.getStation = (req, res) => {
  models.Station.where({ id: req.params.id }).fetch()
    .then((station) => {
      if (!station) {
        throw station;
      }
      res.status(200).json(station);
    })
    .catch((err) => {
      res.sendStatus(404);
    });
};

module.exports.updateStation = (req, res) => {
  models.Station.where({ id: req.params.id }).fetch()
    .then((station) => {
      if (!station) {
        throw station;
      }
      return station.save(req.body, { method: 'update' });
    })
    .then((station) => {
      res.status(201).json(station);
    })
    .catch((err) => {
      res.sendStatus(404);
    });
};

module.exports.deleteStation = (req, res) => {
  models.Bike.where({docked_station_id: req.params.id}).fetchAll()
    .then((bikes) => {
      bikes.forEach(function (bike) {
        return bike.save({'docked_station_id': null}, {method: 'update',patch: true});
      })
    }) 
    .then(() => {       
      models.Station.where({ id: req.params.id }).fetch()
      .then((station) => { 
        if (!station) {
          throw station;
        }   
        return station.destroy()
        .then(() => {
          res.status(200).json('Station deleted');
        })
      })
      .catch((err) => {
        res.sendStatus(404);
      })
    })
  .catch((err) => {
    res.sendStatus(404);
  });
};

module.exports.checkBikeCount = (req, res) => {
  models.Station.where({ id: req.params.id }).fetch({ columns: ['bike_count'] })
    .then((stationBikeCount) => {
      res.status(200).json(stationBikeCount);
    })
    .catch((err) => {
      res.sendStatus(404);
    });
};

module.exports.checkBikes = (req, res) => {
  models.Bike.where({ docked_station_id: req.params.id }).fetchAll({ columns: ['id'] }) 
    .then((bikes) => {
      var bikeIDs = [];
      bikes.forEach(function (bike) {
        bikeIDs.push(bike.attributes.id);
      })   
      res.status(200).json({bikeIDs});
    })
    .catch((err) => {
      res.sendStatus(404);
    });
};

module.exports.checkVolume = (req, res) => {
  models.Station.where({ id: req.params.id }).fetch({ columns: ['bike_count'] })
    .then(station => {
      if (station.attributes.bike_count === 0) {
        res.status(200).json({message: "Station is empty."});
      } else {
        res.status(200).json(station);
      }
    })
    .catch((err) => {
      res.sendStatus(404);
    });
};

module.exports.rentBike = (req, res) => {
  models.Station.where({ id: req.params.id }).fetch()
    .then((station) => {
      if (!station) {
        throw station;
      }
      // if station has available bikes
      if (station.attributes.bike_count > 0) {
        models.Member.where({id: req.body.member_id}).fetch()
        .tap((member) => {
          // if member can rent bikes
          if (member.attributes.access_level === 'full') {
            models.Bike.where({id: req.body.bike_id}).fetch()
            .tap((bike) => {
              // if bike is available
              if (bike.attributes.is_available) {
                var memberParams = {'status': 'active'};
                member.save(memberParams, {method: 'update',patch: true});
              } else {
                res.send("This bike is unavailable for rent.");
              }
            }).tap(() => {
                var stationParams = {'bike_count': station.attributes.bike_count-1};
                station.save(stationParams, {method: 'update',patch: true});
            }).tap((bike) => {
                var bikeParams = {'docked_station_id': null, 'active_rider_id': parseInt(req.body.member_id), 'is_available': false};
                return bike.save(bikeParams, {method: 'update',patch: true})
                .then(() => {                                
                  res.status(200).json({bike, station, member});
                }).catch((err) => {
                  res.sendStatus(404);
                });
            }).catch((err) => {
              res.sendStatus(404);
            });
          } else {
            res.send("This member cannot rent bikes.");
          }
        }).catch((err) => {
          res.sendStatus(404);
        });
      } else {
        res.send("There are no available bikes to rent at this station.");
      }
    }).catch((err) => {
      res.sendStatus(404);
    });
};


module.exports.returnBike = (req, res) => {
  models.Station.where({ id: req.params.id }).fetch()
    .then((station) => {
      if (!station) {
        throw station;
      }
      // if station has available docks
      if (station.attributes.bike_count < station.attributes.max_capacity) {
        models.Member.where({id: req.body.member_id}).fetch()
        .tap((member) => {
            models.Bike.where({id: req.body.bike_id}).fetch()
            .tap((bike) => {
                var memberParams = {'ride_count': member.attributes.ride_count+1, 'status': 'inactive'};
                member.save(memberParams, {method: 'update',patch: true});
            }).tap(() => {
                var stationParams = {'bike_count': station.attributes.bike_count+1};
                station.save(stationParams, {method: 'update',patch: true});
            }).tap((bike) => {
                var bikeParams = {'docked_station_id': station.attributes.id, 'active_rider_id': null, 'last_rider_id': parseInt(req.body.member_id), 'is_available': true};
                return bike.save(bikeParams, {method: 'update',patch: true})
                .then(() => {                                
                  res.status(200).json({bike, station, member});
                }).catch((err) => {
                  res.sendStatus(404);
                });
            }).catch((err) => {
              res.sendStatus(404);
            });
        }).catch((err) => {
          res.sendStatus(404);
        });
      } else {
        res.send("This station is full. Please return your bike at another station.");
      }
    }).catch((err) => {
      res.sendStatus(404);
    });
};