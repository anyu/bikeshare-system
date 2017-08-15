'use strict';
const knex = require('knex')(require('../knexfile'));
const bookshelf = require('bookshelf')(knex);

module.exports.knex = knex;
module.exports = bookshelf;
