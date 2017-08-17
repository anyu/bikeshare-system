'use strict';
const express = require('express');
const router = express.Router();
const TripController = require('../controllers').Trips;

// RESTful resources for Trips
router.route('/')
  .get(TripController.getAllTrips)
;

router.route('/:id')
  .get(TripController.getTrip)
;

module.exports = router;
