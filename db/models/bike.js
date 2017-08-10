'use strict';
const bookshelf = require('../config');

bookshelf.plugin('registry');
bookshelf.plugin('pagination');

const Bike = bookshelf.Model.extend({
  tableName: 'bikes',
  docked_station_id: function() {
    return this.belongsTo('Station', 'docked_station_id');
  },   
  active_rider_id: function() {
    return this.belongsTo('Member', 'active_rider_id');
  },  
  last_rider_id: function() {
    return this.belongsTo('Member', 'last_rider_id');
  },   
});

module.exports = bookshelf.model('Bike', Bike);
