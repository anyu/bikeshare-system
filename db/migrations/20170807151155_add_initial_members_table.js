
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTableIfNotExists('members', (table) => {
      table.increments('id').unsigned().primary();
      table.string('first_name');
      table.string('last_name');
      table.string('email').unique();
      table.string('status').defaultTo('inactive');
      table.string('access_level').defaultTo('full');
      table.integer('ride_count').unsigned().defaultTo(0);;
    }),
    knex.schema.createTableIfNotExists('stations', (table) => {
      table.increments('id').unsigned().primary();
      table.integer('bike_count').unsigned();      
      table.integer('max_capacity').unsigned();
    }),
    knex.schema.createTableIfNotExists('bikes', (table) => {
      table.increments('id').unsigned().primary();
      table.boolean('is_available').defaultTo(true);
      table.integer('docked_station_id').references('stations.id').onDelete('CASCADE');
      table.integer('active_rider_id').references('members.id').onDelete('CASCADE');
      table.integer('last_rider_id').references('members.id').onDelete('CASCADE');
    })  
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
