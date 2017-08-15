const expect = require('chai').expect;
const Bike = require('../db/models/bike.js');
const dbUtils = require('../db/lib/utils.js');
const knex = require('../db/config').knex;

describe('Bike model tests', () => {
  beforeEach((done) => {
    dbUtils.rollbackMigrate(done);
  });

  afterEach((done) => {
    dbUtils.rollback(done);
  });

  it('should retrieve test data', (done) => {
    Bike.forge().fetchAll()
      .then((results) => {
        expect(results.length).to.equal(200);
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  it('should add a new record', (done) => {
    Bike.fetchAll()
    .then((bikes) => {
      var newBikeID = bikes.length+1;    
      return knex("bikes").insert({
        id: newBikeID,
        docked_station_id: 4,
        active_rider_id: 2,
        last_rider_id: 3
      })
      .then(() => {
        return Bike.where({ id: newBikeID }).fetch()
      })
      .then((result) => {
        expect(result.get('is_available')).to.equal(true);
        expect(result.get('docked_station_id')).to.equal(4);
        expect(result.get('active_rider_id')).to.equal(2);
        expect(result.get('last_rider_id')).to.equal(3);
        done();
      })
      .catch((err) => {
        done(err);
      });
    });
  });

  it('should update an already existing record', (done) => {
    Bike.where({ id: 1 }).fetch()
      .then((result) => {
        expect(result.get('id')).to.equal(1);
      })
      .then(() => {
        return Bike.where({ id: 1 }).save({active_rider_id: 4, is_available: false}, { method: 'update' });
      })
      .then(() => {
        return Bike.where({ id: 1 }).fetch();
      })
      .then((result) => {
        expect(result.get('active_rider_id')).to.equal(4);
        expect(result.get('is_available')).to.equal(false);
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  it('should delete a record', (done) => {
    Bike.where({ id: 5 }).destroy()
      .then(() => {
        return Bike.where({ id: 5 }).fetch();
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