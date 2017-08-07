'use strict';
const express = require('express');
const Member = require('../../db/models/member');

const router = express.Router();


router.route('/')
  .get(function(req, res) {
    Member
      .where(req.query)   
      .fetchAll()
      .then(function(members) {
        res.json({ members });
      });
});

module.exports = router;

