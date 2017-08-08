
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTableIfNotExists('members', (table) => {
      table.increments('id').unsigned().primary();
      table.string('first_name');
      table.string('last_name');
      table.string('email').unique();
      table.string('status');
      table.string('access_level');      
      table.integer('ride_count').unsigned();
    }),
    knex.schema.createTableIfNotExists('stations', (table) => {
      table.increments('id').unsigned().primary();
      table.integer('bike_count').unsigned();      
      table.integer('max_capacity').unsigned();
      table.integer('percent_full').unsigned();
    }),
    knex.schema.createTableIfNotExists('bikes', (table) => {
      table.increments('id').unsigned().primary();
      table.boolean('is_available');
      table.integer('docked_station_id').references('stations.id').onDelete('CASCADE');
      table.integer('active_rider').references('members.id').onDelete('CASCADE');
      table.integer('last_rider').references('members.id').onDelete('CASCADE');
    }),
    knex.schema.createTableIfNotExists('bikes_stations', (table) => {
      table.integer('bike_id').references('bikes.id').onDelete('CASCADE');
      table.integer('station_id').references('stations.id');
    }),    
  ]);
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('bikes_stations')
    .then(() => {
      return knex.schema.dropTableIfExists('bikes');
    })
    .then(() => {
      return knex.schema.dropTableIfExists('stations');
    })    
    .then(() => {
      return knex.schema.dropTableIfExists('members');
    })       
};
