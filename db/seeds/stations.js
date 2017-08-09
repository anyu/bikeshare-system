let generateStations = (knex, index, bike_count, max_capacity, percent_full) => {
  return knex('stations').insert([
    {id: index, bike_count: bike_count, max_capacity: max_capacity, percent_full: percent_full}
  ])
};


exports.seed = function(knex, Promise) {
  // Deletes all existing entries
  return knex('stations').del()
    .then(() => {
      // Inserts seed entries
      let records = [];
      let maxCapacityOptions = [10, 20, 30, 40, 50];

      for (let i = 0; i < 10; i++) {
        let randomMaxCapacity = maxCapacityOptions[getRandomInt(0, maxCapacityOptions.length)];
        let randomBikeCount = getRandomInt(0, randomMaxCapacity);
        let percentFull = Math.floor((randomBikeCount/randomMaxCapacity)*100);
        records.push(generateStations(knex, i, randomBikeCount, randomMaxCapacity, percentFull));
      }
      return Promise.all(records);
    });
};
