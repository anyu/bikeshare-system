'use strict';
const express = require('express');
const router = express.Router();
const StationController = require('../controllers').Stations;

// RESTful resources for Stations
router.route('/')
  .get(StationController.getAllStations)
  .post(StationController.addStation)
;

router.route('/:id')
  .get(StationController.getStation)
  .put(StationController.updateStation)
  .delete(StationController.deleteStation)
;

// Endpoint to view number of bikes at station
router.route('/:id/bike_count')
  .get(StationController.checkBikeCount)
;

// Endpoint to see which bikes are at station
router.route('/:id/bikes')
  .get(StationController.checkBikes)
;

// Endpoint to check whether a station is empty
router.route('/:id/volume')
  .get(StationController.checkVolume)
;

module.exports = router;
