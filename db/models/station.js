'use strict';
const bookshelf = require('../config');

bookshelf.plugin('registry');
bookshelf.plugin('pagination');

const Station = bookshelf.Model.extend({
  tableName: 'stations',
  bikes: function() {
    return this.hasMany('Bike');
  },
});
module.exports = bookshelf.model('Station', Station);

