let generateBikes = (knex, index, is_available, docked_station_id, active_rider, last_rider) => {
  return knex('bikes').insert([
    {id: index, is_available: is_available, docked_station_id: docked_station_id, 
    active_rider: active_rider, last_rider: last_rider}
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
    // Inserts seed entries
    let records = [];
    let availability = [true, false];

    for (let i = 0; i < 200; i++) {
      let randomAvailability = availability[getRandomInt(0, availability.length)];
      let randomDockedStation = getRandomInt(0, 10);
      let randomActiveRider = getRandomInt(0, 1000);
      let randomLastRider = getRandomInt(0, 1000);
      records.push(generateBikes(knex, i, randomAvailability, randomDockedStation, randomActiveRider, randomLastRider));
    }
    return Promise.all(records);
  });
};