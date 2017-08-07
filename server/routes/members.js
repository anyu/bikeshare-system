'use strict';
const express = require('express');
const MemberController = require('../controllers').Members
const router = express.Router();


router.route('/').get(MemberController.getAll);

module.exports = router;

