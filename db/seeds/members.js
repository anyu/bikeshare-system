const faker = require('faker');

let generateMembers = (knex, index, status, access_level) => {
  return knex('members').insert([
    {id: index, first_name: faker.name.firstName(), last_name: faker.name.lastName(), 
    email: faker.internet.email(), status: status, access_level: access_level, 'ride_count': Math.floor(faker.random.number()/500)}
  ])
};

let generateStations = (knex, index, bike_count, max_capacity, available_docks) => {
  return knex('stations').insert([
    {id: index, bike_count: bike_count, max_capacity: max_capacity, available_docks: available_docks}
  ])
};

let generateBikes = (knex, index, is_available, docked_station_id, active_rider_id, last_rider_id) => {
  return knex('bikes').insert([
    {id: index, is_available: is_available, docked_station_id: docked_station_id, 
    active_rider_id: active_rider_id, last_rider_id: last_rider_id}
  ])
};

getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Max is exclusive, min is inclusive
}


exports.seed = function(knex, Promise) {
  // Deletes all existing entries
  return knex('bikes').del()
  .then(() => {
    return knex('stations').del()
    .then(() => {
      return knex('members').del()
      .then(() => {
        // Inserts seed entries
        let memberRecords = [];
        let statusOptions = ['active', 'inactive'];
        let accessLevelOptions = ['full', 'none'];

        for (let i = 1; i <= 1000; i++) {
          let randomStatus = statusOptions[getRandomInt(0, statusOptions.length)];
          let randomAccessLevel = accessLevelOptions[getRandomInt(0, accessLevelOptions.length)];
          memberRecords.push(generateMembers(knex, i, randomStatus, randomAccessLevel));
        }
        return Promise.all(memberRecords);
      })
      .then(() => {
        // Inserts seed entries
        let stationRecords = [];
        let maxCapacityOptions = [10, 20, 30, 40, 50];

        for (let i = 1; i <= 10; i++) {
          let randomMaxCapacity = maxCapacityOptions[getRandomInt(0, maxCapacityOptions.length)];
          let randomBikeCount = getRandomInt(0, randomMaxCapacity);
          let available_docks = randomMaxCapacity - randomBikeCount;
          stationRecords.push(generateStations(knex, i, randomBikeCount, randomMaxCapacity, available_docks));
        }
        return Promise.all(stationRecords);
      })
      .then(() => {
        // Inserts seed entries
        let bikeRecords = [];
        let availability = [true, false];

        for (let i = 1; i <= 200; i++) {
          let randomAvailability = availability[getRandomInt(0, availability.length)];
          let randomDockedStation = getRandomInt(1, 11);
          let randomActiveRider = getRandomInt(1, 1001);
          let randomLastRider = getRandomInt(1, 1001);
          bikeRecords.push(generateBikes(knex, i, randomAvailability, randomDockedStation, randomActiveRider, randomLastRider));
        }
        return Promise.all(bikeRecords);
      });
    });
  });
};

