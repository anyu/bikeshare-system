const faker = require('faker');

let generateMembers = (knex, index, access_level) => {
  return knex('members').insert([
    {id: index, first_name: faker.name.firstName(), last_name: faker.name.lastName(), 
    email: faker.internet.email(), access_level: access_level}
  ])
};

let generateStations = (knex, index, max_capacity) => {
  return knex('stations').insert([
    {id: index, name: faker.address.streetName(), zipcode: faker.address.zipCode(), max_capacity: max_capacity}
  ])
};

let generateBikes = (knex, index, status, docked_station_id) => {
  return knex('bikes').insert([
    {id: index, status: status, docked_station_id: docked_station_id}
  ])
};


let generateTrips = (knex, index, status, start_time, end_time, rider_id, bike_id, start_station_id, end_station_id) => {
  return knex('trips').insert([
    {id: index, status: status, start_time: start_time, end_time: end_time, rider_id: rider_id, bike_id: bike_id, start_station_id: start_station_id, end_station_id: end_station_id}
  ])
};

getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Max is exclusive, min is inclusive
}


getRandomPastTimes = () => {
  let times = [];
  let startDateTime = new Date();
  let endDateTime = new Date();
  let randomDaysAgo = getRandomInt(10, 100);
  let randomDuration = getRandomInt(1, 10);

  startDateTime.setDate(startDateTime.getDate() - randomDaysAgo);
  endDateTime.setHours(startDateTime.getHours() + randomDuration);
  times.push(startDateTime, endDateTime);

  return(times);
 }


exports.seed = function(knex, Promise) {
  // Deletes all existing entries
  return knex('trips').del()
  .then(() => {
    return knex('bikes').del()
    .then(() => {
      return knex('stations').del()
      .then(() => {
        return knex('members').del()
        .then(() => {
          // Inserts seed entries
          let memberRecords = [];
          let accessLevelOptions = ['full', 'none'];

          for (let i = 1; i <= 1000; i++) {
            let randomAccessLevel = accessLevelOptions[getRandomInt(0, accessLevelOptions.length)];
            memberRecords.push(generateMembers(knex, i, randomAccessLevel));
          }
          return Promise.all(memberRecords);
        })
        .then(() => {
          let stationRecords = [];
          let maxCapacityOptions = [10, 20, 30, 40, 50];

          for (let i = 1; i <= 10; i++) {
            let randomMaxCapacity = maxCapacityOptions[getRandomInt(0, maxCapacityOptions.length)];
            stationRecords.push(generateStations(knex, i, randomMaxCapacity));
          }
          return Promise.all(stationRecords);
        })
        .then(() => {
          let bikeRecords = [];
          let status = ['available', 'unavailable'];

          for (let i = 1; i <= 200; i++) {
            let randomStatus = status[getRandomInt(0, status.length)];
            let randomDockedStation = getRandomInt(1, 11);
            bikeRecords.push(generateBikes(knex, i, randomStatus, randomDockedStation));
          }
          return Promise.all(bikeRecords);
        })
        .then(() => {
          let tripRecords = [];
         
          // seed ended trips
          for (let i = 1; i <= 250; i++) {
            let status = 'ended';
            let randomPastTimes = getRandomPastTimes();
            let randomStartTime = randomPastTimes[0];
            let randomEndTime = randomPastTimes[1];
            let randomRider = getRandomInt(1, 1000);
            let randomBike = getRandomInt(1, 200);            
            let randomStartStation = getRandomInt(1, 11);
            let randomEndStation = getRandomInt(1, 11);
            tripRecords.push(generateTrips(knex, i, status, randomStartTime, randomEndTime, randomRider, randomBike, randomStartStation, randomEndStation));
          }

          // seed ongoing trips
          for (let i = 251; i <= 500; i++) {
            let status = 'ongoing';
            let randomPastTimes = getRandomPastTimes();
            let randomStartTime = randomPastTimes[0];
            let randomEndTime = null;
            let randomRider = getRandomInt(1, 1000);
            let randomBike = getRandomInt(1, 200);            
            let randomStartStation = getRandomInt(1, 11);
            let randomEndStation = null;
            tripRecords.push(generateTrips(knex, i, status, randomStartTime, randomEndTime, randomRider, randomBike, randomStartStation, randomEndStation));
          }          
          return Promise.all(tripRecords);
        });        
      });
    });
  });
};

