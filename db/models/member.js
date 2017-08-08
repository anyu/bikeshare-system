'use strict';
const bookshelf = require('../config');

bookshelf.plugin('registry');
bookshelf.plugin('pagination');

const Member = bookshelf.Model.extend({
  tableName: 'members',  
  bike: function() {
    return this.hasOne('Bike');
  }
});
module.exports = bookshelf.model('Member', Member);

