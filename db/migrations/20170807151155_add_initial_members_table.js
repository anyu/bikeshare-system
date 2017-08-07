
exports.up = function(knex, Promise) {
  return knex.schema
      .createTableIfNotExists('members', function(table) {
        table.increments('id').primary();
        table.string('firstName');
        table.string('lastName');
        table.string('email');
      });  
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('members');  
};
