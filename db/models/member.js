'use strict';
const bookshelf = require('../config');

const Member = bookshelf.Model.extend({
  tableName: 'members',
});
module.exports = Member;