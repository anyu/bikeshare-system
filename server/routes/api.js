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

module.exports = router;
