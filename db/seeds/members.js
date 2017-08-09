const faker = require('faker');

let generateMembers = (knex, status, access_level, index) => {
  return knex('members').insert([
    {id: index, first_name: faker.name.firstName(), last_name: faker.name.lastName(), 
    email: faker.internet.email(), status: status, access_level: access_level, 'ride_count': Math.floor(faker.random.number()/500)}
  ])
};

getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

exports.seed = function(knex, Promise) {
  // Deletes all existing entries
  return knex('members').del()
    .then(() => {
      // Inserts seed entries
      let records = [];
      let statusOptions = ['active', 'inactive'];
      let accessLevelOptions = ['full', 'none'];

      for (let i = 0; i < 1000; i++) {
        records.push(generateMembers(knex, statusOptions[getRandomInt(0, statusOptions.length)], accessLevelOptions[getRandomInt(0, accessLevelOptions.length)], i));
      }
      return Promise.all(records);
    });
};

