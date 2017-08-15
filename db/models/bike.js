'use strict';
const bookshelf = require('../config');

bookshelf.plugin('registry');
bookshelf.plugin('pagination');

const Bike = bookshelf.Model.extend({
  tableName: 'bikes',
  docked_station_id: function() {
    return this.belongsTo('Station', 'docked_station_id');
  },
  trips: function() {
    return this.hasMany('Trip');
  }, 
});

module.exports = bookshelf.model('Bike', Bike);
