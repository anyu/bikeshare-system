const expect = require('chai').expect;
const Station = require('../db/models/station.js');
const dbUtils = require('../db/lib/utils.js');

describe('Station model tests', () => {
  beforeEach((done) => {
    dbUtils.rollbackMigrate(done);
  });

  afterEach((done) => {
    dbUtils.rollback(done);
  });

  it('should retrieve test data', (done) => {
    Station.forge().fetchAll()
      .then((results) => {
        expect(results.length).to.equal(10);
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  it('should update an already existing record', (done) => {
    Station.where({ id: 1 }).fetch()
      .then((result) => {
        expect(result.get('id')).to.equal(1);
      })
      .then(() => {
        return Station.where({ id: 1 }).save({ bike_count: 17, max_capacity: 30 }, { method: 'update' });
      })
      .then(() => {
        return Station.where({ id: 1 }).fetch();
      })
      .then((result) => {
        expect(result.get('bike_count')).to.equal(17);
        expect(result.get('max_capacity')).to.equal(30);
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  it('should delete a record', (done) => {
    Station.where({ id: 1 }).destroy()
      .then(() => {
        return Station.where({ id: 1 }).fetch();
      })
      .then((result) => {
        expect(result).to.equal(null);
        done();
      })
      .catch((err) => {
        done(err);
      });
  });
});