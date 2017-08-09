'use strict';
const express = require('express');
const router = express.Router();


router.route('/')
  .get((req, res) => {
    res.status(200).send('Hey');
  })
  .post((req, res) => {
    res.status(201).send({ data: 'Posted' });
});

module.exports = router;
