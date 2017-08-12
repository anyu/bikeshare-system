const expect = require('chai').expect;
const Member = require('../../db/models/member.js');
const dbUtils = require('../../db/lib/utils.js');

describe('Member model tests', () => {
  // Deletes all tables, creates new tables, and seeds tables with test data
  beforeEach((done) => {
    dbUtils.rollbackMigrate(done);
  });

  // Resets database back to original settings
  afterEach((done) => {
    dbUtils.rollback(done);
  });

  it('should be able to retrieve test data', (done) => {
    Member.forge().fetchAll()
      .then((results) => {
        done();
      })
      .catch((err) => {
        done(err);
      });
  });
});