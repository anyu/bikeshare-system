'use strict';
const bookshelf = require('../config');

bookshelf.plugin('registry');
bookshelf.plugin('pagination');

const Station = bookshelf.Model.extend({
  tableName: 'stations',
});
module.exports = bookshelf.model('Station', Station);

