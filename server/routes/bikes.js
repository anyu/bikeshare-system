'use strict';
const express = require('express');
const router = express.Router();
const BikeController = require('../controllers').Bikes;


// RESTful resources for Bikes
router.route('/')
  .get(BikeController.getAllBikes)
  .post(BikeController.addBike)
;

router.route('/:id')
  .get(BikeController.getBike)
  .put(BikeController.updateBike)
  .delete(BikeController.deleteBike)
;

// Endpoint to check if bike is available
router.route('/:id/availability')
  .get(BikeController.checkAvailability)
;

// Endpoint to check which station bike is docked at
router.route('/:id/station')
  .get(BikeController.checkDockedStation)
;

// Endpoint to check who last rider was
router.route('/:id/last_rider')
  .get(BikeController.checkLastRider)
;

module.exports = router;
