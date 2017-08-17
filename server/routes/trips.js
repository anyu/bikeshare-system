'use strict';
const express = require('express');
const router = express.Router();
const TripController = require('../controllers').Trips;


// Endpoint to get count of currently active trips
router.route('/count/active')
.get(TripController.getActiveTripCount)
;

// Endpoint to get trip count by year
router.route('/count/:year')
.get(TripController.getTripCountByYear)
;

// RESTful resources for Trips
router.route('/')
.get(TripController.getAllTrips)
;

router.route('/:id')
  .get(TripController.getTrip)
;

module.exports = router;
