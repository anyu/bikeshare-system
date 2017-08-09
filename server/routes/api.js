'use strict';
const express = require('express');
const router = express.Router();
const MemberController = require('../controllers').Members;
const StationController = require('../controllers').Stations;
const BikeController = require('../controllers').Bikes;


router.route('/')
  .get((req, res) => {
    res.status(200).send('Hey');
  })
  .post((req, res) => {
    res.status(201).send({ data: 'Posted' });
  });

  
  // RESTful resources for Members
router.route('/members')
  .get(MemberController.getAllMembers)
  .post(MemberController.addMember)
;

router.route('/members/:id')
  .get(MemberController.getMember)
  .put(MemberController.updateMember)
  .delete(MemberController.deleteMember)
;

// Endpoint to check how many rides a member has taken
router.route('/members/:id/ride_count')
  .get(MemberController.checkRideCount)
;

// Endpoint to check whether or not currently riding a bike
router.route('/members/:id/status')
  .get(MemberController.checkStatus)
;

// Endpoint to enable/disable their ability to rent a bike
router.route('/members/:id/toggle_access_level')
  .get(MemberController.toggleAccessLevel)
;


// RESTful resources for Bikes
router.route('/bikes')
  .get(BikeController.getAllBikes)
  .post(BikeController.addBike)
;

router.route('/bikes/:id')
  .get(BikeController.getBike)
  .put(BikeController.updateBike)
  .delete(BikeController.deleteBike)
;

// Endpoint to rent bike – might add member id to route
router.route('/bikes/:id/rent')
  .get(BikeController.rentBike)
;

// Endpoint to return bike – might add member id to route
router.route('/bikes/:id/return')
  .get(BikeController.returnBike)
;

// Endpoint to check if bike is available
router.route('/bikes/:id/availability')
  .get(BikeController.checkAvailability)
;

// Endpoint to check which station bike is docked at
router.route('/bikes/:id/station')
  .get(BikeController.checkDockingStation)
;

// Endpoint to check who last rider was
router.route('/bikes/:id/last_rider')
  .get(BikeController.checkLastRider)
;

// RESTful resources for Stations
router.route('/stations')
  .get(StationController.getAllStations)
  .post(StationController.addStation)
;

router.route('/stations/:id')
  .get(StationController.getStation)
  .put(StationController.updateStation)
  .delete(StationController.deleteStation)
;

// Endpoint to view number of bikes at station
router.route('/stations/:id/bike_count')
  .get(StationController.checkBikeCount)
;

// Endpoint to see which bikes are at station
router.route('/stations/:id/bikes')
  .get(StationController.checkBikes)
;

// Endpoint to check whether a station is empty
router.route('/stations/:id/volume')
  .get(StationController.checkVolume)
;

module.exports = router;
