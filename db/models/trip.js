'use strict';
const bookshelf = require('../config');

bookshelf.plugin('registry');
bookshelf.plugin('pagination');

const Trip = bookshelf.Model.extend({
  tableName: 'trips',
  rider_id: function() {
    return this.belongsTo('Member', 'rider_id');
  },
  bike_id: function() {
    return this.belongsTo('Bike', 'bike_id');
  },  
  start_station_id: function() {
    return this.belongsTo('Station', 'start_station_id');
  },
  end_station_id: function() {
    return this.belongsTo('Station', 'end_station_id');
  }    
});

module.exports = bookshelf.model('Trip', Trip);
