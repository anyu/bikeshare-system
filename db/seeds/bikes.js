// let generateBikes = (knex, index, is_available, docked_station_id, active_rider_id, last_rider_id) => {
//   return knex('bikes').insert([
//     {id: index, is_available: is_available, docked_station_id: docked_station_id, 
//     active_rider_id: active_rider_id, last_rider_id: last_rider_id}
//   ])
// };

// getRandomInt = (min, max) => {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min)) + min; //Max is exclusive, min is inclusive
// }

exports.seed = function(knex, Promise) {
  // Deletes all existing entries
  // return knex('bikes').del()
  //  .then(() => {
  //   // Inserts seed entries
  //   let records = [];
  //   let availability = [true, false];

  //   for (let i = 1; i <= 200; i++) {
  //     let randomAvailability = availability[getRandomInt(0, availability.length)];
  //     let randomDockedStation = getRandomInt(1, 11);
  //     let randomActiveRider = getRandomInt(1, 1001);
  //     let randomLastRider = getRandomInt(1, 1001);
  //     records.push(generateBikes(knex, i, randomAvailability, randomDockedStation, randomActiveRider, randomLastRider));
  //   }
  //   return Promise.all(records);
  // });
};
