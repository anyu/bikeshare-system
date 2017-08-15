'use strict';
const bookshelf = require('../config');

bookshelf.plugin('registry');
bookshelf.plugin('pagination');

const Member = bookshelf.Model.extend({
  tableName: 'members',  
  trips: function() {
    return this.hasMany('Trip');
  },
});
module.exports = bookshelf.model('Member', Member);

