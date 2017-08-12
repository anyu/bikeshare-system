const expect = require('chai').expect;
const Member = require('../../db/models/member.js');
const dbUtils = require('../../db/lib/utils.js');

describe('Member model tests', function () {
  // Deletes all tables, creates new tables, and seeds tables with test data
  beforeEach(function (done) {
    dbUtils.rollbackMigrate(done);
  });

  // Resets database back to original settings
  afterEach(function (done) {
    dbUtils.rollback(done);
  });

  it('should be able to retrieve test data', function (done) {
    Member.forge().fetchAll()
      .then(function (results) {
        done();
      })
      .catch(function (err) {
        done(err);
      });
  });