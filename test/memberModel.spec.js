const expect = require('chai').expect;
const Member = require('../db/models/member.js');
const dbUtils = require('../db/lib/utils.js');

describe('Member model tests', () => {
  beforeEach((done) => {
    dbUtils.rollbackMigrate(done);
  });

  afterEach((done) => {
    dbUtils.rollback(done);
  });

  it('should retrieve test data', (done) => {
    Member.forge().fetchAll()
      .then((results) => {
        expect(results.length).to.equal(1000);
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  // it('should add a new record', (done) => {
  //   Member.forge({
  //     id: 1001,
  //     first_name: 'Phil',
  //     last_name: 'Toberson',
  //     email: 'phil.toberson@gmail.com',
  //     status: 'inactive',
  //     access_level: 'full',
  //     ride_count: 0
  //   }).save()
  //     .then(() => {
  //       return Member.where({ email: 'phil.toberson@gmail.com' }).fetch()
  //     })
  //     .then((result) => {
  //       expect(result.get('first_name')).to.equal('Phil');
  //       expect(result.get('status')).to.equal('inactive');
  //       done();
  //     })
  //     .catch((err) => {
  //       done(err);
  //     });
  // });

  it('should update an already existing record', (done) => {
    Member.where({ id: 1 }).fetch()
      .then((result) => {
        expect(result.get('id')).to.equal(1);
      })
      .then(() => {
        return Member.where({ id: 1 }).save({ first_name: 'Alex', last_name: 'Honnold' }, { method: 'update' });
      })
      .then(() => {
        return Member.where({ id: 1 }).fetch();
      })
      .then((result) => {
        expect(result.get('first_name')).to.equal('Alex');
        expect(result.get('last_name')).to.equal('Honnold');
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  it('should delete a record', (done) => {
    Member.where({ id: 1 }).destroy()
      .then(() => {
        return Member.where({ id: 1 }).fetch();
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