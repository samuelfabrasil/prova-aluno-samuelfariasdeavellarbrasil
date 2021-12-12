exports.up = function(knex) {
    return knex.schema
      .createTable('TB_CLIENTE', function (table) {
        table.increments('id').primary();
        table.string('nome', 255).notNullable();
      });
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTable('TB_CLIENTE');
  };