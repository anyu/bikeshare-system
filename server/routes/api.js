'use strict';
const express = require('express');
const router = express.Router();
const dummy = require('../../db/seeds/dummyData');
const MemberController = require('../controllers').Members;



router.route('/')
  .get((req, res) => {
    res.status(200).send('Hey');
  })
  .post((req, res) => {
    res.status(201).send({ data: 'Posted' });
  });

router.route('/members')
  .get(MemberController.getAllMembers)
  .post(MemberController.addMember)
;

router.route('/members/:id')
  .get(MemberController.getMember)
  .put(MemberController.updateMember)
  .delete(MemberController.deleteMember)
;

module.exports = router;
