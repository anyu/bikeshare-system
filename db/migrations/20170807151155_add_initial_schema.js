
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTableIfNotExists('members', (table) => {
      table.increments('id').unsigned().primary();
      table.string('first_name');
      table.string('last_name');
      table.string('email');
      table.string('status').defaultTo('inactive');
      table.string('access_level').defaultTo('full');
    }),
    knex.schema.createTableIfNotExists('stations', (table) => {
      table.increments('id').unsigned().primary();
      table.string('name');
      table.string('zipcode');
      table.integer('max_capacity').unsigned();
    }),
    knex.schema.createTableIfNotExists('bikes', (table) => {
      table.increments('id').unsigned().primary();
      table.string('status').defaultTo('available');
      table.integer('docked_station_id').references('stations.id').onDelete('CASCADE');
    }),
    knex.schema.createTableIfNotExists('trips', (table) => {
      table.increments('id').unsigned().primary();
      table.string('status');
      table.timestamp('start_time');
      table.timestamp('end_time');
      table.integer('rider_id').references('members.id').onDelete('CASCADE');
      table.integer('bike_id').references('bikes.id').onDelete('CASCADE');
      table.integer('start_station_id').references('stations.id').onDelete('CASCADE');
      table.integer('end_station_id').references('stations.id').onDelete('CASCADE');
    })        
  ]);
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('trips')
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
