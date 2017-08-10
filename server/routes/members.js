'use strict';
const express = require('express');
const router = express.Router();
const MemberController = require('../controllers').Members;

// RESTful resources for Members
router.route('/')
  .get(MemberController.getAllMembers)
  .post(MemberController.addMember)
;

router.route('/:id')
  .get(MemberController.getMember)
  .put(MemberController.updateMember)
  .delete(MemberController.deleteMember)
;

// Endpoint to check how many rides a member has taken
router.route('/:id/ride_count')
  .get(MemberController.checkRideCount)
;

// Endpoint to check whether or not currently riding a bike
router.route('/:id/status')
  .get(MemberController.checkStatus)
;

// Endpoint to enable/disable their ability to rent a bike
router.route('/:id/toggle_access_level')
  .post(MemberController.toggleAccessLevel)
;

module.exports = router;
