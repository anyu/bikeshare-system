const bookshelf = require('../');

const BikesStations = bookshelf.Model.extend({
  tableName: 'bikes_stations',
  bike: function() {
    return this.belongsTo('Bike');
  }
});

module.exports = bookshelf.model('BikesStations', BikesStations);