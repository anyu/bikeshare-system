'use strict';
const bookshelf = require('../config');

bookshelf.plugin('registry');
bookshelf.plugin('pagination');

const Bike = bookshelf.Model.extend({
  tableName: 'bikes',
  docked_station: function() {
    return this.belongsTo('Station');
  },   
  active_rider: function() {
    return this.belongsTo('Member');
  },  
  last_rider: function() {
    return this.belongsTo('Member');
  },   
});

module.exports = bookshelf.model('Bike', Bike);
