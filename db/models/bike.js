'use strict';
const bookshelf = require('../config');

bookshelf.plugin('registry');
bookshelf.plugin('pagination');

const Bike = bookshelf.Model.extend({
  tableName: 'bikes',
});
module.exports = bookshelf.model('Bike', Bike);

