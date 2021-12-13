exports.up = function(knex) {
    return knex.schema
      .createTable('TB_PRODUTO', function (table) {
        table.int('id').primary();
        table.string('descricao', 255).notNullable();
        table.float('preco');
      });
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTable('TB_PRODUTO');
  };