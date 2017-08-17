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
  models.Station.fetchAll()
  .then((stations) => {
    var newStationID = stations.length+1;    
    return knex("stations").insert({
      id: newStationID,
      name: req.body.name,
      zipcode: req.body.zipcode,
      max_capacity: req.body.max_capacity
    })
    .then(() => {
      models.Station.where({ id: newStationID }).fetch()
      .then((station) => {
        res.status(201).send(station);
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
      res.status(200).json(station);
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
  models.Bike.where({ docked_station_id: req.params.id }).fetchAll() 
  .then((bikes) => {
    if (!bikes) {
      throw bikes;
    }
    res.status(200).json({ bike_count: bikes.length });
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

module.exports.checkIfEmpty = (req, res) => {
  var is_empty = false;
  models.Bike.where({ docked_station_id: req.params.id }).fetchAll() 
  .then((bikes) => {
    if (bikes.length === 0) {
      is_empty = true;
    }
    res.status(200).json({ is_empty: is_empty });
  })
  .catch((err) => {
    res.sendStatus(404);
  }); 
};

module.exports.rentBike = (req, res) => {
 // if station has available bikes
  models.Bike.where({ docked_station_id: req.params.id, status: 'available' }).fetch()
  .tap((bike) => {
    if (bike) {
      models.Member.where({id: req.body.member_id}).fetch()
      .tap((member) => {
        // if member can rent bikes
        if (member.attributes.access_level === 'full') {
          var bikeStatus = {'status': 'unavailable', docked_station_id: null};
          bike.save(bikeStatus, {method: 'update',patch: true})
          .then(() => {
            models.Trip.fetchAll()
            .then((trips) => {
              var tripID = trips.length+1;   
              return knex("trips").insert({
                id: tripID,
                status: 'ongoing', 
                start_time: new Date().toISOString(),
                end_time: null,
                rider_id: req.body.member_id,
                bike_id: bike.attributes.id,
                start_station_id: req.params.id,
                end_station_id: null              
              })
              .then(() => {      
                models.Trip.where({ id: tripID }).fetch()
                .then((trip) => {
                  res.status(200).json({bike, trip});
                })
              }).catch((err) => {
                res.sendStatus(404);
              });
            }).catch((err) => {
              res.sendStatus(404);
            });
          });
        } else {
          res.status(403).json("This member cannot rent bikes.");
        }
      }).catch((err) => {
        res.sendStatus(404);
      });
    } else {
      res.status(403).json("There are no available bikes to rent at this station.");
    }
  }).catch((err) => {
    res.sendStatus(404);
  });
};

module.exports.returnBike = (req, res) => {
  models.Bike.where({ docked_station_id: req.params.id }).fetchAll()
  .tap((bikes) => {
    models.Station.where({ id: req.params.id }).fetch()
    .tap((station) => {
      // if station has available docks
      if (bikes.length < station.attributes.max_capacity) {
        models.Bike.where({id: req.body.bike_id}).fetch()
        .tap((bike) => {
          var bikeParams = {'docked_station_id': req.params.id, 'status': 'available'};
          bike.save(bikeParams, {method: 'update',patch: true})
          .tap(() => {   
            models.Trip.where({bike_id: req.body.bike_id, status: 'ongoing'}).fetch()
            .tap((trip) => {
              if (!trip) {
                throw trip;
              }
              var tripParams = {'status': 'ended', 'end_time': new Date().toISOString(), end_station_id: req.params.id};
              trip.save(tripParams, {method: 'update',patch: true})
              .tap((trip) => {      
                res.status(200).json({bike, trip});
              }).catch((err) => {
                res.sendStatus(404);
              });
            }).catch((err) => {
              res.sendStatus(404);
            });
          }).catch((err) => {
            res.sendStatus(404);
          })
        }).catch((err) => {
          res.sendStatus(404);
        })
      } else {
        res.status(403).json("This station is full. Please return your bike at another station.");
      }
    }).catch((err) => {
      res.sendStatus(404);
    });
  });
};