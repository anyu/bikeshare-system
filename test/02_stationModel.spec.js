const expect = require('chai').expect;
const Station = require('../db/models/station.js');
const dbUtils = require('../db/lib/utils.js');
const knex = require('../db/config').knex;

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

  it('should add a new record', (done) => {
    Station.fetchAll()
    .then((stations) => {
      var newStationID = stations.length+1;    
      return knex("stations").insert({
        id: newStationID,
        zipcode: '94122',
        max_capacity: 30
      })
      .then(() => {
        return Station.where({ id: newStationID }).fetch()
      })
      .then((result) => {
        expect(result.get('zipcode')).to.equal('94122');
        expect(result.get('max_capacity')).to.equal(30);
        done();
      })
      .catch((err) => {
        done(err);
      });
    });
  });

  it('should update an already existing record', (done) => {
    Station.where({ id: 1 }).fetch()
      .then((result) => {
        expect(result.get('id')).to.equal(1);
      })
      .then(() => {
        return Station.where({ id: 1 }).save({ zipcode: '94107', max_capacity: 30 }, { method: 'update' });
      })
      .then(() => {
        return Station.where({ id: 1 }).fetch();
      })
      .then((result) => {
        expect(result.get('zipcode')).to.equal('94107');
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